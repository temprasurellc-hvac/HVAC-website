export const SITE = {
  name: "Temprasure LLC",
  shortName: "Temprasure",
  legalName: "Temprasure LLC",
  domain: "temprasurehvac.com",
  url: "https://temprasurehvac.com",
  tagline: "Heating, cooling & water heaters for Ypsilanti homes — 24 hours a day.",
  description:
    "Temprasure LLC is a family-owned, Black-owned residential HVAC company in Ypsilanti, Michigan. Furnace, AC, heat pump, water heater, humidifier and ductwork repair, replacement and maintenance within 20 miles of 48197. Open 24 hours. Flat-rate pricing.",
  phone: "(313) 701-9471",
  phoneHref: "tel:+13137019471",
  phoneE164: "+13137019471",
  smsHref: "sms:+13137019471",
  email: "temprasurellc@gmail.com", // lead inbox for the email button; swap if the client prefers another address
  address: {
    street: "4812 Lakeridge St",
    city: "Ypsilanti",
    state: "MI",
    zip: "48197",
    county: "Washtenaw County",
  },
  geo: { lat: 42.254173, lng: -83.665298 },
  serviceRadiusMiles: 20,
  hours: "Open 24 hours, 7 days a week",
  openingHours: ["Mo-Su 00:00-24:00"],
  owner: "Al (Alfred)",
  ownerFirst: "Al",
  rating: { value: 4.2, count: 37 },
  // CID link resolves to this exact Business Profile listing (from the profile dashboard URL).
  mapsUrl: "https://www.google.com/maps?cid=8735140246865773761",
  // Opens the listing, where the "Write a review" button lives. Swap for the profile's
  // "Get more reviews" short link (g.page/r/.../review) when the client pulls it.
  reviewUrl: "https://www.google.com/maps?cid=8735140246865773761",
  socials: ["https://www.facebook.com/338402096896964", "https://www.linkedin.com/in/temprasure-llc-592a89229"],
  attributes: ["Family-owned", "Black-owned", "LGBTQ+ friendly", "Residential only"],
  founded: "", // not confirmed with client — Google reviews go back to 2019
  plusCode: "783M+MV Ypsilanti, Michigan",
  priceRange: "$$",
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || "",
} as const;

export const NAV = [
  { href: "/services/", label: "Services" },
  { href: "/service-areas/", label: "Service Areas" },
  { href: "/our-work/", label: "Our Work" },
  { href: "/resources/", label: "Resources" },
  { href: "/reviews/", label: "Reviews" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
] as const;
