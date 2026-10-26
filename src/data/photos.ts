export type Photo = {
  file: string; // basename in /img/work/, without extension
  w: number;
  h: number;
  alt: string;
  caption: string;
  tags: ("ac" | "furnace" | "water-heater" | "install" | "coil" | "crew" | "before-after" | "package-unit" | "ductwork")[];
  services: string[]; // service slugs this photo belongs on
};

export const PHOTOS: Photo[] = [
  {
    file: "ac-lennox-to-guardian-before-after", w: 1400, h: 1400,
    alt: "Before and after: a faded Lennox condenser replaced with a new Guardian air conditioner beside a tan-sided house",
    caption: "A tired Lennox condenser swapped for a new Guardian unit, gauges still on while we verified the charge.",
    tags: ["ac", "install", "before-after"],
    services: ["ac-installation", "ac-repair", "hvac-installation"],
  },
  {
    file: "water-heater-kenmore-before-after", w: 1400, h: 1400,
    alt: "Before and after of a 40-gallon gas water heater replacement with new copper and a new gas drip leg",
    caption: "A leaking 40-gallon tank out, a new tank in, with fresh copper and a proper gas drip leg.",
    tags: ["water-heater", "install", "before-after"],
    services: ["water-heater-installation", "water-heater-repair"],
  },
  {
    file: "old-arcoaire-furnace-collage", w: 1400, h: 1400,
    alt: "Three views of an old Arcoaire gas furnace before replacement, with the Temprasure logo",
    caption: "The old Arcoaire furnace, photographed before we pulled it. The new one is a few photos down.",
    tags: ["furnace", "before-after"],
    services: ["furnace-installation", "furnace-repair"],
  },
  {
    file: "guardian-furnace-install-ductwork", w: 1400, h: 1867,
    alt: "New Guardian gas furnace installed in a basement with sealed sheet-metal plenum and new flue",
    caption: "A new Guardian furnace in a tight Ypsilanti-area basement, plenum sealed with foil tape and a new flue connection.",
    tags: ["furnace", "install", "ductwork"],
    services: ["furnace-installation", "hvac-installation", "ductwork-repair"],
  },
  {
    file: "evaporator-coil-old-vs-new", w: 1400, h: 1400,
    alt: "An old corroded evaporator coil next to a brand-new coil with a TXV",
    caption: "A corroded evaporator coil that had been leaking refrigerant, beside its replacement with a new TXV.",
    tags: ["coil", "ac", "before-after"],
    services: ["ac-repair", "ac-installation", "hvac-repair"],
  },
  {
    file: "al-package-unit-mobile-home", w: 1400, h: 1867,
    alt: "Al from Temprasure in a company jacket servicing a package heating and cooling unit on a manufactured home",
    caption: "Al working on a package unit at a manufactured home. We service these across Washtenaw and Wayne County.",
    tags: ["crew", "package-unit"],
    services: ["hvac-repair", "heating-repair", "hvac-maintenance"],
  },
  {
    file: "old-lennox-furnace-inducer", w: 1400, h: 1867,
    alt: "An older Lennox furnace with the panel off, showing the inducer motor, gas valve and control board",
    caption: "An older Lennox furnace opened up for diagnosis: inducer, gas valve and board all exposed.",
    tags: ["furnace"],
    services: ["furnace-repair", "heating-repair", "furnace-maintenance", "emergency-heating-repair"],
  },
  {
    file: "rheem-water-heater-install", w: 1400, h: 1400,
    alt: "A new Rheem Performance gas water heater installed in a basement, shown from three angles",
    caption: "A new Rheem Performance gas tank installed and venting correctly into the existing flue.",
    tags: ["water-heater", "install"],
    services: ["water-heater-installation", "water-heater-repair"],
  },
  {
    file: "al-on-deck-package-unit", w: 1400, h: 1867,
    alt: "Al from Temprasure on a wooden deck with the panel open on a package unit",
    caption: "On the deck of a manufactured home, panel off, checking the blower and controls.",
    tags: ["crew", "package-unit"],
    services: ["hvac-repair", "hvac-maintenance", "heating-repair"],
  },
  {
    file: "runtru-condenser-on-pad", w: 1400, h: 1867,
    alt: "A new RunTru by Trane air conditioning condenser on a composite pad beside white vinyl siding",
    caption: "A new RunTru condenser on a level composite pad, with a new disconnect and whip.",
    tags: ["ac", "install"],
    services: ["ac-installation", "hvac-installation", "ac-maintenance"],
  },
  {
    file: "lennox-high-efficiency-furnace-ductwork", w: 800, h: 1440,
    alt: "A Lennox high-efficiency furnace with PVC intake and exhaust and new sheet-metal supply ductwork in a block basement",
    caption: "A high-efficiency Lennox furnace with PVC venting and new sheet-metal supply trunk fabricated to fit.",
    tags: ["furnace", "install", "ductwork"],
    services: ["furnace-installation", "ductwork-replacement", "hvac-installation", "ductwork-repair"],
  },
  {
    file: "new-guardian-furnace-collage", w: 1400, h: 1400,
    alt: "Four views of a newly installed Guardian gas furnace with sealed plenum, labeled New Furnace",
    caption: "The replacement for the old Arcoaire: a new Guardian furnace with the plenum resealed.",
    tags: ["furnace", "install", "before-after"],
    services: ["furnace-installation", "heating-repair"],
  },
  {
    file: "heat-exchanger-tubes", w: 1400, h: 1867,
    alt: "Close-up of furnace heat exchanger tubes during an inspection",
    caption: "Heat exchanger tubes under inspection. This is the part we check on every furnace call.",
    tags: ["furnace"],
    services: ["furnace-maintenance", "furnace-repair", "new-home-hvac-inspection", "service-agreements"],
  },
  {
    file: "goodman-furnace-rheem-water-heater", w: 800, h: 800,
    alt: "A Goodman furnace and a strapped Rheem water heater installed side by side in a utility room",
    caption: "A Goodman furnace and a Rheem water heater installed together, tank strapped and gas run in new flex.",
    tags: ["furnace", "water-heater", "install"],
    services: ["hvac-installation", "water-heater-installation", "furnace-installation"],
  },
  {
    file: "al-package-unit-side", w: 1400, h: 1867,
    alt: "Al from Temprasure reaching into an open package unit on a manufactured home",
    caption: "Checking the blower compartment on a package unit.",
    tags: ["crew", "package-unit"],
    services: ["hvac-maintenance", "heating-repair"],
  },
  {
    file: "al-package-unit-panel-customer", w: 1400, h: 1867,
    alt: "Al from Temprasure lifting a panel off a package unit while the homeowner watches from the deck",
    caption: "Walking a homeowner through what we found. We explain the problem before we quote it.",
    tags: ["crew", "package-unit"],
    services: ["hvac-repair", "emergency-heating-repair", "emergency-ac-repair"],
  },
];

export const photosFor = (serviceSlug: string, n = 2): Photo[] => PHOTOS.filter((p) => p.services.includes(serviceSlug)).slice(0, n);
export const CREW_PHOTOS = PHOTOS.filter((p) => p.tags.includes("crew"));
export const BEFORE_AFTER = PHOTOS.filter((p) => p.tags.includes("before-after"));
export const src = (p: Photo, small = false) => `/img/work/${p.file}${small ? "-sm" : ""}.webp`;
