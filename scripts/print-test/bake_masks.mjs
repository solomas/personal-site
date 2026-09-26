// Renders each shape SVG once in headless Chrome and saves its alpha as a
// PNG, so the site ships a bitmap mask and no filter runs in the browser.
// Usage: node bake_masks.mjs <srcDir> <outDir>
import { writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { launch, sleep } from "./cdp.mjs";
const [src, out] = process.argv.slice(2);
// Pixel width per shape, about 1.3 px per viewBox unit. Chosen for file size.
const sizes = { a: [1200, 436], b: [960, 329], c: [1100, 358], d: [560, 224] };
const b = await launch(9345);
try {
  for (const [k, [w, h]] of Object.entries(sizes)) {
    const t = await b.tab();
    await t.send("Page.enable");
    await t.send("Emulation.setDeviceMetricsOverride", { width: w, height: h, deviceScaleFactor: 1, mobile: false });
    await t.send("Emulation.setDefaultBackgroundColorOverride", { color: { r: 0, g: 0, b: 0, a: 0 } });
    const svg = readFileSync(join(src, `shape-${k}.svg`), "utf8");
    const html = `<html><body style="margin:0;background:transparent"><img style="display:block;width:${w}px;height:${h}px" src="data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}"></body></html>`;
    await t.send("Page.navigate", { url: "data:text/html;base64," + Buffer.from(html).toString("base64") });
    await sleep(1500);
    const r = await t.send("Page.captureScreenshot", { format: "png", clip: { x: 0, y: 0, width: w, height: h, scale: 1 } });
    writeFileSync(join(out, `raw-${k}.png`), Buffer.from(r.result.data, "base64"));
    await t.close();
  }
} finally { b.kill(); }
