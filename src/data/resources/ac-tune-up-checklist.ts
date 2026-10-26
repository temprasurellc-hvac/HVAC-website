import type { Resource } from "../types";

export const acTuneUpChecklist: Resource = {
  slug: "ac-tune-up-checklist",
  title: "AC Tune-Up Checklist: Every Step of a Proper Spring Service",
  metaTitle: "AC Tune-Up Checklist: What a Spring Service Covers",
  metaDescription:
    "What a real central air tune-up includes: coil cleaning, capacitor test, charge by superheat or subcooling, 16-22°F temperature split, drain, amp draws.",
  category: "maintenance",
  quickAnswer:
    "A complete AC tune-up includes washing the outdoor coil, testing the capacitor against its microfarad rating, checking refrigerant charge by superheat or subcooling rather than just pressure, measuring the temperature split across the indoor coil (16 to 22°F is normal), clearing the condensate drain, inspecting the contactor, and recording compressor and fan amp draws. Plan on about an hour.",
  published: "2026-10-16",
  updated: "2026-10-16",
  readMinutes: 5,
  body: `## What separates a tune-up from a hose-down

Plenty of spring "AC specials" amount to spraying the outdoor unit with a garden hose and glancing at the thermostat. That is not useless, but it is not maintenance. The purpose of a tune-up is to find the part that is about to fail in July and to confirm the system is actually moving the heat it is rated for. Both of those require measurements. Here is what a proper [AC maintenance](/services/ac-maintenance/) visit covers on a split-system central air conditioner, which is what nearly every house between Ypsilanti and Livonia has.

## Outdoor unit (condenser)

- **Power off, panel open, visual inspection.** We look for chewed wiring, which is a real thing in Augusta Township and the rural edges of Sumpter where mice winter in condensers, as well as scorched contactor terminals and a bulged capacitor.
- **Capacitor test.** The dual-run capacitor is measured on a meter and compared to the label rating. Anything more than about 6 percent low gets replaced that day, because a weak capacitor is the most common reason a system fails to start on the first 90-degree afternoon. The whole story is in [AC capacitor failure signs](/resources/ac-capacitor-failure-signs/).
- **Contactor.** The contacts should be smooth. Pitted or welded contacts mean the compressor is either chattering on start or cannot shut off. Either one is a replacement.
- **Coil cleaning.** Cottonwood is the enemy in May and June near the Huron River and along the tree-lined streets of older Ann Arbor and Ypsilanti neighborhoods. The coil gets rinsed from the inside out with a proper coil cleaner, not just hosed from the outside, which packs the debris deeper.
- **Fan motor.** Amp draw against the plate rating, blade condition, and whether the motor bearings have play. A fan motor drawing high amps on a hot day is a fan motor that quits in August.
- **Compressor amps.** Running amps and start amps are logged. A compressor pulling noticeably higher than last year, with a clean coil and correct charge, is telling you something.
- **Disconnect and wiring.** The outdoor disconnect, the whip and the ground are checked for corrosion and tightness.
- **Level and clearance.** A condenser that has sunk on one corner of its pad, common on clay soil in Van Buren Township, strains the refrigerant lines and the compressor mounts. We also want 18 to 24 inches of clear space around it, which means trimming the hostas.

## Refrigerant charge, done correctly

A gauge reading alone does not tell you whether a system is properly charged. We measure superheat on fixed-orifice systems and subcooling on systems with a thermostatic expansion valve, along with outdoor temperature, indoor wet-bulb and line temperatures. Those numbers tell us whether the charge is right, whether the metering device is working, and whether there is a restriction.

If the charge is low, there is a leak. Refrigerant does not get used up. On an R-22 system from before 2010, adding refrigerant is expensive and temporary; on an R-410A system it is cheaper but still only makes sense if the leak is found and fixed. We do not "top off" a system every spring and call that maintenance.

The readings also need context. A system checked at 9 a.m. on a 62-degree morning in early May will show different numbers than the same system at 3 p.m. in July, and a tech who does not record the outdoor temperature and indoor wet-bulb alongside the pressures has nothing to compare next year. We write all of it down. On a two-stage or variable-speed condenser, the charge is checked with the compressor running at full capacity, which on some models means putting the unit into a test mode from the thermostat or the control board rather than just turning the setpoint down.

## Indoor unit (evaporator coil and blower)

- **Temperature split.** Return air temperature minus supply air temperature, measured after the system has run 15 minutes. On a humid Michigan day expect 16 to 22°F. A split under 14 suggests low charge, a dirty coil or too much airflow; a split over 24 usually means restricted airflow, which is the first step toward a [frozen coil](/resources/ac-frozen-coil-causes/).
- **Evaporator coil inspection.** Where the coil is accessible we look for dirt matting on the fins and for the greenish oily residue that marks a leak at a U-bend.
- **Condensate drain.** The drain line gets flushed, the trap cleared and the float switch tested. In a finished basement in Canton or Plymouth, a backed-up drain is a flooring claim, not just a puddle.
- **Blower.** Wheel cleanliness, amp draw, and on variable-speed ECM blowers, confirmation the cooling speed tap or profile is set correctly. A blower left on the furnace's heating speed in cooling moves too little air for the coil.
- **Filter.** Checked and replaced. A 1-inch pleated filter at MERV 8 to 11 is the right range for most homes here; higher ratings in a 1-inch slot choke airflow.
- **Insulation on the suction line.** The foam on the big copper line rots in sunlight. Where it is gone, the line sweats and loses capacity. We replace missing sections.

## Thermostat and controls

The thermostat gets a cooling call and we watch the sequence: indoor blower, contactor pull-in outside, compressor and fan start. We check the thermostat's cycle rate setting and, on smart thermostats, confirm the wiring and the common wire are solid. A loose C wire on a Wi-Fi thermostat produces random reboots that look like a control board problem and are not.

We also look at the low-voltage wiring where it leaves the house and runs along the ground to the condenser. The 18-gauge thermostat cable is often stapled to the siding in the sun or lying in the mulch bed, and after 15 Michigan winters the jacket cracks and the conductors corrode. A string trimmer takes out more of them every May than any other cause. A nicked wire shorting intermittently blows the 3-amp fuse on the furnace board and shuts down both heating and cooling, and it is a frustrating fault to find in August if nobody looked in April.

## What you should see on the report

By the end you should have numbers: capacitor microfarads versus rating, compressor and fan amps, superheat or subcooling, temperature split, static pressure if we measured it, and a note on the coil condition. When something is marginal, we tell you what it is, what it would cost to replace now under flat-rate pricing, and what the consequence is if you wait. On a 20-year-old R-22 system, that conversation is often "do not put money in this; let's talk about [AC installation](/services/ac-installation/) before next summer," and on a 10-year-old system it is usually "replace this capacitor and you are fine."

## When to book it

April and May, before the first hot stretch. Once dew points hit 70 in late June, every shop in Washtenaw County is running no-cool calls and tune-ups get pushed. [Service agreement](/services/service-agreements/) customers are scheduled automatically each spring, and the visit doubles as the inspection the manufacturer's warranty expects.`,
  faqs: [
    {
      q: "What temperature should the air from my vents be?",
      a: "Measure the difference, not the absolute number. Supply air should be 16 to 22°F cooler than return air on a typical humid day. If your return is 76, supply around 56 to 60 is normal.",
    },
    {
      q: "Does a tune-up include adding refrigerant?",
      a: "Not as a routine item. A correctly operating system never needs refrigerant added. If the charge is low there is a leak, and we discuss finding and repairing it rather than topping off every spring.",
    },
    {
      q: "Should I run the AC before the tune-up?",
      a: "Yes, if the outdoor temperature is above about 60°F. Refrigerant readings are not meaningful on a cold day, and we need the system at steady state to measure the split. In early April we sometimes reschedule for that reason.",
    },
    {
      q: "Can I clean the outdoor coil myself?",
      a: "You can rinse it gently with a hose from the inside out with the power off at the disconnect. Avoid pressure washers, which fold the fins. The capacitor test, charge check and amp readings still need a tech.",
    },
    {
      q: "What is a normal amount of condensate?",
      a: "On a humid July day a 3-ton system can pull 5 to 20 gallons of water out of the air. That is why the drain line matters so much and why a clogged one floods a basement quickly.",
    },
    {
      q: "Is a tune-up worth it on a system that is working fine?",
      a: "That is exactly when to do it. The point is to catch the capacitor at 8 percent low and the contactor that is pitting before either one strands you during a heat wave.",
    },
  ],
  relatedServices: ["ac-maintenance", "ac-repair", "service-agreements"],
  relatedResources: [
    "prepare-ac-for-summer",
    "ac-capacitor-failure-signs",
    "ac-frozen-coil-causes",
    "ac-not-cooling-what-to-check-first",
  ],
};
