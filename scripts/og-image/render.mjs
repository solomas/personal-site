// Renders scripts/og-image/og.html to public/og.png at 1200 by 630 through
// headless Chrome and the DevTools protocol. Nothing to install.
// Usage, from the repo root:
//   node scripts/og-image/render.mjs "file://$PWD/scripts/og-image/og.html" public/og.png
import { spawn } from "node:child_process";
import { writeFileSync, mkdtempSync } from "node:fs"; import { tmpdir } from "node:os"; import { join } from "node:path";
const [url, out] = process.argv.slice(2);
const CH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", port=9339;
const chrome=spawn(CH,["--headless=new",`--remote-debugging-port=${port}`,`--user-data-dir=${mkdtempSync(join(tmpdir(),"cdp-"))}`,"--hide-scrollbars","--allow-file-access-from-files","about:blank"],{stdio:"ignore"});
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
async function json(p,m="GET"){for(let i=0;i<50;i++){try{return await (await fetch(`http://127.0.0.1:${port}${p}`,{method:m})).json()}catch{await sleep(200)}}}
try{
  await json("/json/version"); const t=await json("/json/new?about:blank","PUT");
  const ws=new WebSocket(t.webSocketDebuggerUrl); await new Promise(r=>ws.addEventListener("open",r,{once:true}));
  let id=0; const pend=new Map(); ws.addEventListener("message",e=>{const m=JSON.parse(e.data); if(m.id&&pend.has(m.id)){pend.get(m.id)(m);pend.delete(m.id)}});
  const send=(method,params={})=>new Promise(r=>{const i=++id;pend.set(i,r);ws.send(JSON.stringify({id:i,method,params}))});
  await send("Page.enable");
  await send("Emulation.setDeviceMetricsOverride",{width:1200,height:630,deviceScaleFactor:1,mobile:false});
  await send("Page.navigate",{url}); await sleep(1500);
  const fonts=(await send("Runtime.evaluate",{expression:"document.fonts.check('600 30px Geist') + ' ' + [...document.fonts].map(f=>f.family+':'+f.status).join(',')",returnByValue:true})).result.result.value;
  console.log("fonts:", fonts);
  const r=await send("Page.captureScreenshot",{format:"png",clip:{x:0,y:0,width:1200,height:630,scale:1}});
  writeFileSync(out,Buffer.from(r.result.data,"base64"));
} finally { chrome.kill(); }
