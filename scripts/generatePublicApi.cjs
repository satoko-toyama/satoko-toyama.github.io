const fs = require('node:fs');
const path = require('node:path');
const { generateContent } = require('./researchmap.cjs');
const root = path.resolve(__dirname, '..');
const snapshotPath = path.join(root, 'data/researchmap.json');

if (fs.existsSync(snapshotPath)) {
  generateContent(JSON.parse(fs.readFileSync(snapshotPath, 'utf8')), root);
  console.log('Generated website content from researchmap snapshot.');
} else {
  // Preserve the original template's offline CSV workflow for other sites.
  require('./generateCsvApi.cjs');
}
