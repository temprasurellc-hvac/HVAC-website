/**
 * Shared content types. Every string field is hand-written prose.
 * Token substitution (done at render time by lib/tokens.ts):
 *   {city} {cityFull} {county} {zip} {neighborhood} {landmark} {drive} {utility} {era}
 */

export type ServiceCategory =
  | "heating"
  | "cooling"
  | "hvac"
  | "water-heater"
  | "air-quality"
  | "ductwork"
  | "plans";

export type FAQ = { q: string; a: string };
export type Step = { title: string; text: string };

export type Service = {
  slug: string;
  name: string; // "AC Repair"
  short: string; // nav/card label
  category: ServiceCategory;
  reviewTopic: "ac" | "furnace" | "water-heater" | "general" | "install";
  /** search phrases this page should own; the first is primary */
  keywords: string[];
  metaTitle: string; // <= 60 chars incl. " | Temprasure"
  metaDescription: string; // 140-160 chars
  h1: string;
  heroLead: string; // 1-2 sentences under the H1
  /** hub-page prose, 3-5 paragraphs */
  intro: string[];
  /** "signs you need this" cards, 4-8 */
  signs: Step[];
  /** how the visit goes, 4-6 steps */
  process: Step[];
  /** bullet list of what is included / checked, 6-14 */
  includes: string[];
  /** worded pricing paragraphs (no dollar figures), 2-3 */
  pricing: string[];
  /** 6-10 FAQs for the hub page */
  faqs: FAQ[];
  related: string[]; // service slugs
  resources: string[]; // resource slugs
  // ---- city-page content banks (tokens allowed) ----
  cityIntros: string[]; // >= 4 variants, 90-140 words each
  cityAngles: string[]; // >= 3 variants, 100-150 words: how this service meets {city} housing/{era}
  cityFaqs: FAQ[]; // >= 8, tokens allowed; page selects 5 by hash
  cityCloses: string[]; // >= 3 variants, 60-90 words, end with a call to action
};

export type City = {
  slug: string;
  name: string; // "Ann Arbor"
  full: string; // "Ann Arbor, MI"
  kind: "city" | "township" | "village" | "community";
  county: "Washtenaw County" | "Wayne County" | "Monroe County" | "Oakland County" | "Livingston County";
  zips: string[];
  distanceMiles: number; // from 48197 shop
  driveMinutes: number;
  population: string; // "about 123,000"
  neighborhoods: string[]; // 6-12 real neighborhoods/subdivisions/areas
  landmarks: string[]; // 4-8 real places
  gasUtility: string; // "DTE Energy" | "Consumers Energy" | "propane / no gas main in parts"
  electricUtility: string;
  eraLabel: string; // dominant housing era phrase, e.g. "1950s–70s ranches and colonials"
  /** 150-220 words: the place itself — history, layout, who lives there, what the drive in looks like */
  about: string;
  /** 120-170 words: housing stock through an HVAC lens — ages, basements/crawlspaces/slabs, additions, common systems */
  housing: string;
  /** 60-90 words: micro-climate — river valley, lake exposure, wind, tree cover, snow belt, heat island */
  climate: string;
  /** 4-6 HVAC-relevant local facts, each one sentence */
  quirks: string[];
  nearby: string[]; // 3-5 city slugs
};

export type ResourceCategory =
  | "troubleshooting"
  | "buying-guides"
  | "maintenance"
  | "costs-and-pricing"
  | "efficiency-and-rebates"
  | "michigan-homeowner"
  | "water-heaters"
  | "air-quality";

export type Resource = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: ResourceCategory;
  /** one-paragraph answer a search engine or AI can lift verbatim, 40-70 words */
  quickAnswer: string;
  /** ISO date */
  published: string;
  updated: string;
  readMinutes: number;
  /** markdown-lite body: ## headings, paragraphs, - bullets, **bold**, [text](/url/) links */
  body: string;
  faqs: FAQ[];
  relatedServices: string[];
  relatedResources: string[];
};
