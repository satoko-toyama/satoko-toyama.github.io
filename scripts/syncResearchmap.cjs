const path = require('node:path');
const { fetchSnapshot, writeSnapshot } = require('./researchmap.cjs');

(async () => {
  const snapshot = await fetchSnapshot();
  snapshot.lastCheckedAt = new Date().toISOString();
  const changed = writeSnapshot(snapshot, path.resolve(__dirname, '..'));
  console.log(changed ? 'Updated researchmap snapshot.' : 'researchmap content is unchanged.');
  for (const [kind, items] of Object.entries(snapshot.publications)) console.log(`${kind}: ${items.length}`);
})().catch(error => {
  console.error(`researchmap sync failed; previous snapshot retained: ${error.message}`);
  process.exitCode = 1;
});
