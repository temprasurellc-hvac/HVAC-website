import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE } from "@/data/site";
import { FEATURED_REVIEWS } from "@/data/reviews";
import { CITIES, SERVICES, CATEGORY_ORDER, CATEGORY_LABEL, servicesByCategory, cityBySlug, cityPath, serviceCityPath , og, metaClamp } from "@/lib/content";
import { pickMany } from "@/lib/hash";
import { PageHero, CallButtons, CtaBand, FaqList, ReviewCards } from "@/components/Blocks";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";
import { ArrowIcon } from "@/components/Icons";
import { PHOTOS } from "@/data/photos";
import { Photo } from "@/components/Photos";
import { pick } from "@/lib/hash";

type Params = { city: string };

export function generateStaticParams(): Params[] {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { city } = await params;
  const c = cityBySlug(city);
  if (!c) return {};
  const desc = metaClamp(`Furnace, AC, heat pump and water heater repair, replacement and tune-ups for ${c.name}, MI homes. ${c.driveMinutes} minutes from Ypsilanti, open 24 hours, flat-rate pricing quoted first.`);
  return {
    title: c.name.length > 8 ? { absolute: `HVAC Contractor in ${c.name}, MI | Temprasure` } : `HVAC Contractor in ${c.name}, MI | Furnace & AC`,
    description: desc,
    alternates: { canonical: cityPath(c.slug) },
    openGraph: og(`HVAC Contractor in ${c.name}, MI | Temprasure`, desc, cityPath(c.slug)),
  };
}

