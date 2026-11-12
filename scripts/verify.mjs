// Build-output checks: page count, internal links, titles/descriptions, 8-gram uniqueness.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
const walk = (d, acc = []) => { for (const f of readdirSync(d)) { const p = join(d, f); statSync(p).isDirectory() ? walk(p, acc) : p.endsWith(".html") && acc.push(p); } return acc; };
const files = walk(OUT).filter((f) => !f.includes("/404") && !f.endsWith("404.html"));
const text = (html) => html.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<style[\s\S]*?<\/style>/g, "").replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, " ").trim();
const mainText = (html) => { const m = /<main[^>]*>([\s\S]*?)<\/main>/.exec(html); return text(m ? m[1] : html); };

let bad = 0;
const urls = new Set(files.map((f) => "/" + f.slice(OUT.length + 1).replace(/index\.html$/, "").replace(/\.html$/, "/")));
const grams = new Map();
const pageWords = [];
const titles = new Map();
for (const f of files) {
  const html = readFileSync(f, "utf8");
  const url = "/" + f.slice(OUT.length + 1).replace(/index\.html$/, "");
  const title = /<title>([^<]*)<\/title>/.exec(html)?.[1] ?? "";
  const desc = /<meta name="description" content="([^"]*)"/.exec(html)?.[1] ?? "";
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  const canon = /<link rel="canonical" href="([^"]+)"/.exec(html)?.[1];
  if (!title) { console.log("NO TITLE", url); bad++; }
  if (title.length > 70) console.log(`LONG TITLE (${title.length})`, url, title);
  if (titles.has(title)) { console.log("DUP TITLE", url, "=", titles.get(title)); bad++; } else titles.set(title, url);
  if (!desc) { console.log("NO DESC", url); bad++; }
  if (desc.length > 170) console.log(`LONG DESC (${desc.length})`, url);
  if (h1s !== 1) { console.log(`H1 count ${h1s}`, url); bad++; }
  if (!canon) { console.log("NO CANONICAL", url); bad++; }
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const h = m[1];
    if (h.startsWith("/_next") || h.startsWith("/img") || h.startsWith("/fonts") || /\.(xml|txt|png|webmanifest)$/.test(h)) continue;
    const norm = h.endsWith("/") ? h : h + "/";
    if (!urls.has(norm) && !existsSync(join(OUT, norm, "index.html"))) { console.log("BROKEN LINK", url, "->", h); bad++; }
  }
  const words = mainText(html).toLowerCase().split(/[^a-z0-9']+/).filter(Boolean);
  pageWords.push({ url, n: words.length });
  const seen = new Set();
  for (let i = 0; i + 8 <= words.length; i++) { const g = words.slice(i, i + 8).join(" "); if (seen.has(g)) continue; seen.add(g); grams.set(g, (grams.get(g) || 0) + 1); }
}
// uniqueness: share of a page's 8-grams that appear on no other page
let totalUnique = 0;
const rows = [];
for (const f of files) {
  const html = readFileSync(f, "utf8");
  const url = "/" + f.slice(OUT.length + 1).replace(/index\.html$/, "");
  const words = mainText(html).toLowerCase().split(/[^a-z0-9']+/).filter(Boolean);
  const seen = new Set(); let uniq = 0, tot = 0;
  for (let i = 0; i + 8 <= words.length; i++) { const g = words.slice(i, i + 8).join(" "); if (seen.has(g)) continue; seen.add(g); tot++; if (grams.get(g) === 1) uniq++; }
  const pct = tot ? uniq / tot : 0; totalUnique += pct; rows.push({ url, pct, words: words.length });
}
rows.sort((a, b) => a.pct - b.pct);
const avgWords = Math.round(pageWords.reduce((a, b) => a + b.n, 0) / pageWords.length);
console.log(`\nPages: ${files.length}  avg words/page: ${avgWords}  total words: ${pageWords.reduce((a, b) => a + b.n, 0).toLocaleString()}`);
console.log(`Avg 8-gram uniqueness: ${(100 * totalUnique / rows.length).toFixed(1)}%`);
console.log("Least unique pages:"); for (const r of rows.slice(0, 8)) console.log(`  ${(100 * r.pct).toFixed(1)}%  ${r.words}w  ${r.url}`);
const combos = rows.filter((r) => /^\/services\/[^/]+\/[^/]+\/$/.test(r.url));
if (combos.length) console.log(`Service×city pages: ${combos.length}, avg uniqueness ${(100 * combos.reduce((a, b) => a + b.pct, 0) / combos.length).toFixed(1)}%, avg words ${Math.round(combos.reduce((a, b) => a + b.words, 0) / combos.length)}`);
const thin = rows.filter((r) => r.words < 600);
console.log(`Pages under 600 words: ${thin.length}`); for (const r of thin.slice(0, 10)) console.log(`  ${r.words}w ${r.url}`);
console.log(bad ? `\n${bad} problems` : "\nNo structural problems");
process.exit(bad ? 1 : 0);
