import type { Resource } from "../types";

export const furnaceShortCyclingCauses: Resource = {
  slug: "furnace-short-cycling-causes",
  title: "Furnace Short Cycling: Why It Turns On and Off Every Few Minutes",
  metaTitle: "Furnace Short Cycling: Causes and Fixes",
  metaDescription:
    "A furnace that runs two minutes and shuts off is short cycling. How to tell a limit trip from a flame-sensor dropout, a thermostat issue or oversizing.",
  category: "troubleshooting",
  quickAnswer:
    "Short cycling is a furnace that starts, runs for a few minutes, shuts off, and restarts shortly after instead of running a full 10 to 20 minute cycle. The usual causes are overheating from restricted airflow tripping the high-limit switch, a dirty flame sensor, a thermostat mounted in a warm spot, or a furnace that is oversized for the house. Each pattern looks slightly different.",
  published: "2026-10-16",
  updated: "2026-10-16",
  readMinutes: 5,
  body: `## What a normal cycle looks like

On a 20-degree January morning in Ypsilanti, a correctly sized single-stage furnace should run for roughly 10 to 20 minutes per cycle and cycle three to five times an hour at most. Each cycle has a fixed sequence: inducer, ignitor, burners, blower, and then a blower run-on of 60 to 180 seconds after the burners stop. If your furnace is starting, running a minute or two, stopping, and starting again every five minutes, something is cutting the cycle short. The reason you should care, beyond the noise and the uneven temperatures, is that every start is the hardest moment in a furnace's life. Ignitors crack on startup, heat exchangers flex on every warm-up, and a furnace that cycles 15 times an hour is aging three times as fast as one that cycles five.

## Figure out which kind of short cycle you have

Watch one full cycle at the furnace with the burner door off. There are three different patterns, and each points to a different cause.

- **Burners light, run several minutes, shut off while the blower keeps running, then relight a minute or two later.** The furnace is overheating and tripping the high-limit switch.
- **Burners light, run three to ten seconds, and drop out. The furnace retries, and after three failures it locks out.** That is a flame-proving problem, almost always the flame sensor.
- **The furnace runs a short but complete cycle, blower shuts down normally, and the thermostat calls again almost immediately.** That is a thermostat or sizing problem; the furnace is doing what it is told.

## Pattern one: limit trips from restricted airflow

The high-limit switch sits in the supply plenum or the blower compartment and opens when the air there exceeds its rating, typically between 160°F and 200°F. When it opens, the gas valve closes and the blower keeps running until the temperature falls, then the furnace relights. The cause is almost always not enough air across the heat exchanger. Start with the filter. A 4-inch media filter that has gone 14 months, or a 1-inch pleated filter in a house with pets, is enough on its own.

Then check the return side. Finished basements in 1950s and 60s Westland and Livonia ranches often have the central return boxed in or a return grille covered by a couch. Supply registers closed in bedrooms upstairs do the same thing. If the filter and registers are fine, the blower itself may be the issue: a weak run capacitor on an older PSC motor, a dirty blower wheel, or an ECM motor programmed to the wrong airflow. A tech measures temperature rise across the furnace, which should sit inside the range printed on the rating plate, usually something like 35 to 65°F. A rise above the top of that range means low airflow.

A heat exchanger that is partially plugged with rust scale on a 25-year-old 80% furnace also restricts airflow and runs hot. That is a furnace near the end, and it is worth reading [how long furnaces last in Michigan](/resources/how-long-do-furnaces-last-michigan/) before paying for a repair on it.

## Pattern two: flame sensor dropout

The flame sensor is a steel rod that sits in the flame of the first burner. The control board runs a small current through it, and the flame rectifies that current to prove ignition. When the rod oxidizes, the signal drops below the threshold, and the board closes the gas valve within seconds. This produces the light-and-die pattern. Three failures in a row and the board locks out for an hour, often with the blower running cold air to purge, then tries again. You end up with a house that is warm for a while, cold for an hour, warm again. The fix is a thorough cleaning of the rod and sometimes replacement if it is pitted. If the sensor is clean and the flame still drops, the ground path between the burner assembly and the board may be corroded, or the gas pressure may be marginal. See [furnace blowing cold air](/resources/furnace-blowing-cold-air/) for the other reasons burners go out.

## Pattern three: the thermostat is being fooled

A thermostat mounted on a wall that gets afternoon sun, directly above a supply register, or next to a floor lamp warms up before the house does and satisfies early. The furnace runs a short cycle, the thermostat cools back down in a few minutes, and the cycle repeats. We have moved thermostats in Ann Arbor two-stories where the original installer put it in a hallway that gets blasted by the closest supply. Older mechanical thermostats have a heat anticipator that can be set too low; most digital models have a cycle-rate setting that can be adjusted. If a newly installed smart thermostat started the short cycling, check whether the common wire was connected; some models pulse the furnace when they try to power themselves off the heating circuit.

## Pattern four: the furnace is too big for the house

This one is common and nobody likes hearing it. A 1,400-square-foot ranch in Canton built in 1998 with decent insulation needs roughly 45,000 to 55,000 BTU of output on the coldest design day. If someone replaced the original furnace with a 100,000 BTU input unit because that is what the old one was, the furnace heats the house to setpoint in four minutes and shuts off, then does it again 10 minutes later. It will keep the house warm, but it will never run long enough to even out the temperature between rooms, it will wear out early, and it will burn more gas than a right-sized unit because every start includes a purge and a warm-up. There is no repair for this short of replacement, and if you are at that point, [what size furnace do I need in Michigan](/resources/what-size-furnace-do-i-need-michigan/) explains how a Manual J load calculation gets the number right.

**A fifth pattern on condensing furnaces: pressure switch flutter.** On high-efficiency furnaces, a pressure switch that is barely making contact, because the inducer is weak, the condensate trap is partly full, or the vent terminations outside are partly blocked, can open and close during a cycle and shut the burners off. The pattern looks like a limit trip but often comes with a pressure-switch code on the board. Snow drifting over the PVC vents in a Superior Township subdivision is a seasonal version of this.

## When to stop and call

If a new filter and open registers do not change the pattern, the next steps require instruments: a temperature probe for rise, a manometer for gas pressure and draft, and a microamp meter for the flame signal. Those are a [furnace repair](/services/furnace-repair/) visit. If the furnace is tripping a limit repeatedly, the longer it runs that way the more it stresses the heat exchanger, so sooner is better. A furnace that has been short cycling for weeks is also a candidate for a combustion analysis to confirm the exchanger has not cracked.

If the furnace is otherwise healthy and the diagnosis is simply oversizing, we will tell you that and not sell you a repair that does nothing. A [furnace tune-up](/services/furnace-maintenance/) each fall catches the filter, flame sensor and airflow issues before they turn into a short-cycling winter.`,
  faqs: [
    {
      q: "How many times an hour should a furnace cycle?",
      a: "Three to five cycles per hour on a cold day is normal for a single-stage furnace. On a mild 45-degree day, one or two cycles an hour is typical. More than six per hour is short cycling.",
    },
    {
      q: "Can a dirty filter cause a furnace to short cycle?",
      a: "Yes, and it is the most common cause. Restricted airflow lets the heat exchanger overheat, the high-limit switch shuts the burners off, and the furnace relights once it cools. A fresh filter often fixes it immediately.",
    },
    {
      q: "Does short cycling waste gas?",
      a: "It does. Every start runs the inducer purge and brings a cold heat exchanger up to temperature before useful heat reaches the house. A furnace cycling 15 times an hour can burn noticeably more gas than one running five long cycles for the same heat delivered.",
    },
    {
      q: "Will a bigger furnace heat the house faster?",
      a: "It will reach setpoint faster but cycle constantly, leave far rooms cold, and wear out early. Furnace size should come from a Manual J load calculation, not from the size of the old one.",
    },
    {
      q: "Why does my furnace short cycle only on very cold nights?",
      a: "Extreme cold exposes marginal problems. A weak blower or a borderline pressure switch that gets by at 30 degrees fails when the furnace runs continuously at minus 10. The underlying cause is the same, just harder to see in mild weather.",
    },
  ],
  relatedServices: ["furnace-repair", "furnace-maintenance", "furnace-installation"],
  relatedResources: [
    "furnace-blowing-cold-air",
    "what-size-furnace-do-i-need-michigan",
    "how-long-do-furnaces-last-michigan",
    "furnace-tune-up-checklist",
  ],
};
