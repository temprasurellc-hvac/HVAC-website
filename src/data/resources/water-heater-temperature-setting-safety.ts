import type { Resource } from "../types";

export const waterHeaterTemperatureSettingSafety: Resource = {
  slug: "water-heater-temperature-setting-safety",
  title: "What Temperature Should a Water Heater Be Set To? Scalding, Legionella and the 120-Degree Answer",
  metaTitle: "Water Heater Temperature Setting: 120°F and Why",
  metaDescription:
    "120°F is the standard water heater setting, balancing scald risk against Legionella and energy use. How to check your tap temperature and when 140°F fits.",
  category: "water-heaters",
  quickAnswer:
    "Set a residential water heater to 120°F. That temperature limits scald risk, especially for children and older adults, keeps energy use down and slows mineral scaling. Legionella bacteria survive below about 122°F, so households with immunocompromised members or long pipe runs may store water at 140°F and add a thermostatic mixing valve to deliver 120°F at the taps.",
  published: "2026-10-16",
  updated: "2026-10-16",
  readMinutes: 5,
  body: `## Why 120 degrees is the default

Every residential water heater sold in the United States ships with its thermostat at or near 120°F, and the Consumer Product Safety Commission, the Department of Energy and the plumbing codes all point to that number for household use. It is a compromise between three things that pull in different directions: the risk of scalding at the tap, the risk of bacteria growing in the tank, and the cost of keeping 50 gallons hot around the clock.

At 120°F, hot enough for a shower and a dishwasher with its own booster heater, a healthy adult can tolerate several minutes of exposure before a serious burn. At 140°F, which is where many older water heaters in Ypsilanti and Westland basements are still set because someone turned the dial up twenty years ago and nobody turned it back, a third-degree burn takes about five seconds. For a toddler or an elderly person with slower reflexes and thinner skin, the window is shorter.

## The scald numbers

The relationship between temperature and burn time is steep. Roughly, skin exposed to 120°F water takes several minutes to burn seriously; at 130°F, about 30 seconds; at 140°F, about 5 seconds; at 150°F, under 2 seconds. The reason this matters is that the hot water at the kitchen tap is often not much below the tank setting, particularly in a ranch where the tap is 20 feet from the tank. A child who turns the hot handle alone in a bathroom fed by a 140°F tank can be hurt before an adult reaches them. Most of the scald injuries treated in Michigan emergency rooms involve children under five and adults over 65, and most come from tap water, not from stovetops.

## The Legionella trade-off

The other side of the argument is Legionella, the bacteria behind Legionnaires' disease. It grows in water between about 77°F and 113°F, survives up to around 122°F, and is killed quickly above 140°F. A tank held at 120°F is at the margin: the bottom of a gas tank where the burner sits is hotter than the setpoint, the top is around the setpoint, and the water in long pipe runs and rarely used fixtures cools to the growth range. For most households this is an acceptable risk, and public health guidance reflects that. For a household with someone who is immunocompromised, elderly, a smoker or has chronic lung disease, OSHA and ASHRAE-style guidance leans toward storing water at 140°F and controlling the scald risk another way.

That other way is a thermostatic mixing valve, a brass valve installed on the hot outlet of the tank that blends in cold water to deliver a set temperature, typically 120°F, to the house. The tank runs hot enough to control bacteria; the taps run cool enough to be safe. A mixing valve also effectively increases the tank's capacity, because 50 gallons stored at 140°F stretches further when it is diluted down to 120°F at the point of use. We install them on [water heater installation](/services/water-heater-installation/) jobs where the household wants both, and the mechanical inspectors in Washtenaw County are familiar with them.

## Checking what your tap actually delivers

The dial on a gas water heater is marked with a vague scale, often just Warm, Hot and Very Hot or letters A through C, and the dial position does not tell you much. The right way to know is to run the hot water at the tap nearest the tank for two or three minutes, catch it in a cup, and read it with a kitchen thermometer. That is the real number. Repeat at the farthest fixture; the drop tells you how much heat the pipes are losing, which in an uninsulated Michigan basement in January can be 5 to 10 degrees.

If the tap reads above 125°F, turn the dial down a notch, wait a few hours, and measure again. Adjusting the dial on the front of a gas control valve is a normal homeowner task. On an electric tank, the thermostats are behind cover plates and the power should be off at the breaker before you touch them; if you are not comfortable with that, it is a quick visit for us.

## Energy and scaling

Every 10-degree reduction in storage temperature saves a few percent on the gas or electricity the tank uses, which on a DTE bill through a Michigan winter is real money over a year. Standby loss, the heat that leaks out of the tank jacket while nobody is using hot water, goes up with the temperature difference between the tank and the basement, and a 60-degree basement in February is a cold place for a 140-degree tank to sit.

Scaling matters more here. Washtenaw County's municipal water runs 8 to 12 grains of hardness, and the well water in the townships is far harder. Calcium carbonate comes out of solution faster the hotter the water is, so a tank at 140°F builds sediment on the bottom noticeably faster than one at 120°F, and sediment is the thing that shortens a gas water heater's life. The [maintenance guide on flushing and anode rods](/resources/water-heater-maintenance-flush-anode/) covers managing it, and the [lifespan guide](/resources/water-heater-lifespan-and-replacement-signs/) explains why it is so often the tank's end.

## Special cases

- **Dishwashers.** Modern ones have internal heaters and work fine on 120°F supply. Older ones without a booster wanted 140°F; if you have one and the dishes come out greasy, the dishwasher is the reason to run hotter, not the tank.
- **Tankless heaters.** They have a digital setpoint rather than a dial and are often set at 120°F from the factory; the same scald logic applies, and there is no stored volume for bacteria to grow in.
- **Recirculation loops.** A house with a recirc pump keeps the whole loop near tank temperature, which raises scald risk at every fixture and energy use across the board. A mixing valve is especially worth it here.
- **Very long runs.** A two-story colonial in Canton with the tank in the basement and a master bath on the far upstairs corner may lose enough heat in the pipe that 120°F at the tank is lukewarm at the shower. The fix is pipe insulation or a recirc loop, not a hotter tank.
- **Rental and multi-generational homes.** Where very young children or elderly occupants share a tank with adults who want hot showers, the mixing valve approach resolves the conflict.

## If the water is too hot and you did not change anything

A tank that suddenly delivers scalding water with the dial untouched has a stuck thermostat or a failing gas control valve, and the TPR valve may start discharging as the tank overheats. Turn the dial down, and if that does not bring the temperature in line within a day, shut the gas control to Pilot and call for a [water heater repair](/services/water-heater-repair/). A water heater that cannot regulate its temperature is a pressure safety problem, not just a comfort one.`,
  faqs: [
    {
      q: "Is 140°F too hot for a water heater?",
      a: "For delivery at the taps, yes; it can cause a serious burn in about five seconds. Storing at 140°F is reasonable for Legionella control if a thermostatic mixing valve brings the delivered temperature down to 120°F.",
    },
    {
      q: "What temperature kills Legionella?",
      a: "Legionella dies quickly above about 140°F and survives but does not thrive between roughly 122°F and 140°F. It grows best between 77°F and 113°F, which is the range of lukewarm water sitting in long pipe runs and rarely used fixtures.",
    },
    {
      q: "How do I check my water heater's temperature?",
      a: "Run the hot tap nearest the tank for two to three minutes, then measure the water with a kitchen thermometer. The dial markings on a gas valve are approximate; the thermometer reading is the real setting.",
    },
    {
      q: "Will turning the temperature down save money?",
      a: "Yes. Each 10°F reduction cuts standby loss and heating energy by a few percent, and the lower temperature also slows sediment buildup in Washtenaw County's hard water, which extends the tank's life.",
    },
    {
      q: "What is a thermostatic mixing valve?",
      a: "A valve on the tank's hot outlet that blends cold water in to deliver a fixed, safe temperature to the house regardless of how hot the tank is stored. It lets you run the tank at 140°F for bacteria control while the taps deliver 120°F.",
    },
  ],
  relatedServices: ["water-heater-repair", "water-heater-installation"],
  relatedResources: [
    "water-heater-maintenance-flush-anode",
    "water-heater-lifespan-and-replacement-signs",
    "no-hot-water-what-to-check",
    "tank-vs-tankless-water-heater-michigan",
  ],
};
