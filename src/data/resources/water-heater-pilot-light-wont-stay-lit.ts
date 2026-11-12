import type { Resource } from "../types";

export const waterHeaterPilotLightWontStayLit: Resource = {
  slug: "water-heater-pilot-light-wont-stay-lit",
  title: "Water Heater Pilot Light Won't Stay Lit: Thermocouples, Vapor Sensors and What's Safe to Try",
  metaTitle: "Water Heater Pilot Light Won't Stay Lit: Causes",
  metaDescription:
    "Pilot lights, then dies when you let go? Usually a thermocouple, dirty pilot, tripped vapor sensor or draft problem. What each means and what's safe to try.",
  category: "water-heaters",
  quickAnswer:
    "A water heater pilot that lights but goes out when you release the control knob almost always has a failed or dirty thermocouple, the safety sensor that proves the pilot flame is present. On units built after 2003, a tripped flammable-vapor sensor or a clogged air screen under the tank can produce the same symptom. Relighting is safe to try once; repeated failures need a technician.",
  published: "2026-10-16",
  updated: "2026-10-16",
  readMinutes: 5,
  body: `## How a standing pilot is supposed to work

Most atmospheric gas water heaters in Southeast Michigan basements have a standing pilot, a small flame that burns all the time at the base of the tank and lights the main burner when the thermostat calls. The gas control valve on the front of the tank will not let gas flow to the pilot or burner unless it has proof the pilot is lit. That proof comes from the thermocouple, a copper-tipped rod sitting in the pilot flame that generates a tiny voltage when hot. The voltage holds open a magnetic valve inside the gas control. Hold the knob down when lighting and you are manually holding that valve open until the thermocouple heats up and takes over, which takes 30 to 60 seconds.

When the pilot dies the moment you let go, the gas control did not receive enough voltage to hold the valve. Either the thermocouple is not producing it, the flame is not heating the thermocouple, or the control valve is not responding to it.

## Reading the symptom

- **Lights, holds while the knob is down, dies when released.** Thermocouple, nine times out of ten. Either it is failed, the tip is sooted, or it has shifted out of the flame.
- **Pilot flame is small, yellow or lazy instead of a sharp blue cone.** Dirty pilot orifice or restricted combustion air. The flame is not hot enough to drive the thermocouple.
- **Will not light at all, no gas smell at the pilot.** Gas control, a tripped vapor sensor on a sealed-combustion unit, or no gas supply.
- **Lights and runs, then goes out hours or days later.** Drafts, a failing thermocouple that works when fresh and weakens as it heats, a venting problem pulling air back down the flue, or a vapor sensor on a unit near a lawn mower or paint cans.
- **Status light on the gas control is flashing.** Newer electronic gas valves on standing-pilot units and all FVIR models with a status LED are telling you the fault code. The label on the valve decodes it.

## The flammable-vapor sensor

Since 2003, residential gas water heaters have been built as Flammable Vapor Ignition Resistant units. The combustion chamber is sealed from the room, air enters through a screen at the base, and a flame arrestor plate keeps any ignition inside the chamber. Many FVIR designs also include a thermal sensor that trips if the chamber overheats, which can happen if vapors from gasoline, paint thinner or a leaking mower in the same basement ignite, or simply if the air screen clogs with dust and lint and the chamber runs hot.

A tripped vapor sensor locks the gas valve out. On some brands it is a one-time thermal fuse that has to be replaced; on others the gas control can be reset. The symptom from the homeowner's side is a pilot that will not light or will not stay lit, which is why people assume thermocouple and swap it twice before anyone looks at the screen. If the water heater sits near the garage door in a Canton or Westland ranch, next to the gas cans and the snowblower, the vapor sensor is the first suspect. If the unit is in a dusty Michigan basement with a furnace that has not had a filter change in a year, the screen is the first suspect.

## What is safe to try yourself

Relighting the pilot by the instructions on the tank's label is safe and is the first thing to do. Turn the control to Pilot, hold the knob down, press the piezo igniter, and keep holding for a full minute after the pilot lights before releasing. If it dies, try once more. A thermocouple that has been cold for days sometimes needs the second attempt. Do not keep trying beyond that; every failed attempt lets a little gas into the chamber.

Look at the air intake screen at the base of the tank with a flashlight. If it is furred over with dust and pet hair, a vacuum with a brush attachment on the outside of the screen clears it without opening anything. Then try the pilot again.

Check that nothing with a smell is stored near the unit. Gasoline, solvents, pool chemicals and cat litter all belong somewhere else. Move them and give the basement an hour to air out before relighting.

Beyond that, stop. Do not remove the burner assembly, do not open the gas control, do not loosen the thermocouple nut, and do not bypass anything. If you smell gas at any point, leave the house and call DTE at 800-947-5000 and 911 from outside.

## What a technician does

A [water heater repair](/services/water-heater-repair/) call for a pilot problem starts with a millivolt reading on the thermocouple. A healthy one produces around 25 to 30 millivolts in the pilot flame; under about 15 the gas valve will not hold. A low reading with a good flame means a new thermocouple, which is an inexpensive part and a 20-minute job on most tanks, including the sealed-chamber units where the burner assembly comes out as a unit. A good reading with a valve that still will not hold means the gas control, which is a bigger part and the point at which the age of the tank enters the conversation.

If the flame itself is the problem, we clean the pilot orifice and the burner, replace the air screen if it is damaged, and check for draft. A water heater venting into a masonry chimney that also used to serve the furnace, before the furnace was converted to a side-vented 90-percent unit, often has a draft problem; the oversized flue cools the gas and spillage at the draft hood blows the pilot out. That is an "orphaned" water heater, and the fix is a chimney liner, not a thermocouple.

We check the FVIR screen and sensor on every call, and if the sensor tripped, we find out why before resetting it.

## When a pilot problem means replacement

A thermocouple on a 6-year-old tank is a repair, full stop. A gas control valve on a 12-year-old tank in hard Washtenaw County water, with rust showing at the fittings and no anode left, is a part that costs a meaningful fraction of a new heater going into a tank that will leak within a couple of years. We say that plainly when we see it. Our [lifespan and replacement guide](/resources/water-heater-lifespan-and-replacement-signs/) covers the age and condition signs, and a [water heater installation](/services/water-heater-installation/) estimate is free if the honest answer is a new unit.

Some customers use a pilot failure on an old tank as the moment to switch to a power-vented or electronic-ignition model that does not have a standing pilot at all. Those draw a little less gas, vent through PVC instead of the chimney, and eliminate this specific problem. Whether that is the right move depends on the venting situation in the house; it is a conversation we are glad to have.`,
  faqs: [
    {
      q: "How do I know if the thermocouple is bad?",
      a: "The classic sign is a pilot that lights and burns while the knob is held but dies when released. A technician confirms it with a millivolt reading; under about 15 mV in a good flame means the thermocouple is done.",
    },
    {
      q: "Can I replace a water heater thermocouple myself?",
      a: "It is possible on older open-burner units, but on FVIR tanks built since 2003 the burner assembly has to come out through the sealed chamber, and a misaligned reinstall can trip the vapor sensor or cause sooting. We recommend having it done.",
    },
    {
      q: "Why does the pilot go out when the furnace or dryer runs?",
      a: "That points to a draft or depressurization problem. A big exhaust fan, a dryer or a leaky return duct can pull air down the water heater flue and blow out the pilot. The venting needs to be checked, not just the thermocouple.",
    },
    {
      q: "What is the flashing light on my water heater gas valve?",
      a: "A fault code. The label on the gas control decodes the blink pattern; common ones include a tripped flammable-vapor sensor, a failed thermocouple or thermopile, and an overheated chamber. Note the pattern before resetting.",
    },
    {
      q: "Is it safe to keep relighting the pilot every day?",
      a: "No. A pilot that needs daily relighting has an underlying problem, and each attempt releases unburned gas into the chamber. Get it diagnosed; the fix is usually inexpensive.",
    },
  ],
  relatedServices: ["water-heater-repair", "water-heater-installation"],
  relatedResources: [
    "no-hot-water-what-to-check",
    "water-heater-lifespan-and-replacement-signs",
    "pilot-light-vs-hot-surface-ignitor",
    "water-heater-temperature-setting-safety",
  ],
};
