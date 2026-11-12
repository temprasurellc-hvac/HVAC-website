import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { PageHero, CtaBand } from "@/components/Blocks";
import { ContactForm } from "@/components/ContactForm";
import { PhoneIcon, MessageIcon, MailIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: { absolute: "Contact Temprasure | HVAC Service in Ypsilanti, MI" },
  description: `Call or text ${SITE.phone} any hour, or book online. Same-day furnace, AC and water heater service at a flat rate within 20 miles of Ypsilanti, MI.`,
  alternates: { canonical: "/contact/" },
};

export default function Contact() {
  return (
    <>
      <PageHero crumbs={[{ name: "Contact", href: "/contact/" }]} title="Call, text or book online" lead="The fastest route is the phone: Al answers around the clock. The form works too, and we respond to it quickly during the day." />
      <section className="section">
        <div className="wrap grid grid--2" style={{ gap: "3rem", alignItems: "start" }}>
          <div>
            <div className="rule" />
            <h2 style={{ fontSize: "1.6rem" }}>Request service</h2>
            <p className="lead" style={{ fontSize: "1rem", marginBottom: "1.4rem" }}>Tell us what the system is doing and where the house is. We will call or text back with an arrival window.</p>
            <ContactForm />
          </div>
          <div>
            <div className="rule rule--hot" />
            <h2 style={{ fontSize: "1.6rem" }}>Reach us directly</h2>
            <p style={{ fontSize: "1.6rem", fontWeight: 800, fontStretch: "110%", margin: ".6rem 0" }}>
              <a href={SITE.phoneHref} style={{ textDecoration: "none" }}>{SITE.phone}</a>
            </p>
            <div className="hero__ctas" style={{ marginBottom: "1.6rem" }}>
              <a className="btn btn--hot" href={SITE.phoneHref}><PhoneIcon /> Call</a>
              <a className="btn btn--cold" href={SITE.smsHref}><MessageIcon /> Text a photo of the unit</a>
              {SITE.email && <a className="btn btn--ghost-dark" href={`mailto:${SITE.email}`}><MailIcon /> Email</a>}
            </div>
            <h3>Hours</h3>
            <p>{SITE.hours}. No overtime charge for nights, weekends or holidays.</p>
            <h3>Shop</h3>
            <p>{SITE.address.street}<br />{SITE.address.city}, {SITE.address.state} {SITE.address.zip}<br /><a href={SITE.mapsUrl} rel="noopener noreferrer" target="_blank">Open in Google Maps</a></p>
            <p style={{ color: "var(--muted)", fontSize: ".95rem" }}>We do not have a walk-in showroom; the shop is where the trucks and parts live. All work happens at your home.</p>
            <h3>Service area</h3>
            <p>Everything within 20 miles of 48197: Ypsilanti, Ann Arbor, Saline, Canton, Belleville, Westland, Plymouth and the communities between. Residential only.</p>
            <h3>What to have ready</h3>
            <ul>
              <li>What the system is doing (no heat, no cooling, noise, water, smell)</li>
              <li>Rough age and brand of the equipment if you know it</li>
              <li>Whether anyone in the house is heat- or cold-sensitive</li>
              <li>A photo of the data plate, if you can safely get one</li>
            </ul>
          </div>
        </div>
      </section>
      <CtaBand title="Smell gas or hear a CO alarm?" text="Leave the house first. Call DTE at 800-947-5000 for a gas smell, or 911 for a carbon monoxide alarm, then call us from outside. We will come out once the utility has cleared the house." />
    </>
  );
}
