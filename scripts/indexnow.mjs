// Reads out/sitemap.xml and submits all URLs to IndexNow (Bing, Yandex, Naver, Seznam share the index).
import { readFileSync } from "node:fs";
const key = process.env.INDEXNOW_KEY;
const site = process.env.SITE_URL || "https://temprasurehvac.com";
if (!key) { console.log("no key"); process.exit(0); }
const xml = readFileSync("out/sitemap.xml", "utf8");
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const host = new URL(site).host;
for (let i = 0; i < urls.length; i += 10000) {
  const body = { host, key, keyLocation: `${site}/${key}.txt`, urlList: urls.slice(i, i + 10000) };
  const r = await fetch("https://api.indexnow.org/indexnow", { method: "POST", headers: { "Content-Type": "application/json; charset=utf-8" }, body: JSON.stringify(body) });
  console.log(`submitted ${body.urlList.length} urls:`, r.status);
}
