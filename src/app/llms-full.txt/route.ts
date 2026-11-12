import { SITE } from "@/data/site";
import { RESOURCES, SERVICES, RESOURCE_CATEGORY_LABEL, resourcePath, servicePath } from "@/lib/content";
import { stripMd } from "@/lib/markdown";

export const dynamic = "force-static";

export function GET() {
  const out: string[] = [`# ${SITE.name}: full resource library`, "", `> ${SITE.description}`, ""];
  out.push("## Services (summary)", "");
  for (const s of SERVICES) {
    out.push(`### ${s.name}`, `Source: ${SITE.url}${servicePath(s.slug)}`, "", ...s.intro, "");
    out.push("Questions:", ...s.faqs.map((f) => `- Q: ${f.q}\n  A: ${f.a}`), "");
  }
  out.push("## Guides", "");
  for (const r of RESOURCES) {
    out.push(`### ${r.title}`, `Category: ${RESOURCE_CATEGORY_LABEL[r.category]} | Updated: ${r.updated} | Source: ${SITE.url}${resourcePath(r.slug)}`, "", `Short answer: ${r.quickAnswer}`, "", stripMd(r.body), "");
    if (r.faqs.length) out.push("Questions:", ...r.faqs.map((f) => `- Q: ${f.q}\n  A: ${f.a}`), "");
  }
  return new Response(out.join("\n") + "\n", { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
