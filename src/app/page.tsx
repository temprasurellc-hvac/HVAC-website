import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/site";
import { FEATURED_REVIEWS } from "@/data/reviews";
import { SERVICES, CITIES, RESOURCES, CATEGORY_ORDER, CATEGORY_LABEL, servicesByCategory, servicePath, cityPath, resourcePath, citiesByCounty } from "@/lib/content";
import { CallButtons, CtaBand, FaqList, ReviewCards, RatingLine, TrustFacts } from "@/components/Blocks";
import { ArrowIcon } from "@/components/Icons";
import { BEFORE_AFTER, CREW_PHOTOS } from "@/data/photos";
import { Photo } from "@/components/Photos";

export const metadata: Metadata = {
  title: { absolute: `HVAC Contractor Ypsilanti MI | Furnace, AC | Temprasure` },
  description: "Family-owned HVAC contractor in Ypsilanti, MI. Furnace, AC, heat pump and water heater repair, replacement and tune-ups. Open 24 hours, flat-rate pricing.",
  alternates: { canonical: "/" },
};

const HOME_FAQS = [
  { q: "What areas does Temprasure serve?", a: "Everything within about 20 miles of our shop at 48197 in Ypsilanti: Ann Arbor, Saline, Pittsfield and Superior Townships, Canton, Belleville, Van Buren Township, Romulus, Westland, Wayne, Inkster, Garden City, Plymouth, Northville, Livonia, Dexter, Chelsea, Milan, Dundee, South Lyon and the townships in between. If you are not sure, call and ask." },
  { q: "Are you really open 24 hours?", a: "Yes. The phone is answered around the clock and we run emergency no-heat and no-cooling calls at night and on weekends and holidays. There is no overtime surcharge; the flat rate is the same at midnight as it is at noon." },
  { q: "Do you charge a service call fee?", a: "We charge a flat dispatch fee that covers the trip and a full diagnosis. If you approve the repair, that fee is credited toward the work. Estimates for replacements and new installations are free." },
  { q: "Do you work on commercial buildings?", a: "No. Temprasure is residential only: houses, condos, duplexes and small rental properties. That focus is why we can stock the truck for the equipment you actually have." },
  { q: "What brands do you repair?", a: "All of them. Carrier, Bryant, Lennox, Trane, American Standard, Goodman, Amana, Rheem, Ruud, York, Payne, Ducane, Armstrong and the builder-grade equipment found across Washtenaw and Wayne County subdivisions. Residential components are largely universal and we stock what fails." },
  { q: "Will you tell me if I don't need a new furnace?", a: "Yes, and our reviews say so. If a repair is the smarter money, we repair it. If replacement is the right call, we will show you why and encourage a second opinion if you want one." },
];

