import type { Service } from "../types";

export const furnaceRepair: Service = {
  slug: "furnace-repair",
  name: "Furnace Repair",
  short: "Furnace Repair",
  category: "heating",
  reviewTopic: "furnace",
  keywords: [
    "furnace repair",
    "furnace not working",
    "heating repair",
    "gas furnace repair",
    "furnace service",
    "furnace blowing cold air",
    "furnace won't turn on",
  ],
  metaTitle: "Furnace Repair Ypsilanti MI | Same-Day Service",
  metaDescription:
    "Same-day furnace repair in Ypsilanti and within 20 miles. Flat-rate gas furnace repair for no heat, cold air, short cycling and ignitor failures. Open 24 hours.",
  h1: "Furnace Repair in Ypsilanti and Southeast Michigan",
  heroLead:
    "Furnace won't light, blows cold, short cycles or quit in the middle of a January night? Diagnosed with a meter and a manometer, repaired at a flat rate, usually the same day.",
  intro: [
    "A gas furnace in Southeast Michigan runs for about seven months of the year and logs well over 6,000 heating degree days doing it, which means the parts that wear out do so in a predictable order. Hot-surface ignitors crack after a few thousand cycles. Flame sensors coat over with a layer of oxide and the furnace lights, runs four seconds and shuts down. Inducer motors lose their bearings and scream. Pressure switches stick when a condensate trap clogs or a vent fills with ice. Blower motors and their capacitors give out. Control boards fail from power surges. Temprasure has repaired every one of these on every brand of furnace in Washtenaw and western Wayne County, and the truck carries the ignitors, sensors, switches, capacitors, motors and boards that cover the great majority of calls.",
    "We work on 80 percent and 90-plus percent furnaces alike: the single-stage Carrier, Bryant, Lennox, Trane, Goodman, Amana, Rheem, Ruud, York, Payne, Armstrong, Comfortmaker and Tempstar units in most basements around here, the two-stage and variable-speed models in newer subdivisions, and the older standing-pilot furnaces still heating a surprising number of 1950s ranches in Westland and Ypsilanti Township. The diagnosis is the same regardless of the nameplate. We read the diagnostic LED, check gas pressure with a manometer, test the ignitor's resistance, read the flame sensor's microamps, confirm the inducer is pulling the pressure switch closed, measure static pressure and temperature rise across the heat exchanger, and look at the exchanger itself for cracks and rust-through.",
    "That last step matters more than any other. A cracked heat exchanger on an aging furnace lets flue gases, including carbon monoxide, into the air the blower is pushing through the house. On furnaces past about 20 years, especially 80 percent units that have run with a restricted filter for years, it is common enough that we inspect for it on every repair visit, not just when the CO alarm goes off. If we find a crack, we show it to you, and the repair conversation becomes a replacement conversation, because a new heat exchanger on an old furnace rarely makes financial sense. If the exchanger is sound, we fix whatever actually failed and tell you so.",
    "Our reviews are full of two things: same-day service when other shops quoted a week, and honest repair-over-replace calls. Al has told more than one homeowner that the furnace another company condemned needed a flame sensor cleaning and a new ignitor, not a new furnace, and we are not shy about encouraging a second opinion on any replacement quote, including our own. Repairs are quoted as a flat rate before the work starts, the dispatch fee that covers the trip and diagnosis is credited toward the repair, and nights, weekends and holidays are billed at the same rate as a weekday morning. We are open 24 hours because furnaces do not fail at convenient times.",
  ],
  signs: [
    {
      title: "No heat at all",
      text: "The thermostat calls, nothing happens. Could be a tripped safety, a dead control board, a failed inducer or a blown fuse on the board. Check the switch on the side of the furnace and the breaker before you call, then call.",
    },
    {
      title: "Lights, runs a few seconds, shuts off",
      text: "The classic dirty flame sensor. The burners ignite, the sensor cannot prove flame through its oxide coating, and the board shuts the gas off. Three tries and it locks out.",
    },
    {
      title: "Clicking but no ignition",
      text: "The gas valve clicks or the ignitor glows and the burners never light, or the ignitor never glows at all. Usually a cracked hot-surface ignitor, a failed gas valve or a pressure switch that will not close.",
    },
    {
      title: "Blowing cold air",
      text: "The blower runs but the air is room temperature or cooler. Ignition failure, a limit switch tripped from overheating, or on 90-plus units a frozen or blocked condensate line.",
    },
    {
      title: "Short cycling",
      text: "Heats for two or three minutes and shuts down over and over. A plugged filter, a failing limit switch, an oversized furnace, or a thermostat issue. Short cycling also cracks heat exchangers.",
    },
    {
      title: "Loud squeal, rattle or boom",
      text: "A squeal at startup is the inducer or blower bearing. A rattle is often a loose panel or a cracked blower wheel. A boom on ignition is delayed ignition from dirty burners and needs attention before it damages the exchanger.",
    },
    {
      title: "CO alarm or a headache in the house",
      text: "A carbon monoxide alarm, or headaches and nausea that clear up when you leave the house, mean a possible heat exchanger or venting problem. Get everyone out, call us from outside.",
    },
    {
      title: "Heating bill up with no explanation",
      text: "A furnace running longer to hold the same temperature has a dirty burner, a weak blower, a stuck damper or a duct leak. It shows up on the DTE bill before it shows up as a breakdown.",
    },
  ],
  process: [
    {
      title: "Phone triage",
      text: "Tell us the symptoms. We will walk you through the furnace switch, the breaker, the filter and the thermostat batteries. If it is a gas smell or a CO alarm, we tell you to leave the house and call DTE or 911 first.",
    },
    {
      title: "Diagnosis with instruments",
      text: "Diagnostic code read, gas pressure checked with a manometer, ignitor resistance and flame sensor microamps measured, inducer and pressure switch verified, limit switches tested, static pressure and temperature rise recorded, heat exchanger inspected.",
    },
    {
      title: "Flat-rate quote before any work",
      text: "We show you what failed and quote the repair as one number. If the fix is a flame sensor cleaning, that is what we quote. If the exchanger is cracked, we show you and talk about replacement.",
    },
    {
      title: "Repair from the truck",
      text: "Ignitors, flame sensors, pressure switches, capacitors, inducer motors, blower motors, limit switches, control boards and gas valves for the common brands ride with us. Most repairs finish on the first visit.",
    },
    {
      title: "Run it through full cycles",
      text: "We watch at least two complete heat cycles, verify temperature rise is inside the nameplate range, confirm the vent is drafting, and check the CO reading in the supply air before we leave.",
    },
    {
      title: "Straight talk about what's next",
      text: "If the furnace has a few years left, we say so. If it is on its last winter, we say that too and give you a free replacement estimate with no pressure to decide tonight.",
    },
  ],
  includes: [
    "Hot-surface ignitor and spark ignitor replacement",
    "Flame sensor cleaning and replacement",
    "Pressure switch, limit switch and rollout switch replacement",
    "Inducer motor and blower motor replacement",
    "Blower and inducer capacitor replacement",
    "Control board, transformer and relay replacement",
    "Gas valve replacement and gas pressure adjustment",
    "Burner cleaning and delayed-ignition correction",
    "Condensate trap, line and pump repair on high-efficiency furnaces",
    "Frozen exterior PVC vent clearing and re-pitching",
    "Heat exchanger inspection with CO testing on every visit",
    "Thermostat and low-voltage wiring repair",
    "Standing pilot, thermocouple and pilot assembly repair on older furnaces",
    "Repairs on every residential brand, 80 percent and 90-plus percent",
  ],
  pricing: [
    "Every furnace repair starts with a flat dispatch fee that covers the trip and a full instrument diagnosis, and that fee is credited toward the repair if you approve it. Repairs are then quoted as a flat rate for the specific job, so a flame sensor is one price, an ignitor is another, an inducer motor is a third, and the number you approve is the number you pay regardless of how long the work takes.",
    "The most common furnace repairs we run, flame sensors, ignitors, pressure switches and capacitors, are the least expensive ones. Motors, boards and gas valves cost more and vary by brand. The only repair that often does not make sense is a heat exchanger on a furnace past 15 years, and if that is what you are facing we show you the crack, explain the options, and give you a free replacement estimate alongside the repair price.",
    "There is no extra charge for nights, weekends or holidays. A furnace that dies at 11 p.m. on Christmas Eve is repaired at the same flat rate as one that dies on a Wednesday afternoon in March.",
  ],
  faqs: [
    {
      q: "What should I check before calling for furnace repair?",
      a: "The power switch on the side of the furnace, which looks like a light switch and gets bumped. The breaker. The filter, if it is black. The thermostat batteries and whether it is set to Heat. The furnace door, which has a safety switch that opens if the panel is not seated. If those are fine, call us.",
    },
    {
      q: "Why does my furnace light and then shut off after a few seconds?",
      a: "Almost always a dirty flame sensor. The sensor's metal rod gets a coating of oxide that insulates it from the flame, the board cannot confirm ignition, and it shuts the gas off for safety. After three tries it locks out. Cleaning or replacing the sensor is one of the quickest repairs we do.",
    },
    {
      q: "My high-efficiency furnace stopped on the coldest night of the year. Why?",
      a: "On 90-plus percent furnaces, the exterior PVC exhaust vent can ice over during a polar vortex stretch, or the condensate line can freeze where it runs through an unheated space. Either one trips the pressure switch and the furnace will not light. We clear the vent or thaw the line, then correct the pitch or routing so it does not happen again.",
    },
    {
      q: "What is a hot-surface ignitor and why do they fail?",
      a: "It is the ceramic element that glows orange to light the burners on most furnaces made since the 1990s. It is brittle and cracks from thermal cycling, usually after several years. A failed ignitor means the gas valve never opens. We stock them for every major brand.",
    },
    {
      q: "Is it safe to keep running a furnace that short cycles?",
      a: "Not for long. Short cycling stresses the heat exchanger and ignitor, and the underlying cause, often a plugged filter or a failing limit switch, can lead to overheating. Change the filter if it is dirty and call us if it keeps happening.",
    },
    {
      q: "How do you check for a cracked heat exchanger?",
      a: "Visual inspection with a light and a mirror or camera where the design allows, a combustion analysis looking for CO in the supply air, and watching the flame pattern when the blower starts. A flame that wavers or rolls out when the blower kicks on is a classic sign of a breach. We inspect on every repair visit, not just when asked.",
    },
    {
      q: "Can you repair my old standing-pilot furnace?",
      a: "Yes. Thermocouples, pilot assemblies and gas valves on older furnaces are routine for us. We will also tell you honestly if the furnace is at the age where a repair is a short-term patch, but if it is sound, we fix it.",
    },
    {
      q: "Do you repair furnaces in rental properties?",
      a: "Yes. We coordinate with tenants for access, make the repair, and send the owner or property manager the invoice and a note on what we found. No heat in a rental in January is a call we move quickly on.",
    },
    {
      q: "Should I get a second opinion if another company said I need a new furnace?",
      a: "Yes, and we will be that second opinion. More than a few furnaces that were condemned by someone else have turned out to need a flame sensor and an ignitor. If the exchanger really is cracked, we will show you, and you will know the replacement is justified.",
    },
    {
      q: "Do you charge more for furnace repair at night or on weekends?",
      a: "No. Same dispatch fee, same flat-rate repair price, 24 hours a day, every day of the year.",
    },
  ],
  related: ["emergency-heating-repair", "furnace-maintenance", "furnace-installation", "heating-repair", "hvac-repair"],
  resources: [
    "furnace-not-turning-on-troubleshooting",
    "furnace-blowing-cold-air",
    "furnace-short-cycling-causes",
    "furnace-error-codes-what-the-blinking-light-means",
    "carbon-monoxide-furnace-safety-michigan",
  ],
  cityIntros: [
    "Furnace trouble in {city} tends to show up on the first real cold night of November, and again during whatever polar vortex stretch January brings. Both times, Temprasure is {drive} minutes away in Ypsilanti with a truck full of ignitors, flame sensors, pressure switches, inducer motors and control boards. We repair every brand of gas furnace in the {era} around {neighborhood} and the newer homes near {landmark}, we quote the repair as a flat rate before touching anything, and if the honest answer is that the furnace needs a cleaning and not a replacement, that is the answer you get.",
    "Temprasure has fixed a lot of furnaces in {cityFull} that another company said were done. Not because the other company was lying, but because a furnace that will not stay lit looks terrifying to a homeowner and a quick replacement quote is easy to write. We diagnose with a manometer, a meter and a combustion analyzer, inspect the heat exchanger on every {city} call, and tell you exactly what failed. For {county} homes on {utility} gas, that usually means a repair in the low hundreds and a furnace that runs another five winters.",
    "Every furnace repair call from {city} gets the same questions from us before we leave the shop: Is the switch on the side of the furnace on? Is the filter black? Does it try to light? Those thirty seconds on the phone sometimes fix the problem outright, and when they do not, they tell us which parts to have ready. We serve all of {city}, from {neighborhood} to the {landmark} area, at the same flat rate day or night, and {zip} addresses are well inside our same-day range. The truck is stocked for every brand you will find in a {county} basement.",
    "The furnaces in {city} are a mix: 20-year-old 80 percent units in the {era} that make up much of the housing stock, high-efficiency condensing furnaces in the newer streets, and a handful of standing-pilot survivors in the oldest homes. Temprasure repairs all of them. We understand why a 96 percent furnace in {cityFull} quits on a minus-10 night when its exterior vent ices over, why a 1998 furnace near {neighborhood} is short cycling on a plugged filter, and when a cracked heat exchanger turns a repair into a replacement conversation. Same-day service across {county}, flat-rate pricing, owner on every call.",
    "No heat in {city} is not a problem you should have to explain to a call center. When you call Temprasure, Al answers, and he is the one who shows up. We have been running furnace repairs across {county} long enough to know the common failures in {zip}: flame sensors that need cleaning, hot-surface ignitors that cracked, inducer motors that gave up, condensate traps that clogged on high-efficiency units. The truck is stocked for all of it, the repair is quoted as one flat number before work starts, and there is no night or weekend surcharge for {city} customers.",
  ],
  cityAngles: [
    "The {era} that dominate {city} were often built with a furnace sized for a house with no insulation, single-pane windows and an unfinished basement. Decades of upgrades later, that same furnace, or its like-for-like replacement from the 1990s, is badly oversized, and oversized furnaces short cycle. Every short cycle stresses the ignitor and the heat exchanger, and that is why so many {city} repair calls from {neighborhood} involve a cracked ignitor on a furnace that is otherwise healthy. We fix the ignitor, but we also check the temperature rise and the blower speed, because sometimes a simple adjustment gets a furnace cycling properly and makes the next ignitor last twice as long.",
    "High-efficiency furnaces in {city} have a winter problem that 80 percent units never did: they make water. A 90-plus percent furnace condenses several gallons a day out of its exhaust, and that condensate has to drain through a trap, a line and usually a pump to get out of the basement. In the {cityFull} homes near {landmark} where that line runs through an unheated corner or out through a wall, it freezes during a cold snap, the pressure switch opens, and the furnace shuts down on the coldest night of the year. The exterior PVC vent can ice over the same way. We thaw it, clear it and then fix the routing or pitch so it does not happen again in February.",
    "Basements in {city} are hard on furnaces. The older homes around {neighborhood} have Michigan basements with damp stone or block walls, and the moisture rusts burner assemblies, corrodes flame sensors and eventually eats through 80 percent heat exchangers from the outside in. Even the drier block basements of the {era} tend to be where the dryer, the cat litter and the laundry chemicals live, and chlorides in that air are a known heat exchanger killer. On a {city} repair visit we look at the combustion air situation and the condition of the exchanger, not just the part that stopped working, because a furnace in a damp {county} basement needs a different conversation than one in a dry utility room.",
    "Power quality on the {utility} grid is the quiet cause of a lot of {city} furnace failures. A surge from a summer storm or a winter outage and restart can take out a control board, and a brownout can stall an inducer motor mid-cycle and leave the furnace in a lockout with a blinking code nobody can decipher. We read the code, test the board, inducer and transformer, and replace only what actually failed. For {zip} homes that lose power regularly, we will also talk about a surge protector at the furnace, which is inexpensive compared to a second control board.",
  ],
  cityFaqs: [
    {
      q: "How quickly can you get to a no-heat call in {city}?",
      a: "{city} is about {drive} minutes from our shop. Most furnace repair calls are handled the same day, and during a cold snap we prioritize homes with no heat over everything else on the schedule.",
    },
    {
      q: "What furnace problems are most common in {city} homes?",
      a: "Dirty flame sensors, cracked hot-surface ignitors, failed inducer motors and stuck pressure switches on the {era}, and frozen condensate lines or iced-over exterior vents on the high-efficiency furnaces in newer {city} homes.",
    },
    {
      q: "Is there an extra charge for furnace repair in {city} at night or on weekends?",
      a: "No. The dispatch fee and the flat-rate repair price are the same at any hour and on any day, including holidays, for every {cityFull} address.",
    },
    {
      q: "My {city} furnace is 20 years old. Is it worth repairing?",
      a: "If the heat exchanger is sound and the repair is an ignitor, sensor, switch, motor or board, yes, usually. If the exchanger is cracked, no, and we will show you the crack. We inspect the exchanger on every repair call so you get that answer either way.",
    },
    {
      q: "I smell gas in my {city} house. Should I call you?",
      a: "Leave the house first. Do not flip switches or use the phone inside. From outside, call {utility} or 911 to shut off and clear the gas. Once the utility has made it safe, call us and we will find and fix the cause.",
    },
    {
      q: "Do you repair the furnace brands common in {city}?",
      a: "All of them. Carrier, Bryant, Lennox, Trane, Goodman, Amana, Rheem, Ruud, York, Payne, Armstrong, Comfortmaker, Tempstar and the rest. The parts that fail are largely universal and we stock them.",
    },
    {
      q: "Can you give a second opinion on a furnace replacement quote in {city}?",
      a: "Yes, and we encourage it. We have found plenty of condemned furnaces in {county} that needed a flame sensor and an ignitor. If the exchanger really is cracked, we will confirm that too, so you can replace with confidence.",
    },
    {
      q: "Why did my high-efficiency furnace in {city} quit on the coldest night?",
      a: "Most likely a frozen condensate line or an iced-over exterior PVC vent, both of which trip the pressure switch. We thaw and clear it, then fix the pitch or routing so it does not recur.",
    },
    {
      q: "Do you handle furnace repairs for rental properties in {city}?",
      a: "Yes. We schedule with tenants, make the repair, and send the invoice and findings to the owner or manager. No heat in a {city} rental in winter is a call we move on quickly.",
    },
  ],
  cityCloses: [
    "If your furnace has quit or is acting up in {city}, call or text Temprasure at (313) 701-9471. Al answers, the truck is stocked with ignitors, flame sensors, pressure switches and inducer motors, and we are about {drive} minutes away. You get a flat-rate repair quoted before the work starts, no overtime charge at any hour, and an honest word about whether the furnace is worth fixing or whether it is time to plan for something new.",
    "Furnace repair in {cityFull} does not have to mean a week without heat followed by a replacement pitch. Reach Temprasure any hour, get a real arrival time instead of a four-hour window, a real diagnosis with a manometer and a combustion analyzer, and a flat-rate price you approve before anyone touches the furnace. If another company already condemned it, we are glad to be the second opinion.",
    "Whether you are in {neighborhood}, near {landmark} or anywhere else in {city}, no heat is a call we move on fast, especially when the forecast is dropping and there are kids or older adults in the house. Call, text or book online with Temprasure and we will get your furnace running again, usually the same day, at one flat rate with the heat exchanger inspected before we leave.",
    "Cold house in {zip}? Check the switch on the side of the furnace, the breaker and the filter, then call us if it still will not run. Temprasure repairs every brand of gas furnace across {county} at one flat rate, 24 hours a day, with the owner on every job and the parts that fail most riding on the truck. We are a short drive from Ypsilanti and ready to come out.",
  ],
};
