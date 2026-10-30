#!/usr/bin/env node
// Browser localization checks. Run after tools/build.mjs.
// Playwright is optional: set MP_PLAYWRIGHT to its package directory, as with tools/check.mjs.
// Screenshots are saved under .tmp/. No external post content is loaded.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { chromium } = createRequire(import.meta.url)(process.env.MP_PLAYWRIGHT || 'playwright');
process.chdir(root);
fs.mkdirSync(path.join(root, '.tmp'), { recursive: true });
const catalog = JSON.parse(fs.readFileSync('api/v1/catalog.json','utf8'));
const server = http.createServer((req,res)=>{
 const pathname = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
 if(!pathname.startsWith('/motion-prompt/')) {res.writeHead(404).end();return;}
 const file = path.resolve(root, '.' + pathname.slice('/motion-prompt'.length), pathname.endsWith('/') ? 'index.html' : '');
 if(!file.startsWith(root+path.sep)) {res.writeHead(403).end();return;}
 try {
  const type={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml'}[path.extname(file)] || 'text/plain';
  res.writeHead(200,{'Content-Type':type+'; charset=utf-8'}).end(fs.readFileSync(file));
 }catch{res.writeHead(404).end();}
});
await new Promise(r=>server.listen(0,'127.0.0.1',r));
const base='http://127.0.0.1:'+server.address().port+'/motion-prompt/';
const personalSite='https://comnori.github.io/motion-prompt/';
const personalBranch='https://github.com/comnori/motion-prompt/tree/codex/personal-pages';
const browser = await chromium.launch({channel:'chrome',headless:true}).catch(() => chromium.launch({headless:true}));
const errors=[];
async function context(options={}) {
 const ctx=await browser.newContext({locale:'en-US',reducedMotion:'reduce',viewport:{width:1440,height:1000},...options});
 await ctx.route('https://platform.twitter.com/**',r=>r.abort());
 await ctx.addInitScript(()=>{
  window.__copied='';
  Object.defineProperty(navigator,'clipboard',{value:{writeText:async t=>{window.__copied=t;}}});
 });
 ctx.on('page',p=>p.on('pageerror',e=>errors.push(e.message)));
 return ctx;
}
async function ready(page,lang) {
 await page.waitForFunction(l=>document.documentElement.lang===l && window.MP_CATALOG && document.querySelectorAll('.tile').length===window.MP_CATALOG.count,lang);
}
async function noOverflow(page,label) {
 const dimensions=await page.evaluate(()=>({width:document.documentElement.clientWidth,scroll:document.documentElement.scrollWidth}));
 assert.ok(dimensions.scroll<=dimensions.width+1,label+': '+JSON.stringify(dimensions));
}
try {
 // Crawlers and visitors without JavaScript receive Korean metadata and copy too.
 const staticCtx=await browser.newContext({javaScriptEnabled:false,locale:'en-US'});
 const staticPage=await staticCtx.newPage();
 for(const file of ['', 'found.html']){
  await staticPage.goto(base+file);
  assert.equal(await staticPage.locator('html').getAttribute('lang'),'ko');
  assert.ok((await staticPage.title()).includes('comnori'));
  assert.equal(await staticPage.locator('link[rel="canonical"]').getAttribute('href'),personalSite+file);
  assert.equal(await staticPage.locator('meta[property="og:url"]').getAttribute('content'),personalSite+file);
  assert.equal(await staticPage.locator('meta[property="og:image"]').getAttribute('content'),personalSite+'assets/og.png');
  assert.equal(await staticPage.locator('meta[property="og:locale"]').getAttribute('content'),'ko_KR');
  assert.match(await staticPage.locator('h1').textContent(),/[가-힣]/);
  assert.equal(await staticPage.locator('[data-lang="ko"]').getAttribute('aria-pressed'),'true');
  assert.equal(await staticPage.locator('.top-gh').getAttribute('href'),personalBranch);
  assert.equal(await staticPage.locator('[data-t="personalEdition"]').textContent(),'개인 배포: comnori');
  assert.equal(await staticPage.locator('[data-t="sourceLink"]').getAttribute('href'),'https://github.com/showheyohtaki/motion-prompt');
 }
 await staticCtx.close();
 const japaneseCtx=await context({locale:'ja-JP'});
 const japanese=await japaneseCtx.newPage();
 await japanese.goto(base+'?lang=invalid'); await ready(japanese,'ko');
 await japanese.goto(base+'found.html');
 await japanese.waitForFunction(()=>document.querySelectorAll('.ex').length===12);
 assert.equal(await japanese.locator('html').getAttribute('lang'),'ko');
 await japaneseCtx.close();
 const ctx=await context();
 const p=await ctx.newPage();
 await p.goto(base); await ready(p,'ko');
 await p.locator('[data-lang="ko"]').click();
 assert.equal(await p.evaluate(()=>localStorage.getItem('mp-lang')),'ko');
 assert.match(await p.title(),/용어 모음집/);
 assert.equal(await p.locator('#cmd').textContent(),'npx skills add showheyohtaki/motion-prompt');
 assert.match(await p.locator('[data-t="installSkillH"]').textContent(),/원본/);
 assert.equal(await p.locator('meta[property="og:locale"]').getAttribute('content'),'ko_KR');
 assert.ok((await p.locator('[data-page-link="found.html"]').first().getAttribute('href')).includes('lang=ko'));
 await p.screenshot({path:'.tmp/ko-desktop-light.png'});
 await p.locator('#theme').click();
 await p.screenshot({path:'.tmp/ko-desktop-dark.png'});
 await noOverflow(p,'desktop');
 for(const query of ['스크롤','클로즈업','001','Pop-in']){
  await p.locator('#q').fill(query);
  await p.waitForFunction(()=>document.querySelectorAll('.tile-box:not([hidden])').length>0 && document.querySelectorAll('.tile-box:not([hidden])').length<window.MP_CATALOG.count);
 }
 await p.locator('#q').fill('001');
 await p.locator('.tile[data-id="001"]').click();
 await p.locator('#detail').waitFor({state:'visible'});
 assert.equal(await p.locator('#d-name').textContent(),catalog.elements[0].name.ko);
 assert.ok((await p.locator('#d-sub').textContent()).startsWith(catalog.elements[0].name.en));
 await p.locator('#d-copy-prompt').click();
 assert.equal(await p.evaluate(()=>window.__copied),fs.readFileSync('api/v1/ko/p/001.txt','utf8').trimEnd());
 assert.ok((await p.evaluate(()=>window.__copied)).includes(personalSite+'api/v1/ko/e/001.txt'));
 await p.locator('#d-copy-code').click();
 assert.match(await p.evaluate(()=>window.__copied),/api\/v1\/kit\/motion.js/);
 await p.locator('#d-pick').click();
 await p.screenshot({path:'.tmp/ko-detail.png'});
 // Dispatching the language button here tests the detail refresh branch; modal focus normally prevents header interaction.
 await p.locator('[data-lang="en"]').dispatchEvent('click');
 assert.equal(await p.locator('#d-name').textContent(),catalog.elements[0].name.en);
 assert.equal(await p.locator('#q').inputValue(),'001');
 assert.match(await p.locator('#d-txt').getAttribute('href'),/\/en\//);
 await p.locator('[data-lang="ja"]').dispatchEvent('click');
 assert.equal(await p.locator('#d-name').textContent(),catalog.elements[0].name.ja);
 await p.locator('[data-lang="ko"]').dispatchEvent('click');
 await p.locator('#d-close').click();
 await p.locator('#detail').waitFor({state:'hidden'});
 assert.equal(await p.locator('[data-pick="001"]').getAttribute('aria-pressed'),'true');
 await p.locator('#tray-share').click();
 let share=await p.evaluate(()=>window.__copied);
 assert.match(share,/lang=ko&pick=001/);
 assert.ok(share.startsWith(personalSite+'?'));
 await p.locator('#tray-main').click();
 assert.match(await p.evaluate(()=>window.__copied),/api\/v1\/ko\/e\/001.txt/);
 assert.ok((await p.evaluate(()=>window.__copied)).includes(personalSite+'api/v1/ko/e/001.txt'));
 await p.goto(base+'?lang=ko&pick=001,192');
 await ready(p,'ko');
 assert.equal(await p.locator('#tray-list li').count(),2);
 await p.locator('#tray-clear').click();
 await p.locator('[data-page-link="found.html"]').first().click();
 await p.waitForFunction(()=>document.querySelectorAll('.ex').length===12);
 assert.equal(await p.locator('html').getAttribute('lang'),'ko');
 assert.match(await p.locator('.ex-intro').first().textContent(),/스크롤/);
 await p.locator('.ex-status').first().waitFor({state:'visible'});
 await p.waitForFunction(()=>document.querySelector('.ex-status').textContent.includes('불러오지 못했습니다'));
 await p.screenshot({path:'.tmp/ko-examples.png'});
 await p.locator('[data-lang="ja"]').click();
 await p.locator('[data-lang="en"]').click();
 await p.locator('[data-lang="ko"]').click();
 assert.equal(await p.locator('[data-t="makeLink"]').getAttribute('href'),'https://github.com/comnori/motion-prompt/blob/codex/personal-pages/make-your-own/README.ko.md');
 assert.match(await p.locator('[data-t="recLink"]').textContent(),/원본/);
 await p.locator('.logo').click(); await ready(p,'ko');
 await p.locator('[data-lang="en"]').click();
 await p.reload(); await ready(p,'en');
 await p.goto(base+'?lang=ja'); await ready(p,'ja');
 await p.goto(base+'?lang=invalid'); await ready(p,'en');
 await ctx.close();

 for(const width of [320,375,768]){
  const mobile=await context({viewport:{width,height:900}});
  const page=await mobile.newPage();
  await page.goto(base+'?lang=ko'); await ready(page,'ko'); await noOverflow(page,'width '+width);
  const boxes=await page.locator('.top .logo, .top .seg, #theme').evaluateAll(nodes=>nodes.map(n=>{const r=n.getBoundingClientRect();return {x:r.x,right:r.right,y:r.y,bottom:r.bottom};}));
  assert.ok(boxes.every(b=>b.x>=0&&b.right<=width), 'header clipping '+width);
  if(width===375)await page.screenshot({path:'.tmp/ko-mobile.png'});
  await page.locator('.tile[data-id="001"]').click();
  await page.locator('#detail').waitFor({state:'visible'});
  assert.ok(await page.locator('#d-id').evaluate(n=>n.getBoundingClientRect().height<25),'ID must not wrap');
  await noOverflow(page,'mobile dialog '+width);
  if(width===375)await page.screenshot({path:'.tmp/ko-mobile-detail.png'});
  await mobile.close();
 }
 const blocked=await context();
 await blocked.addInitScript(()=>{Object.defineProperty(window,'localStorage',{get(){throw new DOMException('Blocked','SecurityError');}});});
 const denied=await blocked.newPage(); await denied.goto(base); await ready(denied,'ko');
 await denied.locator('[data-lang="en"]').click(); await denied.reload(); await ready(denied,'en');
 await denied.goto(base+'found.html?lang=ko');
 await denied.waitForFunction(()=>document.documentElement.lang==='ko'&&document.querySelectorAll('.ex').length===12);
 await blocked.close();

 // Real browser -> local CLI callback, in the language chosen in the browser.
 const child=spawn(process.execPath,['skills/motion-prompt/scripts/motion-prompt.mjs','pick','--local','--no-open','--timeout','25'],{cwd:root,env:{...process.env,MOTION_PROMPT_BASE:path.join(root,'api/v1'),MOTION_PROMPT_CACHE:path.join(root,'.tmp','browser-cli-cache')},stdio:['ignore','pipe','pipe']});
 let stdout='',stderr='';
 child.stderr.on('data',b=>stderr+=b);
 const done=new Promise(r=>child.on('close',r));
 try{
  const url=await new Promise((resolve,reject)=>{
   const timer=setTimeout(()=>reject(new Error('CLI failed to start '+stderr)),8000);
   child.stdout.on('data',b=>{stdout+=b;const m=stdout.match(/Gallery: (http[^\r\n]+)/);if(m){clearTimeout(timer);resolve(m[1]);}});
  });
  const pickCtx=await context();
  const pickPage=await pickCtx.newPage();
  await pickPage.goto(url); await ready(pickPage,'ko');
  await pickPage.locator('[data-pick="001"]').click();
  await pickPage.locator('#tray-note').fill('한국어 통합 확인');
  await pickPage.locator('#tray-main').click();
  await pickPage.waitForFunction(()=>document.body.textContent.includes('AI에게 보냈습니다'));
  assert.equal(await done,0,stderr);
  assert.ok(stdout.includes('한국어 통합 확인'));
  assert.ok(stdout.includes('동작 사양:'));
  await pickCtx.close();
 }finally {child.kill(); await done;}
 assert.deepEqual(errors,[]);
 console.log('Browser QA passed: locale priority, 3-language switching, Korean search/copy/share, examples fallback, mobile 320/375/768, storage denied and real CLI handoff.');
}finally{await browser.close();await new Promise(r=>server.close(r));}
