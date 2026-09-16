import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { pages } from '../dist-ssr/prerender.js';

const references = JSON.parse(await fs.readFile('src/data/addition-references.json', 'utf8'));
assert.equal(references.medical.length, 320);
assert.equal(references.audit.engineeringSourceRows, 138);
assert.equal(references.engineering.flatMap(record => record.sources).length, 138, 'Every engineering source row must retain provenance');
assert.equal(Object.keys(references.files).length, 20);
assert.equal(new Set(Object.values(references.files)).size, 20);
assert.equal(references.engineering.find(record => record.name === 'PES University').location, 'Bengaluru, Karnataka');
assert.equal(references.engineering.find(record => record.name.startsWith('K L University')).location, 'Vaddeswaram, Andhra Pradesh');
assert.equal(references.engineering.filter(record => /PES University \(.*Campus\)/.test(record.name)).length, 2, 'Distinct PES campuses must remain separate');
assert.equal(references.engineering.filter(record => /BITS Pilani \(.*Campus\)/.test(record.name)).length, 2, 'BITS Goa and Hyderabad must remain separate');
assert.equal(references.engineering.filter(record => record.name.startsWith('Vellore Institute')).length, 2, 'VIT Chennai and Vellore must remain separate, with national Vellore overlap merged');
assert.equal(references.medical.filter(record => record.reportedFee === null).length, 4);
assert(references.medical.every(record => record.verified === false && record.feePeriod === 'unconfirmed'));
for (const asset of Object.values(references.files)) {
  const stat = await fs.stat(path.join('dist', asset));
  assert(stat.size > 0, `Missing original resource: ${asset}`);
}
const home = await fs.readFile('dist/index.html', 'utf8');
assert.equal((home.match(/class="discovery-card medical-reference-card"/g) || []).length, 6, 'Homepage directory must remain a compact preview');
assert(home.includes('918097686335') && home.includes('919004713195'));
assert(home.includes('/resources/'));
const directory = await fs.readFile('dist/medical-colleges/index.html', 'utf8');
assert(directory.replace(/<!--[\s\S]*?-->/g, '').includes('320 source records'));
assert(directory.includes('period unconfirmed'));
const overseas = await fs.readFile('dist/mbbs-abroad/index.html', 'utf8');
assert.equal((overseas.match(/class="discovery-card destination-card"/g) || []).length, 14);
assert(overseas.includes('university quote'));
const westBengal = await fs.readFile('dist/mbbs-admission/west-bengal/index.html', 'utf8');
assert(westBengal.includes('Per semester'));
const gujarat = await fs.readFile('dist/mbbs-admission/gujarat/index.html', 'utf8');
assert(gujarat.includes('₹32.50 lakh'), 'Gujarat Zydus management transcription must match poster');
const medical = await fs.readFile('dist/medical-admissions/index.html', 'utf8');
for (const pathway of ['BVSc', 'BNYS', 'Clinical Research', 'Neurophysiology']) assert(medical.includes(pathway));
for (const route of Object.keys(pages)) {
  const html = await fs.readFile(path.join('dist', route, 'index.html'), 'utf8');
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `One page heading required: ${route}`);
  assert(!html.includes('Page not found'), `Route failed to render: ${route}`);
}
console.log(`Addition content verified: ${Object.keys(pages).length} routes, 20 original resources, 320 medical source records and ${references.engineering.length} engineering references.`);
