import type { Resource } from "../types";

export const waterAroundFurnaceCondensateDrain: Resource = {
  slug: "water-around-furnace-condensate-drain",
  title: "Water Around the Furnace: Condensate Drain Problems Explained",
  metaTitle: "Water Around Furnace: Condensate Drain Fixes",
  metaDescription:
    "A puddle at the base of the furnace in summer or winter almost always traces to the condensate drain. Where the water comes from, how to clear it, and leaks.",
  category: "troubleshooting",
  quickAnswer:
    "Water around a furnace comes from one of three places: the AC evaporator coil's drain pan overflowing in summer, a high-efficiency furnace's internal condensate trap or drain line clogging in winter, or a failed condensate pump. Clear the drain line with a wet-dry vacuum at the cleanout, flush the trap, and check that the pump runs. If the water is from the humidifier, it is a different fix.",
  published: "2026-10-16",
  updated: "2026-10-16",
  readMinutes: 5,
  body: `## First, figure out which season you are in

The furnace cabinet in a Michigan basement handles water in two different ways depending on the month, and the season tells you where to look.

In summer, the evaporator coil sitting on top of the furnace pulls moisture out of the air. On a humid July day in Ypsilanti with a dew point of 70, a 3-ton system can condense 15 to 20 gallons. That water collects in a drain pan under the coil and leaves through a 3/4-inch PVC line, either by gravity to a floor drain or through a small condensate pump to a laundry tub or outside.

In winter, if your furnace is a 90%-plus model with white PVC venting through the side of the house, the secondary heat exchanger condenses water out of the exhaust gases, roughly a half gallon to a gallon per hour of run time. That water is slightly acidic, drains through an internal trap, and leaves through the same kind of PVC line, often the same line the AC uses.

If your furnace is an 80% model with a metal flue and the puddle appears in January, the water is not from the furnace itself. Look at the humidifier mounted on the ductwork next to it, or at the water heater beside it.

## Summer: the AC drain pan and line

Pull the coil access panel or look at the base of the coil housing. If the pan is full and water is dripping over the lip, the drain line is clogged. Algae and a slimy biofilm grow in the pan and line because the water is cool and the basement is dark, and after a few summers they plug the trap or the first elbow. The PVC line usually has a tee with a cap near the furnace; that is the cleanout. Remove the cap, and either pour a cup of distilled white vinegar in and wait 30 minutes or, better, put a wet-dry vacuum on the far end of the line where it exits and pull the clog through. Reconnect, run the AC, and confirm water flows.

Most systems installed after about 2010 have a float switch, a small white box clipped to the pan or an inline switch on the drain. When the water rises, the switch opens the thermostat circuit and the AC stops. That is why a clogged drain often shows up as an AC that quit on a hot day rather than as a flood; the switch protected the floor. If the thermostat is blank or the AC will not run and there is water in the pan, that is the float doing its job. Clear the line and it resets on its own.

If the pan itself is cracked or rusted through, which happens on 20-year-old coils, no amount of drain clearing helps. The coil housing has to come apart, and at that age the conversation turns to [repair or replace your air conditioner](/resources/repair-or-replace-air-conditioner/).

A second summer cause is a frozen evaporator that thawed. A block of ice on the coil sheds water faster than the pan drains, and it runs down the cabinet onto the floor. If you found ice on the suction line, the puddle is a symptom of the freeze, and [AC frozen coil causes](/resources/ac-frozen-coil-causes/) covers that.

## Winter: the high-efficiency furnace trap

A condensing furnace has a plastic trap, usually a molded box or a loop of hose, on the side of the cabinet or inside the blower compartment. It fills with sludge over a few seasons. When it blocks, water backs up into the inducer housing and the pressure switch cannot close, so the furnace refuses to light; some boards post a pressure-switch code for it. Before it gets that far, water finds its way out of a hose connection and shows up on the floor.

The trap on most models can be removed and flushed with warm water. Hoses that run from the inducer and the heat exchanger to the trap should be checked for kinks and cracks. Reinstall the trap full of water; a dry trap lets exhaust gases bypass it, and on a furnace that is a carbon monoxide pathway. If you are not sure the trap went back correctly, call. This is also a standard item in a fall [furnace tune-up](/services/furnace-maintenance/).

The winter-specific problem in Southeast Michigan is a frozen drain line. If the condensate exits through an exterior wall to a splash block, as it does on a lot of 1990s builds in Canton and Plymouth Township, the line freezes solid during a polar-vortex stretch. The furnace keeps condensing, the water has nowhere to go, and it backs up into the furnace. Rerouting the drain to an interior floor drain or a pump, or wrapping the exterior section with heat tape, prevents it from happening again.

## The condensate pump

If the furnace is far from a floor drain, the water goes into a small plastic box with a pump and a float. These fail quietly. The float sticks, the pump motor burns out, the check valve on the outlet clogs, or the discharge tube freezes outside. When the pump cannot keep up, the box overflows. Lift the lid and look. If the box is full and the pump is silent, lift the float by hand; if it runs, the float was stuck. If it does not run, the pump is dead. Most pumps have a safety switch that can be wired to shut the furnace or AC down when the box overfills; many installers skip that wire, which is why you found the puddle instead of a dead system.

## When the water is not from the drain at all

A few other sources end up in the same puddle:

- **Bypass humidifier** mounted on the return or supply plenum, with a clogged drain line or a failed solenoid that lets water run continuously. The water is on the humidifier side of the furnace. See [humidifier maintenance and pad replacement](/resources/humidifier-maintenance-pad-replacement/).
- **Water heater** next to the furnace with a leaking temperature-and-pressure relief valve or a tank that has started to weep.
- **A cracked secondary heat exchanger** on a condensing furnace, which leaks condensate inside the cabinet rather than to the trap. This one is serious and usually comes with a furnace that is 15-plus years old.
- **Foundation seepage** after a heavy rain, which pools in the low spot of the basement floor and happens to be where the furnace is.

Dry the floor completely, then watch where the water reappears first. That tells you the source faster than anything else.

## When to stop and call

If the drain is clear and water keeps coming, if the furnace is locking out with a pressure-switch code, if you see water inside the burner compartment, or if the evaporator pan is rusted through, that is a [furnace repair](/services/furnace-repair/) or [AC repair](/services/ac-repair/) visit. We also install float switches and pump safety switches on systems that never had them, which is a small job that prevents a ruined basement floor the next time a line clogs.`,
  faqs: [
    {
      q: "Why does my furnace leak water in the winter?",
      a: "If it is a high-efficiency furnace with PVC venting, the condensate trap or drain line is clogged or frozen. If it is an 80% furnace with a metal flue, the water is from the humidifier, the water heater, or the foundation, not the furnace.",
    },
    {
      q: "Can I pour bleach in the condensate drain?",
      a: "Vinegar is the safer choice. Bleach can damage the evaporator coil pan and the metal parts of the pump. A cup of white vinegar every month or two during cooling season keeps algae down.",
    },
    {
      q: "Why did my AC stop running and there is water in the pan?",
      a: "The float switch tripped. It opens the thermostat circuit when the pan fills so the water does not reach the floor. Clear the drain line and the switch resets by itself once the water level drops.",
    },
    {
      q: "Is furnace condensate corrosive?",
      a: "Mildly. It has a pH around 3 to 5, which is why condensate lines are PVC and why some municipalities require a neutralizer cartridge before it enters a drain. It will stain concrete over time but is not dangerous to touch.",
    },
    {
      q: "How often should the condensate line be cleaned?",
      a: "Once a year, ideally during the spring AC tune-up. Homes with the drain running to a floor drain in a damp Michigan basement grow algae faster and may need it twice a year.",
    },
  ],
  relatedServices: ["furnace-repair", "ac-repair", "ac-maintenance"],
  relatedResources: [
    "ac-frozen-coil-causes",
    "humidifier-maintenance-pad-replacement",
    "furnace-not-turning-on-troubleshooting",
    "michigan-basement-hvac-moisture-problems",
  ],
};
