import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/thank-you/"] },
      // AI crawlers are welcome; the resource library is meant to be cited.
      { userAgent: ["GPTBot", "ChatGPT-User", "OAI-SearchBot", "ClaudeBot", "Claude-Web", "anthropic-ai", "PerplexityBot", "Google-Extended", "Applebot-Extended", "Bytespider", "CCBot", "Amazonbot", "meta-externalagent"], allow: "/" },
    ],
    sitemap: [`${SITE.url}/sitemap_index.xml`, `${SITE.url}/sitemap.xml`],
    host: SITE.url,
  };
}
