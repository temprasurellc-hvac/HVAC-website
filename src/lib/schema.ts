import { SITE } from "@/data/site";
import type { FAQ } from "@/data/types";

export const ORG_ID = `${SITE.url}/#organization`;

export function orgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["HVACBusiness", "LocalBusiness"],
    "@id": ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url + "/",
    logo: `${SITE.url}/img/logo.webp`,
    image: `${SITE.url}/img/logo.webp`,
    telephone: SITE.phoneE164,
    priceRange: SITE.priceRange,
    description: SITE.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
      geoRadius: String(SITE.serviceRadiusMiles * 1609),
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating.value,
      reviewCount: SITE.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    hasMap: SITE.mapsUrl,
    sameAs: [SITE.mapsUrl, ...SITE.socials],
    knowsAbout: [
      "Furnace repair",
      "Air conditioning repair",
      "Heat pump installation",
      "Water heater replacement",
      "Whole-home humidifiers",
      "Ductwork repair",
      "HVAC maintenance plans",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url + "/",
    name: SITE.name,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
  };
}

export type Crumb = { name: string; href: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: SITE.url + c.href,
    })),
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  areaName?: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: SITE.url + opts.url,
    provider: { "@id": ORG_ID },
    areaServed: opts.areaName
      ? { "@type": "City", name: opts.areaName, containedInPlace: { "@type": "State", name: "Michigan" } }
      : { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng }, geoRadius: String(SITE.serviceRadiusMiles * 1609) },
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: { "@type": "ContactPoint", telephone: SITE.phoneE164, contactType: "customer service", availableLanguage: "en" },
    },
    hoursAvailable: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" },
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  url: string;
  published: string;
  updated: string;
  wordCount: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: SITE.url + opts.url,
    mainEntityOfPage: SITE.url + opts.url,
    datePublished: opts.published,
    dateModified: opts.updated,
    wordCount: opts.wordCount,
    author: { "@type": "Organization", "@id": ORG_ID, name: SITE.name },
    publisher: { "@id": ORG_ID },
    image: `${SITE.url}/img/og.png`,
    inLanguage: "en-US",
  };
}

export function reviewSchema(reviews: { name: string; text: string; when: string }[]) {
  return reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
    reviewBody: r.text,
    // No itemReviewed: these reviews are nested under the LocalBusiness, so the parent is the item.
  }));
}
