import type { Resource } from "../types";

export const furnaceNotTurningOnTroubleshooting: Resource = {
  slug: "furnace-not-turning-on-troubleshooting",
  title: "Furnace Not Turning On? A Step-by-Step Troubleshooting Guide",
  metaTitle: "Furnace Not Turning On: Troubleshooting Steps",
  metaDescription:
    "Furnace dead on a January night in Michigan? Check the thermostat, service switch, door panel, 3-amp fuse and condensate trap in order before you call, safely.",
  category: "troubleshooting",
  quickAnswer:
    "A furnace that will not turn on at all usually comes down to no power reaching the control board or a safety switch holding it off. Check the thermostat batteries and mode, the light-switch-style service switch on the furnace, the breaker, the blower door being fully seated, and the 3-amp fuse on the board. If you smell gas at any point, leave and call DTE at 800-947-5000.",
  published: "2026-10-16",
  updated: "2026-10-16",
  readMinutes: 5,
  body: `## First, the safety rule

Before you touch anything, take a breath near the furnace. If you smell the rotten-egg odor of natural gas, stop troubleshooting. Leave the house, do not flip switches on the way out, and call DTE Energy's gas emergency line at 800-947-5000 and then 911 from outside. A furnace that will not light is not an emergency; a gas leak is. If the carbon monoxide alarm is going off, the same rule applies: get everyone outside first and sort the furnace out later.

With that out of the way, a furnace that does nothing at all is almost always a power or safety-switch problem, and most of those are fixable in ten minutes. Work through the steps in order, because each one rules out the cheaper possibilities before you get to the parts that need a meter. Keep a flashlight handy; most Michigan basements put the furnace in the darkest corner.

## Steps one and two: the thermostat and the switches

**Step one: the thermostat.** Set the thermostat to Heat and raise the setpoint five degrees above the room temperature. Wait a full minute; many thermostats have a built-in delay. If the screen is blank, replace the batteries. If it is a hardwired model like an Ecobee or Nest and the screen is blank, the thermostat has lost its 24-volt feed from the furnace, which means the problem is downstream and you can skip to step three.

While you are there, check that the thermostat is not in a schedule hold or a vacation mode set to 55. We have driven to Saline on a 10-degree night for a furnace that was doing exactly what a vacation schedule told it to.

**Step two: the switches you forgot existed.** Every furnace in a Michigan basement has a service switch that looks exactly like a light switch, mounted on the furnace cabinet or on a nearby joist. Someone finishing the basement, a plumber working on the water heater, or a kid flipping switches can turn it off. Confirm it is up. Then go to the electrical panel and find the breaker labeled Furnace; it is usually a single 15- or 20-amp. Flip it fully off and back on. A tripped breaker can sit in a middle position that looks on.

Last, check the blower door. The lower panel on the furnace cabinet presses a small plunger switch when it is seated. If you or a filter change left the door a quarter inch off, the switch stays open and the furnace is dead by design. Push the door in until it clicks or seats flush.

## Step three: is there a light on the control board?

Remove the upper furnace door (the burner compartment; on most furnaces this does not kill power). Look for a small LED on the control board, often visible through a sight glass in the lower door. A steady or slow-blinking light means the board has power and the problem is somewhere in the ignition sequence; that is a different guide, see [furnace error codes and what the blinking light means](/resources/furnace-error-codes-what-the-blinking-light-means/). No light at all with the breaker and switch on means either the door switch, the transformer, or the 3-amp automotive-style fuse on the board.

The fuse is a small purple or blue blade fuse plugged into the control board. It blows when a thermostat wire shorts, often where a staple nicked the wire or where a new thermostat was wired with the power on. If it is blown, replacing it with the same 3-amp rating is reasonable, but if it blows again, there is a short and someone needs to trace it.

## Steps four and five: the trap and the safety switches

**Step four: the condensate trap and drain.** On a 90%-plus furnace (white PVC pipes going out the side of the house instead of a metal flue), condensate from the secondary heat exchanger drains through an internal trap. If that trap is clogged with sludge, or the drain line froze in the polar vortex because it runs along an uninsulated rim joist in a Michigan basement, the pressure switch cannot close and the furnace refuses to start. Some boards light a code for this; others just sit silent with the inducer motor running.

Look at the drain tubing for standing water or kinks. If the inducer motor (the small fan at the top of the furnace) runs for 30 seconds and then everything stops, this is a strong suspect. We cover the full drain story in [water around the furnace and the condensate drain](/resources/water-around-furnace-condensate-drain/).

**Step five: rollout and limit switches.** Furnaces have manual-reset rollout switches near the burners, small round discs with a button in the center, and an automatic high-limit switch in the blower compartment. A rollout switch trips when flame comes out the front of the burners instead of going into the heat exchanger, usually because the exchanger or the flue is blocked. If you find one tripped, do not simply reset it and walk away. One trip after a power blip can be a fluke; a rollout that has tripped means the furnace was burning somewhere it should not, and a tech should inspect the heat exchanger before it runs again. This is a carbon monoxide question, not a comfort question. Read [carbon monoxide furnace safety in Michigan](/resources/carbon-monoxide-furnace-safety-michigan/) for why.

## What you should hear when it works

A normal start on a hot-surface-ignition furnace goes like this: thermostat calls, inducer motor starts and runs about 30 seconds, you hear a click as the pressure switch closes, the ignitor glows orange for 20 to 40 seconds, the gas valve clicks, the burners light with a soft whoomp, flames run for 30 to 60 seconds, then the blower starts and warm air arrives. On an older standing-pilot furnace from a 1970s Wayne or Inkster ranch, there is no inducer; the thermostat calls, the gas valve opens, the burners light off the pilot, and the blower starts once the fan-limit switch warms up. Whichever step the furnace stalls at tells a tech where to look.

## When to stop and call

If the breaker, service switch, door, fuse and trap all check out and the board still shows no light, the transformer or the board itself has failed and that is a parts-and-meter job. If the furnace starts the ignition sequence and stops partway, note which step it reaches and how many times the light blinks. If any rollout switch has tripped, if you see soot around the burner compartment, or if the house smells of exhaust, shut the furnace off at the service switch and call.

We run [furnace repair](/services/furnace-repair/) around the clock through the winter, nights and weekends included, with no overtime charge. If the house is dropping fast on a sub-zero night and you have pipes on exterior walls, say so when you call and we will treat it as [emergency heating repair](/services/emergency-heating-repair/).`,
  faqs: [
    {
      q: "Why does my furnace click but not turn on?",
      a: "A single click with nothing after it is usually the thermostat relay or the control board trying to start the inducer motor and failing. Repeated clicking from the gas valve area with no flame means the ignitor is not glowing or the flame sensor is dirty.",
    },
    {
      q: "Can I reset my furnace?",
      a: "Yes. Turn the service switch off, wait 30 seconds, and turn it back on. This clears a lockout after three failed ignition attempts. If it locks out again, the underlying problem has not changed and a reset will not fix it.",
    },
    {
      q: "Does a furnace need batteries?",
      a: "The furnace itself does not, but most battery-powered thermostats go blank when the AAs die, and the furnace will not get a call for heat. Start there before anything else.",
    },
    {
      q: "Why did my furnace stop working after I changed the filter?",
      a: "The blower door is not fully seated. The door presses a safety switch, and if it is even slightly ajar the furnace will not run. Push the door in until it latches.",
    },
    {
      q: "My furnace runs but no warm air comes out. Is that the same problem?",
      a: "No. If the blower is running you have power. That points to an ignition or gas problem, which is covered in our guide on a furnace blowing cold air.",
    },
    {
      q: "How cold can the house get before pipes freeze?",
      a: "Pipes on exterior walls or in an unheated crawlspace can freeze once the house drops into the 40s during a sub-zero snap. Open cabinet doors under sinks, let faucets drip, and treat a dead furnace in January as urgent.",
    },
  ],
  relatedServices: ["furnace-repair", "emergency-heating-repair", "furnace-maintenance"],
  relatedResources: [
    "furnace-error-codes-what-the-blinking-light-means",
    "water-around-furnace-condensate-drain",
    "furnace-blowing-cold-air",
    "carbon-monoxide-furnace-safety-michigan",
  ],
};
