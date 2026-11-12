import type { Resource } from "../types";

export const pilotLightVsHotSurfaceIgnitor: Resource = {
  slug: "pilot-light-vs-hot-surface-ignitor",
  title: "Pilot Light vs. Hot-Surface Ignitor: How Your Furnace Lights and Why It Matters",
  metaTitle: "Pilot Light vs Hot-Surface Ignitor Explained",
  metaDescription:
    "Standing pilot, intermittent pilot or hot-surface ignitor? How each furnace ignition works, how it fails, what you can safely do, and what it says about age.",
  category: "troubleshooting",
  quickAnswer:
    "A standing pilot is a small flame that burns continuously and lights the burners; it is found on furnaces made before the early 1990s. A hot-surface ignitor is a ceramic element that glows to about 2,500°F for 30 seconds only when the furnace calls for heat. Hot-surface ignitors are more efficient and safer but are fragile and typically need replacement every 5 to 15 years.",
  published: "2026-10-16",
  updated: "2026-10-16",
  readMinutes: 5,
  body: `## Three ways a furnace lights gas

Every gas furnace in a Michigan basement lights its burners one of three ways, and knowing which you have tells you a lot about what to expect from it.

A **standing pilot** is a small blue flame, about the size of a match head, burning 24 hours a day next to the main burners. A thermocouple sitting in that flame generates a tiny voltage that holds the pilot gas valve open. When the thermostat calls, the main valve opens and the pilot lights the burners. This is the system on furnaces built roughly before 1992, and there are still plenty running in 1960s Inkster and Wayne ranches and in older Ypsilanti two-stories.

An **intermittent pilot** was the transition design from the late 1980s into the 1990s. The pilot is not lit all the time. On a call for heat, a spark electrode lights the pilot, a flame sensor proves it, and then the main burners light off the pilot. When the cycle ends, the pilot goes out.

A **hot-surface ignitor** (HSI) is what nearly every furnace built since the mid-1990s uses. There is no pilot at all. A ceramic element, originally silicon carbide and on newer furnaces silicon nitride, glows orange-white at over 2,000°F for 20 to 40 seconds, the gas valve opens, and the burners light directly from the glowing element. A separate flame sensor rod then proves the flame and the ignitor shuts off.

## How to tell which one you have

Open the upper furnace door and look at the burner assembly. If there is a small flame burning with the thermostat satisfied, you have a standing pilot, and probably a furnace that is 30-plus years old. If you see a small pilot assembly with a wire running to an electrode but no flame when idle, it is intermittent pilot. If there is no pilot assembly at all and instead a flat or spiral ceramic element on a bracket near the first burner, it is hot-surface ignition. The HSI furnace will also have an inducer motor at the top and a control board with a blinking LED; the standing-pilot furnace usually has neither.

## Why the industry moved away from pilot lights

A standing pilot burns gas constantly. The figure usually quoted is around 600 to 900 BTU per hour, which over a year adds up to a few percent of a typical household's gas use. DTE customers paid that every month of the year for a flame that was useful maybe 2,000 hours out of 8,760. Federal efficiency rules and the 78% AFUE minimum that arrived in the early 1990s made the standing pilot impractical on new equipment. Hot-surface ignition also removed the pilot outage problem: a draft through the basement, a dirty pilot orifice, or a spider web in the pilot tube could put a pilot out and leave a house cold in January with no fault code to explain why.

## How a standing pilot fails

The thermocouple is the weak link. It is a copper-tipped probe in the pilot flame, and after 10 to 20 years the junction degrades and it stops generating enough millivolts to hold the pilot valve open. The pilot lights when you hold the button down and goes out when you release it. That is a thermocouple. A pilot that burns yellow or lazy instead of a sharp blue cone has a partially clogged orifice. A pilot that blows out on windy nights has a draft problem, often from a basement window or a water heater flue sharing the chimney.

Relighting a standing pilot is a homeowner task if you follow the instructions on the furnace label exactly: turn the gas control to Off, wait five minutes to let any gas clear, turn it to Pilot, hold the reset button while lighting, hold for 30 to 60 seconds, release, and turn to On. If you smell gas before you start, do not light anything; leave the house and call DTE at 800-947-5000. If the pilot will not stay lit after two tries, the thermocouple is the likely part, and that is a minor repair. We cover the water heater version of the same problem in [water heater pilot light won't stay lit](/resources/water-heater-pilot-light-wont-stay-lit/).

## How a hot-surface ignitor fails

The ignitor cracks. Silicon carbide elements are brittle, and every cycle takes them from room temperature to 2,500°F and back. Touching one with bare fingers leaves skin oil that creates a hot spot. A power surge, a weak board sending the wrong voltage, or simply 50,000 cycles ends it. The symptom is a furnace that runs the inducer, clicks the pressure switch, and then nothing glows and the gas valve never opens. After three tries the board locks out. You can confirm this safely by watching through the sight glass during a call for heat; if the element never glows, it is cracked or not getting power.

The flame sensor is the other common failure on an HSI furnace, and the symptom is different: the burners light and drop out after a few seconds. [Furnace blowing cold air](/resources/furnace-blowing-cold-air/) explains how to tell those two apart from the vents.

Replacing an ignitor is a quick job, but the element sits inches from the burners and gas assembly and must be handled by the ceramic base only, with power off. We carry universal and brand-specific ignitors on the truck, so this is a same-visit repair. Silicon nitride replacements last considerably longer than the original silicon carbide and are worth asking for on a furnace you plan to keep.

## What your ignition type says about your furnace

If you still have a standing pilot, your furnace is at least 30 years old and is almost certainly a 60% to 70% AFUE unit with a natural-draft flue. It may be reliable, and we have no interest in talking you out of a furnace that works, but it is burning roughly a third more gas than a modern unit for the same heat, and its heat exchanger is at an age where cracks become likely. A furnace tune-up with a combustion check tells you where it stands. Read [repair or replace your furnace](/resources/repair-or-replace-furnace/) before the next repair comes up, so the decision is made with numbers and not in a cold house.

If you have hot-surface ignition, your furnace is from the modern era, and the ignitor is a wear item like a brake pad. Budget for one every decade or so and keep the flame sensor clean, and the ignition system will not be what ends the furnace.

## When to call

A pilot that will not stay lit after two careful attempts, an ignitor that does not glow, or a furnace that locks out after three tries are all [furnace repair](/services/furnace-repair/) visits, and in every case they are small ones. A rollout switch tripped, soot around the burners, or a yellow lazy flame are a different category: shut the furnace off and call, because combustion is wrong and the heat exchanger needs inspecting. We handle both around the clock without an overtime charge.`,
  faqs: [
    {
      q: "Can I replace a hot-surface ignitor myself?",
      a: "Physically it is a two-screw part, but it lives next to the burners and the gas valve, the furnace must be powered down, and the wrong replacement voltage will fail immediately. We would rather you call; it is a short visit and we carry the part.",
    },
    {
      q: "How much gas does a pilot light use?",
      a: "Roughly 600 to 900 BTU per hour, around the heat of a small candle cluster, burning continuously. Over a year it is a few percent of a typical home's gas bill.",
    },
    {
      q: "Why does my ignitor glow but the burners do not light?",
      a: "The ignitor is working; the gas valve is not opening or no gas is reaching it. Check that the shutoff valve on the pipe is open. If it is, the gas valve, the pressure switch, or the board is at fault.",
    },
    {
      q: "Is a standing pilot dangerous?",
      a: "Not inherently. The thermocouple shuts the gas off if the pilot goes out. The real concern with a standing-pilot furnace is its age; a 30-year-old heat exchanger deserves a combustion and CO check every fall.",
    },
    {
      q: "What is the difference between an ignitor and a flame sensor?",
      a: "The ignitor lights the gas; the flame sensor proves it stayed lit. An ignitor failure means no flame at all. A flame sensor failure means the burners light and go out after a few seconds.",
    },
  ],
  relatedServices: ["furnace-repair", "furnace-maintenance", "water-heater-repair"],
  relatedResources: [
    "furnace-blowing-cold-air",
    "water-heater-pilot-light-wont-stay-lit",
    "repair-or-replace-furnace",
    "furnace-error-codes-what-the-blinking-light-means",
  ],
};
