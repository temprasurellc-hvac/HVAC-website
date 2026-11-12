import type { Resource } from "../types";

export const furnaceTuneUpChecklist: Resource = {
  slug: "furnace-tune-up-checklist",
  title: "Furnace Tune-Up Checklist: What a Real Inspection Covers",
  metaTitle: "Furnace Tune-Up Checklist: What Gets Checked",
  metaDescription:
    "What a proper gas furnace tune-up covers in Southeast Michigan: CO test, heat exchanger, flame sensor, inducer, gas pressure, temperature rise, drain.",
  category: "maintenance",
  quickAnswer:
    "A real furnace tune-up covers combustion safety and performance, not just a filter swap. It includes a carbon monoxide test, heat exchanger inspection, flame sensor cleaning, inducer and pressure switch check, gas pressure and temperature rise measurement, blower amp draw, condensate drain clearing on 90%+ units, and a thermostat cycle test. Expect 45 to 90 minutes.",
  published: "2026-10-16",
  updated: "2026-10-16",
  readMinutes: 5,
  body: `## Why the checklist matters more than the word "tune-up"

"Furnace tune-up" is one of the loosest terms in our trade. Some companies send a tech who changes the filter, vacuums the burner compartment, and leaves in 15 minutes. Others, including us, run through a written list that takes 45 to 90 minutes and produces actual measurements. The difference shows up in January. The furnace that got the 15-minute version is the one that fails on a 5-degree night in a Westland ranch, usually on the flame sensor or the inducer, both of which would have been caught by a technician who was looking.

Below is the list we work through on a standard gas furnace in Washtenaw and Wayne County homes. Use it to judge what you are getting when you book a [furnace maintenance](/services/furnace-maintenance/) visit from anyone, not just us.

## Safety and combustion checks

These come first because they are the reason a furnace inspection exists.

- **Carbon monoxide test in the supply air and at the flue.** We use a calibrated CO meter, not a plug-in home alarm. Supply air should read zero. Flue CO is measured along with oxygen to judge how the burners are firing. A rising CO number across years is an early heat exchanger warning.
- **Heat exchanger inspection.** On an 80% furnace we look at the cells with a mirror and light and check for cracks, rust-through and discoloration. On a 90%+ condensing furnace we also check the secondary exchanger and the condensate trap for the acidic water it produces. A cracked exchanger is a shut-the-furnace-off finding, and we will show you the crack before we say that.
- **Gas pressure at the manifold.** Natural gas on DTE's system should land around 3.5 inches of water column at the furnace valve. Too high overfires the burners; too low gives a lazy yellow flame and sooting.
- **Flame appearance and flame sensor.** The flame should be steady blue with small orange tips. The flame sensor, a thin metal rod in the flame path, gets a light cleaning with fine abrasive and the microamp signal gets measured. Under about 1 microamp the furnace will lock out intermittently. This single step prevents more no-heat calls than anything else on the list.
- **Venting and draft.** On atmospheric 80% units we check the metal flue for rust, proper slope and a solid connection into the chimney liner. On 90%+ units we check the PVC intake and exhaust outside for cracks, sag and the screen being clear. Snow burying a sidewall vent is a real December problem in the subdivisions around Canton and Saline.
- **Ignition.** Hot surface ignitors are inspected for cracks and the resistance checked. A silicon nitride ignitor reading far outside its spec is replaced before it fails. Standing pilots on older furnaces get the thermocouple output checked.

If you ever smell gas at any point, not just during a tune-up, leave the house, then call DTE at 800-947-5000 and 911 from outside. Do not flip switches on the way out.

## Mechanical and airflow checks

- **Inducer motor.** We listen for bearing noise, check the amp draw and confirm the pressure switch proves draft cleanly. A whining inducer is the most common fall replacement we do on 2000s-era furnaces in Pittsfield and Superior Township.
- **Pressure switch and hose.** The rubber hose cracks and the port clogs with condensate. Both cause the "pressure switch open" fault.
- **Blower motor and wheel.** Amp draw is compared to the motor plate. The wheel is checked for dust buildup, which unbalances it and kills airflow. On ECM blowers we check the module for error history.
- **Temperature rise.** Supply temperature minus return temperature, measured with the furnace at steady state, must fall within the range printed on the rating plate, often 35 to 65°F for an 80% furnace. Too high means not enough air is moving across the exchanger, which overheats it. Too low means the exchanger is sweating or the gas is underfired.
- **Static pressure.** A manometer reading across the furnace tells us whether the ductwork is choking the blower. Over 0.8 inches is a problem we see constantly in 1950s ranches with undersized returns.
- **Filter.** Checked, sized correctly and replaced if you have one on hand. More on that in [how often to change your furnace filter](/resources/how-often-change-furnace-filter/).
- **Belt and pulleys** on the few belt-drive blowers still running in prewar Ypsilanti houses.

## Condensing furnace extras (90% and higher)

A condensing furnace produces several gallons of acidic condensate a day in the depths of winter. That water has to go somewhere, and in a Michigan basement it usually goes through a trap, a length of 3/4-inch PVC, and either a floor drain or a condensate pump.

- Flush the trap and the drain line with water, and clear the slime that grows in it.
- Test the condensate pump by filling the reservoir and confirming it empties, and check the float switch that shuts the furnace down if the pump fails.
- Confirm the intake and exhaust terminations outside are the right distance apart and clear of dryer vents and shrubs.
- Check the secondary heat exchanger for white mineral crust, which signals restricted condensate flow.

A clogged condensate line is the number one cause of a 90% furnace running for a few minutes and shutting down in February, which is exactly the symptom covered in [furnace short cycling causes](/resources/furnace-short-cycling-causes/).

## Controls and electrical

- Thermostat is cycled through a heat call and we confirm the furnace sequences correctly: inducer, pressure switch, ignitor, gas valve, flame proven, blower on, and then the shutdown order in reverse.
- Low-voltage wiring and the control board are checked for scorched terminals and a stored fault history, which most boards keep for the last several faults.
- Door switch, limit switch and rollout switches are tested for function, because a stuck limit is a safety device that is no longer doing its job.
- The 120-volt feed and the furnace disconnect are checked for loose connections. A loose neutral on a 1970s furnace circuit in a Garden City colonial produces random reboots that look like a board failure.

## What you get at the end

A real tune-up ends with numbers on paper or on your phone: CO readings, gas pressure, temperature rise, static pressure, flame sensor microamps, ignitor resistance, blower and inducer amps. Those numbers are what make year-over-year comparison possible, and they are how we tell a homeowner in Ann Arbor that the 22-year-old furnace is actually fine, or tell a homeowner in Belleville that the 12-year-old one has a heat exchanger problem and it is time to read [repair or replace your furnace](/resources/repair-or-replace-furnace/).

We schedule most of these in September and October before the first real cold, and [service agreement](/services/service-agreements/) customers get the fall furnace visit and the spring AC visit on a schedule without having to call.`,
  faqs: [
    {
      q: "How long should a furnace tune-up take?",
      a: "Between 45 and 90 minutes for a standard gas furnace. A 90%+ condensing furnace with a condensate pump takes longer than an 80% unit. Anything under 30 minutes is a filter change with a label on it.",
    },
    {
      q: "When is the best time to schedule it?",
      a: "September through early November in Southeast Michigan. You want it done before the first sustained cold, and before the no-heat calls start competing for the schedule in December.",
    },
    {
      q: "Does a tune-up include the filter?",
      a: "We check and size it, and we will install one you have on hand. Standard 1-inch filters are inexpensive and you should keep a few in the house; 4 to 5-inch media filters are specific to your cabinet and we can bring the right one if you tell us the model.",
    },
    {
      q: "Can a tune-up find a cracked heat exchanger?",
      a: "Often, yes, through visual inspection and CO readings, though some cracks only open when the exchanger is hot. If we suspect one, we will show you the evidence and explain what the options are rather than just telling you the furnace is condemned.",
    },
    {
      q: "Do I still need a tune-up on a newer furnace?",
      a: "Yes. Most manufacturer warranties expect documented annual maintenance, and the flame sensor and condensate trap on a new high-efficiency furnace need the same cleaning a 15-year-old one does.",
    },
  ],
  relatedServices: ["furnace-maintenance", "furnace-repair", "service-agreements"],
  relatedResources: [
    "prepare-furnace-for-michigan-winter",
    "how-often-change-furnace-filter",
    "furnace-short-cycling-causes",
    "carbon-monoxide-furnace-safety-michigan",
  ],
};
