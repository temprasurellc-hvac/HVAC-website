import type { City } from "../types";

export const canton: City = {
  slug: "canton",
  name: "Canton",
  full: "Canton, MI",
  kind: "township",
  county: "Wayne County",
  zips: ["48187", "48188"],
  distanceMiles: 10,
  driveMinutes: 20,
  population: "about 99,000, one of the largest townships in Michigan",
  neighborhoods: [
    "Cherry Hill Village",
    "Sunflower Village",
    "Pheasant Run",
    "Central Park",
    "Fellows Creek",
    "Glengarry Village",
    "Windridge Village",
    "Brookside",
    "Hamlet Village",
    "Pickwick Village",
    "Cambridge Village",
    "Lilley Road corridor",
  ],
  landmarks: [
    "Heritage Park",
    "the Canton Summit on the Park",
    "the Village Theater at Cherry Hill",
    "Pheasant Run Golf Club",
    "Fellows Creek Golf Club",
    "Canton Center Road's Preservation Park",
    "Ford Road's IKEA",
    "Cherry Hill School",
  ],
  gasUtility: "DTE Energy",
  electricUtility: "DTE Energy",
  eraLabel: "1980s–2010s subdivision colonials and ranches",
  about:
    "Canton is the first stop east of the Washtenaw line for us, and we reach it two ways: Michigan Avenue straight across from the shop into the south half of the township, or Ford Road out of Superior Township into the north half. Either way it is roughly twenty minutes, which puts Canton in the same bracket as most of Ann Arbor. The township was farmland and sweet-corn fields into the 1970s, then built out faster than almost anywhere in Wayne County. Sheldon Road, Canton Center and Beck Road went from gravel to five lanes in a generation, and the subdivisions filled in from Ford Road south to Michigan Avenue. Cherry Hill Village is the one planned exception, a new-urbanist pocket with front porches, alleys and the Village Theater built around the historic Cherry Hill crossroads. Heritage Park and the Summit on the Park anchor the civic center on Canton Center Road. The population is diverse, with large South Asian and Arab American communities, two-income households commuting both toward Ann Arbor and toward Dearborn, and a school district that pulls people in from across the metro area.",
  housing:
    "Canton is the most uniform housing stock in our radius, and that makes the failure patterns predictable. The bulk of the township is 1985 to 2010 colonials and split-levels on poured concrete basements, with a builder-grade 80 percent furnace in a corner of the basement and a two-and-a-half or three-ton condenser on a pad by the side door. Many of those original furnaces have already been replaced once, often with a 90-plus condensing unit vented in PVC out the rim joist, and a good share of the condensers are first-generation R-410A units from the mid-2000s. The oldest pockets, like Pheasant Run and Windridge, are late 1970s and early 1980s ranches and quad-levels, and the quad-levels in particular have a lower-level family room that never gets enough supply air. Cherry Hill Village homes from the 2000s are tighter and often have two-zone systems or a second furnace in the attic. Finished basements are the norm, so equipment ends up boxed into utility rooms sized for the original furnace, not the replacement.",
  climate:
    "Canton is flat and open, with little tree cover in the newer subdivisions, so summer sun hits west-facing second floors hard and January wind drives infiltration across the open ground south of Palmer Road. The Lower Rouge and Fellows Creek run through the middle of the township, and basements near those drains and the Tonquish Creek corridor carry more moisture. Dew points in July sit in the upper 60s, which makes a properly sized condenser matter more than raw tonnage.",
  quirks: [
    "Canton Township's building department requires a mechanical permit and a final inspection for furnace, air conditioner and water heater replacements, and they do enforce it.",
    "Most subdivisions here have homeowner association rules about condenser placement and screening, which sometimes limits where a replacement unit can go.",
    "Township water is Detroit-system water through the Great Lakes Water Authority, softer than Ypsilanti's, so water heater sediment is less of an issue than in Washtenaw County.",
    "A large number of 1990s homes have the furnace and water heater sharing a single metal B-vent, and swapping the furnace for a condensing unit leaves the water heater orphaned on an oversized chimney that needs a liner.",
    "Two-story colonials with a single system here almost always have upstairs bedrooms running five to eight degrees warmer in summer, a duct-balancing and return-air problem more than an equipment problem.",
  ],
  nearby: ["plymouth-township", "van-buren-township", "superior-township", "westland", "ypsilanti-township"],
};
