// Inline the global stylesheet into every exported HTML file so first paint needs no extra request.
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
const cssDir = join(OUT, "_next", "static", "css");
let css = "";
try {
  for (const f of readdirSync(cssDir)) if (f.endsWith(".css")) css += readFileSync(join(cssDir, f), "utf8");
} catch { /* no css */ }
if (!css) { console.log("postbuild: no css found, skipping"); process.exit(0); }

const walk = (d, acc = []) => { for (const f of readdirSync(d)) { const p = join(d, f); statSync(p).isDirectory() ? walk(p, acc) : p.endsWith(".html") && acc.push(p); } return acc; };
let n = 0;
for (const file of walk(OUT)) {
  let html = readFileSync(file, "utf8");
  // Replace the stylesheet link with an inline <style>; keep a preload-free DOM.
  const re = /<link[^>]+rel="stylesheet"[^>]+href="\/_next\/static\/css\/[^"]+"[^>]*>/g;
  if (re.test(html)) {
    html = html.replace(re, "");
    html = html.replace("</head>", `<style>${css}</style></head>`);
    writeFileSync(file, html);
    n++;
  }
}
console.log(`postbuild: inlined css into ${n} pages`);
