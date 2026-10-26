import type { Resource } from "../types";

export const furnaceBlowingColdAir: Resource = {
  slug: "furnace-blowing-cold-air",
  title: "Furnace Blowing Cold Air: 7 Causes and What to Do About Each",
  metaTitle: "Furnace Blowing Cold Air: 7 Causes",
  metaDescription:
    "Blower running but the air is cold? From a fan set to On to a dirty flame sensor, failed ignitor or overheating furnace, how to tell which problem you have.",
  category: "troubleshooting",
  quickAnswer:
    "A furnace blows cold air when the blower runs but the burners are not lit or have shut off. The most common reasons are the thermostat fan set to On instead of Auto, a dirty flame sensor dropping the flame after a few seconds, a cracked hot-surface ignitor, a furnace overheating on a clogged filter, or a condensate problem on a high-efficiency unit.",
  published: "2026-10-16",
  updated: "2026-10-16",
  readMinutes: 5,
  body: `## Cold air is different from no air

If nothing is coming out of the vents at all, you have a power or safety-switch issue, and [furnace not turning on troubleshooting](/resources/furnace-not-turning-on-troubleshooting/) is the right guide. This one is for the furnace that is clearly alive, with the blower pushing air, but the air is room temperature or colder. That means the burners either never lit or lit and went out, and the furnace is running the blower to cool itself down or because something told it to. There are a handful of distinct causes and each one has its own tell.

## Causes one and two: the fan setting and the flame sensor

**Cause one: the fan is set to On.** Check the thermostat first. If the fan is set to On rather than Auto, the blower runs continuously whether the burners are lit or not. Between heating cycles that is unheated basement air moving through 60-degree ductwork, and it feels cold at the register. Switch the fan to Auto. If the air warms up on the next cycle, you are done. A surprising number of calls in November are this, especially after someone switched the fan to On during summer to even out an upstairs bedroom.

**Cause two: the burners light and go out after a few seconds.** Stand at the furnace and watch through the sight glass. If the burners light, run three to eight seconds, and shut off, then try again a minute later, the flame sensor is dirty. The sensor is a thin metal rod in the flame path that proves to the board that gas is burning. A film of oxidation on it blocks the tiny current it carries, the board thinks there is no flame, and it closes the gas valve to be safe. After three tries it locks out and the blower may run cold for a while to purge.

This is the single most common furnace repair we do in Washtenaw County between October and December. The fix is cleaning the rod with a fine abrasive pad; it takes a few minutes. The sensor is in the burner compartment next to a gas assembly, so we would rather you leave the cleaning to someone who has done it, but recognizing the symptom tells you the call is a small one.

## Cause three: the ignitor never glows

On a furnace built after the mid-1990s, there is no pilot light. A hot-surface ignitor, a brittle silicon carbide or silicon nitride element, glows orange to light the gas. If you watch the sequence and the inducer runs, the pressure switch clicks, but nothing glows and the gas valve never opens, the ignitor is cracked or the board is not sending it power. Silicon carbide ignitors are fragile and ten to fifteen years is a long life for one. After three failed attempts the board locks out and you get a blinking code. See [pilot light vs hot-surface ignitor](/resources/pilot-light-vs-hot-surface-ignitor/) for how the two systems differ and why the newer one fails more often but more cheaply.

## Cause four: the furnace is overheating

A furnace that lights, runs for a few minutes, then shuts the burners off while the blower keeps going is tripping its high-limit switch. The limit opens when the air leaving the heat exchanger gets too hot, usually around 160 to 200°F depending on the model. The common cause is a clogged filter or blocked return; the blower cannot move enough air to carry the heat away. Change the filter and open any closed registers. If it keeps cycling, the blower motor itself may be slowing, or the heat exchanger may be partially restricted. This is also the pattern of a furnace that was oversized when it was installed, which is common in 1960s Garden City ranches where someone put in a 100,000 BTU furnace because the old one was that size.

Repeated limit trips are not harmless. Each one stresses the heat exchanger, and a cracked exchanger is the failure that forces a replacement. We explain the full cycling picture in [furnace short cycling causes](/resources/furnace-short-cycling-causes/).

## Cause five: the pressure switch will not prove draft

On a 90%-plus furnace the inducer motor has to pull a vacuum on a small rubber hose before the pressure switch closes and allows ignition. If the condensate trap is full, the intake or exhaust PVC on the side of the house is blocked by snow or a bird nest, or the hose has a crack, the switch stays open. The inducer runs, nothing else happens, and after a while the board may run the blower. During a heavy snow in a Pittsfield Township subdivision where the vent terminations sit two feet off the ground, this is the first thing to check. Walk outside and look for drifted snow or ice over the pipes.

## Causes six and seven: gas supply and heat pump behavior

**Cause six: the gas supply.** If the furnace tries to light and the ignitor glows but no flame appears, confirm the gas is on. The shutoff valve on the pipe next to the furnace should have its handle in line with the pipe. If a water heater in the same basement is also out, the problem is upstream, and in rural parts of Augusta or Sumpter Township on propane that often means an empty tank. If you smell gas at any point, leave the house and call DTE at 800-947-5000 before you do anything else. Do not try to relight anything.

**Cause seven: a heat pump in defrost or on backup.** If your system is a heat pump with the furnace as backup, cold air for a few minutes in winter is normal: the outdoor unit reverses into defrost and the indoor coil briefly gets cold until the backup heat kicks in. If the backup never engages, you get long stretches of lukewarm air. That is a control problem, not a furnace problem, and it is a [heat pump repair](/services/heat-pump-repair/) visit.

## When to stop and call

If the burners never light after a reset, if they light and go out more than twice, if you see flames rolling out the front of the burner compartment, or if you notice soot or a sharp exhaust smell, shut the furnace off at the service switch and call. A flame that is lifting off the burners or burning yellow instead of blue means combustion is wrong and the heat exchanger may be compromised.

We handle [furnace repair](/services/furnace-repair/) 24 hours a day including holidays with no overtime surcharge, and a flame sensor or ignitor is a same-visit fix because we carry them on the truck. If the house is below 55 and dropping on a polar-vortex night, tell us that; we move those calls to the front.`,
  faqs: [
    {
      q: "Why does my furnace blow cold air then warm air?",
      a: "That is the normal blower delay on a modern furnace. The blower starts 30 to 60 seconds after the burners light, so the first air through the ducts is whatever was sitting in them. If the air never warms up, the burners did not stay lit.",
    },
    {
      q: "Is it safe to keep running a furnace that blows cold air?",
      a: "Running the blower is harmless. What is not safe is repeatedly resetting a furnace that is locking out, or running one that has tripped a rollout switch. Those point to combustion problems that need an inspection before the furnace runs again.",
    },
    {
      q: "Can a dirty filter make the furnace blow cold air?",
      a: "Yes. A clogged filter makes the furnace overheat and trip its high-limit switch, which shuts the burners off while the blower keeps running to cool the heat exchanger. Change the filter and see if the cycle changes.",
    },
    {
      q: "How do I know if my flame sensor is dirty?",
      a: "The burners light, run a few seconds, and go out. Then the furnace tries again, and after three tries it locks out. That short-flame pattern is almost always a flame sensor and is a minor repair.",
    },
    {
      q: "Why is my high-efficiency furnace blowing cold air after a snowstorm?",
      a: "The PVC intake or exhaust pipe on the outside of the house is probably buried or iced over. The pressure switch cannot prove draft and the furnace will not light. Clear the snow away from both pipes and reset the furnace.",
    },
  ],
  relatedServices: ["furnace-repair", "emergency-heating-repair", "heat-pump-repair"],
  relatedResources: [
    "furnace-not-turning-on-troubleshooting",
    "pilot-light-vs-hot-surface-ignitor",
    "furnace-short-cycling-causes",
    "furnace-error-codes-what-the-blinking-light-means",
  ],
};
