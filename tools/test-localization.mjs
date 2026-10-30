#!/usr/bin/env node
// Localization regressions. Node 18+, no dependencies or external network.
// Run after node tools/build.mjs.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { spawn, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = p => fs.readFileSync(path.join(root, p), 'utf8').replace(/\r\n/g, '\n');
const json = p => JSON.parse(read(p));
const langs = ['ja', 'en', 'ko'];
const context = { window: {}, URLSearchParams, URL };
vm.runInNewContext(read('assets/language.js'), context);
const language = context.window.MP_LANGUAGE;
for (const [query, saved, browser, expected] of [
  ['?lang=ko', 'ja', 'en-US', 'ko'], ['?lang=en', 'ko', 'ko-KR', 'en'],
  ['?lang=invalid', 'ko', 'ja-JP', 'ko'], ['', null, 'ko-KR', 'ko'],
  ['', 'invalid', 'ja-JP', 'ja'], ['', null, 'fr-FR', 'en'],
  ['', null, '', 'en'], ['?lang=ko-KR', 'en', 'ko', 'en'],
]) assert.equal(language.resolve(query, saved, browser), expected);
const state = { detail: '001' };
context.location = { href: 'https://example.test/motion-prompt/?pack=camera&pick=025&cb=local#025' };
context.history = { state, replaceState(s, unused, url) { assert.equal(s, state); this.url = url; } };
language.setUrl('ko');
const changed = new URL(context.history.url, context.location.href);
assert.equal(changed.searchParams.get('lang'), 'ko');
for (const [key, val] of [['pack','camera'], ['pick','025'], ['cb','local']]) assert.equal(changed.searchParams.get(key), val);
assert.equal(changed.hash, '#025');

const placeholders = s => [...new Set(String(s).match(/\{\w+\}/g) || [])].sort();
// This compares the two metadata translations, not the animation's implementation.
// Preserve explicit negative values and repeated numbers while allowing translated word order.
const numbers = text => (text
  .replace(/\bfigure eight\b|8자/gi, 'figure-eight').replace(/\bthirty\b/gi, '30')
  .replace(/\u2212/g, '-').replace(/(\d)\s*-\s*(?=\d)/g, '$1–')
  .replace(/-\s+(?=\d)/g, '-')
  .match(/-?\d+(?:\.\d+)?/g) || []).sort();
assert.deepEqual(numbers('u - 1.62; figure eight; Thirty days'), numbers('u−1.62; 8자; 30일'));
assert.notDeepEqual(numbers('-90 degrees'), numbers('90도'));
assert.notDeepEqual(numbers('0.4 then 0.4'), numbers('0.4'));
assert.notDeepEqual(numbers('0.4'), numbers('0.4 and 0.8'));
for (const file of ['assets/site.js', 'assets/found.js']) {
  const source = read(file);
  const match = source.match(/var I18N = (\{[\s\S]*?\n  \});/);
  assert.ok(match, file);
  const texts = vm.runInNewContext('(' + match[1] + ')');
  for (const lang of langs) {
    assert.deepEqual(Object.keys(texts[lang]).sort(), Object.keys(texts.en).sort(), file + '/' + lang);
    for (const key of Object.keys(texts.en)) {
      assert.ok(texts[lang][key], file + '/' + lang + '/' + key);
      if (typeof texts.en[key] === 'string') assert.deepEqual(placeholders(texts[lang][key]), placeholders(texts.en[key]), file + '/' + lang + '/' + key);
    }
  }
}

const catalog = json('api/v1/catalog.json');
const generated = { window: {} };
vm.runInNewContext(read('assets/catalog.js'), generated);
assert.deepEqual(JSON.parse(JSON.stringify(generated.window.MP_CATALOG)), catalog);
const prompt = generated.window.MP_PROMPT;
let translated = 0;
// These packs ship complete Korean copy. New packs may still use the documented English fallback.
const koreanPacks = new Set(['motion', 'camera', 'ui', 'lp', 'photo', 'motion2', 'lp2', 'camera2']);
for (const pack of catalog.packs.filter(p => koreanPacks.has(p.pack))) {
  const meta = json('packs/' + pack.pack + '/meta.json');
  assert.ok(meta.title.ko);
  for (const cat of meta.categories) assert.ok(cat.ko);
  for (const el of meta.elements) {
    for (const key of ['name','meaning','ask','summary','spec','use']) {
      assert.ok(el[key]?.ko?.length, pack.pack + '/' + el.no + '/' + key);
    }
    assert.equal(el.spec.ko.length, el.spec.en.length);
    el.spec.en.forEach((line, i) => {
      assert.deepEqual(numbers(el.spec.ko[i]), numbers(line), pack.pack + '/' + el.no + '/spec line ' + (i + 1) + ': translated numbers differ');
    });
    const built = catalog.elements.find(e => e.pack === pack.pack && e.no === el.no);
    for (const key of ['name','meaning','ask','summary','spec','use']) assert.deepEqual(built[key].ko, el[key].ko);
    translated++;
  }
}
assert.equal(translated, catalog.elements.filter(e => koreanPacks.has(e.pack)).length);
for (const lang of langs) {
  assert.equal(read('api/v1/' + lang + '/catalog.tsv').trim().split('\n').length, catalog.count + 1);
  for (const dir of ['e', 'p']) assert.equal(fs.readdirSync(path.join(root, 'api/v1', lang, dir)).length, catalog.count);
  for (const el of catalog.elements) {
    const pack = catalog.packs.find(p => p.pack === el.pack);
    assert.equal(read('api/v1/' + lang + '/p/' + el.id + '.txt').trimEnd(), prompt(el, pack.title[lang], lang));
    // Only the descriptive header differs; executable reference code stays identical.
    const code = text => text.slice(text.indexOf('\n\n') + 2);
    assert.equal(code(read('api/v1/' + lang + '/e/' + el.id + '.txt')), code(read('api/v1/en/e/' + el.id + '.txt')));
  }
}
const examples = json('examples/found.json');
for (const theme of examples.themes) assert.ok(theme.ko);
for (const item of examples.items) assert.ok(item.intro.ko);

