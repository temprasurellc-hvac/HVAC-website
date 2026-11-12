import { SITE } from "@/data/site";
import { SERVICES, CITIES, RESOURCES, RESOURCE_CATEGORIES, servicePath, cityPath, serviceCityPath, resourcePath, resourceCatPath } from "@/lib/content";

// Fixed content date, not build time: Google ignores lastmod when every URL changes on every deploy.
export const CONTENT_DATE = "2026-10-21";

type Entry = { path: string; lastmod: string; changefreq: string; priority: number };
const e = (path: string, priority: number, changefreq = "monthly", lastmod = CONTENT_DATE): Entry => ({ path, lastmod, changefreq, priority });

/** Home, hubs, service pages, city pages. */
export function pagesEntries(): Entry[] {
  return [
    e("/", 1, "weekly"), e("/services/", 0.9, "weekly"), e("/service-areas/", 0.8, "weekly"), e("/emergency/", 0.9),
    e("/about/", 0.6), e("/our-work/", 0.7), e("/reviews/", 0.7), e("/contact/", 0.7),
    ...SERVICES.map((s) => e(servicePath(s.slug), 0.9)),
    ...CITIES.map((c) => e(cityPath(c.slug), 0.7)),
  ];
}
/** Service x city pages. */
export function localEntries(): Entry[] {
  return SERVICES.flatMap((s) => CITIES.map((c) => e(serviceCityPath(s.slug, c.slug), 0.6)));
}
/** Resource library. */
export function guideEntries(): Entry[] {
  return [
    e("/resources/", 0.8, "weekly"),
    ...RESOURCE_CATEGORIES.map((c) => e(resourceCatPath(c), 0.6, "weekly")),
    ...RESOURCES.map((r) => e(resourcePath(r.slug), 0.7, "monthly", r.updated)),
  ];
}

export function urlset(entries: Entry[]) {
  const body = entries.map((x) => `  <url><loc>${SITE.url}${x.path}</loc><lastmod>${x.lastmod}</lastmod><changefreq>${x.changefreq}</changefreq><priority>${x.priority}</priority></url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}
export const SITEMAP_FILES = ["sitemap-pages.xml", "sitemap-local.xml", "sitemap-guides.xml"] as const;
export function sitemapIndex() {
  const body = SITEMAP_FILES.map((f) => `  <sitemap><loc>${SITE.url}/${f}</loc><lastmod>${CONTENT_DATE}</lastmod></sitemap>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</sitemapindex>\n`;
}
export const XML = { headers: { "Content-Type": "application/xml; charset=utf-8" } };
