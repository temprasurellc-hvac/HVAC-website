import type { Resource } from "../types";

export const acNotCoolingWhatToCheckFirst: Resource = {
  slug: "ac-not-cooling-what-to-check-first",
  title: "AC Not Cooling? What to Check First Before You Call",
  metaTitle: "AC Not Cooling? What to Check First",
  metaDescription:
    "Warm air from the vents on a humid Michigan afternoon? Check the thermostat, filter, breakers, outdoor unit and condensate drain before you call for repair.",
  category: "troubleshooting",
  quickAnswer:
    "When an air conditioner runs but does not cool, check five things before calling: the thermostat is set to Cool and below room temperature, the filter is not clogged, the breakers for the furnace and outdoor unit are on, the outdoor unit is actually running, and the condensate drain is not full. Those five account for roughly half of the no-cool calls we see in Ypsilanti every summer.",
  published: "2026-10-16",
  updated: "2026-10-16",
  readMinutes: 5,
  body: `## Start at the thermostat, not the outdoor unit

It sounds obvious, but the first no-cool call we take every June is almost always a thermostat problem. Confirm the mode is set to Cool, not Heat or Off, and that the setpoint is at least three degrees below the current room reading. On a lot of Honeywell and Ecobee models the fan setting matters too: if the fan is on Auto and the thermostat is not calling, nothing happens at the vents, which people read as "dead system."

If the thermostat screen is blank, the common culprits are dead AA batteries, a tripped float switch on the furnace (more on that below) or a blown 3-amp fuse on the furnace control board. Swap the batteries first. If the screen is lit but the outdoor unit never starts, pull the thermostat off its base and look for a loose wire on the Y terminal, which is the one that tells the condenser to run. We cover the wiring side in more depth in [thermostat not working troubleshooting](/resources/thermostat-not-working-troubleshooting/).

## Pull the filter and look at the light through it

A 1-inch filter in a 1960s Westland ranch with two dogs can load up in six weeks. When the filter is packed, the blower cannot move enough air across the evaporator coil, the coil temperature drops below 32°F, and the coil ices over. From the vents that feels like weak, slightly cool air that gets warmer the longer the system runs. Hold the filter up to a window. If you cannot see light through most of it, replace it, shut the system off for two to three hours to let any ice melt, and try again.

If the filter was clean and airflow is still weak, walk the house and count closed or blocked supply registers. Furniture pushed over a floor register in a 1990s Canton colonial is enough to throw airflow off on a system that was marginal to begin with.

## Check both breakers and the outdoor disconnect

A split system needs two circuits: a 15- or 20-amp breaker for the furnace or air handler and a 30- to 40-amp two-pole breaker for the condenser. A tripped breaker does not always flip fully to Off; it often sits in a middle position. Push it firmly to Off, then back to On. Then go outside and look at the gray disconnect box on the wall next to the condenser. Pull the handle out, confirm it is seated the right way (many have an Off orientation printed on them), and push it back in. Landscapers and kids both knock these out.

If the condenser breaker trips again within a few minutes, stop resetting it. A breaker that trips repeatedly means a shorted compressor, a seized fan motor or a failed capacitor pulling locked-rotor amps, and each reset risks more damage. Read [AC breaker keeps tripping](/resources/ac-breaker-keeps-tripping/) for what each pattern means.

## Go outside and watch the condenser for a full minute

With the thermostat calling for cooling, stand at the outdoor unit. You should hear the contactor click, the fan should spin up on top, and within a few seconds you should hear the compressor hum settle into a steady drone. Put your hand over the top of the unit; the air coming out should be noticeably warmer than the air going in, often 15 to 20 degrees warmer on a hot day.

What you see tells you a lot:

- **Nothing at all, silent.** No 24-volt call reaching the contactor, a tripped breaker, or a pulled disconnect.
- **Loud hum, fan not spinning.** Almost always a failed run capacitor. Shut it off so the compressor is not sitting there drawing high amps. Details in [AC capacitor failure signs](/resources/ac-capacitor-failure-signs/).
- **Fan spinning, compressor silent.** Compressor side of the capacitor, a failed contactor pole, or a compressor on internal overload after overheating.
- **Everything running, but the discharge air feels room temperature.** Low refrigerant charge, a stuck reversing valve on a heat pump, or a compressor that has lost its valves. This one needs gauges.

Also look at the coil fins. Cottonwood fluff from the trees along the Huron River packs the fins solid by late June, and a matted coil cannot reject heat. Shut the power off at the disconnect and rinse the fins gently with a garden hose from the inside out if you can reach them. Do not use a pressure washer; it folds the aluminum fins flat.

## Check for ice on the refrigerant line

Go back inside and find the larger of the two copper lines coming out of the furnace cabinet, the one wrapped in black foam insulation. If there is frost on it, or on the coil housing itself, you have a frozen evaporator. Common causes are the clogged filter above, a blower motor running slow, a dirty coil, or a low refrigerant charge from a leak. Shut the system off and run the fan only (set the thermostat fan to On) for a couple of hours to thaw it. If it freezes again with a clean filter, the problem is airflow or charge and a tech needs to measure superheat and subcooling to tell which. We go into every cause in [AC frozen coil causes](/resources/ac-frozen-coil-causes/).

## Look in the condensate drain pan and the float switch

Humid Southeast Michigan summers mean a 3-ton system can pull 15 to 20 gallons of water out of the air in a day, and all of it leaves through a 3/4-inch PVC drain line. When algae clogs that line, water backs up into the pan, and a float switch (a small white box clipped to the drain, or an inline switch on the PVC) opens the thermostat circuit to protect your basement floor. The thermostat may go blank or the outdoor unit simply stops. Look for standing water in the pan or at the base of the furnace. If you find it, clear the line at the cleanout tee with a wet-dry vacuum, and the system will usually come back on its own once the float drops.

## When to stop and call

If you have confirmed the thermostat, filter, breakers, disconnect and drain and the system still does not cool, the remaining causes all require tools you do not have: a capacitance meter, refrigerant gauges, a clamp ammeter. Running an air conditioner that is low on charge or starting on a bad capacitor shortens the compressor's life, so leaving it off until the appointment is the better choice.

We run [AC repair](/services/ac-repair/) calls 24 hours a day with no overtime charge, and a diagnosis on a split system takes about 30 minutes. If the house is above 85 inside and someone elderly or an infant is in it, treat that as an [emergency AC repair](/services/emergency-ac-repair/) and say so when you call.`,
  faqs: [
    {
      q: "Why is my AC running but blowing warm air?",
      a: "The indoor blower runs independently of the outdoor unit, so warm air at the vents usually means the condenser is not running or the compressor is not pumping. Check the outdoor breaker and disconnect, then listen at the unit for a hum with no fan, which points to the capacitor.",
    },
    {
      q: "How long should I wait after resetting the breaker?",
      a: "Most condensers have a built-in delay of three to five minutes before the compressor restarts after power is interrupted. If nothing happens after ten minutes with the thermostat calling, the problem is not the breaker.",
    },
    {
      q: "Can a dirty filter really stop the AC from cooling?",
      a: "Yes. A clogged filter cuts airflow across the evaporator enough to freeze the coil solid, and a frozen coil passes almost no air. Change the filter, let it thaw with the system off for two or three hours, and try again.",
    },
    {
      q: "Should I keep the AC off until the technician comes?",
      a: "If the outdoor unit is humming without the fan turning, or the breaker has tripped more than once, yes. Running in either state overheats the compressor. If the system runs normally but just does not cool well, leaving it on will not hurt anything.",
    },
    {
      q: "How cold should the air from the vents be?",
      a: "On a properly charged system, supply air is typically 16 to 22 degrees cooler than the return air at the filter. On a humid 90-degree day a reading of 60 to 62 at the vent with 78 at the thermostat is normal.",
    },
  ],
  relatedServices: ["ac-repair", "emergency-ac-repair", "ac-maintenance"],
  relatedResources: [
    "ac-frozen-coil-causes",
    "ac-capacitor-failure-signs",
    "ac-breaker-keeps-tripping",
    "thermostat-not-working-troubleshooting",
  ],
};
