import type { Resource } from "../types";

export const acFrozenCoilCauses: Resource = {
  slug: "ac-frozen-coil-causes",
  title: "Why Your AC Coil Freezes Up (and How to Stop It Happening Again)",
  metaTitle: "AC Frozen Coil: Causes and Fixes",
  metaDescription:
    "Ice on the copper line or frost in the furnace cabinet? The six reasons an AC coil freezes in Michigan, how to thaw it safely, and which causes mean a leak.",
  category: "troubleshooting",
  quickAnswer:
    "An AC coil freezes when the evaporator drops below 32°F, which happens for two reasons: not enough warm air moving across it (dirty filter, weak blower, closed registers, dirty coil) or not enough refrigerant in it (a leak). Thaw it by turning cooling off and running the fan for two to three hours, then fix the airflow problem; if it refreezes, the charge needs to be checked.",
  published: "2026-10-16",
  updated: "2026-10-16",
  readMinutes: 5,
  body: `## What is actually freezing

The evaporator coil sits in a sheet-metal box on top of the furnace, an A-shaped or slab coil of copper tubing and aluminum fins. Refrigerant boils inside it at roughly 40°F on a normally running R-410A system, and warm house air blowing across it at 400 cubic feet per minute per ton keeps it from getting any colder than that. Pull the warm air away, or take refrigerant out of the system, and the coil temperature slides below freezing. The condensation that should be dripping into the pan freezes instead, the ice blocks more airflow, and the whole coil turns into a block within a couple of hours.

You will see it as frost on the large insulated copper line (the suction line) where it enters the furnace cabinet, water on the floor after the ice melts, or, if you pull the coil access panel, a white slab where the fins should be. From inside the house it feels like weak airflow that is cool at first and then barely moves.

## The airflow causes: filter, blower, coil

**Cause one: a loaded filter.** This is the most common cause by a wide margin, and in a Michigan basement it is often the only cause. The coil needs roughly 400 cubic feet of air per minute per ton passing over it to stay above freezing, and a filter that has gone all summer in a house with pets or a dusty remodel can cut that by half. A 16x25x1 pleated filter with a high MERV rating in a 1970s Livonia colonial with original ductwork can choke a blower that was never generous with static pressure to begin with. The coil starves for air and freezes. If the filter has not been changed since the furnace was running in March, start there. Our guide to [furnace filter sizes and MERV ratings](/resources/furnace-filter-sizes-and-merv-ratings/) explains why a MERV 13 in a 1-inch slot can cause this even when the filter looks clean.

**Cause two: the blower is not moving enough air.** If the filter is clean, the next suspect is the blower. A PSC blower motor with a failing run capacitor runs slow, and a direct-drive wheel packed with dust moves far less air than its rating. On ECM motors in 2005-and-newer subdivision furnaces, a low airflow tap or a wrong dip-switch setting from the original install can leave the coil underfed even when the motor itself is fine. Closed supply registers in unused bedrooms and crushed flex duct in a crawlspace do the same thing from the duct side. We see the duct version constantly in 1950s Ypsilanti Township ranches where a finished basement swallowed half the returns.

A quick test: with the thermostat fan set to On and cooling off, feel the airflow at the register furthest from the furnace. If it is weak with a clean filter, airflow is your problem.

**Cause three: a dirty evaporator coil.** A coil that has run fifteen summers without a cleaning builds up a felt of dust on the upstream face of the fins. That layer insulates the coil and blocks air at the same time. Homes that ran years without a filter in the slot, or with a filter that let air slip around the edges, have it worst. Cleaning an evaporator coil properly means pulling the access panel and sometimes the coil itself, so this is a tech job, and it is one of the checks in a spring [AC tune-up](/services/ac-maintenance/).

## Cause four: low refrigerant from a leak

When the system is short on charge, the pressure inside the evaporator drops and so does its boiling temperature. A coil that should be at 40°F runs at 25°F, and it ices even with perfect airflow. The giveaway is a coil that refreezes within a day of a filter change with the blower confirmed good, or ice that starts at the inlet end of the coil and on the suction line near the condenser.

Refrigerant does not get used up; if it is low, it leaked out. On a pre-2010 R-22 system in Westland or Garden City, finding and fixing the leak competes with the cost of a new system because R-22 has not been produced since 2020. On an R-410A system, a leak at a Schrader valve, a braze joint or a rubbed line is usually worth fixing. Either way, the right move is a leak search, not a top-off every spring. Read [R-22 refrigerant phase-out in Michigan](/resources/r22-refrigerant-phase-out-michigan/) if your system is from the R-22 era.

## The other causes: outdoor temperature and the metering device

**Cause five: running it when it is cool outside.** A standard split system is not designed to run in cooling below about 60°F outdoor temperature. The head pressure drops, the evaporator temperature follows, and the coil frosts. This shows up in May and September here, when someone sets the thermostat to 68 on a 55-degree night to dry the house out. A frozen coil in shoulder season with everything else healthy is often just this. Use the fan or open a window instead.

**Cause six: a stuck or restricted metering device.** Less common but real: a thermostatic expansion valve (TXV) stuck nearly closed, or a fixed orifice piston clogged with debris from a compressor that is breaking down, starves the coil the same way a leak does. The symptom pattern looks like low charge, but the gauges show high subcooling and very low suction pressure. A tech sorts this out in a few minutes; a homeowner cannot.

## How to thaw it safely

Set the thermostat mode to Off and the fan to On. Leave it for two to three hours, longer if the ice was thick. Put towels around the base of the furnace, because a fully iced coil can shed a gallon or more and the drain pan does not always catch all of it. Do not chip at the ice or pour hot water on the coil; the fins bend and the tubing can crack. Once the suction line is dry and at room temperature, change the filter, open every register, and run cooling again. Watch the suction line over the next hour. If frost returns, stop and call; the system is either low on charge or has a blower problem, and every additional freeze cycle floods liquid refrigerant back toward the compressor.

## When to stop and call

If the coil freezes twice in a week with a clean filter, if there is frost on the suction line at the outdoor unit, or if the system is from before 2010 and has needed refrigerant before, book an [AC repair](/services/ac-repair/) visit. We measure static pressure, blower amps, superheat and subcooling in one visit and tell you which of the six causes you actually have. If the fix is a leak on an old R-22 system, we will give you the honest math on [repair versus replacement](/resources/repair-or-replace-air-conditioner/) rather than just adding gas.`,
  faqs: [
    {
      q: "Can I just add refrigerant to stop the coil freezing?",
      a: "Only if the system is actually low, and even then the leak should be found and fixed. Adding refrigerant to a system with an airflow problem makes it worse by overcharging it, and topping off a leaking system every year is money spent on gas that escapes again.",
    },
    {
      q: "How long does it take a frozen AC coil to thaw?",
      a: "With the system off and the fan running, two to three hours for light frost and up to a full day for a coil that has been solid ice for a while. Running the fan speeds it up because warm house air passes over the coil continuously.",
    },
    {
      q: "Why is there water on the floor around my furnace in summer?",
      a: "A thawing coil sheds more water than the drain pan can handle, or the drain line itself is clogged and the pan is overflowing. Check for ice first, then check the condensate drain.",
    },
    {
      q: "Does a frozen coil damage the compressor?",
      a: "It can. A coil full of ice is not boiling refrigerant, so liquid returns to the compressor instead of vapor. Compressors are built to pump vapor, and repeated liquid floodback washes out the oil and damages the valves.",
    },
    {
      q: "Will a frozen coil fix itself?",
      a: "The ice will melt once the system stops running, but the cause stays. If it was a dirty filter you can fix that yourself. If it was low charge, a slow blower or a dirty coil, it will freeze again the next hot day.",
    },
  ],
  relatedServices: ["ac-repair", "ac-maintenance", "ductwork-repair"],
  relatedResources: [
    "ac-not-cooling-what-to-check-first",
    "furnace-filter-sizes-and-merv-ratings",
    "r22-refrigerant-phase-out-michigan",
    "repair-or-replace-air-conditioner",
  ],
};
