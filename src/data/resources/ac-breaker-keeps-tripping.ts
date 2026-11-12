import type { Resource } from "../types";

export const acBreakerKeepsTripping: Resource = {
  slug: "ac-breaker-keeps-tripping",
  title: "AC Breaker Keeps Tripping: What Each Pattern Means",
  metaTitle: "AC Breaker Keeps Tripping: What It Means",
  metaDescription:
    "AC breaker tripping instantly, after a few minutes, or only on hot afternoons? Each timing points to a different fault, from a shorted compressor to a bad part.",
  category: "troubleshooting",
  quickAnswer:
    "An AC breaker that trips instantly on startup usually means a short in the compressor, fan motor or wiring. One that trips after several minutes of running points to an overheating compressor from a dirty condenser coil, a failing capacitor or low refrigerant. A breaker that trips only on 90-degree afternoons is usually a weak capacitor or a tired breaker. Reset it once; if it trips again, stop and call.",
  published: "2026-10-16",
  updated: "2026-10-16",
  readMinutes: 5,
  body: `## Why you should only reset it once

A breaker is a safety device, and it tripped because something drew more current than the wire and the equipment are rated for. A 3-ton condenser in a Westland colonial is on a 30- or 35-amp two-pole breaker; the compressor runs at about 12 to 16 amps and draws 60 to 90 amps for a fraction of a second on startup. The breaker is sized to tolerate that inrush and trip on anything sustained above its rating. One trip after a thunderstorm or a DTE outage can be a fluke, so one reset is reasonable. A second trip means the fault is real, and every reset after that sends full current into whatever is already failing. Compressors have been turned from a repair into a replacement by a homeowner resetting the breaker a dozen times on a Saturday.

Here is how to reset it properly: push the breaker firmly to Off, wait a few seconds, then push it to On. A tripped breaker often rests in a middle position and will not reset from there.

## Pattern one: it trips the instant the unit tries to start

If the breaker snaps off within a second of the contactor pulling in, there is a dead short. Three suspects, in order of how often we find them:

- **A grounded compressor.** The motor windings have shorted to the compressor shell. This is the worst case and on a system more than 12 years old it usually ends the system; see [repair or replace your air conditioner](/resources/repair-or-replace-air-conditioner/).
- **A shorted condenser fan motor.** The fan motor on top of the unit has failed windings. Cheaper than a compressor and a same-day part.
- **Chafed or wet wiring.** The whip from the disconnect to the unit has rubbed through, mice chewed insulation inside the electrical compartment, or the contactor has welded. We see mouse damage every spring in units that sat idle beside a Scio Township garage all winter.

A tech checks these with an ohmmeter at the compressor terminals and the fan motor leads, with power off, in a few minutes. There is nothing for a homeowner to do here except leave the breaker off.

## Pattern two: it trips after a few minutes of running

If the unit starts, runs for three to fifteen minutes, and then the breaker lets go, the compressor is drawing too many amps while running. That is an overheating problem, and the causes are mostly fixable.

A **dirty condenser coil** is the most common. Cottonwood, grass clippings and dryer lint pack the aluminum fins, the coil cannot reject heat, head pressure climbs, and the compressor works harder and harder until amps exceed the breaker. Shut the power off at the disconnect and look at the fins from the inside out. If they are matted, that is your problem, and rinsing the coil gently with a hose from inside the unit outward is a homeowner task.

A **weak run capacitor** also raises running amps because the compressor is operating with the wrong phase angle. The capacitor often fails gradually, so this pattern shows up before the full hum-and-no-start failure described in [AC capacitor failure signs](/resources/ac-capacitor-failure-signs/).

A **failing condenser fan motor** that runs slow leaves the coil without airflow, which produces the same overheating as a dirty coil.

**Low refrigerant** or a restriction can also push a compressor into overload, though it more often trips the compressor's internal protector than the breaker.

## Patterns three and four: hot afternoons, and the wrong breaker

**Pattern three: it trips only on the hottest afternoons.** This is the Southeast Michigan special. The system runs fine most of the summer and trips only on the three or four days a year when it is 94 outside with a dew point of 72. Several things stack up on those days: the condenser is rejecting heat into air that is already hot, the compressor is running at its highest head pressure, DTE's voltage sags during peak demand, and every start takes longer. A capacitor that is 10 percent low or a breaker that has been tripping and resetting for years and has weakened its own trip mechanism will let go under that combination.

Note the time of day and the outdoor temperature when it trips. If it is always above 90 and always mid-afternoon, the capacitor and the breaker itself are the first two things to test. A hard-start kit on an older compressor often eliminates this pattern entirely.

**Pattern four: the furnace breaker trips instead of the condenser breaker.** If the single-pole breaker for the furnace or air handler is the one tripping during cooling, the problem is indoors: a blower motor drawing high amps because the bearings are going, a wheel packed with dirt, a shorted transformer, or a condensate pump that has seized. Blower motors on 2000s subdivision furnaces in Canton and Van Buren Township are hitting the age where this is routine.

## Is it the breaker or the AC?

Breakers wear out. One that has tripped many times, one that feels loose or warm, or a 25-year-old breaker in an original panel can trip below its rating. The test is simple for a tech: clamp an ammeter on the condenser feed while it runs. If the compressor is drawing 14 amps on a 30-amp breaker and the breaker still trips, the breaker is the problem. If it is drawing 32 amps, the AC is. Replacing a breaker is an electrician's job, and it should never be replaced with a larger one to stop the tripping; the breaker size is set by the wire gauge and the maximum fuse rating on the condenser data plate.

## What to check yourself, safely

- Confirm the breaker is fully off, then on. One reset only.
- Look at the condenser coil for packed fins and debris. Rinse with a hose, power off.
- Check that the condenser has 18 to 24 inches of clearance; a fence or shrub that has grown in since 2015 is enough to cause overheating.
- Listen at startup. A loud hum with no fan spinning means a capacitor; turn it off.
- Check for a burning smell at the electrical compartment or the panel. If there is one, leave the breaker off.

Do not open the condenser electrical compartment with the disconnect pulled unless you know the capacitor holds a charge after power is off. Do not touch refrigerant lines or valves.

## When to call

Any breaker that trips twice is an [AC repair](/services/ac-repair/) call. Tell us the pattern when you book; instant trip, delayed trip or hot-afternoon trip each sends us looking in a different place and helps us bring the right parts. The electrical diagnosis on a split system takes under an hour, and capacitors, contactors and fan motors are usually on the truck. If the compressor is grounded on a 15-year-old R-22 system, we will say so and walk you through the replacement math honestly rather than sell you a compressor the system does not deserve.`,
  faqs: [
    {
      q: "Can I replace the AC breaker with a bigger one?",
      a: "No. The breaker size is set by the wire gauge and the maximum overcurrent protection listed on the condenser's data plate. A larger breaker lets a fault cook the wiring or the compressor instead of tripping.",
    },
    {
      q: "Why does my AC trip the breaker after a power outage?",
      a: "When power returns, the compressor may try to start against high head pressure before the system has equalized, drawing locked-rotor amps for longer than normal. Most units have a delay to prevent this; if yours trips every time, the capacitor is likely weak.",
    },
    {
      q: "Is a tripping breaker dangerous?",
      a: "The breaker doing its job is the safe part. Repeatedly resetting it is what causes damage, and a breaker that feels hot or smells like burning plastic needs an electrician before anything else.",
    },
    {
      q: "Could a dirty filter trip the AC breaker?",
      a: "Indirectly. A dirty filter can freeze the evaporator coil, which leads to liquid refrigerant returning to the compressor and raising its amp draw. It is more likely to trip the furnace breaker through an overworked blower.",
    },
    {
      q: "How much does a tripping-breaker diagnosis cost?",
      a: "Our dispatch fee covers the trip and diagnosis and is credited toward the repair if you approve it. The repairs themselves range from a capacitor or contactor on the small end to a compressor on the large end.",
    },
  ],
  relatedServices: ["ac-repair", "emergency-ac-repair", "ac-maintenance"],
  relatedResources: [
    "ac-capacitor-failure-signs",
    "ac-not-cooling-what-to-check-first",
    "repair-or-replace-air-conditioner",
    "ac-tune-up-checklist",
  ],
};
