import type { Resource } from "../types";

export const acCapacitorFailureSigns: Resource = {
  slug: "ac-capacitor-failure-signs",
  title: "AC Capacitor Failure: Signs, Causes and What It Costs to Fix",
  metaTitle: "AC Capacitor Failure Signs & Repair Cost",
  metaDescription:
    "Humming outdoor unit, fan that won't spin, breaker tripping on hot afternoons: how to spot a failed AC capacitor, why they die in Michigan summers, and what the repair costs.",
  category: "troubleshooting",
  quickAnswer:
    "A failed AC capacitor usually shows up as an outdoor unit that hums but won't start, a condenser fan that only spins if you push it, or a compressor that struggles to start on hot afternoons. It is the single most common air conditioning repair in Southeast Michigan and one of the least expensive, typically fixed on the first visit.",
  published: "2026-10-15",
  updated: "2026-10-15",
  readMinutes: 4,
  body: `## What the capacitor actually does

A split-system air conditioner has two motors outside, the compressor and the condenser fan, and both need a jolt of stored electrical energy to get spinning and a steady phase shift to keep running efficiently. That is the capacitor's job. On most residential condensers you will find one dual-run capacitor, a silver can about the size of a soda can with three terminals marked C, HERM and FAN, mounted inside the electrical compartment. Some units use two separate capacitors, and some older or hard-starting compressors add a start capacitor with a potential relay.

The can holds a rating in microfarads, written like 45/5 µF, with a tolerance of plus or minus 5 or 6 percent. Once the measured value drifts more than that below the label, the motor it feeds starts hard, draws more amps and runs hot. Below a certain point it simply will not start at all.

## The signs, in the order homeowners usually notice them

- **Humming from the outdoor unit with no fan.** The contactor pulls in, you hear a 60-cycle hum, and nothing moves. That is the textbook dead capacitor.
- **The fan spins if you give it a push.** If you can start the condenser fan with a stick through the grille and it keeps running, the FAN side of the capacitor is gone. Do not make a habit of this; the compressor is still starting on a weak capacitor.
- **AC runs but the house never gets cold.** Fan spinning, compressor silent. The HERM side has failed and the compressor is not starting, so the system is just moving warm air.
- **Breaker trips on hot afternoons.** A compressor starting on a weak capacitor can draw locked-rotor amps for too long. On a 95-degree day with DTE voltage sagging, that is enough to trip a 30-amp breaker. See [AC breaker keeps tripping](/resources/ac-breaker-keeps-tripping/) for the other causes.
- **Clicking at the unit every few minutes.** The compressor tries to start, fails, and the internal overload opens and resets. Each attempt is hard on the windings.
- **A bulged or leaking can.** The top of the capacitor should be flat. A domed top or oily residue around the terminals means it has already failed or is about to.

## Why they die in Michigan summers

Capacitors are rated for a surface temperature, often 70°C, and a condenser sitting on the south side of a brick house in Canton or Westland in July sees that and more inside the electrical compartment. Heat is the killer. Add the fact that most systems in our area sit idle from October to May and then get asked for 12-hour run days the first humid week of June, and you get a predictable wave of failures every year. Power quality matters too; the voltage sags and quick restarts after a summer storm stress a capacitor far more than steady operation.

Age is the other factor. A builder-grade capacitor from a 2008 subdivision install is on borrowed time by year eight to ten, and the cheap units that went into many Washtenaw and Wayne County subdivisions during the mid-2000s building boom are exactly the ones we replace most. Better-quality replacement capacitors with a higher temperature rating last noticeably longer.

## Can you test it yourself?

You can look for the visual signs safely with the power off at the disconnect. Actually measuring the capacitor requires a multimeter with a capacitance setting and discharging the can first, because it holds a charge after the power is cut. If you are not comfortable with that, do not open the panel. A tech with the right meter can test it under load in a couple of minutes and will also check the contactor, the fan motor amp draw and the compressor start amps, because a capacitor that failed early often did so because something else is pulling it down.

## What the repair involves and what it costs

Replacing a run capacitor is one of the quickest repairs in HVAC: power off, discharge, photograph the wiring, swap the can for one with the same microfarad and voltage rating or higher, restore power and confirm start amps and running amps are back in range. We keep the common sizes on the truck, so it is almost always a same-visit fix.

For typical market pricing in the Ypsilanti and Ann Arbor area, a capacitor replacement including the service call generally lands in the low-to-mid hundreds. The part itself is inexpensive; most of the cost is the trip and the diagnosis. That is why the price varies more with who you call than with the brand of your system. Our own [AC repair](/services/ac-repair/) pricing is flat-rate and quoted before the work starts.

## What a failed capacitor can take down with it

Running a compressor on a weak capacitor for weeks shortens its life, and a compressor is the one component that makes a 15-year-old system not worth repairing. That is the real reason to act on a humming unit quickly. If your system is older and the capacitor has already been replaced once, it is worth reading [repair or replace your air conditioner](/resources/repair-or-replace-air-conditioner/) before the next failure makes the decision for you.

## Preventing the next one

A spring [AC tune-up](/services/ac-maintenance/) catches a drifting capacitor before it strands you. We measure the microfarads against the label and replace anything more than about 6 percent low. Keeping the condenser coil clean lowers the compartment temperature, and a hard-start kit on an older compressor takes the starting load off the run capacitor. Service-agreement customers get this checked every spring as part of the visit.`,
  faqs: [
    {
      q: "How long does an AC capacitor last?",
      a: "Most run capacitors last 8 to 15 years. Heat, voltage sags and cheap original parts push that toward the short end; a quality replacement with a higher temperature rating pushes it toward the long end.",
    },
    {
      q: "Can I run my AC with a bad capacitor?",
      a: "If the fan or compressor is not starting, no. Running the system in that state overheats the motor that is not starting and can take out the compressor. Shut it off and call for repair.",
    },
    {
      q: "Is a capacitor covered under warranty?",
      a: "On systems under 5 to 10 years old, the manufacturer's parts warranty usually covers the capacitor itself, but not the labor to replace it. We check the warranty status before quoting.",
    },
    {
      q: "Does a bad capacitor make the AC blow warm air?",
      a: "Yes, when the compressor side of the capacitor fails. The indoor blower and sometimes the outdoor fan keep running, but with no compressor there is no cooling, so the vents blow room-temperature air.",
    },
    {
      q: "What's the difference between a run capacitor and a start capacitor?",
      a: "The run capacitor stays in the circuit the entire time the motor runs. A start capacitor delivers a larger boost only during startup and drops out via a relay. Most residential systems have only a dual-run capacitor; start capacitors are added as hard-start kits on compressors that struggle.",
    },
  ],
  relatedServices: ["ac-repair", "ac-maintenance", "emergency-ac-repair"],
  relatedResources: [
    "ac-not-cooling-what-to-check-first",
    "ac-breaker-keeps-tripping",
    "repair-or-replace-air-conditioner",
    "ac-tune-up-checklist",
  ],
};
