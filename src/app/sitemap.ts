import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";
import { SERVICES, CITIES, RESOURCES, RESOURCE_CATEGORIES, servicePath, cityPath, serviceCityPath, resourcePath, resourceCatPath } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // A fixed content date, not the build time: Google ignores lastmod when every URL changes on every deploy.
  // Bump CONTENT_DATE when page content actually changes; guides use their own updated date.
  const CONTENT_DATE = new Date("2026-10-21");
  const u = (p: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly", lastModified: Date = CONTENT_DATE) => ({ url: SITE.url + p, lastModified, changeFrequency, priority });
  return [
    u("/", 1, "weekly"),
    u("/services/", 0.9, "weekly"),
    u("/service-areas/", 0.8, "weekly"),
    u("/resources/", 0.8, "weekly"),
    u("/emergency/", 0.9, "monthly"),
    u("/about/", 0.6),
    u("/our-work/", 0.7),
    u("/reviews/", 0.7),
    u("/contact/", 0.7),
    ...SERVICES.map((s) => u(servicePath(s.slug), 0.9, "monthly")),
    ...CITIES.map((c) => u(cityPath(c.slug), 0.7, "monthly")),
    ...SERVICES.flatMap((s) => CITIES.map((c) => u(serviceCityPath(s.slug, c.slug), 0.6, "monthly"))),
    ...RESOURCE_CATEGORIES.map((c) => u(resourceCatPath(c), 0.6, "weekly")),
    ...RESOURCES.map((r) => u(resourcePath(r.slug), 0.7, "monthly", new Date(r.updated))),
  ];
}
