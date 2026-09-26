// Minimal Chrome DevTools protocol helper for bake_masks.mjs, no packages.
import { spawn } from "node:child_process";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
export async function launch(port) {
  const CH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
  const chrome = spawn(CH, ["--headless=new", `--remote-debugging-port=${port}`, `--user-data-dir=${mkdtempSync(join(tmpdir(), "cdp-"))}`, "--hide-scrollbars", "about:blank"], { stdio: "ignore" });
  const json = async (path, method = "GET") => {
    for (let i = 0; i < 50; i++) {
      try { return await (await fetch(`http://127.0.0.1:${port}${path}`, { method })).json(); } catch { await sleep(200); }
    }
    throw new Error("chrome not reachable");
  };
  await json("/json/version");
  async function tab() {
    const target = await json(`/json/new?about:blank`, "PUT");
    const ws = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise((r) => ws.addEventListener("open", r, { once: true }));
    let id = 0;
    const pending = new Map();
    ws.addEventListener("message", (e) => {
      const m = JSON.parse(e.data);
      if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
    });
    const send = (method, params = {}) => new Promise((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
    const close = async () => { ws.close(); await fetch(`http://127.0.0.1:${port}/json/close/${target.id}`).catch(() => {}); };
    return { send, close };
  }
  return { tab, kill: () => chrome.kill() };
}
