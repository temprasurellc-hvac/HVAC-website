import type { Service } from "../types";

export const hvacMaintenance: Service = {
  slug: "hvac-maintenance",
  name: "HVAC Maintenance",
  short: "HVAC Maintenance",
  category: "hvac",
  reviewTopic: "general",
  keywords: [
    "hvac maintenance",
    "hvac tune up",
    "furnace and ac tune up",
    "hvac maintenance near me",
    "heating and cooling maintenance",
    "annual hvac service",
    "hvac inspection",
  ],
  metaTitle: "HVAC Maintenance Ypsilanti MI | Tune-Ups",
  metaDescription:
    "Furnace and AC tune-ups in Ypsilanti and within 20 miles. Combustion analysis, refrigerant charge, static pressure and a written report. Flat-rate.",
  h1: "HVAC Maintenance and Tune-Ups in Ypsilanti and Southeast Michigan",
  heroLead:
    "A real tune-up with instruments and a written report, not a filter change and a sticker. Fall for the furnace, spring for the air conditioner, done by the owner.",
  intro: [
    "There are two kinds of HVAC tune-ups sold in Southeast Michigan. One is a 20-minute visit where a technician changes the filter, vacuums the burner compartment, puts a sticker on the furnace and leaves a quote for something. The other is what Temprasure does: an hour or more with a combustion analyzer, a manometer, a multimeter and a set of gauges, ending in a written report of what every reading was and what it should be. The first kind is cheap because it does not accomplish anything. The second kind is how a furnace in a Michigan basement gets to 25 years and an air conditioner gets to 18.",
    "The furnace visit happens in the fall, before the first night DTE gas starts flowing hard. We pull the burners and clean them, check the heat exchanger for cracks with a light and a mirror and on newer furnaces with a combustion reading that would reveal a leak, test the flame sensor and clean it, verify the ignitor's resistance, measure inducer draft and pressure switch operation, check gas pressure at the manifold, confirm the temperature rise falls inside the range on the rating plate, and run a carbon monoxide check at the registers. That last item is not a formality in a region where almost every house has a gas furnace and a lot of them sit next to a sump pit that keeps the basement damp enough to rust a heat exchanger from the outside.",
    "The air conditioning visit happens in the spring, usually April or May, once it is warm enough outside to run the system under load. We clean the condenser coil, which in this area is coated with cottonwood seed by late May, test the capacitor against its rated microfarads, inspect the contactor for pitting, measure refrigerant charge by superheat and subcooling instead of just reading a pressure, check the evaporator coil and the condensate drain and float switch, verify the temperature split across the coil, and read the amp draw on the compressor and fan motor against the nameplate. A capacitor that reads 10% low in April gets replaced before it strands you in July.",
    "Both visits include the parts of the system that heating and cooling share: the blower wheel and motor, the filter rack and the filter size that actually fits it, the static pressure across the system, the thermostat calibration and wiring, the condensate pump if there is one, and the ductwork connections we can see from the basement. High static pressure is the most common finding on a first visit to a house we have not serviced before, and it is usually an undersized return or a filter that is too restrictive for the blower. Fixing that on a tune-up prevents a motor replacement two years later.",
    "Maintenance is also when we tell you the truth about the equipment's age. A furnace with a rusting heat exchanger or an air conditioner with a slow leak at the coil gets flagged in the report with an honest estimate of how long it has, so a replacement can be planned instead of forced on the coldest night of the year. Customers who want both visits scheduled automatically with priority service and a repair discount can look at the Temprasure Service Agreement, but a single tune-up is available to anyone and priced flat.",
  ],
  signs: [
    {
      title: "Nobody has serviced it since you bought the house",
      text: "Most systems we see on a first visit have not been opened in years. Burners are dusty, the flame sensor is coated, the condenser coil is matted, and the filter is wrong. One visit resets all of that.",
    },
    {
      title: "First cold snap or first heat wave is coming",
      text: "The failures happen when the system goes from idle to full load. A fall furnace visit and a spring AC visit catch the weak ignitor and the dying capacitor before the weather does.",
    },
    {
      title: "Bills creep up each season",
      text: "A dirty coil, low charge, a clogged filter or a blower running on the wrong speed all cost money on the DTE bill without producing a breakdown. Maintenance finds the slow losses.",
    },
    {
      title: "Furnace is over 10 years old",
      text: "Heat exchanger inspection and a carbon monoxide check become genuinely important past the ten-year mark, especially in damp Michigan basements where exchangers rust from the outside.",
    },
    {
      title: "Manufacturer warranty requires it",
      text: "Most equipment warranties require documented annual maintenance. A written tune-up report from a licensed contractor is what the manufacturer asks for when a part claim is filed.",
    },
    {
      title: "Uneven rooms, dust or dry air you have been living with",
      text: "Comfort problems that are not quite breakdowns get diagnosed during maintenance, when there is time to measure static pressure, check dampers and look at the humidifier.",
    },
    {
      title: "You are selling or renting the house",
      text: "A dated tune-up report answers the buyer's inspector or the tenant's questions. It also means the system is not the reason a closing gets delayed.",
    },
  ],
  process: [
    {
      title: "Scheduled at a sensible time",
      text: "Furnace visits in September through November, AC visits in April through June. If you call in January for a furnace tune-up, we do it, but we will tell you the inspection is more useful before the season.",
    },
    {
      title: "Thermostat and controls first",
      text: "We verify the thermostat is calling correctly, check the low-voltage wiring and transformer, and read any stored fault codes off the control board before touching the equipment.",
    },
    {
      title: "Clean and inspect",
      text: "Burners, flame sensor, ignitor, blower wheel and condenser coil cleaned. Heat exchanger, inducer, venting, evaporator coil, drain, pan, contactor and wiring inspected by eye and by test.",
    },
    {
      title: "Measure everything",
      text: "Combustion analysis, gas pressure, temperature rise, static pressure, capacitor microfarads, superheat and subcooling, amp draw, and carbon monoxide at the registers.",
    },
    {
      title: "Written report and plain talk",
      text: "Every reading, what it means, and anything close to failure. If a part should be replaced now, we quote it flat-rate; if it can wait, we say so.",
    },
  ],
  includes: [
    "Burner removal, cleaning and reinstallation",
    "Flame sensor cleaning and microamp test",
    "Hot surface ignitor resistance check",
    "Heat exchanger inspection with light, mirror and combustion analysis",
    "Inducer motor, pressure switch and vent draft verification",
    "Gas manifold pressure check and temperature rise measurement",
    "Carbon monoxide test at the supply registers",
    "Condenser coil cleaning and fin inspection",
    "Capacitor microfarad test and contactor inspection",
    "Refrigerant charge verification by superheat and subcooling",
    "Evaporator coil, condensate drain, pan and float switch inspection and clearing",
    "Blower wheel inspection, motor amp draw and speed setting review",
    "Static pressure measurement and filter sizing review",
    "Thermostat calibration, wiring check and humidifier operation check in season",
  ],
  pricing: [
    "A single furnace or air conditioner tune-up is a flat price, quoted when you book, and it includes every item on the list above with a written report. There is no dispatch fee on a scheduled maintenance visit, because the visit is the service. If we find a part that should be replaced, that repair is quoted separately as a flat rate and you decide; the tune-up price does not change based on what we find.",
    "Booking both the fall furnace visit and the spring AC visit together, or joining the Temprasure Service Agreement, brings the per-visit cost down and adds priority scheduling and a discount on any repairs during the year. We explain the difference when you call and never push the agreement on someone who only wants one visit.",
    "Maintenance is scheduled during normal hours by design, but if the only time that works for you is an evening or a Saturday, that is the same flat price. We do not charge overtime on anything.",
  ],
  faqs: [
    {
      q: "How often does an HVAC system need maintenance?",
      a: "Once a year for each side: the furnace in the fall and the air conditioner in the spring. Heat pumps that run year-round benefit from both visits as well. Skipping years is where most of the avoidable failures we see come from.",
    },
    {
      q: "What is actually different about your tune-up?",
      a: "Instruments and a report. We measure combustion, gas pressure, temperature rise, static pressure, capacitor values, refrigerant charge by superheat and subcooling, and carbon monoxide at the registers, and we write the numbers down. A visual check and a filter change is not maintenance.",
    },
    {
      q: "Do you change the filter?",
      a: "Yes, if you have one on hand or want us to bring the right size. More importantly, we check that the filter rack is the right size for the blower. A lot of Southeast Michigan furnaces have a one-inch filter slot choking a blower that needs a four-inch media cabinet.",
    },
    {
      q: "Will you try to sell me parts during the tune-up?",
      a: "Only parts that are measurably failing. A capacitor reading well below its rating or a flame sensor that will not clean up gets quoted because it will fail this season. A part that is simply old does not. The report shows the readings so you can see why.",
    },
    {
      q: "Can you inspect the heat exchanger for cracks?",
      a: "Yes. We look with a light and mirror, and on sealed-combustion furnaces we use combustion readings that change when exhaust is leaking into the air stream. A confirmed crack means the furnace is shut down and replacement is quoted; we show you the evidence either way.",
    },
    {
      q: "Does maintenance keep the manufacturer warranty valid?",
      a: "Most manufacturers require proof of annual service to honor parts claims, especially on the heat exchanger and compressor. Our written report with the date and readings is what you would submit.",
    },
    {
      q: "What time of year should I schedule?",
      a: "Furnace: September through November. Air conditioner: April through June, once the outdoor temperature is high enough to run the system under real load. We can do either any time of year, but the readings are more meaningful in season.",
    },
    {
      q: "Can you do the furnace and AC on the same visit?",
      a: "We can inspect both, but a proper AC charge check needs warm weather and a proper furnace combustion check is best done when it is cold enough to run a full cycle. Two visits in their seasons give you better information. The service agreement bundles them.",
    },
    {
      q: "My system is new. Does it still need a tune-up?",
      a: "Yes, and the first-year check is the one that catches installation issues: a charge that was set by pressure only, a condensate trap that was never primed, a blower speed left on the default. It is also when the warranty clock starts needing documentation.",
    },
  ],
  related: ["furnace-maintenance", "ac-maintenance", "heat-pump-maintenance", "service-agreements", "hvac-repair"],
  resources: [
    "furnace-tune-up-checklist",
    "ac-tune-up-checklist",
    "how-often-change-furnace-filter",
    "furnace-filter-sizes-and-merv-ratings",
    "carbon-monoxide-furnace-safety-michigan",
  ],
  cityIntros: [
    "Maintenance is the service most {city} homeowners skip and the one that would save them the most. A furnace in a {era} house near {neighborhood} that has been tuned every fall runs quieter, uses less {utility} gas and goes two decades without a midwinter failure; one that has never been opened fails the first week of January and gets replaced in a panic. Temprasure does HVAC maintenance in {city} with instruments, a combustion analyzer and a written report, and the owner does the visit himself. {city} is about {drive} minutes from our shop, so a fall furnace tune-up or a spring AC visit is an easy appointment to keep, and both are priced flat with no dispatch fee.",
    "What we find on a first maintenance visit in {city} is usually the same list. A flame sensor coated enough to cause intermittent lockouts, a condenser coil near {landmark} packed with cottonwood, a one-inch filter slot on a blower that needs more airflow, a capacitor reading low, and a condensate drain one season away from flooding the basement floor. None of those are breakdowns yet. All of them become breakdowns if nobody looks. A Temprasure tune-up in {zip} measures every one, cleans what needs cleaning, replaces only what is measurably failing, and leaves you with a report that tells you where your {era} system actually stands.",
    "Temprasure runs furnace and air conditioner maintenance across {county}, and {city} is on the fall and spring schedule every year. We set furnace visits for September through November so the combustion check and carbon monoxide reading are done before the heating season, and AC visits for April through June so the refrigerant charge can be verified under real load. For {city} homes from {neighborhood} to the streets around {landmark}, that means two visits a year from the same person, a written record of every reading, and a system that is far less likely to make an emergency call on the coldest or hottest day of the year.",
    "Not every tune-up in {city} is equal, and homeowners in {county} have learned to ask what is actually included. Ours includes a combustion analysis and a carbon monoxide check on the furnace, a superheat and subcooling charge verification on the air conditioner, a static pressure reading across the whole system, and a capacitor test against its rating, with every number written on a report you keep. It does not include a sales pitch. If the {era} system in your {city} house near {neighborhood} has a part that is measurably about to fail, we quote the flat-rate repair and let you decide. If it is simply old, we tell you how long we think it has.",
    "If you own a {city} rental or manage a few houses in {zip}, HVAC maintenance is how you avoid a tenant calling you at midnight in February. Temprasure schedules fall and spring visits for every unit, coordinates access with tenants, and sends you a report per property with the readings and any recommended repairs. We know the {era} rental stock around {neighborhood}, the furnaces that were installed in batches and fail in batches, and the condensate problems that come with damp {county} basements. A maintained system is also one that a {utility} rebate or a buyer's inspector has no complaint about.",
  ],
  cityAngles: [
    "Combustion safety is the part of {city} maintenance we take most seriously, and the housing explains why. The {era} around {neighborhood} almost all have gas furnaces in basements that stay damp from a sump pit or a Michigan-basement foundation, and moisture rusts a heat exchanger from the outside while the furnace looks fine from the front. On every {city} furnace tune-up we inspect the exchanger with a light and mirror, run the combustion analyzer, and read carbon monoxide at the registers with the blower running. A furnace that passes gets a report that says so. A furnace that does not gets shut down with the evidence shown to you, and we have made that call in {county} basements more than once without ever being wrong about it.",
    "Airflow is the second thing a {city} tune-up has to measure, because it is what quietly kills equipment here. The sheet-metal trunk and flex branches in the {era} subdivisions near {landmark} were sized for the original furnace, and the returns were almost always too small. A newer, more powerful blower in that system runs against high static pressure, overheats the furnace in winter and freezes the coil in summer. We measure static pressure on every {city} visit, compare it to what the blower is rated for, and look at the filter rack and return grille before anything else. The fix is often a filter cabinet that fits a proper four-inch filter and a blower speed adjustment, done on the spot, and it saves a motor replacement two years out.",
    "Spring AC maintenance in {city} has to deal with what the outdoors does to a condenser. The cottonwood along the Huron River corridor and the mature trees in the older parts of {neighborhood} coat a coil in a few weeks, and a matted coil raises head pressure, pulls more amps and shortens the compressor's life. We clean the condenser coil on every {city} AC visit, check the fins for damage, and only then measure charge by superheat and subcooling so the reading reflects a clean system. We also test the capacitor against its rating, because the {utility} grid sags on hot afternoons across {county} and a weak capacitor is the first thing to give up when voltage drops.",
    "Condensate is the maintenance item {city} homeowners never think about until the basement floor is wet. A high-efficiency furnace makes water all winter and an air conditioner makes it all summer, and in the {era} homes common around {neighborhood} that water runs through a trap, a pump or a long line to a floor drain or a sump pit that may not be where the installer thought it was. We clear the drain, check the trap, test the pump and the float switch on every {city} tune-up, because a clogged line in July shuts the AC down through the float switch if you are lucky and floods the finished basement in {zip} if you are not.",
  ],
  cityFaqs: [
    {
      q: "When should I schedule maintenance in {city}?",
      a: "Furnace in September through November, air conditioner in April through June. {city} is about {drive} minutes from our shop and we run both seasons on a regular schedule, so booking early gets you the dates you want.",
    },
    {
      q: "Is there a dispatch fee for a tune-up?",
      a: "No. A scheduled maintenance visit in {city} is a flat price that includes the full inspection and the written report. A dispatch fee only applies to repair calls.",
    },
    {
      q: "What does a {city} furnace tune-up include?",
      a: "Burner cleaning, flame sensor and ignitor testing, heat exchanger inspection, combustion analysis, gas pressure, temperature rise, static pressure, a carbon monoxide check at the registers and a written report. Common findings in the {era} around {neighborhood} are coated flame sensors and undersized filter racks.",
    },
    {
      q: "Do you check the carbon monoxide level?",
      a: "Yes, on every furnace visit, at the supply registers with the blower running. Damp basements across {county} rust heat exchangers from the outside, and the CO reading is the check that matters.",
    },
    {
      q: "Can you service the air conditioner before it gets warm?",
      a: "We can inspect and clean it, but the refrigerant charge check by superheat and subcooling needs outdoor temperatures in the 60s or above to be accurate. We schedule {city} AC visits accordingly.",
    },
    {
      q: "Will you replace parts during the visit?",
      a: "Only parts that are measurably failing, like a capacitor reading low or a flame sensor that will not clean up, and only after quoting the flat rate. Anything else goes in the report as a watch item.",
    },
    {
      q: "Do you offer a plan for both visits?",
      a: "Yes, the Temprasure Service Agreement covers the fall furnace tune-up and the spring AC tune-up, with priority scheduling and a discount on repairs. Many {city} customers are on it; many others just book the two visits individually.",
    },
    {
      q: "Can you maintain the systems in my {city} rentals?",
      a: "Yes. We schedule each unit in {zip}, coordinate with tenants, and send you a report per address with the readings and anything that needs attention.",
    },
    {
      q: "Does maintenance really prevent breakdowns?",
      a: "It prevents the common ones. Flame sensor lockouts, capacitor failures, frozen coils from dirty filters and condensate floods are the bulk of our emergency calls in {county}, and every one of them shows up on a tune-up months before it fails.",
    },
  ],
  cityCloses: [
    "Book a furnace or air conditioner tune-up in {city} before the season starts and the equipment in your {era} home will thank you in January and July. A fall visit catches the coated flame sensor and the rusting heat exchanger; a spring visit catches the weak capacitor and the clogged drain before the first heat wave. Call or text Temprasure at (313) 701-9471 and Al will find a date that works, with no dispatch fee on a scheduled maintenance visit.",
    "A maintained system in {city} is a quieter house, a lower {utility} bill and a winter without an emergency call on the coldest night of the year. Our tune-up is an hour with a combustion analyzer, a manometer and gauges, not a filter change and a sticker, and it ends with a written report of every reading. Schedule online or by phone, and we will come out to {neighborhood} with the instruments and leave you the numbers.",
    "Temprasure runs fall and spring maintenance across {county} every year, and {city} is on the route both seasons. Furnace visits fill up in October and AC visits fill up in May, so booking early gets you the date you want. Get on the schedule now, or ask about the Temprasure Service Agreement and let us handle the reminders, the priority scheduling and the repair discount for you. Either way, call and we will take it from there.",
    "Whether your {city} furnace is three years old or twenty-three, it is worth an hour with a combustion analyzer and a written report, and the same goes for the air conditioner that has been sitting outside near {landmark} all winter. Call Temprasure and we will take care of both in their seasons, flat-rate, without a sales pitch, and with an honest word about how much life the equipment in {zip} has left. Reach out today.",
  ],
};
