import type { Service } from "../types";

export const acRepair: Service = {
  slug: "ac-repair",
  name: "AC Repair",
  short: "AC Repair",
  category: "cooling",
  reviewTopic: "ac",
  keywords: [
    "ac repair",
    "air conditioning repair",
    "air conditioner repair",
    "central air repair",
    "ac not cooling",
    "ac service",
  ],
  metaTitle: "AC Repair Ypsilanti MI | Same-Day, Flat-Rate",
  metaDescription:
    "Same-day AC repair in Ypsilanti and within 20 miles. Flat-rate repair for central air that won't cool, won't start, freezes up or trips the breaker. Open 24 hours.",
  h1: "AC Repair in Ypsilanti and Southeast Michigan",
  heroLead:
    "Central air that stopped cooling, won't start, freezes over or keeps tripping the breaker, diagnosed and fixed by the owner, usually the same day you call.",
  intro: [
    "Air conditioners in this part of Michigan sit idle for seven months and then get asked to run hard for the first humid stretch of June. That is exactly when they fail, and it is exactly when every HVAC company in Washtenaw and western Wayne County is booked out a week. Temprasure runs differently. Al answers the phone himself, keeps the truck stocked with the parts that actually fail on residential systems, capacitors, contactors, fan motors, hard-start kits, refrigerant, float switches, and gets to most no-cooling calls the same day. Our reviews are full of people who called ten companies before someone finally showed up; we would rather be the first call.",
    "Our AC repair work covers every brand of split-system central air you will find in a Southeast Michigan house: Carrier, Bryant, Lennox, Trane, American Standard, Goodman, Amana, Rheem, Ruud, York, Payne, Ducane, Armstrong, Comfortmaker, the old Sears and Kenmore units, and the builder-grade equipment that went into subdivisions in the 2000s. We repair the outdoor condenser, the indoor evaporator coil, the blower that moves the air, the refrigerant circuit, the drain, the thermostat and the low-voltage wiring that ties it all together. If the compressor itself has failed, we will tell you honestly what a compressor replacement costs against a new condenser, and we will check the manufacturer's warranty status before quoting either one.",
    "Every repair starts with a real diagnosis, not a guess from the driveway. We measure static pressure, superheat and subcooling, check capacitor microfarads against the label, read amp draw on the compressor and fan, inspect the coil, and verify the thermostat is actually calling. Then we show you what we found and quote the repair as a flat rate before any work starts. The dispatch fee covers the trip and the diagnosis; if you approve the repair, that fee is credited toward the work.",
    "We also tell you when not to repair. An AC that is 18 years old, uses R-22 refrigerant and needs a compressor is not worth a large repair bill, and we will say so. An eight-year-old unit with a failed capacitor absolutely is, and we will have it running in under an hour. The goal is the cheapest path to a cool house that will stay cool, not the biggest ticket we can write.",
  ],
  signs: [
    {
      title: "Blowing warm or room-temperature air",
      text: "The blower runs but the air never gets cold. Usually a tripped condenser, a failed capacitor or contactor, or low refrigerant from a leak.",
    },
    {
      title: "Outdoor unit won't turn on",
      text: "The fan outside is silent while the inside blower runs. Often a capacitor, contactor, blown fuse in the disconnect, or a tripped breaker.",
    },
    {
      title: "Ice on the refrigerant lines or coil",
      text: "Frost on the copper line or a frozen indoor coil means restricted airflow or low refrigerant. Shut it off and call before the compressor floods.",
    },
    {
      title: "Short cycling",
      text: "The unit starts, runs a minute or two, and stops over and over. Causes range from a bad thermostat to an oversized system to a failing compressor.",
    },
    {
      title: "Breaker keeps tripping",
      text: "A hard-starting compressor, a shorted fan motor or a weak capacitor can pull enough amps to trip the AC breaker repeatedly.",
    },
    {
      title: "Water around the furnace",
      text: "A clogged condensate drain or a cracked drain pan backs water up into the basement. A float switch should have shut the system down, if it didn't, that's a problem too.",
    },
    {
      title: "Grinding, buzzing or clicking",
      text: "Buzzing at the outdoor unit usually means a contactor or capacitor; grinding means a fan motor bearing; rapid clicking points to a control or relay issue.",
    },
    {
      title: "Cooling bill jumped",
      text: "A system that runs twice as long to hold the same temperature is losing capacity. Dirty coils, low charge and failing components all show up on the DTE bill first.",
    },
  ],
  process: [
    {
      title: "You call, we answer",
      text: "Describe what the system is doing. We'll tell you whether to shut it off to protect the compressor and give you a real arrival window, not a four-hour guess.",
    },
    {
      title: "Full diagnostic, not a parts swap",
      text: "Electrical readings, capacitor test, refrigerant pressures with superheat and subcooling, coil and airflow inspection, drain check and thermostat verification.",
    },
    {
      title: "Flat-rate quote before work starts",
      text: "We show you the failed part and quote the repair as one number. No hourly clock, no surprises on the invoice.",
    },
    {
      title: "Repair from the truck when possible",
      text: "Capacitors, contactors, fan motors, hard-start kits, refrigerant and drain parts ride with us. Most repairs finish on the first visit.",
    },
    {
      title: "Verify it is actually fixed",
      text: "We run the system through a full cycle, confirm a proper temperature split across the coil and check amp draw before we pack up.",
    },
    {
      title: "Honest next steps",
      text: "If the unit is on borrowed time, we'll tell you what to budget for and when, without pressure to replace it today.",
    },
  ],
  includes: [
    "Capacitor and contactor replacement",
    "Condenser fan motor and blower motor replacement",
    "Refrigerant leak search and recharge (R-410A and R-22 where still legal)",
    "Evaporator coil repair or replacement",
    "Compressor hard-start kits and compressor replacement",
    "Condensate drain clearing, pan and float switch repair",
    "Thermostat and low-voltage wiring repair",
    "Control board, relay and transformer replacement",
    "Frozen coil diagnosis and airflow correction",
    "Disconnect, fuse and breaker-related electrical repair",
    "Coil cleaning when it is the cause of the failure",
    "Warranty lookup on the equipment before quoting",
  ],
  pricing: [
    "Temprasure charges a flat dispatch fee to come out and diagnose the system, and that fee is applied toward the repair if you approve it. Repairs are quoted as a flat rate per job, a capacitor swap is one price, a condenser fan motor is another, a refrigerant recharge is priced by the pound and the search for the leak, so the quote you approve is the invoice you pay, whether the job takes thirty minutes or three hours.",
    "Minor electrical repairs like capacitors and contactors are the least expensive calls we run and usually land in the low hundreds including the visit. Motors, coils and refrigerant work cost more and depend on the equipment. A compressor replacement on an out-of-warranty unit is the one repair that often makes a new condenser the smarter buy, and we will lay out both numbers side by side before you decide.",
    "We do not charge extra for nights, weekends or holidays. A no-cooling call on the Fourth of July is the same rate as a Tuesday morning.",
  ],
  faqs: [
    {
      q: "How fast can you get here for an AC repair?",
      a: "Most no-cooling calls inside our 20-mile radius are seen the same day, and often within a couple of hours. We are open 24 hours, so if the system fails at 9 p.m. on a 90-degree night, call, you will reach Al, not a call center.",
    },
    {
      q: "Should I turn the AC off while I wait?",
      a: "If you see ice on the lines or the outdoor unit is buzzing but the fan isn't spinning, yes, shut it off at the thermostat to protect the compressor. If it is simply blowing warm air with no ice and no strange noise, leaving it on is usually fine until we arrive.",
    },
    {
      q: "What's the most common AC repair?",
      a: "Failed run capacitors, by a wide margin. They weaken with heat and age, and the first hot stretch of summer finishes them off. Contactors with pitted contacts and clogged condensate drains are the next two most common.",
    },
    {
      q: "Do you charge for the diagnosis?",
      a: "Yes, a flat dispatch fee covers the trip and a full diagnosis. If you go ahead with the repair, that fee is credited toward the job.",
    },
    {
      q: "My system uses R-22. Can you still repair it?",
      a: "We can still repair R-22 systems, and reclaimed R-22 is still available, but it is expensive and the equipment is almost always old enough that a large repair doesn't make sense. We'll give you both the repair price and a replacement price and let you decide.",
    },
    {
      q: "Can you repair any brand?",
      a: "Yes. Residential split systems share the same basic components regardless of the name on the cabinet, and we stock universal and OEM parts for all of them.",
    },
    {
      q: "Is it worth repairing an AC that's 15 years old?",
      a: "Often, yes, if the repair is a capacitor, contactor, motor or drain issue. If it needs a compressor or a coil and the system is that old, replacement usually wins on cost over the next five years. We will show you the math either way.",
    },
    {
      q: "Do you repair air conditioners for rental properties?",
      a: "Yes. We work with a lot of landlords around Ypsilanti and Ann Arbor, can coordinate directly with tenants for access, and will send the invoice and findings to the owner.",
    },
    {
      q: "What if the repair doesn't fix it?",
      a: "We don't leave until we have verified a proper temperature split and a full run cycle. If something else surfaces afterward that is related to the original repair, call us and we come back out.",
    },
  ],
  related: ["ac-maintenance", "ac-installation", "emergency-ac-repair", "hvac-repair", "thermostat-installation"],
  resources: [
    "ac-not-cooling-what-to-check-first",
    "ac-frozen-coil-causes",
    "ac-capacitor-failure-signs",
    "repair-or-replace-air-conditioner",
    "r22-refrigerant-phase-out-michigan",
  ],
  cityIntros: [
    "When central air quits in {city}, the first question is always the same: how fast can someone get here? From our shop in Ypsilanti, {city} is roughly a {drive}-minute drive, and because Al runs the calls himself there is no dispatcher adding hours to the schedule. We stock the parts that fail most on residential air conditioners, so a {city} no-cooling call usually ends with the system running again on the first visit. Whether you are near {landmark} or out in {neighborhood}, the service is the same: a real diagnosis with gauges and a meter, a flat-rate quote before any work, and an honest word about whether the unit is worth fixing.",
    "{city} homeowners have been calling Temprasure for AC repair since the company started, and the pattern hasn't changed: the air conditioner fails on the first humid week, every larger company in {county} is booked out, and someone finally finds us. We would rather be your first call than your fourth. We cover all of {city}, from {neighborhood} across to the {landmark} side, and we treat a {zip} address like the neighbor it is, same-day service whenever humanly possible, no overtime pricing, and repairs quoted as a single flat number.",
    "There is nothing special about an air conditioner in {city}, the same capacitors, contactors, fan motors and refrigerant leaks take systems down here that take them down everywhere else. What is different is the housing, the wiring behind it, and who you can actually get on the phone. Temprasure has been repairing central air in {city} and across {county} for years, we know what the {era} around {neighborhood} tend to have hanging on the side of the house, and we show up with the parts to fix it. Call, text, or book online and Al will give you a real arrival window.",
    "A no-cooling call from {city} gets the same treatment as one from our own street in Ypsilanti: answered by a person, scheduled the same day whenever possible, and diagnosed properly before a single part is quoted. {city} is about {drive} minutes from our shop, well inside our 20-mile service radius, and we run the route often enough that we know the subdivisions, the older blocks near {landmark}, and which neighborhoods are still working with condensers that went in during the first Bush administration. AC repair in {city} is flat-rate, warrantied, and available 24 hours a day.",
    "Air conditioning repair in {city} is a big part of our summer. The calls start the first week it hits 85 with humidity, frozen coils on units that were never serviced, dead capacitors on fifteen-year-old condensers, breakers tripping on hard-starting compressors, and they run until September. Temprasure is a small, owner-operated shop, which in {city} means the person who answers the phone is the person who shows up, with a stocked truck and a flat-rate price book. We serve every {city} address from {neighborhood} to the streets around {landmark}.",
  ],
  cityAngles: [
    "A lot of the air conditioners we repair in {city} were never part of the original house. The {era} that make up much of the housing here were built for furnaces, and central air was added later, sometimes in the 1980s, sometimes last year, on top of ductwork that was sized for heating. That matters for repair because an undersized return or a long, leaky duct run starves the evaporator coil of airflow, and the symptom shows up as a frozen coil or a compressor that overheats. When we diagnose an AC in {city} we look at the air side as hard as the refrigerant side, because replacing a capacitor on a system that freezes every July does not actually fix anything.",
    "The electrical side is where {city} air conditioners surprise people. Older homes near {neighborhood} often have panels that were full before the condenser was added, so the AC shares a circuit, runs on an undersized breaker, or is fed by a disconnect with a fuse somebody replaced with the wrong size. Newer subdivisions in {city} have the opposite issue: builder-grade equipment with thin contactors and the cheapest capacitor that met spec, which fail right around year eight. We carry upgraded replacement components for both situations and fix the actual cause, not just the part that finally gave out.",
    "{city} sits on {utility} for electric service, and summer demand spikes mean voltage sags on hot afternoons, exactly when a tired compressor is trying to start. That is why so many {city} AC failures look like a dead unit when the real problem is a weak capacitor or a hard-start issue. We test capacitors under load, check voltage at the contactor, and add a hard-start kit where it genuinely helps rather than guessing. For the {era} common around {neighborhood}, we also check that the condenser pad hasn't sunk or tilted, which quietly destroys compressors over a few seasons.",
    "Humidity is the real enemy of air conditioning in {city}. Our summers are not desert-hot, but they are muggy, and a system that is low on charge or short of airflow cannot pull moisture out of the house even when it technically reaches the set temperature. That is why we check the temperature split and the condensate flow on every {city} repair call, a dry, cool house is the goal, not just a number on the thermostat. In {city} basements and crawlspaces, a clogged drain or a missing float switch also turns a small repair into water damage, so we verify the drain path before we leave.",
  ],
  cityFaqs: [
    {
      q: "How quickly can you repair an AC in {city}?",
      a: "{city} is about {drive} minutes from our shop in Ypsilanti. Most no-cooling calls are handled the same day, and in peak season we prioritize homes with no cooling over routine maintenance so nobody sits in a hot house longer than necessary.",
    },
    {
      q: "Do you charge more to come out to {city}?",
      a: "No. {city} is well inside our 20-mile service area, so the dispatch fee and flat-rate repair pricing are the same as they are for a house in Ypsilanti.",
    },
    {
      q: "What AC problems are most common in {city} homes?",
      a: "Failed capacitors and contactors lead the list, followed by frozen coils from poor airflow in older {era}, clogged condensate drains, and refrigerant leaks at the coil on systems from the 2000s.",
    },
    {
      q: "Can you repair the air conditioner at my {city} rental?",
      a: "Yes. We coordinate access with tenants, repair the system, and send the invoice and a summary of what we found to the owner or property manager.",
    },
    {
      q: "My {city} home's AC is old, repair or replace?",
      a: "If the repair is a capacitor, contactor, motor or drain, repair it. If it needs a compressor or evaporator coil and the system is 15 or more years old, replacement usually costs less over the next few summers. We'll put both numbers in front of you.",
    },
    {
      q: "Do you offer 24-hour AC repair in {city}?",
      a: "Yes. We are open 24 hours, and nights and weekends are billed at the same flat rate as weekdays. If it's a true emergency, heat-sensitive family members, no cooling in a heat wave, tell us and we will get there as fast as we can.",
    },
    {
      q: "Will the repair be warrantied?",
      a: "Yes. Parts carry the manufacturer's warranty and our labor is warrantied on every repair. If a part we installed fails, call and we come back out to {city} to make it right.",
    },
    {
      q: "Do you service the AC brands common in {city}?",
      a: "All of them, Carrier, Bryant, Lennox, Trane, Goodman, Amana, Rheem, Ruud, York, Payne, and the builder-grade units installed throughout {county}. Components are largely universal, and we stock the parts that fail.",
    },
    {
      q: "Can you also check my furnace while you're repairing the AC?",
      a: "We can do a quick look at the blower and filter since the AC shares them, and we can schedule a full furnace tune-up in the fall. Service-agreement customers get both the spring and fall visits bundled.",
    },
  ],
  cityCloses: [
    "If your air conditioning has quit in {city}, don't spend the afternoon calling around. Call or text Temprasure at the number below, tell us what the system is doing, and we will give you a straight answer on when we can be there. Flat-rate pricing, no overtime charges, and the owner on the job.",
    "Temprasure has repaired air conditioners across {county} for years, and {city} is one of the areas we are in most. Call us, book online, or send a text with a photo of the unit and we'll get you on the schedule, usually today.",
    "Cool air in {city} is one phone call away. Reach Al directly at (313) 701-9471, any hour, and get a real arrival window, a real diagnosis and a flat-rate repair you approve before the work starts.",
    "Whether you are in {neighborhood}, near {landmark} or anywhere else in {city}, we are a short drive away and ready to get your central air back online. Call, text or use the booking form, Temprasure is open 24 hours a day.",
  ],
};
