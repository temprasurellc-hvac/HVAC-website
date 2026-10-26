import type { Resource } from "../types";

export const thermostatNotWorkingTroubleshooting: Resource = {
  slug: "thermostat-not-working-troubleshooting",
  title: "Thermostat Not Working? How to Tell If It's the Thermostat or the Furnace",
  metaTitle: "Thermostat Not Working: Troubleshooting Guide",
  metaDescription:
    "Blank screen, no response, or a system that runs when it should not? Check batteries, the C wire, the furnace fuse and float switch, then jumper R to W.",
  category: "troubleshooting",
  quickAnswer:
    "A thermostat that is blank or unresponsive is usually not getting 24 volts from the furnace. Check the batteries, then the furnace service switch and breaker, the 3-amp fuse on the furnace control board, and the AC float switch. If the screen works but the system never responds, loose wires on the R, W, Y or G terminals or a missing common wire are the next suspects.",
  published: "2026-10-16",
  updated: "2026-10-16",
  readMinutes: 5,
  body: `## Where the thermostat gets its power

Every low-voltage thermostat in a Southeast Michigan home runs on 24 volts AC that comes from a small transformer inside the furnace. That power travels up the red wire (R or Rc/Rh). The thermostat switches it to the white wire (W) to call for heat, the yellow wire (Y) to call for cooling, and the green wire (G) to run the fan. The blue or black wire (C, for common) returns power to the transformer so the thermostat can run its display continuously without batteries. Many older homes in Ypsilanti and Westland have only four wires and no C; the thermostat runs on batteries or steals power through the circuit, and that is where a lot of odd behavior comes from.

Understanding that chain makes troubleshooting straightforward: a blank thermostat means the 24 volts is not reaching it; a working thermostat with no system response means the signal is not reaching the furnace.

## A blank screen

Start with batteries. Most Honeywell, Emerson and Braeburn thermostats take two AAs, and a dead set is the most common cause of a blank display in January. Put in fresh ones, not the pair that has been in the kitchen drawer since 2022.

If the thermostat is a hardwired smart model like an Ecobee, Nest or Honeywell T-series and the screen is dark, the 24-volt feed has been cut. Go to the furnace and check, in order:

- **The service switch** on the furnace cabinet or nearby joist, which looks like a light switch.
- **The furnace breaker** in the panel.
- **The blower door**, which presses a safety switch and kills everything if it is not fully seated.
- **The 3-amp fuse** on the control board, a small automotive-style blade fuse. It blows when a thermostat wire shorts, often during a thermostat swap done with the power on or where a staple pierced the wire. Replace with the same rating only.
- **The AC float switch** in summer. A full condensate pan opens the switch, which on many installs is wired in the R or C line and blanks the thermostat. See [water around the furnace and the condensate drain](/resources/water-around-furnace-condensate-drain/).

If all of those check out and the screen is still dark, the transformer or the board has likely failed, which is a furnace repair rather than a thermostat problem.

## Screen works, system does nothing

The thermostat is powered and showing a call (a flame icon, a snowflake, "Heating" or "Cooling"), but nothing happens at the furnace or outdoor unit. Pull the thermostat off its wall plate and look at the wires. On a lot of 1990s subdivision installs in Canton and Saline the wires were stripped a quarter inch and pushed under screw terminals that have loosened over 30 years. A wire that has slipped out of the W terminal gives you a thermostat that cools fine but never heats. Tighten each terminal with the power off at the furnace switch.

The definitive test, if you are comfortable with it, is to jumper the terminals at the thermostat base. With the furnace power on, touch a short piece of wire between R and W for heat (or R and Y for cooling). If the furnace starts, the thermostat is the problem. If nothing happens, the fault is in the wire run or at the furnace. This is 24 volts and will not hurt you, but it does bypass the thermostat's safeties, so do it briefly and only with a healthy system. If you jumper R to Y in cooling, note that most condensers have a five-minute delay before the compressor restarts.

**The opposite problem: the system runs when it should not.** A furnace that runs with the thermostat set to Off, or an AC that never shuts down, points to a shorted wire somewhere in the run or a stuck relay. Thermostat wire that runs through an exterior wall in a 1920s bungalow and got nicked by a drywall screw can short W to R and call for heat forever. The fix is finding the damaged section or pulling a new wire. A furnace blower that runs constantly with the fan set to Auto can also be the furnace's own fan-limit switch or control board, not the thermostat.

## The smart thermostat problems

Smart thermostats without a C wire are the source of a particular set of complaints: a screen that reboots randomly, an outdoor unit that chatters or clicks on and off, a furnace that short cycles, or a thermostat that says it is heating while the house gets cold. Without a C wire, the thermostat pulls power through the furnace control circuit, and some furnace boards interpret that as a call. The clean solution is running a proper C wire or installing the manufacturer's power adapter kit at the furnace. We do this as part of a [thermostat installation](/services/thermostat-installation/) and it ends the ghost-cycling for good.

Wi-Fi models have their own category: the thermostat works at the wall but the app shows offline. That is a router or account problem, not a furnace problem, and the system still responds to the physical controls.

## Heat pump and two-stage mismatches

If your system is a heat pump and the thermostat was replaced with a conventional one, the reversing valve (O or B terminal) may be wired wrong, and you get heating when you ask for cooling or no backup heat below 35 degrees. Two-stage furnaces wired to a single-stage thermostat run only on low fire or only on high depending on how the installer handled W2. Both show up a lot when a homeowner swaps a thermostat and the configuration menu is left at defaults. Check the system-type setting before assuming hardware is broken. Heat pumps deserve their own guide; [heat pump vs furnace in Michigan](/resources/heat-pump-vs-furnace-michigan/) explains how the staging and backup are supposed to behave.

## The thermostat location problem

A thermostat that reads 72 while the living room is 66 is not broken; it is in the wrong spot. A hallway wall that shares a stud bay with a supply duct, a wall that gets afternoon sun through a west window, or a spot three feet from a floor lamp will all read warm and satisfy early. Older mercury-bulb thermostats also have to be level to read correctly. If the reading is off by more than two degrees compared to a reliable thermometer placed next to it, recalibrate or relocate.

## When to stop and call

If the furnace will not respond to the R-to-W jumper, the problem is at the furnace and it is a [furnace repair](/services/furnace-repair/) visit. If the thermostat is dead with a confirmed 24 volts at the base, it needs replacing, and a new thermostat is a short visit that includes wiring the C and configuring it for your system type. Any thermostat work on a heat pump or a two-stage system is worth having done by someone who has the configuration menus memorized, because a wrong setting wastes gas or leaves the backup heat off for a winter.`,
  faqs: [
    {
      q: "Why does my thermostat say heating but no heat comes out?",
      a: "The thermostat is sending the call but the furnace is not completing it. The W wire may be loose at either end, or the furnace is locking out for its own reasons. Check the furnace control board light for a fault code.",
    },
    {
      q: "Does a thermostat need a C wire?",
      a: "Battery-powered thermostats do not. Most smart thermostats work far better with one; without it they steal power through the control circuit and can cause the furnace or AC to cycle oddly.",
    },
    {
      q: "Can a thermostat cause the furnace to short cycle?",
      a: "Yes, two ways: a smart thermostat without a C wire pulsing the furnace, or a thermostat mounted somewhere warm that satisfies early. Move it or wire the common and the cycling usually stops.",
    },
    {
      q: "How long do thermostats last?",
      a: "Mechanical thermostats run for decades. Digital and smart thermostats typically last 10 to 15 years before the display or relays fail. Most are replaced for features long before they break.",
    },
    {
      q: "Will any thermostat work with my furnace?",
      a: "Most single-stage gas furnaces with central AC work with nearly any thermostat. Heat pumps, two-stage and variable-speed equipment, and systems with electric backup need a thermostat that supports those terminals and settings.",
    },
  ],
  relatedServices: ["thermostat-installation", "furnace-repair", "hvac-repair"],
  relatedResources: [
    "water-around-furnace-condensate-drain",
    "furnace-not-turning-on-troubleshooting",
    "heat-pump-vs-furnace-michigan",
    "ac-not-cooling-what-to-check-first",
  ],
};