export default async function CityPage({ params }: { params: Promise<Params> }) {
  const { city } = await params;
  const c = cityBySlug(city);
  if (!c) notFound();
  const nearby = c.nearby.map(cityBySlug).filter(Boolean);
  const reviews = pickMany(FEATURED_REVIEWS, c.slug, 3);
  const photo = pick(PHOTOS, c.slug, 15);
  const faqs = [
    { q: `Do you serve all of ${c.name}?`, a: `Yes. ${c.name} is ${c.distanceMiles} miles from our shop, about a ${c.driveMinutes}-minute drive, which puts every address in ${c.zips.join(", ")} inside our 20-mile service area. We run to ${c.neighborhoods.slice(0, 4).join(", ")} and everywhere in between.` },
    { q: `How fast can you get to ${c.name} for a no-heat or no-cooling call?`, a: `Usually the same day, often within a few hours. We are open 24 hours and prioritize homes with no heat in winter and no cooling in summer. Tell us when you call if there are infants, elderly family members or medical needs in the house and we move you up the list.` },
    { q: `Is there a travel charge for ${c.name}?`, a: `No. The dispatch fee is the same flat amount everywhere inside our radius, and it is credited toward any repair you approve. Replacement estimates in ${c.name} are free.` },
    { q: `What gas and electric utilities serve ${c.name}?`, a: `${c.gasUtility} for natural gas and ${c.electricUtility} for electric. That matters for rebates on high-efficiency furnaces, heat pumps and smart thermostats, which we can walk you through when you are replacing equipment.` },
    { q: `What kind of homes do you work on in ${c.name}?`, a: `Mostly the ${c.eraLabel}, along with everything older and newer. ${c.housing.split(". ").slice(0, 2).join(". ")}.` },
    { q: `Do you handle rentals and new-home inspections in ${c.name}?`, a: `Yes. We coordinate with tenants and send findings to the owner, and we do pre-purchase HVAC inspections for buyers inside the inspection contingency window, with a written report you can use to negotiate.` },
  ];

  return (
    <>
      <JsonLd data={serviceSchema({ name: `HVAC services in ${c.name}, MI`, description: `Residential heating, cooling and water heater service for ${c.full}.`, url: cityPath(c.slug), areaName: c.name, serviceType: "HVAC" })} />
      <PageHero
        crumbs={[{ name: "Service areas", href: "/service-areas/" }, { name: c.name, href: cityPath(c.slug) }]}
        title={`Heating, cooling and water heater service in ${c.name}, MI`}
        lead={`${c.name} is about ${c.driveMinutes} minutes from our Ypsilanti shop. Furnace, AC, heat pump, water heater, humidifier and ductwork work for ${c.name} homes, 24 hours a day at a flat rate.`}
      >
        <CallButtons dark />
      </PageHero>

      <section className="section">
        <div className="wrap">
          <div className="facts" style={{ marginBottom: "2.5rem" }}>
            <div className="fact"><strong>{c.driveMinutes} min</strong><span>from our shop on Lakeridge St</span></div>
            <div className="fact"><strong>{c.distanceMiles} mi</strong><span>of our 20-mile radius</span></div>
            <div className="fact"><strong>{c.zips.join(", ")}</strong><span>ZIP codes covered</span></div>
            <div className="fact"><strong>{c.gasUtility.split(",")[0].split(" in ")[0]}</strong><span>gas service in {c.name}</span></div>
          </div>
          <div className="grid grid--2" style={{ gap: "3rem", alignItems: "start" }}>
          <div className="prose">
            <h2 style={{ marginTop: 0 }}>About {c.name}</h2>
            <p>{c.about}</p>
            <h2>What {c.name} houses need from an HVAC company</h2>
            <p>{c.housing}</p>
            <h2>Weather and the equipment it tests</h2>
            <p>{c.climate}</p>
            <h2>Local details we plan around</h2>
            <ul>{c.quirks.map((q) => <li key={q}>{q}</li>)}</ul>
          </div>
          <div style={{ position: "sticky", top: "90px" }}>
            <Photo p={photo} />
            <p style={{ marginTop: "1rem" }}><Link href="/our-work/">More job photos</Link></p>
          </div>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="wrap">
          <div className="rule" />
          <h2>Every service we offer in {c.name}</h2>
          <div className="catcols" style={{ marginTop: "1.6rem" }}>
            {CATEGORY_ORDER.map((cat) => {
              const list = servicesByCategory(cat);
              if (!list.length) return null;
              return (
                <div key={cat}>
                  <h3 style={{ marginBottom: ".6rem" }}>{CATEGORY_LABEL[cat]}</h3>
                  <div className="trows">
                    {list.map((s) => (
                      <Link key={s.slug} href={serviceCityPath(s.slug, c.slug)} className={`trow trow--${s.category}`}>
                        <span className="trow__bar" />
                        <span className="trow__body"><h3>{s.name} in {c.name}</h3></span>
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

      <section className="section section--paper2">
        <div className="wrap">
          <div className="rule" />
          <h2>Reviews from across our service area</h2>
          <div style={{ marginTop: "1.4rem" }}><ReviewCards reviews={reviews} /></div>
        </div>
      </section>

      <FaqList faqs={faqs} title={`Questions from ${c.name} homeowners`} />

      <section className="section">
        <div className="wrap">
          <div className="grid grid--2" style={{ gap: "3rem" }}>
            <div>
              <h2 style={{ fontSize: "1.4rem" }}>Neighborhoods and areas in {c.name}</h2>
              <ul className="chips" style={{ marginTop: ".8rem" }}>{c.neighborhoods.map((n) => <li key={n}><span>{n}</span></li>)}</ul>
              <p style={{ marginTop: "1rem", color: "var(--muted)", fontSize: ".95rem" }}>Near {c.landmarks.slice(0, 4).join(", ")} and the rest of {c.name}.</p>
            </div>
            <div>
              <h2 style={{ fontSize: "1.4rem" }}>Nearby communities</h2>
              <ul className="linklist" style={{ marginTop: ".8rem" }}>
                {nearby.map((n) => <li key={n!.slug}><Link href={cityPath(n!.slug)}>{n!.name}</Link></li>)}
                <li><Link href="/service-areas/">All {CITIES.length} communities</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title={`Need a technician in ${c.name}?`} text={`Call or text ${SITE.phone}. We are ${c.driveMinutes} minutes away and open around the clock, with ${SERVICES.length} residential services at a flat rate.`} />
    </>
  );
}
