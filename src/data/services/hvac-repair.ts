import type { Service } from "../types";

export const hvacRepair: Service = {
  slug: "hvac-repair",
  name: "HVAC Repair",
  short: "HVAC Repair",
  category: "hvac",
  reviewTopic: "general",
  keywords: [
    "hvac repair",
    "hvac company near me",
    "heating and cooling repair",
    "hvac service",
    "hvac contractor ypsilanti",
    "heating and air conditioning repair",
    "hvac technician near me",
  ],
  metaTitle: "HVAC Repair Ypsilanti MI | Heating & Cooling",
  metaDescription:
    "Flat-rate HVAC repair in Ypsilanti and within 20 miles. Furnaces, central air, heat pumps, thermostats and ducts fixed by the owner, 24 hours, no overtime.",
  h1: "HVAC Repair in Ypsilanti and Southeast Michigan",
  heroLead:
    "One owner-operated shop for the furnace, the air conditioner, the heat pump, the thermostat and the ducts that connect them. Diagnosed properly, quoted flat-rate, fixed on the first trip whenever the part is on the truck.",
  intro: [
    "Most of the calls that come into Temprasure do not start with a diagnosis. They start with a description: the house is 62 degrees and the furnace is clicking, the upstairs is sweltering while the thermostat says 72, the blower runs all night and never shuts off, the system cuts out every time it rains. The homeowner does not know whether that is a furnace problem, an AC problem, a thermostat problem or a duct problem, and they should not have to. HVAC repair is the service for the whole system, and it is most of what we do between the first cold night in October and the last humid week in September. Al takes the call, asks the questions that narrow it down, and shows up with the truck stocked for all of it.",
    "A Southeast Michigan house usually has four pieces of equipment working as one system: a gas furnace in the basement, an evaporator coil sitting on top of it, a condenser on a pad outside, and a thermostat on the wall telling all of it what to do. In newer subdivisions around Canton, Saline and Pittsfield Township there may be a heat pump in place of the condenser or a zoning board splitting the ducts. In a 1950s ranch in Westland or Garden City the furnace may be the third one in that spot while the ductwork is original. We repair every part of that chain, on every brand, and we spend as much time looking at how the parts talk to each other as we do at any single component. A furnace that locks out on high limit is often an airflow problem, and an airflow problem is often a duct or filter problem, not a furnace problem.",
    "What a repair visit from Temprasure looks like is consistent regardless of which piece failed. We pull the service history if we have it, verify what the thermostat is calling for, check the low-voltage wiring and the transformer, test the control board for stored fault codes, and then go to the equipment with a meter and gauges. On the heating side that means flame sensor microamps, inducer pressure, gas valve voltage and a combustion check. On the cooling side it means capacitor microfarads, contactor condition, refrigerant pressures with superheat and subcooling, and a temperature split across the coil. Only after that do we quote, and the quote is one flat number for the whole repair that you approve before a tool comes out of the bag. The dispatch fee that got us there is credited toward that repair.",
    "The reason people in Ypsilanti and Ann Arbor keep recommending us is not that we are the biggest shop in Washtenaw County, because we are not. It is that we show up when we say we will, including New Year's Eve and the middle of a July heat wave, and that we tell people when a repair is the wrong move. We have talked homeowners out of furnace replacements that a larger company had already quoted, and we have told others plainly that a 20-year-old R-22 system with a leaking coil is past the point where a repair makes sense. The price you are quoted is the price you pay, and nights, weekends and holidays are billed at the same rate as a Tuesday.",
    "If your system is down right now, the fastest route is to call. If it is limping along and you are trying to decide whether to repair or replace, the rest of this page and the linked guides will help you understand what we look for and how we decide. Either way, the first visit is a diagnosis, not a sales pitch.",
  ],
  signs: [
    {
      title: "Furnace runs but the house never warms up",
      text: "The burners light, the blower runs, and the thermostat setpoint never arrives. Usually a dirty filter choking airflow, a furnace cycling on its high limit, a stuck zone damper or a duct that has come apart in the basement.",
    },
    {
      title: "System clicks, hums or buzzes but does not start",
      text: "A furnace clicking without ignition points to the ignitor, flame sensor or pressure switch. A condenser humming without the fan spinning is almost always a capacitor or contactor. Both are first-visit repairs.",
    },
    {
      title: "Thermostat is blank or unresponsive",
      text: "A dead thermostat is often a blown low-voltage fuse on the furnace control board, a tripped float switch on the AC drain, or a shorted wire where it passes through a basement joist. Replacing the thermostat rarely fixes it.",
    },
    {
      title: "Rooms are hot upstairs and cold downstairs",
      text: "Two-story colonials from the 1970s through the 2000s suffer this almost universally. Causes include undersized returns, uninsulated attic ducts, a blower running on the wrong speed tap or a closed damper nobody remembers.",
    },
    {
      title: "Blower runs constantly or will not shut off",
      text: "A stuck fan relay, a thermostat set to ON instead of AUTO, or a furnace that overheated and tripped the limit and is now purging. Constant blower operation on a cold coil also makes the house feel clammy.",
    },
    {
      title: "Utility bill is suddenly higher for the same weather",
      text: "DTE bills that jump without a rate change usually point to a system running longer to do the same work: a failing capacitor, low refrigerant, a cracked heat exchanger cell or ducts leaking into the crawlspace.",
    },
    {
      title: "Strange smells when the system kicks on",
      text: "Burning dust on the first furnace run of fall is normal for ten minutes. A persistent electrical smell, a sweet chemical smell near the coil, or the odor of gas or exhaust is not. Shut the system off and call.",
    },
    {
      title: "Water or ice where it should not be",
      text: "Water on the basement floor near the furnace in summer means a clogged condensate line or cracked pan. Frost on the copper lines means airflow or refrigerant trouble. Both need a visit before they damage something expensive.",
    },
  ],
  process: [
    {
      title: "Describe the symptom, get a real window",
      text: "Tell us what the system is doing, what it did last, and whether anyone has worked on it recently. We tell you whether to shut it down, and give you an arrival window we actually hit.",
    },
    {
      title: "Trace the call from the thermostat down",
      text: "We confirm what the thermostat is asking for, check the 24-volt circuit and the control board fault history, and only then open the equipment. A lot of repairs are solved in the first fifteen minutes this way.",
    },
    {
      title: "Test the equipment with instruments",
      text: "Combustion readings, flame sensor microamps, static pressure, capacitor values, refrigerant pressures and amp draw. We measure instead of guessing so the part we replace is the part that failed.",
    },
    {
      title: "Show you, then quote one number",
      text: "You see the burned contactor or the cracked ignitor and hear what it will cost as a single flat rate. The dispatch fee is credited toward the repair when you say yes.",
    },
    {
      title: "Fix it from the truck",
      text: "Ignitors, flame sensors, pressure switches, capacitors, contactors, motors, relays, transformers, thermostats and drain parts ride with us. Most HVAC repairs are finished the same visit.",
    },
    {
      title: "Run it, verify it, explain it",
      text: "A full heating or cooling cycle with readings taken at the end, a quick look at whatever else is near the end of its life, and plain advice about what to budget for and when.",
    },
  ],
  includes: [
    "Furnace ignition, flame sensor, pressure switch and limit switch repair",
    "Inducer motor, blower motor and ECM module replacement",
    "Control board, transformer, relay and low-voltage fuse replacement",
    "AC capacitor, contactor and condenser fan motor replacement",
    "Refrigerant leak search and recharge on R-410A, R-454B and remaining R-22 systems",
    "Heat pump reversing valve, defrost board and outdoor sensor repair",
    "Thermostat diagnosis, rewiring and replacement, including smart thermostat C-wire fixes",
    "Condensate drain, pump and float switch repair",
    "Gas valve and combustion safety checks with a combustion analyzer",
    "Zone damper, zone board and bypass damper repair",
    "Duct reconnection and sealing when a separated run is the cause of the complaint",
    "Carbon monoxide check at the registers on every furnace repair",
    "Manufacturer warranty lookup before any major part is quoted",
  ],
  pricing: [
    "Every HVAC repair starts with a flat dispatch fee that pays for the trip and a full diagnosis of whatever is wrong, whether that turns out to be the furnace, the air conditioner, the thermostat or the ductwork. When you approve the repair, that fee is credited toward the job. The repair itself is quoted as one flat rate from our price book, so an ignitor is one number, a blower motor is another, and the number does not change if the job runs long or we have to go back to the truck twice.",
    "Small electrical and control repairs are the least expensive calls we run and are usually done inside an hour. Motors, boards, coils and refrigerant work cost more and depend on the equipment. When a repair gets close to the cost of a new piece of equipment, especially on a system older than 15 years, we lay both options out side by side and let you decide, and the estimate for the replacement is free.",
    "We do not add a surcharge for nights, weekends or holidays. A furnace that quits at 2 a.m. in January is repaired at the same flat rate as one that quits on a weekday afternoon.",
  ],
  faqs: [
    {
      q: "What is the difference between HVAC repair and furnace or AC repair?",
      a: "Nothing in how we work. HVAC repair is the catch-all for a system problem when you do not yet know which component failed. We diagnose the whole chain from the thermostat to the registers and fix whatever is actually broken, whether that is the furnace, the condenser, the coil, the thermostat or a duct.",
    },
    {
      q: "Do you repair every brand?",
      a: "Yes. Carrier, Bryant, Lennox, Trane, American Standard, Goodman, Amana, Rheem, Ruud, York, Payne, Armstrong, Comfortmaker, Ducane and the older Sears and Kenmore equipment still running in a lot of Westland and Ypsilanti basements. Residential components are largely universal and we stock the ones that fail.",
    },
    {
      q: "How quickly can you get here?",
      a: "Most repair calls inside our 20-mile radius of 48197 are seen the same day. No-heat calls in winter and no-cooling calls in summer go to the front of the line. We are open 24 hours, and the person who answers is the person who comes out.",
    },
    {
      q: "Is there a charge for the diagnosis?",
      a: "Yes, a flat dispatch fee covers the trip and the diagnosis. If you approve the repair, that fee is applied to the work. If you decide not to repair, you pay only the dispatch fee and you leave with a written explanation of what is wrong.",
    },
    {
      q: "Should I shut the system off while I wait?",
      a: "If you smell gas, see ice on the refrigerant lines, hear a loud grinding or notice a burning smell that does not go away, yes. If the furnace is simply not lighting or the AC is blowing room-temperature air with no other symptom, leaving the thermostat on will not hurt anything.",
    },
    {
      q: "My thermostat is blank. Do I need a new one?",
      a: "Probably not. A blank thermostat is usually a lost 24-volt supply: a blown fuse on the furnace board, a tripped float switch under the coil, or a chewed wire. We check the supply before we replace anything, because a new thermostat on a dead circuit stays blank.",
    },
    {
      q: "Can you fix uneven temperatures between floors?",
      a: "Often, yes. We measure static pressure and airflow at the registers, check blower speed settings, look for closed or broken dampers and inspect the attic and basement runs for leaks. Sometimes the fix is a blower tap and a damper adjustment; sometimes it is a duct repair. We tell you which before we start.",
    },
    {
      q: "Do you work on heat pumps and dual-fuel systems?",
      a: "Yes. The heat pumps going into Washtenaw County homes since the mid-2010s share their outdoor components with central air, and the defrost boards, reversing valves and sensors are familiar. On dual-fuel setups we verify the balance point and the changeover to the gas furnace is set correctly for a Michigan winter.",
    },
    {
      q: "How do I know you will not just tell me to replace it?",
      a: "Ask the people who left our reviews. We have talked homeowners out of furnace replacements that another company already quoted, and we encourage second opinions. Replacement only comes up when the repair cost, the age of the equipment and the refrigerant or parts situation all point the same direction, and even then we show you both numbers.",
    },
    {
      q: "Do you pull permits for repairs?",
      a: "Component repairs do not require a permit in Washtenaw or Wayne County. Replacing a furnace, condenser, coil or water heater does, and we pull it and schedule the inspection ourselves when a repair turns into a replacement.",
    },
  ],
  related: ["furnace-repair", "ac-repair", "heat-pump-repair", "thermostat-installation", "ductwork-repair"],
  resources: [
    "furnace-not-turning-on-troubleshooting",
    "ac-not-cooling-what-to-check-first",
    "thermostat-not-working-troubleshooting",
    "hvac-service-call-fee-explained",
    "uneven-temperatures-upstairs-hot-downstairs-cold",
  ],
  cityIntros: [
    "Temprasure handles HVAC repair in {city} as one service, not three. The furnace in the basement, the coil above it, the condenser out back and the thermostat on the wall are a single system in a {city} house, and when something goes wrong you usually do not know which piece it is. That is fine. Al takes the call from {zip}, asks what the system is doing, and comes out from the shop in Ypsilanti with the truck stocked for the furnace side and the cooling side both. The drive to {city} is about {drive} minutes, which means a morning call from {neighborhood} is typically a same-day repair, and a repair that is quoted as one flat number before the work begins.",
    "The {era} that fill {city} were built around a furnace and a chimney. Central air came later, thermostats went from mercury bulbs to Wi-Fi, and in a lot of houses near {landmark} the ductwork has outlived two or three pieces of equipment. HVAC repair in {city} is therefore rarely about one broken part in isolation; it is about how a newer furnace, an older coil and the original trunk line get along. Temprasure diagnoses the whole chain on every {city} visit, from the 24-volt circuit to the static pressure in the ducts, and that is why so many of our repairs here hold instead of coming back as the same complaint next season.",
    "Our shop sits on Lakeridge Street in Ypsilanti, and {city} has been part of the regular route for as long as we have been in business. We know which subdivisions in {county} went up with builder-grade equipment that starts failing around year eight, which blocks near {neighborhood} still have furnaces older than the people calling about them, and which {city} streets flood the basement when the sump pump loses power in a storm and takes the furnace down with it. HVAC repair in {city} from Temprasure means an owner who has seen the house type before, a flat-rate quote, and no extra charge if the failure happens on a Sunday night.",
    "If you are reading this at midnight with no heat in {city}, call the number at the top of the page. We are open 24 hours, {city} is roughly {drive} minutes from our shop, and a no-heat call in January or a no-cooling call in July does not wait for business hours. If you are reading it during the day while a system limps along, here is what to expect: a diagnosis that checks the thermostat, the wiring, the equipment and the airflow before anything is quoted, a flat rate you approve first, and an honest opinion about whether the equipment in your {era} home is worth repairing. We serve all of {cityFull}, from {neighborhood} out to the edge of {county}.",
    "Heating and cooling repair in {city} is a matter of parts on the truck and a person who knows what fails. Ignitors and flame sensors in October, capacitors and contactors in June, float switches whenever the humidity spikes near {landmark}, control boards after the {utility} grid takes a lightning hit in a summer storm. Temprasure carries all of it, and because Al runs the calls himself there is no dispatcher between you and the person turning the wrench. {city} homeowners get the same flat-rate pricing, same-day priority on no-heat and no-cooling calls, and the same straight talk about repair versus replacement that our Ypsilanti neighbors get.",
  ],
  cityAngles: [
    "The repair we see most often in {city} is not one failed part. It is a chain reaction that starts with airflow. The {era} common around {neighborhood} were ducted for a furnace that moved less air than the equipment in them now, so the blower pushes against high static pressure, the furnace trips its high limit, the coil freezes in summer, and the homeowner gets told they need a new motor or a new system. On a {city} HVAC repair we measure static pressure on the first visit and look at the filter rack, the return size and the trunk before quoting anything. Often the fix is a blower speed change, a filter slot that actually fits the filter, and one reconnected run in the basement, and the furnace that was about to be condemned runs for another decade.",
    "Electrical service in {city} comes from {utility}, and summer storms rolling across {county} are hard on HVAC controls. A voltage spike takes out a furnace control board or a condenser contactor, a brief outage lets the sump pit near the furnace fill, and a brownout on a hot afternoon leaves a tired compressor trying to start on a weak capacitor. We see all three in {city} every year. Our repair visit includes checking line voltage at the disconnect and at the furnace, inspecting the board for scorching, and testing capacitors under load rather than replacing parts one at a time until something works. For homes near {landmark} where outages are frequent, we also talk about surge protection at the furnace and a float switch that shuts the AC down before water reaches the blower.",
    "Houses in {city} that have changed hands recently are a category of their own for HVAC repair. A buyer in {zip} inherits a furnace nobody has serviced since the previous owner moved in, a thermostat someone wired creatively, and an AC that was charged every spring instead of having its leak found. The first call to Temprasure is usually a symptom, but the visit turns into a full accounting of what the system actually is, what condition it is in and what the previous owner deferred. We write that down for you. For the {era} around {neighborhood} that means noting the heat exchanger condition, the age of the coil and whether the ductwork was ever sealed, so the next repair decision in your {city} house is made with real information instead of guesses.",
    "Two-story houses in {city} bring us a specific complaint: the upstairs is five to ten degrees warmer than the main floor in summer and colder in winter. In the {era} that dominate the {neighborhood} side of town, the cause is almost always in the attic and the returns. Flex duct sagging between trusses, a single undersized return pulling from the hallway, and a blower that was never set to the right speed for the coil. We repair this as an HVAC problem, not a furnace or AC problem, because the equipment is usually fine. Static pressure readings, a register-by-register airflow check, duct sealing where the branches leave the trunk, and a balancing pass get most {city} two-stories within a couple of degrees floor to floor.",
  ],
  cityFaqs: [
    {
      q: "How soon can you come out for HVAC repair in {city}?",
      a: "Usually the same day. {city} is about {drive} minutes from our shop, and no-heat and no-cooling calls are prioritized over routine work. We are open 24 hours, including weekends and holidays, with no overtime charge.",
    },
    {
      q: "I do not know if it is the furnace or the AC. Does that matter?",
      a: "No. Tell us the symptom and we diagnose the whole system on the visit. Most {city} calls involve shared components anyway: the blower, the thermostat, the control board and the ducts serve both heating and cooling.",
    },
    {
      q: "Do you charge a trip fee to {city}?",
      a: "We charge the same flat dispatch fee everywhere inside our 20-mile radius, and {city} is well inside it. That fee covers the diagnosis and is credited toward the repair if you approve it.",
    },
    {
      q: "Which HVAC problems are most common in {city} homes?",
      a: "In the {era} around {neighborhood}: furnace ignitors and flame sensors, AC capacitors, clogged condensate drains, and airflow problems from undersized returns. In newer subdivisions: builder-grade contactors and ECM blower modules around year eight to twelve.",
    },
    {
      q: "Can you repair the system in my {city} rental?",
      a: "Yes. We coordinate with the tenant for access, do the repair, and send the invoice and a short written summary to the owner. Many of the landlords we work with in {county} own several properties and we track the equipment for each.",
    },
    {
      q: "Will you try to sell me a new system?",
      a: "Not unless the numbers genuinely point that way. Our reputation in {city} and across {county} is built on telling people when a repair is the right call, and we encourage a second opinion if a replacement is on the table.",
    },
    {
      q: "Is the repair warrantied?",
      a: "Yes. Parts carry the manufacturer warranty and our labor is covered on every repair. If something we installed fails, call and we come back out to {city}.",
    },
    {
      q: "My {city} home has a heat pump. Do you work on those?",
      a: "Yes. Heat pumps share most of their components with central air, and we repair defrost boards, reversing valves, sensors and the backup heat changeover on the systems common in {county}.",
    },
    {
      q: "The power flickered during a storm and now nothing runs. What happened?",
      a: "Probably a blown low-voltage fuse or a damaged control board, both common after {utility} surges in {city}. We check the fuse, the transformer and the board before anything else, and the first two are inexpensive fixes.",
    },
  ],
  cityCloses: [
    "A broken furnace or air conditioner in {city} should not mean a week of waiting and a list of companies that never called back. Reach Temprasure at (313) 701-9471, any hour of the day or night, and tell Al what the system is doing. We will give you a real arrival window, a real diagnosis with instruments, and a flat-rate quote before any work starts, with the dispatch fee credited toward the repair you approve. Call now and get the house comfortable again.",
    "From {neighborhood} to the streets around {landmark}, HVAC repair in {city} is a short drive from our shop on Lakeridge Street and a single phone call away. Whether the problem turns out to be the furnace, the air conditioner, the thermostat or a duct that let go in the basement, we diagnose the whole system and fix what is actually wrong. Call, text or book online and we will get your heating or cooling running again, usually today and never with an overtime surcharge.",
    "Temprasure has repaired furnaces, air conditioners, heat pumps and thermostats across {county} for years, and {city} is on the route nearly every week. If your system is struggling, limping through cycles or making a noise it never made before, send us a text with the symptom and a photo of the equipment label. We will tell you what we think it is, whether to shut it down in the meantime, and when we can be there. Reach out today.",
    "Whether your {city} home is a {era} original or a newer build in {zip}, the equipment in it can be repaired properly and priced honestly, and the person doing it should be someone you can reach again tomorrow. Call Temprasure and talk to the owner directly. We are open 24 hours, no-heat and no-cooling calls go to the front of the line, and the quote you approve is the invoice you pay. Get on the schedule now.",
  ],
};
