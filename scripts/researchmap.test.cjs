const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { TYPES, collectItems, fetchSnapshot, normalize, writeSnapshot, generateContent } = require('./researchmap.cjs');
const record = (type, id, extra = {}) => ({ '@type': type, 'rm:id': id, display: 'disclosed', ...extra });
const page = (type, items, total = items.length) => ({ '@type': type, total_items: total, items });
const profile = { '@type': 'researchers', permalink: 'satoko_toyama', 'rm:user_id': 'R000061890',
  family_name: { ja: '遠山', en: 'Toyama' }, given_name: { ja: '慧子', en: 'Satoko' },
  affiliations: [{ affiliation: { ja: '東京大学', en: 'The University of Tokyo' }, job: { ja: '助教' },
    display_affiliation: 'disclosed', display_job: 'disclosed' }],
};
const groups = () => Object.fromEntries(TYPES.map(type => [type, []]));
function fixture() {
  const g = groups();
  g.published_papers = [record('published_papers', 'p1', { paper_title: { en: 'English-only paper' },
    publication_date: '2026-06-22', authors: { ja: [{ name: '遠山 慧子' }], en: [{ name: 'Satoko Toyama' }] },
    identifiers: { doi: ['10.1234/example'] } }), record('published_papers', 'p2', {
    paper_title: { ja: '年だけの論文' }, publication_date: '2025' })];
  g.research_experience = [record('research_experience', 'w1', { from_date: '2024-04', to_date: '9999',
    job: { ja: '助教', en: 'Assistant Professor' }, affiliation: { ja: '東京大学' } })];
  g.presentations = [record('presentations', 's1', { presentation_title: { ja: '招待講演' },
    from_event_date: '2026-03-01', invited: true, presenters: { ja: [{ name: '遠山 慧子' }] } })];
  g.research_projects = [record('research_projects', 'r1', { research_project_title: { ja: '研究課題' },
    from_date: '2025-04', to_date: '2028-03', identifiers: { grant_number: ['25K00000'] } })];
  return g;
}

test('paginates past embedded items and excludes non-public records', async () => {
  const type = 'published_papers';
  const calls = [];
  const result = await collectItems(type, page(type, [record(type, '1')], 3), async url => {
    calls.push(url);
    return page(type, [record(type, '2', { display: 'closed' }), record(type, '3', { display: 'researchers_only' })], 3);
  });
  assert.deepEqual(result.map(x => x['rm:id']), ['1']);
  assert.match(calls[0], /start=2&limit=1000$/);
});

test('rejects malformed, truncated, duplicate or changing pages', async () => {
  const type = 'misc';
  await assert.rejects(collectItems(type, {}, async () => {}), /Invalid/);
  await assert.rejects(collectItems(type, page(type, [], 1), async () => {}), /Incomplete/);
  await assert.rejects(collectItems(type, page(type, [record(type, '1')], 2), async () => page(type, [], 2)), /Incomplete/);
  await assert.rejects(collectItems(type, page(type, [record(type, '1')], 2), async () => page(type, [record(type, '1')], 2)), /Duplicate/);
  await assert.rejects(collectItems(type, page(type, [record(type, '1')], 2), async () => page(type, [record(type, '2')], 3)), /changed/);
});

test('requires the intended researcher and explicitly fetches absent collections', async () => {
  await assert.rejects(fetchSnapshot(async () => ({ ...profile, permalink: 'someone_else', '@graph': [] })), /Unexpected/);
  const calls = [];
  const result = await fetchSnapshot(async url => {
    calls.push(url);
    if (calls.length === 1) return { ...profile, '@graph': [] };
    const type = new URL(url).pathname.split('/').pop();
    return page(type, []);
  });
  assert.equal(calls.length, TYPES.length + 1);
  assert.deepEqual(result.publications.papers, []);
});

test('normalizes languages, IDs, partial dates, invited talks, grants and ongoing careers', () => {
  const data = normalize(profile, fixture());
  assert.equal(data.publications.papers[0].titleJa, 'English-only paper');
  assert.equal(data.publications.papers[0].authorsJa, '遠山 慧子');
  assert.equal(data.publications.papers[0].doi, '10.1234/example');
  assert.equal(data.publications.papers[1].month, '');
  assert.equal(data.publications.presentations[0].date, '2026-03-01');
  assert.equal(data.publications.presentations[0].isInvited, true);
  assert.equal(data.publications.researchProjects[0].number, '25K00000');
  assert.equal(data.careers.ja[0].endDate, '');
  assert.equal(data.profiles.en.name, 'Satoko Toyama');
  assert.equal(data.profiles.ja.nameJp, '遠山 慧子');
  assert.deepEqual(normalize(profile, fixture()), data);
  const invalid = fixture(); invalid.published_papers[0].publication_date = '../../bad';
  assert.throws(() => normalize(profile, invalid), /date/);
});

test('full sync generates consistent year files, preserves manual fields and removes old records', async () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'researchmap-test-'));
  try {
    for (const lang of ['ja', 'en']) {
      const dir = path.join(root, 'public/locales', lang); fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, 'translations.json'), JSON.stringify({ header: {},
        bio: { scholar: 'https://scholar.google.com/example', researchTags: ['Old'] }, contact: { emailAdress: 'keep@example.com' } }));
    }
    const data = normalize(profile, fixture());
    assert.equal(writeSnapshot(data, root), true);
    assert.equal(writeSnapshot(data, root), false);
    generateContent(data, root);
    const read = file => JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'));
    assert.deepEqual(read('public/api/years.json').years, ['2026', '2025']);
    assert.equal(read('public/api/papers-2026.json').length, 1);
    assert.deepEqual(read('public/api/misc-2026.json'), []);
    assert.equal(read('public/locales/en/translations.json').bio.scholar, 'https://scholar.google.com/example');
    assert.equal(read('public/locales/en/translations.json').contact.emailAdress, 'keep@example.com');
    assert.equal(read('public/content/career/career_ja.json')[0].endDate, '');
    const before = fs.readFileSync(path.join(root, 'data/researchmap.json'), 'utf8');
    await assert.rejects((async () => {
      const next = await fetchSnapshot(async () => { throw new Error('Network failure'); });
      writeSnapshot(next, root);
    })(), /Network failure/);
    assert.equal(fs.readFileSync(path.join(root, 'data/researchmap.json'), 'utf8'), before);
    generateContent(normalize(profile, groups()), root);
    assert.equal(fs.existsSync(path.join(root, 'public/api/papers-2026.json')), false);
    assert.deepEqual(read('public/api/papers.json'), []);
  } finally { fs.rmSync(root, { recursive: true, force: true }); }
});
