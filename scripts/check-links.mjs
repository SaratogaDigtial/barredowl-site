// Fails the build if the homepage links to an in-page anchor that does not exist.
import { readFileSync } from 'node:fs';

const html = readFileSync('dist/index.html', 'utf8');
const hrefs = [...html.matchAll(/href="#([^"]+)"/g)].map((m) => m[1]);
const ids = new Set([...html.matchAll(/id="([^"]+)"/g)].map((m) => m[1]));
const missing = [...new Set(hrefs)].filter((h) => !ids.has(h));

if (missing.length) {
  console.error('Broken in-page links:', missing);
  process.exit(1);
}
console.log(`Checked ${new Set(hrefs).size} in-page links. All resolve.`);
