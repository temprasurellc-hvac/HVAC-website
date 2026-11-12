import type { Resource } from "../types";

export const whatSizeFurnaceDoINeedMichigan: Resource = {
  slug: "what-size-furnace-do-i-need-michigan",
  title: "What Size Furnace Do I Need in Michigan? BTUs, Square Feet and the Manual J",
  metaTitle: "What Size Furnace Do I Need in Michigan?",
  metaDescription:
    "Input vs output BTU, the 30 to 40 BTU per square foot rule for Southeast Michigan, why the old furnace size is usually wrong, and how a Manual J gets it right.",
  category: "buying-guides",
  quickAnswer:
    "In Southeast Michigan a furnace needs roughly 30 to 40 BTU of output per square foot of heated space: about 35,000 to 45,000 BTU for a tight 1,200-square-foot ranch and 60,000 to 80,000 for an older 2,000-square-foot two-story. Output is input times AFUE, so an 80,000 BTU 96% furnace delivers about 76,800. A Manual J calculation replaces the rule of thumb and usually finds the old furnace was too big.",
  published: "2026-10-16",
  updated: "2026-10-16",
  readMinutes: 5,
  body: `## Input, output and the number that matters

Furnaces are labeled by input BTU per hour, the gas they burn: 40,000, 60,000, 80,000, 100,000, 120,000 are the common sizes. What heats the house is output, which is input multiplied by AFUE. An 80,000 BTU input furnace at 80% AFUE delivers 64,000 BTU of heat; the same input at 96% delivers 76,800. That is why a homeowner replacing an old 100,000 BTU 80% furnace (80,000 output) with a 96% model should be looking at an 80,000 input unit (76,800 output), not another 100,000, and often at something smaller still once the load is calculated.

The data plate on the furnace lists both numbers. Look for "Input" and "Output" or "Bonnet Capacity."

## The Michigan rule of thumb

For a quick estimate, Southeast Michigan homes need about 30 to 40 BTU of furnace output per square foot of heated floor area. The low end fits newer, tighter construction with 2x6 walls, low-E windows and R-49 attics; the high end fits pre-1960 houses with original windows, plaster walls and whatever insulation was blown in during the 1970s. Our design temperature, the outdoor temperature the system is sized to hold against, is around 1 to 5°F for Washtenaw and Wayne County, and the polar-vortex nights at minus 15 are handled by the furnace running continuously and the house coasting a degree or two; sizing to minus 15 produces a furnace that is oversized the other 364 days.

Some worked examples:

- **1,100-square-foot 1955 ranch** in Inkster or Ypsilanti Township with a Michigan basement, vinyl replacement windows, 8 inches of attic insulation: 35,000 to 40,000 BTU output. A 40,000 or 45,000 input 96% furnace.
- **1,600-square-foot 1972 colonial** in Westland or Garden City, replacement windows, R-30 attic: 50,000 to 58,000 output. A 60,000 input 96%.
- **2,300-square-foot 2004 two-story** in Canton or Saline, tight envelope: 60,000 to 70,000 output. A 70,000 or 80,000 input 96%, and this is where people are most surprised, because the builder very often installed a 100,000 or 120,000.
- **2,000-square-foot 1925 Ann Arbor two-story** with plaster, single-pane wood windows and a drafty attic: 70,000 to 80,000 output. An 80,000 or 90,000 input, and the honest advice is that insulation and air sealing would drop that a full size.
- **Rural 1890s farmhouse** in Augusta or Lodi Township on propane with additions: this is exactly the house where a rule of thumb fails and a room-by-room load calculation is mandatory.

## Why the old furnace's size is wrong more often than right

Through the 1970s and 80s, installers sized furnaces generously because the equipment was cheap, the fuel was cheap, and a cold callback was worse than a short-cycling one. The result is a huge stock of 100,000 and 120,000 BTU furnaces in 1,500-square-foot ranches across Wayne County. Those houses have since had windows replaced, attics insulated and basements finished, every one of which lowers the load. Replacing like for like repeats a 40-year-old mistake on a house that has changed.

An oversized furnace heats the house to setpoint in a few minutes and shuts off. It never runs long enough to push warm air to the far bedrooms, so the rooms near the thermostat are warm and the rest are not. It cycles 10 or 15 times an hour on a cold night, which is the hardest possible duty for an ignitor and a heat exchanger, and it is the leading cause of the short cycling described in [furnace short cycling causes](/resources/furnace-short-cycling-causes/). A two-stage furnace masks the problem on mild days but not on cold ones.

An undersized furnace is rare and easier to recognize: the house falls behind on the coldest nights, running continuously and never reaching setpoint. On a properly sized furnace that is expected to happen only at design conditions or colder, perhaps a handful of nights a decade.

## What a Manual J includes for heating

The ACCA Manual J calculation builds the heating load from the house itself rather than its square footage. For a Michigan winter it accounts for:

- Wall, ceiling and floor assemblies and their insulation, with the construction era as a stand-in when the walls cannot be opened.
- Window and door area on each face, glazing type and frame material.
- Infiltration, estimated from the age and tightness of the house, and this is where a 1920s house diverges hardest from a 2010s one.
- Basement or crawlspace conditions, since a Michigan basement with uninsulated stone walls loses a surprising amount of heat.
- Duct losses if the ducts run through unconditioned space.
- The local 99% design temperature, so the furnace is sized for all but the coldest 1% of hours.

The output is a whole-house load in BTU per hour and a room-by-room breakdown. The furnace is chosen so its output exceeds the load by a modest margin, typically up to about 40% for a single-stage unit by the ACCA guidance and less for staged equipment that can turn down. The room numbers also reveal whether the ductwork can carry the right amount of air to each room, which in older houses is usually the bigger comfort problem.

## Staging changes how size feels

A single-stage 80,000 BTU furnace is 80,000 or off. A two-stage 80,000 runs at about 52,000 most of the winter and goes to full fire on the coldest days, which means long, quiet cycles and even temperatures through a 1970s colonial that never had them. A modulating furnace adjusts in small steps between about 40% and 100%. Staging does not fix a furnace that is twice the size it should be, but it does let a correctly sized furnace handle the swing between a 35-degree December afternoon and a minus-10 January night gracefully. [Single-stage vs two-stage vs variable-speed](/resources/single-stage-vs-two-stage-vs-variable-speed/) explains the tradeoffs and cost.

## The AC and heat pump constraint

The furnace blower also serves the air conditioner, and a 3-ton AC needs about 1,200 CFM. Furnace cabinets and blowers are sized in airflow bands, so a 60,000 BTU furnace might be available with a blower rated for 3 tons of cooling or only 2.5. If you have a 3.5-ton AC on a 2,400-square-foot Northville house and the heating load calls for a 60,000 furnace, the blower has to be chosen for the cooling side even though the burner is sized for heating. A good installer handles this; a bad one leaves you with an AC coil that freezes every July.

If you are considering a heat pump with a furnace as backup, the furnace can often be a size smaller because the heat pump carries the load down to the 20s or lower and the furnace only takes over below the balance point. [Heat pump vs furnace in Michigan](/resources/heat-pump-vs-furnace-michigan/) walks through that arrangement.

## What to ask a contractor

Ask whether the quote is based on a Manual J or on the old furnace. Ask for the calculated load in BTU per hour and the output of the furnace proposed. Ask how the AC tonnage was accounted for in the blower selection. If the proposed furnace is the same input as the one coming out of a house that has had windows and insulation done since the 1980s, ask why. Our [furnace installation](/services/furnace-installation/) estimates include the load calculation and the numbers behind it, because a furnace sized right is quieter, lasts longer and heats the back bedrooms, and that is cheaper than any upgrade on the equipment itself.`,
  faqs: [
    {
      q: "How many BTUs do I need to heat 1,500 square feet in Michigan?",
      a: "Roughly 45,000 to 60,000 BTU of output, depending on insulation and age. For a 96% furnace that means a 60,000 BTU input model in most cases; for an older leaky house, possibly 70,000 input.",
    },
    {
      q: "Is a bigger furnace better for a cold climate?",
      a: "No. A furnace sized to the design load runs continuously only on the coldest few nights a year. Oversizing causes short cycling, uneven rooms and early heat exchanger failure. Michigan's cold is handled by correct sizing, not extra capacity.",
    },
    {
      q: "What is the difference between furnace input and output BTU?",
      a: "Input is the gas burned; output is the heat delivered, equal to input times AFUE. A 100,000 BTU input furnace at 80% delivers 80,000; at 96% it delivers 96,000.",
    },
    {
      q: "Do I need a Manual J for a furnace replacement?",
      a: "It is the only reliable way to size it, and most Michigan jurisdictions expect one with the mechanical permit. It takes about an hour and prevents repeating an oversized install from decades ago.",
    },
    {
      q: "Can a furnace be too small for a Michigan winter?",
      a: "It can, but it is uncommon with modern sizing. An undersized furnace shows up as a house that cannot reach setpoint on the coldest nights. Properly sized furnaces still carry a margin above the design load.",
    },
  ],
  relatedServices: ["furnace-installation", "hvac-installation", "ductwork-repair"],
  relatedResources: [
    "furnace-short-cycling-causes",
    "single-stage-vs-two-stage-vs-variable-speed",
    "heat-pump-vs-furnace-michigan",
    "furnace-efficiency-explained-80-vs-96-afue",
  ],
};