export default function Home() {
  const counties = citiesByCounty();
  const guides = RESOURCES.slice(0, 6);
  return (
    <>
      <section className="hero">
        <div className="wrap hero__grid">
          <div>
            <h1>Heat back on. Cool air back on. <em>Today, not next week.</em></h1>
            <p className="hero__lead">
              Temprasure is a family-owned residential heating, cooling and water heater company in Ypsilanti. When ten other shops tell you a week, Al picks up the phone, shows up the same day whenever humanly possible, and quotes one flat price before the work starts.
            </p>
            <CallButtons dark />
            <TrustFacts />
          </div>
          <div className="gauge" aria-hidden="true">
            <div className="gauge__tube">
              <div className="gauge__fill" />
              <div className="gauge__ticks">{Array.from({ length: 9 }).map((_, i) => <i key={i} />)}</div>
            </div>
            <div className="gauge__labels">
              <div className="gauge__row gauge__row--hot"><strong>No heat at 2 a.m.?</strong><span>We answer. No overtime charge.</span></div>
              <div className="gauge__row"><strong>Same day</strong><span>Most calls inside 20 miles of 48197</span></div>
              <div className="gauge__row gauge__row--cold"><strong>AC dead in July?</strong><span>Parts on the truck, fixed first visit</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="rule" />
          <h2>Everything a Michigan home needs to stay functional</h2>
          <p className="lead">Repair, replacement and maintenance for the equipment in your basement and beside your house. Residential only, every brand.</p>
          <div className="catcols" style={{ marginTop: "2rem" }}>
            {CATEGORY_ORDER.map((cat) => {
              const list = servicesByCategory(cat);
              if (!list.length) return null;
              return (
                <div key={cat}>
                  <h3 style={{ marginBottom: ".7rem" }}>{CATEGORY_LABEL[cat]}</h3>
                  <div className="trows">
                    {list.map((s) => (
                      <Link key={s.slug} href={servicePath(s.slug)} className={`trow trow--${s.category}`}>
                        <span className="trow__bar" />
                        <span className="trow__body">
                          <h3>{s.name}</h3>
                          <p>{s.heroLead.length > 110 ? s.heroLead.slice(0, 107).replace(/\s\S*$/, "") + "…" : s.heroLead}</p>
                        </span>
                        <span className="trow__go"><ArrowIcon /></span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="wrap">
          <div className="rule rule--hot" />
          <h2>The repair-first shop</h2>
          <div className="grid grid--2" style={{ marginTop: "1.5rem", gap: "2.5rem" }}>
            <div>
              <p className="lead" style={{ color: "#c3cfdd" }}>
                Most of the HVAC industry is built to sell equipment. Temprasure was built by a technician who would rather fix the inducer motor than talk you into a new furnace, and the reviews over the years say exactly that: thousands saved by diagnosing the problem instead of replacing the system.
              </p>
              <p style={{ color: "#c3cfdd" }}>
                That does not mean we never recommend replacement. A furnace with a cracked heat exchanger gets replaced, because it is leaking combustion gases into your house. A 26-year-old air conditioner with a dead compressor gets replaced, because repairing it would cost more than it is worth. But when the fix is a capacitor, a flame sensor, a thermocouple or a pressure switch, you get the fix, and you get told why.
              </p>
              <p style={{ margin: 0 }}>
                <Link href="/about/" className="btn btn--ghost">How we work <ArrowIcon /></Link>
              </p>
            </div>
            <div>
              <Photo p={CREW_PHOTOS[3]} />
              <ul className="checks" style={{ gridTemplateColumns: "1fr", marginTop: "1.4rem" }}>
                <li>Real diagnosis with gauges and a meter, not a guess from the driveway</li>
                <li>Flat-rate quote in writing before a single part is replaced</li>
                <li>Dispatch fee credited toward any repair you approve</li>
                <li>Free, no-obligation estimates on replacements and installs</li>
                <li>Same rate nights, weekends and holidays, every day of the year</li>
                <li>Text updates when we are on the way, and a follow-up after big jobs</li>
                <li>Every residential brand repaired; manufacturer warranty checked before quoting</li>
                <li>Patient with elderly family members, tenants and first-time homeowners</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="wrap">
          <div className="rule rule--hot" />
          <h2>Out with the old</h2>
          <p className="lead">Every replacement gets photographed before and after. No stock images anywhere on this site.</p>
          <div className="photos photos--3" style={{ marginTop: "1.6rem" }}>
            {BEFORE_AFTER.slice(0, 3).map((p) => <Photo key={p.file} p={p} small />)}
          </div>
          <p style={{ marginTop: "1.5rem" }}>
            <Link href="/our-work/" className="btn btn--ghost-dark">See all job photos <ArrowIcon /></Link>
          </p>
        </div>
      </section>

      <section className="section section--paper2">
        <div className="wrap">
          <div className="rule" />
          <h2>What Ypsilanti-area homeowners say</h2>
          <RatingLine />
          <div style={{ marginTop: "1.5rem" }}>
            <ReviewCards reviews={FEATURED_REVIEWS.slice(0, 6)} />
          </div>
          <p style={{ marginTop: "1.5rem" }}>
            <Link href="/reviews/" className="btn btn--ghost-dark">Read all reviews <ArrowIcon /></Link>
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="wrap">
          <div className="rule rule--cold" />
          <h2>Within 20 miles of 48197</h2>
          <p className="lead">We run calls across {CITIES.length} communities in Washtenaw, western Wayne, and the edges of Monroe and Oakland Counties. Every one of them gets the same pricing and the same priority.</p>
          <div className="grid grid--3" style={{ marginTop: "1.8rem" }}>
            {counties.map(([county, list]) => (
              <div key={county}>
                <h3 style={{ marginBottom: ".6rem" }}>{county}</h3>
                <ul className="chips">
                  {list.map((c) => <li key={c.slug}><Link href={cityPath(c.slug)}>{c.name}</Link></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="rule" />
          <h2>Answers before you need a truck</h2>
          <p className="lead">A resource library written for Southeast Michigan houses, DTE bills and polar-vortex winters. {RESOURCES.length} guides and counting.</p>
          <div className="rcards rcards--3" style={{ marginTop: "1.8rem" }}>
            {guides.map((g) => (
              <article key={g.slug} className="rcard">
                <small>{g.readMinutes} min read</small>
                <h3><Link href={resourcePath(g.slug)}>{g.title}</Link></h3>
                <p>{g.quickAnswer.length > 150 ? g.quickAnswer.slice(0, 147).replace(/\s\S*$/, "") + "…" : g.quickAnswer}</p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "1.8rem" }}>
            <Link href="/resources/" className="btn btn--ghost-dark">Browse the library <ArrowIcon /></Link>
          </p>
        </div>
      </section>

      <FaqList faqs={HOME_FAQS} />
      <CtaBand />
    </>
  );
}