const tempRoot = path.join(root, '.tmp');
fs.mkdirSync(tempRoot, { recursive: true });
const temp = fs.mkdtempSync(path.join(tempRoot, 'localization-'));
const cli = path.join(root, 'skills/motion-prompt/scripts/motion-prompt.mjs');
const env = { ...process.env, MOTION_PROMPT_BASE: path.join(root,'api/v1'), MOTION_PROMPT_CACHE: path.join(temp,'cache') };
const run = args => {
  const r = spawnSync(process.execPath, [cli, ...args], { cwd: root, env, encoding: 'utf8', timeout: 15000 });
  assert.equal(r.status, 0, r.stderr || String(r.error));
  return r.stdout;
};
async function pick(explicit, callbackLang, expected) {
  const child = spawn(process.execPath, [cli, 'pick', '--local', '--no-open', '--timeout', '15', ...(explicit ? ['--lang',explicit] : [])], { cwd: root, env, stdio: ['ignore','pipe','pipe'] });
  let output = '', errors = '';
  child.stderr.on('data', b => { errors += b; });
  let settle;
  const done = new Promise((resolve, reject) => {
    child.once('error', reject);
    child.once('close', code => resolve(code));
  });
  const url = new Promise((resolve, reject) => {
    settle = setTimeout(() => reject(new Error('CLI gallery did not start: ' + errors)), 8000);
    child.stdout.on('data', b => {
      output += b;
      const m = output.match(/Gallery: (http[^\r\n]+)/);
      if (m) { clearTimeout(settle); resolve(new URL(m[1])); }
    });
  });
  try {
    const gallery = await url;
    const cb = new URL(gallery.searchParams.get('cb'));
    cb.searchParams.set('lang', callbackLang);
    cb.searchParams.set('ids', '001,192');
    const invalid = new URL(cb); invalid.searchParams.set('t', 'wrong');
    assert.equal((await fetch(invalid)).status, 403);
    const response = await fetch(cb);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.ok(html.includes('lang="' + expected + '"'));
    if (expected === 'ko') assert.ok(html.includes('AI에게 보냈습니다'));
    assert.equal(await done, 0, errors);
    assert.ok(output.includes(expected === 'ko' ? '동작 사양:' : 'Spec:'));
    assert.ok(output.includes(catalog.elements[0].name[expected]));
  } finally {
    clearTimeout(settle);
    child.kill();
    await done;
  }
}
try {
  assert.match(run(['search','스크롤','--limit','2']), /스크롤/);
  assert.match(run(['search','스크롤','--limit','2','--lang','en']), /Next: get/);
  assert.match(run(['prompt','001','--lang','ko']), /동작 사양:/);
  assert.match(run(['get','192','--lang','ko']), /lang=ko#192/);
  assert.match(run(['list','--pack','camera','--lang','ko']), /카메라/);
  const bad = spawnSync(process.execPath, [cli, 'list', '--lang', 'invalid'], { cwd: root, env, encoding:'utf8' });
  assert.equal(bad.status, 2);
  await pick(null, 'ko', 'ko');
  await pick('en', 'ko', 'en');
} finally {
  // Only remove the unique test directory created above, inside this repository's .tmp.
  assert.equal(path.dirname(path.resolve(temp)), path.resolve(tempRoot));
  assert.ok(path.basename(temp).startsWith('localization-'));
  fs.rmSync(temp, { recursive: true, force: true });
}
console.log('Localization passed: ' + translated + ' elements, 3 languages, ' + examples.items.length + ' examples, CLI search and pick handoffs.');
