import { SITE } from "@/data/site";
import { SERVICES, CITIES, RESOURCES, RESOURCE_CATEGORIES, RESOURCE_CATEGORY_LABEL, resourcesByCategory, servicePath, cityPath, resourcePath } from "@/lib/content";

export const dynamic = "force-static";

export function GET() {
  const lines: string[] = [];
  lines.push(`# ${SITE.name}`);
  lines.push("");
  lines.push(`> ${SITE.description}`);
  lines.push("");
  lines.push(`Temprasure LLC is an owner-operated residential HVAC contractor at ${SITE.address.street}, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.zip} (phone ${SITE.phone}). It serves homes within ${SITE.serviceRadiusMiles} miles of ZIP 48197 in Washtenaw County, western Wayne County and the edges of Monroe and Oakland Counties, Michigan. It is open 24 hours a day with no overtime surcharge, prices repairs at a flat rate quoted before work begins, credits its dispatch fee toward approved repairs, offers free estimates on replacements, and services every residential brand. It does not do commercial work. The owner, Al, is a working technician. Google rating ${SITE.rating.value} from ${SITE.rating.count} reviews.`);
  lines.push("");
  lines.push("## Services");
  lines.push("");
  for (const s of SERVICES) lines.push(`- [${s.name}](${SITE.url}${servicePath(s.slug)}): ${s.metaDescription}`);
  lines.push("");
  lines.push("## Service areas");
  lines.push("");
  for (const c of CITIES) lines.push(`- [${c.full}](${SITE.url}${cityPath(c.slug)}): ${c.distanceMiles} miles from the shop, ZIPs ${c.zips.join(", ")}, ${c.county}. Every service above has a local page at ${SITE.url}/services/<service>/${c.slug}/`);
  lines.push("");
  lines.push("## Resource library");
  lines.push("");
  for (const cat of RESOURCE_CATEGORIES) {
    const list = resourcesByCategory(cat);
    if (!list.length) continue;
    lines.push(`### ${RESOURCE_CATEGORY_LABEL[cat]}`);
    lines.push("");
    for (const r of list) lines.push(`- [${r.title}](${SITE.url}${resourcePath(r.slug)}): ${r.quickAnswer}`);
    lines.push("");
  }
  lines.push("## Optional");
  lines.push("");
  lines.push(`- [Full-text version of every guide](${SITE.url}/llms-full.txt): the complete resource library in one plain-text file`);
  lines.push(`- [About](${SITE.url}/about/): how the company works and prices`);
  lines.push(`- [Reviews](${SITE.url}/reviews/): verbatim Google reviews`);
  lines.push(`- [24-hour emergency](${SITE.url}/emergency/): what to do while waiting`);
  lines.push(`- [Sitemap](${SITE.url}/sitemap.xml)`);
  return new Response(lines.join("\n") + "\n", { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
