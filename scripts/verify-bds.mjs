import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';

const origin = process.env.QA_ORIGIN || 'http://127.0.0.1:4175';
const groups = JSON.parse(await fs.readFile(new URL('../src/data/bds-colleges.json', import.meta.url), 'utf8'));
assert.equal(groups.reduce((sum, group) => sum + group.colleges.length, 0), 266);
assert.deepEqual(groups.find(group => group.state === 'Uttarakhand').colleges, [
  'Seema Dental College & Hospital, Rishikesh',
  'Uttaranchal Dental College & Medical Research Institute, Dehradun',
]);
const browser = await chromium.launch({ channel: 'msedge', headless: true });
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('response', r => { if (r.url().startsWith(origin) && r.status() >= 400) errors.push(`${r.status()} ${r.url()}`); });
  await page.goto(origin + '/bds-admission/');
  await page.locator('#bds-state').waitFor();
  assert.equal(await page.locator('h1').count(), 1);
  assert.match(await page.title(), /BDS/);
  for (const group of groups) {
    await page.selectOption('#bds-state', group.state);
    const names = [];
    for (let i = 0; i < Math.ceil(group.colleges.length / 12); i++) {
      names.push(...await page.locator('.bds-college h3').allTextContents());
      const stateLabels = await page.locator('.bds-college-top > span:first-child').allTextContents();
      assert(stateLabels.every(value => value === group.state));
      if (i + 1 < Math.ceil(group.colleges.length / 12)) await page.getByRole('button', { name: 'Next', exact: true }).click();
    }
    assert.deepEqual(names, group.colleges, group.state);
    assert.equal(names.length, group.expectedCount);
  }
  console.log('All 266 college names and 22 state/UT lists match; pagination does not omit or duplicate records.');
  await page.selectOption('#bds-state', 'Uttarakhand');
  await page.fill('#bds-search', 'Seema');
  assert.equal(await page.locator('.bds-college').count(), 1);
  assert.match(await page.locator('.bds-college a').getAttribute('href'), /BDS/);
  await page.fill('#bds-search', 'Manipal');
  assert.equal(await page.locator('.bds-college').count(), 0, 'Cross-state search must not leak results');
  assert.match(await page.locator('.bds-empty').textContent(), /Uttarakhand/);
  await page.locator('.bds-empty button').click();
  assert.equal(await page.inputValue('#bds-state'), '');
  assert.equal(await page.inputValue('#bds-search'), '');
  await fs.mkdir('qa', { recursive: true });
  for (const width of [320, 375, 390, 430, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.selectOption('#bds-state', 'Uttarakhand');
    await page.evaluate(() => scrollTo(0, 0));
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `Overflow at ${width}`);
    for (const selector of ['#bds-state', '#bds-search', '.bds-button', '.bds-college-bottom a']) {
      for (const target of await page.locator(selector).all()) {
        const box = await target.boundingBox();
        assert(box.width > 0 && box.height >= 44, `Touch target ${selector} at ${width}`);
        assert(box.x >= 0 && box.x + box.width <= width + 1, `Clipped ${selector} at ${width}`);
      }
    }
    if ([390, 1440].includes(width)) await page.screenshot({ path: `qa/bds-${new URL(origin).hostname}-${width}.png`, fullPage: true });
    if (width === 390) {
      await page.getByRole('button', { name: 'Open mobile menu' }).click();
      await page.locator('#mobile-navigation').getByText('Medical Admissions', { exact: true }).click();
      assert.equal(await page.locator('#mobile-navigation').getByRole('link', { name: 'BDS', exact: true }).getAttribute('href'), '/bds-admission/');
      await page.getByRole('button', { name: 'Close mobile menu' }).click();
      assert.equal(await page.locator('.mobile-action-bar a').last().getAttribute('href'), '#bds-colleges');
    }
  }
  for (const route of ['/medical-admissions/', '/resources/', '/medical-colleges/']) {
    await page.goto(origin + route);
    assert.equal(await page.locator('footer').getByRole('link', { name: 'BDS', exact: true }).getAttribute('href'), '/bds-admission/');
    if (route === '/medical-admissions/') assert.equal(await page.getByRole('link', { name: 'Explore BDS colleges', exact: true }).getAttribute('href'), '/bds-admission/');
  }
  const pdf = await page.request.get(origin + '/resources/private-bds-colleges-india.pdf');
  assert.equal(pdf.status(), 200);
  assert((await pdf.body()).subarray(0, 4).equals(Buffer.from('%PDF')));
  assert.deepEqual(errors, []);
  console.log('Search, empty state, reset, enquiries, PDF, navigation and seven responsive widths passed; no browser errors.');
} finally { await browser.close(); }
