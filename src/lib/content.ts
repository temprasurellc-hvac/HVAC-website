import type { City, Resource, ResourceCategory, Service, ServiceCategory } from "@/data/types";
import { SERVICES } from "@/data/services";
import { CITIES } from "@/data/cities";
import { RESOURCES } from "@/data/resources";

export { SERVICES, CITIES, RESOURCES };

export const serviceBySlug = (slug: string): Service | undefined => SERVICES.find((s) => s.slug === slug);
export const cityBySlug = (slug: string): City | undefined => CITIES.find((c) => c.slug === slug);
export const resourceBySlug = (slug: string): Resource | undefined => RESOURCES.find((r) => r.slug === slug);

export const CATEGORY_LABEL: Record<ServiceCategory, string> = {
  heating: "Heating",
  cooling: "Cooling",
  hvac: "HVAC systems",
  "water-heater": "Water heaters",
  "air-quality": "Indoor air",
  ductwork: "Ductwork",
  plans: "Plans & inspections",
};

export const CATEGORY_ORDER: ServiceCategory[] = ["cooling", "heating", "hvac", "water-heater", "air-quality", "ductwork", "plans"];

export const RESOURCE_CATEGORY_LABEL: Record<ResourceCategory, string> = {
  troubleshooting: "Troubleshooting",
  "buying-guides": "Buying guides",
  maintenance: "Maintenance",
  "costs-and-pricing": "Costs & pricing",
  "efficiency-and-rebates": "Efficiency & rebates",
  "michigan-homeowner": "Michigan homeowner",
  "water-heaters": "Water heaters",
  "air-quality": "Indoor air & comfort",
};

export const RESOURCE_CATEGORY_DESC: Record<ResourceCategory, string> = {
  troubleshooting: "What to check before you call, what the symptoms mean, and when to stop and get a technician out.",
  "buying-guides": "Repair-or-replace math, sizing, efficiency ratings, equipment tiers and the honest trade-offs for Michigan homes.",
  maintenance: "Season-by-season checklists, filter guidance, and the small habits that keep equipment running for 20 years.",
  "costs-and-pricing": "Typical market pricing in Washtenaw and western Wayne County, what drives the number, and how flat-rate pricing works.",
  "efficiency-and-rebates": "DTE and Consumers Energy rebates, federal tax credits, and practical ways to cut heating and cooling bills.",
  "michigan-homeowner": "Refrigerant changes, permits, carbon monoxide, Michigan basements, and how long equipment really lasts here.",
  "water-heaters": "Leaks, pilot lights, lifespan, temperature settings and when a tank is done.",
  "air-quality": "Winter humidity, static, dust, and the upstairs-hot-downstairs-cold problem in two-story Michigan homes.",
};

export const RESOURCE_CATEGORIES = Object.keys(RESOURCE_CATEGORY_LABEL) as ResourceCategory[];

export const servicesByCategory = (cat: ServiceCategory) => SERVICES.filter((s) => s.category === cat);
export const resourcesByCategory = (cat: ResourceCategory) => RESOURCES.filter((r) => r.category === cat);

export const citiesByCounty = () => {
  const map = new Map<string, City[]>();
  for (const c of CITIES) {
    const arr = map.get(c.county) ?? [];
    arr.push(c);
    map.set(c.county, arr);
  }
  return [...map.entries()].sort((a, b) => b[1].length - a[1].length);
};

export const serviceCityPath = (s: string, c: string) => `/services/${s}/${c}/`;
export const servicePath = (s: string) => `/services/${s}/`;
export const cityPath = (c: string) => `/service-areas/${c}/`;
export const resourcePath = (r: string) => `/resources/${r}/`;
export const resourceCatPath = (c: string) => `/resources/${c}/`;

/** Open Graph block for a page. Child openGraph replaces the layout's, so every page must restate the image. */
export function og(title: string, description: string, path: string, type: "website" | "article" = "website") {
  return {
    type, title, description, url: path, siteName: "Temprasure", locale: "en_US",
    images: [{ url: "/img/og.png", width: 1200, height: 630, alt: "Temprasure LLC" }],
  };
}
/** Clamp a meta description to Google's visible length. */
export function metaClamp(s: string, max = 158) {
  return s.length <= max ? s : s.slice(0, max - 1).replace(/\s\S*$/, "") + "…";
}
