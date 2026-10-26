import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/site";
import { PageHero, CallButtons, CtaBand, FaqList, Steps } from "@/components/Blocks";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "24-Hour Emergency HVAC Ypsilanti MI | Temprasure" },
  description: "No heat, no AC or no hot water at night or on a weekend? Temprasure answers 24 hours a day within 20 miles of Ypsilanti at the same flat rate, any hour.",
  alternates: { canonical: "/emergency/" },
};

const FAQS = [
  { q: "What counts as an HVAC emergency?", a: "No heat when it is below freezing outside, no cooling during a heat advisory or with infants, elderly or medically fragile people in the house, a water heater actively leaking, a furnace that is tripping its rollout or limit switch repeatedly, or any carbon monoxide alarm. If you are not sure, call and describe it; we will tell you honestly whether it can wait until morning." },
  { q: "Do you charge extra at night or on weekends?", a: "No. The dispatch fee and flat-rate repair pricing are identical at 3 a.m. on a Sunday and 10 a.m. on a Tuesday. We never add overtime, holiday or emergency surcharges." },
  { q: "How fast can you get here?", a: "It depends on where we are and where you are, but inside our 20-mile radius a true emergency is usually seen within a few hours, often faster. We will give you a real window on the phone, not a guess." },
  { q: "I smell gas. Should I call you?", a: "Not first. Leave the house, do not flip switches or use the garage door opener, and call DTE at 800-947-5000 or 911 from outside. Once the utility has shut off and cleared the gas, call us and we will come repair the furnace or water heater." },
  { q: "My carbon monoxide alarm went off. What now?", a: "Get everyone, including pets, out of the house and call 911 from outside. Do not go back in to open windows. After the fire department clears the house, call us; a CO alarm is most often a cracked heat exchanger, a blocked flue or a backdrafting water heater, and we test for all three." },
  { q: "Can you bring a temporary heat or cooling solution?", a: "We can usually get the system running on the first visit. If a part has to be ordered, we will tell you the honest timeline and help you figure out space heaters or window units safely in the meantime." },
];

export default function Emergency() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: "24-hour emergency HVAC service in Ypsilanti, MI", description: metadata.description as string, url: "/emergency/", serviceType: "Emergency HVAC repair" })} />
      <PageHero tone="hot" crumbs={[{ name: "24-hour emergency", href: "/emergency/" }]} title="No heat, no cooling, no hot water: call now" lead="Open 24 hours, 365 days. Al answers. Same flat rate at any hour, no overtime or holiday surcharge, within 20 miles of Ypsilanti.">
        <CallButtons dark />
      </PageHero>
      <section className="section">
        <div className="wrap">
          <div className="alert">
            <strong>Gas smell or carbon monoxide alarm?</strong> Leave the house first. Call DTE at 800-947-5000 for a gas smell, or 911 for a CO alarm, then call us from outside.
          </div>
          <div className="grid grid--2" style={{ gap: "3rem", alignItems: "start" }}>
            <div>
              <div className="rule rule--hot" />
              <h2>No heat in winter</h2>
              <div style={{ marginTop: "1rem" }}>
                <Steps items={[
                  { title: "Check the thermostat and the switch", text: "Thermostat set to heat and above room temperature. The light switch on or near the furnace is on. The breaker labeled furnace is not tripped." },
                  { title: "Check the filter", text: "A filter choked with dust trips the limit switch and the furnace shuts down. Replace it if it is dark." },
                  { title: "Look at the furnace light", text: "Most furnaces blink a code through a small window. Note the pattern; it tells us what to bring." },
                  { title: "Check the outside vents on a high-efficiency furnace", text: "Two white PVC pipes on the side of the house can frost over in a storm. Clear snow and ice away from them." },
                  { title: "Call us", text: "Tell us the code and what you checked. Keep the house above 55 to protect the pipes while you wait; open cabinet doors under sinks on outside walls." },
                ]} />
              </div>
            </div>
            <div>
              <div className="rule rule--cold" />
              <h2>No cooling in summer</h2>
              <div style={{ marginTop: "1rem" }}>
                <Steps items={[
                  { title: "Listen at the outdoor unit", text: "Humming with no fan, or silence, usually means a capacitor or contactor. A loud buzz means shut it off at the thermostat." },
                  { title: "Look for ice", text: "Frost on the copper line or at the indoor coil means turn the system to off and the fan to on so the coil can thaw before we arrive." },
                  { title: "Check the breaker and the disconnect", text: "The AC breaker in the panel and the pull-out disconnect on the wall beside the condenser. Reset once; if it trips again, leave it off." },
                  { title: "Check for water", text: "Water around the furnace means the condensate drain is clogged. Shut the system off to stop the overflow." },
                  { title: "Call us", text: "Close blinds on the sun side, run ceiling fans, and keep anyone heat-sensitive in the coolest room. We stock capacitors, contactors, motors and refrigerant on the truck." },
                ]} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--white">
        <div className="wrap prose">
          <div className="rule" />
          <h2 style={{ marginTop: 0 }}>Water heater emergencies</h2>
          <p>
            A tank that is leaking from the bottom is done; shut off the cold water supply valve on top of the tank and the gas valve or breaker, and call. Water from the pressure relief valve on the side, or a pilot that will not stay lit, are repairs we can often handle the same day. No hot water with no visible leak is usually a thermocouple, a gas valve or a tripped high-limit on an electric unit. See <Link href="/resources/water-heater-leaking-what-to-do/">what to do when a water heater leaks</Link> and <Link href="/resources/no-hot-water-what-to-check/">no hot water troubleshooting</Link>.
          </p>
          <h2>Why we do not charge more after hours</h2>
          <p>
            Emergency surcharges punish people for bad luck. A furnace does not know it is Christmas Eve, and neither should your bill. We are a small company; running calls at night is part of the job we signed up for, and it is a big part of why homeowners in Ypsilanti, Ann Arbor, Canton, Belleville and Westland keep calling us back after the first time we showed up when nobody else would.
          </p>
          <h2>Where we go for emergencies</h2>
          <p>
            Everything within 20 miles of 48197. Call {SITE.phone} and tell us the city; if it is inside the radius we are coming. See the <Link href="/service-areas/">full service area</Link>.
          </p>
        </div>
      </section>
      <FaqList faqs={FAQS} title="Emergency questions" />
      <CtaBand title="Call now, any hour" text={`${SITE.phone}. Al answers. Flat rate, no overtime charge, 20 miles around Ypsilanti.`} />
    </>
  );
}
