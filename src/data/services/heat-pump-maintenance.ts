import type { Service } from "../types";

export const heatPumpMaintenance: Service = {
  slug: "heat-pump-maintenance",
  name: "Heat Pump Maintenance",
  short: "Heat Pump Maintenance",
  category: "heating",
  reviewTopic: "general",
  keywords: [
    "heat pump maintenance",
    "heat pump tune up",
    "heat pump service",
    "heat pump inspection",
    "heat pump cleaning",
    "annual heat pump service",
  ],
  metaTitle: "Heat Pump Maintenance & Tune-Up Ypsilanti MI",
  metaDescription:
    "Heat pump tune-ups in Ypsilanti and within 20 miles. Fall and spring visits covering defrost, reversing valve, charge, coils and dual-fuel staging. Flat-rate.",
  h1: "Heat Pump Maintenance in Ypsilanti and Southeast Michigan",
  heroLead:
    "A heat pump runs twelve months a year, so it needs two tune-ups: one before heating season to verify defrost and backup, one before cooling season to clean coils and check the charge.",
  intro: [
    "A furnace rests all summer and an air conditioner rests all winter. A heat pump does neither. It is the only piece of HVAC equipment in a Southeast Michigan house that runs through the humid stretch of July, the shoulder seasons, and the polar vortex nights of January, reversing itself dozens of times a day in winter to shed frost. That workload is why heat pumps need maintenance twice a year, and why skipping it costs more than it does on a furnace: a heat pump that drifts out of spec does not usually stop, it quietly hands the house to electric strip heat or the gas furnace, and the first symptom is a DTE bill that doubled two months ago.",
    "Temprasure's fall heat pump tune-up is built around the winter failure points. We test the defrost control board and the defrost sensor, and we watch an actual defrost cycle initiate and terminate. We verify the reversing valve shifts cleanly in both directions. We check the charge against the manufacturer's heating-mode chart, which is different from the cooling chart and which a lot of technicians skip. We test the electric backup strips and their sequencer, or on a dual-fuel system we confirm the furnace is healthy and the balance point on the thermostat is set where the equipment's capacity curve and current rates say it should be. We check the outdoor unit's clearance, its riser stand and its drainage so defrost water will not freeze it to the pad in February.",
    "The spring visit is closer to an air conditioner tune-up with a few additions. The outdoor coil gets washed from the inside out, because a heat pump coil that spent all winter cycling through frost and thaw collects more debris than an AC coil does. The run capacitor is tested against its rating, the contactor is inspected, amp draws are recorded on the compressor and fan, the condensate drain is flushed and the float switch is tested, and the charge is verified by superheat and subcooling in cooling mode. We also check that the thermostat is switching modes correctly, since a dual-fuel thermostat that is still trying to stage the furnace in May wastes gas.",
    "Both visits are instrument-based and both end with a written report of the readings, what is healthy, what is marginal, and a flat-rate price for anything we recommend. We do not replace parts that are in spec. We do tell you honestly when a 14-year-old builder-grade heat pump has a weakening compressor and a reversing valve that is getting slow, so that a replacement with a cold-climate unit and DTE rebates can happen on your timeline. Our service agreement covers both heat pump visits, adds priority scheduling when something fails, and discounts repairs, and most heat pump owners find it the simplest way to keep up.",
  ],
  signs: [
    {
      title: "It has been more than six months",
      text: "Heat pumps run year-round and the manufacturers specify two visits a year. A heat pump that has gone a full year without service is overdue in both seasons.",
    },
    {
      title: "Winter electric bills crept up",
      text: "The most reliable sign that the heat pump is leaning on backup heat more than it should. A tune-up finds the defrost, sensor or charge issue behind it.",
    },
    {
      title: "Longer or more frequent defrost cycles",
      text: "Steam and a brief cool blast every 30 to 90 minutes is normal in cold weather. Defrost every ten minutes or a cycle that runs a long time means a sensor or board is drifting.",
    },
    {
      title: "Outdoor unit sitting in ice",
      text: "Defrost water freezing under the unit and building up over the winter restricts airflow and stresses the fan. A fall visit checks clearance, drainage and the riser stand.",
    },
    {
      title: "Furnace running on mild days on a dual-fuel system",
      text: "If the furnace is carrying the house at 40 degrees, the balance point or outdoor sensor is wrong. That is a configuration check we make every fall.",
    },
    {
      title: "Weak cooling and a dirty outdoor coil",
      text: "A coil that cycled through frost all winter is packed with debris by spring. Cleaning it before cooling season restores capacity and protects the compressor.",
    },
    {
      title: "You are not sure what is normal",
      text: "New heat pump owners often cannot tell a failing system from a working one. A tune-up explains what the equipment is doing and gives you a baseline.",
    },
  ],
  process: [
    {
      title: "Fall and spring scheduling",
      text: "We book the heating-season visit in September or October and the cooling-season visit in April or May. Service-agreement members get first pick of dates and a text when we are on the way.",
    },
    {
      title: "Fall: defrost, reversing valve and backup",
      text: "Defrost board and sensor tested, a defrost cycle observed start to finish, reversing valve verified in both modes, heating-mode charge checked, backup strips or furnace and balance point confirmed, outdoor clearance and drainage checked.",
    },
    {
      title: "Spring: coils, electrical and cooling charge",
      text: "Outdoor coil washed from inside out, capacitor and contactor tested, amp draws recorded, indoor coil inspected, condensate drain flushed and float switch tested, cooling-mode superheat and subcooling verified.",
    },
    {
      title: "Both visits: airflow and controls",
      text: "Filter and blower checked, static pressure and temperature split recorded, thermostat mode switching and staging verified, low-voltage wiring inspected for rodent and weather damage.",
    },
    {
      title: "Report and recommendations",
      text: "The readings in writing, what is in spec and what is drifting, and flat-rate prices on anything we recommend. No parts replaced that do not need it.",
    },
  ],
  includes: [
    "Defrost control board and defrost sensor testing with an observed defrost cycle",
    "Reversing valve operation verified in heating and cooling",
    "Refrigerant charge verified against the correct seasonal chart",
    "Outdoor coil cleaning, washed from the inside out",
    "Run capacitor tested against nameplate rating",
    "Contactor inspection and compressor and fan amp draws",
    "Electric backup strip and sequencer testing on standalone systems",
    "Furnace health check and balance point verification on dual-fuel systems",
    "Outdoor temperature sensor and thermostat staging check",
    "Outdoor unit clearance, riser stand and defrost drainage inspection",
    "Indoor coil inspection and condensate drain flush with float switch test",
    "Filter, blower and static pressure check",
    "Low-voltage wiring and disconnect inspection",
    "Written report with readings and honest recommendations",
  ],
  pricing: [
    "A single heat pump tune-up, fall or spring, is one flat rate for the full seasonal visit, with no dispatch fee on scheduled maintenance and no surcharge for a weekend date. Any component that should be replaced is quoted separately as a flat rate and only replaced with your approval.",
    "Because a heat pump needs both visits, the service agreement is the better value for nearly every heat pump owner. It covers the fall and spring tune-ups at a combined price, gives you priority scheduling when the unit ices over in January or quits in July, and discounts repairs. For dual-fuel systems it also covers the furnace side of the fall visit, so the whole system is maintained under one plan.",
  ],
  faqs: [
    {
      q: "How often should a heat pump be serviced?",
      a: "Twice a year: once in fall before heating season to verify defrost, the reversing valve and backup heat, and once in spring before cooling season to clean the coil and check the charge in cooling mode. It runs year-round, so it needs both.",
    },
    {
      q: "What's different about maintaining a heat pump versus an air conditioner?",
      a: "The defrost system, the reversing valve, the backup heat and the heating-mode charge check, none of which exist on an air conditioner. A technician who treats a heat pump like an AC and only visits in spring misses the components that fail in winter.",
    },
    {
      q: "Is it normal for my heat pump to steam in winter?",
      a: "Yes. During a defrost cycle the unit briefly runs in cooling mode to melt frost off the outdoor coil, which produces steam outside and a few minutes of cooler air inside. What is not normal is defrost every few minutes, a cycle that never ends, or ice that never clears.",
    },
    {
      q: "Why does my winter electric bill matter for maintenance?",
      a: "A heat pump rarely fails outright; it drifts and hands the house to the backup heat, which costs several times as much to run. A rising winter bill is often the only symptom, and the fall tune-up catches the defrost, sensor or charge issue before the bill does.",
    },
    {
      q: "Do you check the furnace on a dual-fuel system?",
      a: "Yes, on the fall visit. We confirm the furnace is healthy, verify the thermostat's balance point so the system switches to gas at the right outdoor temperature, and make sure the two are staging together rather than fighting each other.",
    },
    {
      q: "What's the most common problem you find on heat pump tune-ups?",
      a: "Defrost sensors that have drifted, followed by misconfigured balance points on dual-fuel systems, outdoor units frozen to the pad from their own defrost water, and weak run capacitors. All are inexpensive to correct during maintenance.",
    },
    {
      q: "Does maintenance keep the warranty valid?",
      a: "Most manufacturers require documented annual maintenance to honor the parts warranty, and compressor and reversing valve claims in particular get scrutinized. Our written report with readings is that documentation.",
    },
    {
      q: "Can I do anything myself between visits?",
      a: "Keep the filter fresh, keep snow and ice cleared from around the outdoor unit without hitting the coil, keep leaves and grass clippings away in summer, and watch the electric bill. If the unit is ever encased in ice, switch to Emergency Heat and call.",
    },
    {
      q: "Is a maintenance plan worth it for a heat pump?",
      a: "More than for any other equipment, because it needs two visits a year and because failures in winter are expensive and quiet. The service agreement bundles both visits, prioritizes you when something breaks, and discounts repairs.",
    },
  ],
  related: ["heat-pump-repair", "service-agreements", "heat-pump-installation", "hvac-maintenance", "furnace-maintenance"],
  resources: [
    "cold-climate-heat-pumps-in-southeast-michigan",
    "ac-tune-up-checklist",
    "furnace-tune-up-checklist",
    "lower-heating-bill-michigan-winter",
    "how-often-change-furnace-filter",
  ],
  cityIntros: [
    "A heat pump in {city} never gets a season off. It cools the house through the muggy stretch of July, carries the heating load through fall and spring, and reverses itself dozens of times a day in January to shed frost. Temprasure maintains heat pumps across {cityFull} on a two-visit schedule built for that workload: a fall tune-up focused on defrost, the reversing valve and backup heat, and a spring tune-up focused on coils, electrical and cooling charge. We are about {drive} minutes away in Ypsilanti, and both visits are a flat rate with no dispatch fee.",
    "Most {city} homeowners with a heat pump got it in the last few years, and many are maintaining it like an air conditioner: one visit in spring, if that. The winter components are the ones that fail here. A defrost sensor that drifts in a {era} home near {neighborhood} does not stop the heat; it shifts the house onto strip heat or the gas furnace, and the {utility} bill is the first thing to notice. Temprasure's fall heat pump tune-up for {zip} catches exactly that, and the spring visit handles the cooling side.",
    "Here is what the fall heat pump visit looks like at a {city} home: the defrost board and sensor get tested and we watch a real defrost cycle, the reversing valve gets shifted both ways, the charge gets checked against the heating chart, the backup strips or the furnace get verified, and on a dual-fuel system the balance point on the thermostat gets set where the equipment and current {utility} rates say it belongs. Then we walk outside and check that the unit near {landmark} is sitting high enough on its stand to drain and not get buried. That is the Temprasure visit across {cityFull}.",
    "Temprasure maintains every brand of air-source heat pump in {city}, from the dual-fuel systems installed on top of gas furnaces in the {era} around {neighborhood} to the standalone units with electric backup in the newer {zip} subdivisions. Two visits a year, both instrument-based, both ending with a written report of the readings. The service agreement bundles them with priority scheduling for the January night the unit ices over, and {county} homeowners on the plan get first pick of fall and spring dates. No parts get replaced that are still in spec.",
    "A heat pump that is slightly out of spec in {city} costs more to run than a furnace that is slightly out of spec, because the heat pump's fallback is electric resistance heat at several times the cost. That is the whole case for twice-a-year maintenance, and it is why Temprasure runs a separate fall and spring visit for {cityFull} heat pumps rather than a single spring check. We serve every address from {landmark} to {neighborhood} at one flat rate per visit, and we tell you honestly when an aging unit is reaching the point where a new cold-climate system with {utility} rebates makes more sense.",
  ],
  cityAngles: [
    "Dual-fuel systems are the most common heat pump setup in {city}, and the balance point is the maintenance item that matters most on them. A heat pump paired with a gas furnace in a {era} home near {neighborhood} should hand off to the furnace at an outdoor temperature set by the equipment's capacity curve and the current {utility} gas and electric rates. Installers often leave it at a default that is either too high, so the furnace runs on days the heat pump should own, or too low, so the heat pump grinds through cold it cannot handle. On every fall visit in {cityFull} we check the outdoor sensor, review the balance point and reset it if the rates or the equipment say it should move. It is a ten-minute adjustment that changes the whole winter's bill.",
    "Winter drainage is the physical maintenance item for {city} heat pumps. Every defrost cycle sends water off the outdoor coil, and in a {county} January that water freezes under and around the unit. A heat pump on a pad at grade near {landmark} ends up frozen into a sheet of ice by February, with the coil's bottom rows blocked and the fan working against it. On the fall visit we check the riser stand height, the drainage path and the clearance around the unit, and where the original installer set it directly on a pad we recommend a stand. In spring we check whether the ice did any damage to the fan, the coil fins or the base pan.",
    "The newer subdivisions in {city} have standalone heat pumps with electric backup strips, and those are the systems where deferred maintenance hurts most. The strips are sized to carry the house if the heat pump fails, and they do, silently. A {zip} homeowner whose defrost sensor drifted in November may not notice anything until the {utility} bill in January, because the house stayed warm the whole time on resistance heat. Our fall tune-up for these homes tests the strips and sequencer so they work when needed, and tests the defrost system so they are not needed when they should not be. The report tells you which heat source carried the house during the visit.",
    "Older heat pumps in {city} need an honest annual read more than a tune-up. The builder-grade units installed in the {era} around {neighborhood} 12 to 15 years ago are now at the age where reversing valves slow down and compressors weaken, and a maintenance visit is where we track that across seasons. We record amp draws, charge and defrost behavior each visit and compare them to the last, so when a {cityFull} homeowner asks how much life is left we can answer with numbers. If the trend says the unit has two winters left, we say so, and we lay out what a cold-climate replacement with {utility} rebates and the federal credit would look like, on your schedule rather than in the middle of a cold snap.",
  ],
  cityFaqs: [
    {
      q: "How often should a heat pump be serviced in {city}?",
      a: "Twice a year. A fall visit before heating season for defrost, the reversing valve and backup heat, and a spring visit before cooling season for coils, electrical and the cooling-mode charge. Heat pumps in {county} run year-round and need both.",
    },
    {
      q: "What does a heat pump tune-up cost in {city}?",
      a: "Each seasonal visit is one flat rate with no dispatch fee and no weekend surcharge. The service agreement covers both visits for {cityFull} homes at a combined price with priority scheduling and a repair discount.",
    },
    {
      q: "Do you check the furnace on my {city} dual-fuel system?",
      a: "Yes, on the fall visit. We confirm the furnace is healthy, verify the balance point on the thermostat, and make sure the two systems stage together correctly for current {utility} rates.",
    },
    {
      q: "Is it normal for my {city} heat pump to steam and blow cool air in winter?",
      a: "Yes, briefly, during a defrost cycle. Defrost every few minutes, a cycle that never ends, or an outdoor unit that never clears its ice is a problem, and the fall tune-up is where we catch it.",
    },
    {
      q: "What problems do you find most on {city} heat pump tune-ups?",
      a: "Drifted defrost sensors, misconfigured balance points on the dual-fuel systems common in the {era}, units frozen to the pad from their own defrost water, weak run capacitors and dirty outdoor coils in spring.",
    },
    {
      q: "Why is my {city} winter electric bill so high if the house is warm?",
      a: "The heat pump has likely handed the load to the electric strips, which still warm the house at several times the cost. A tune-up finds the defrost, sensor or charge problem behind it and verifies the strips only run when they should.",
    },
    {
      q: "Does maintenance keep my {city} heat pump's warranty valid?",
      a: "Most manufacturers require documented annual maintenance for parts warranty claims, especially on compressors and reversing valves. The written report with readings we leave is that documentation.",
    },
    {
      q: "Can you maintain the heat pump at my {city} rental?",
      a: "Yes. We schedule with tenants, do the full seasonal visit, and send the owner a report with readings. Landlords with multiple {county} properties can put all of them on one service agreement.",
    },
    {
      q: "How long does a heat pump tune-up take?",
      a: "About an hour to an hour and a half at a {city} home. The fall visit can run longer because we wait to observe a full defrost cycle. Anyone done in 15 minutes did not test the winter components.",
    },
  ],
  cityCloses: [
    "Book the fall heat pump tune-up for your {city} home before the first freeze and the spring visit before the first heat wave, and stop finding out about problems through the electric bill. Call or text Temprasure at (313) 701-9471 to get on the schedule, and ask about the service agreement that covers both visits at one price with priority scheduling if the unit ices over in between.",
    "A heat pump in {cityFull} runs twelve months a year, and so should its maintenance. Get on Temprasure's fall and spring schedule, and let the readings on the defrost cycle, the reversing valve and the charge tell you how the system is doing instead of the {utility} bill two months after something drifted. One flat rate per visit, no dispatch fee, and a written report every time.",
    "From the dual-fuel systems near {neighborhood} to the standalone units out by {landmark}, Temprasure keeps {city} heat pumps running through winter and summer with two instrument-based visits a year and an honest annual read on how much life is left. Landlords with several properties can put them all on one agreement. Reach us any time by phone, text or the online form to schedule.",
    "If nobody has checked the defrost cycle, the outdoor sensor or the balance point on your {zip} heat pump since the day it was installed, now is the time, before the next cold snap puts the house on strip heat. Call Temprasure and we will come out from Ypsilanti with the instruments to do it right, set what has drifted, and leave you the numbers in writing.",
  ],
};
