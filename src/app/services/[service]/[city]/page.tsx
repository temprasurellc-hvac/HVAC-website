import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE } from "@/data/site";
import { reviewsFor } from "@/data/reviews";
import { SERVICES, CITIES, serviceBySlug, cityBySlug, resourceBySlug, servicePath, cityPath, serviceCityPath, resourcePath , og } from "@/lib/content";
import { cityTokens, fill } from "@/lib/tokens";
import { pick, pickMany } from "@/lib/hash";
import { localParagraph } from "@/lib/localFrames";
import { PageHero, CallButtons, CtaBand, FaqList, Signs, Steps, ReviewCards } from "@/components/Blocks";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";
import { photosFor, PHOTOS } from "@/data/photos";
import { Photo } from "@/components/Photos";

type Params = { service: string; city: string };

export function generateStaticParams(): Params[] {
  const out: Params[] = [];
  for (const s of SERVICES) for (const c of CITIES) out.push({ service: s.slug, city: c.slug });
  return out;
}

function titleFor(serviceName: string, shortName: string, cityName: string) {
  const options = [
    `${serviceName} in ${cityName}, Michigan`,
    `${serviceName} in ${cityName}, MI`,
    `${shortName} in ${cityName}, Michigan`,
    `${shortName} in ${cityName}, MI`,
  ];
  return options.find((t) => t.length <= 47) ?? `${shortName} ${cityName} MI`;
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { service, city } = await params;
  const s = serviceBySlug(service);
  const c = cityBySlug(city);
  if (!s || !c) return {};
  const path = serviceCityPath(s.slug, c.slug);
  const desc = `${s.name} for ${c.name}, MI homes from Temprasure, ${c.driveMinutes} minutes away in Ypsilanti. Flat-rate pricing, same-day service when possible, open 24 hours. Serving ${c.zips.slice(0, 2).join(" and ")}.`;
  return {
    title: titleFor(s.name, s.short, c.name),
    description: desc.length > 160 ? desc.slice(0, 157).replace(/\s\S*$/, "") + "…" : desc,
    alternates: { canonical: path },
    openGraph: og(`${s.name} in ${c.name}, MI | Temprasure`, desc, path),
  };
}

export default async function ServiceCityPage({ params }: { params: Promise<Params> }) {
  const { service, city } = await params;
  const s = serviceBySlug(service);
  const c = cityBySlug(city);
  if (!s || !c) notFound();
  const seed = `${s.slug}/${c.slug}`;
  const ctx = cityTokens(c, seed);
  const tone = s.category === "cooling" ? "cold" : s.category === "heating" ? "hot" : undefined;
  const path = serviceCityPath(s.slug, c.slug);

  const intro = fill(pick(s.cityIntros, seed, 1), ctx);
  const angle = fill(pick(s.cityAngles, seed, 2), ctx);
  const close = fill(pick(s.cityCloses, seed, 3), ctx);
  const faqs = pickMany(s.cityFaqs, seed, 5, 4).map((f) => ({ q: fill(f.q, ctx), a: fill(f.a, ctx) }));
  const signs = pickMany(s.signs, seed, 3, 5);
  const includes = pickMany(s.includes, seed, 6, 6);
  const steps = pickMany(s.process, seed, 3, 12).sort((a, b) => s.process.indexOf(a) - s.process.indexOf(b));
  const local = localParagraph(s.category, c, seed);
  const quirks = pickMany(c.quirks, seed, 3, 7);
  const hoods = pickMany(c.neighborhoods, seed, 6, 8);
  const reviews = pickMany(reviewsFor(s.reviewTopic, 4), seed, 1, 13);
  const otherServices = pickMany(SERVICES.filter((x) => x.slug !== s.slug && x.category === s.category), seed, 4, 9);
  const moreServices = pickMany(SERVICES.filter((x) => x.slug !== s.slug && x.category !== s.category), seed, 4, 10);
  const nearby = c.nearby.map(cityBySlug).filter(Boolean);
  const resources = pickMany(s.resources, seed, 3, 11).map(resourceBySlug).filter(Boolean);

  const h1 = `${s.name} in ${c.name}, Michigan`;
  const photo = pick(photosFor(s.slug, 4).length ? photosFor(s.slug, 4) : PHOTOS, seed, 14);

  return (
    <>
      <JsonLd data={serviceSchema({ name: h1, description: `${s.name} for homes in ${c.full}.`, url: path, areaName: c.name, serviceType: s.name })} />
      <PageHero
        crumbs={[{ name: "Services", href: "/services/" }, { name: s.name, href: servicePath(s.slug) }, { name: c.name, href: path }]}
        title={h1}
        lead={`${c.name} is about ${c.driveMinutes} minutes from our shop in Ypsilanti. ${s.heroLead}`}
        tone={tone}
      >
        <CallButtons dark />
      </PageHero>

      <section className="section">
        <div className="wrap">
          <div className="grid" style={{ gridTemplateColumns: "minmax(0,1fr)", gap: "2.5rem" }}>
            <div className="prose">
              <p>{intro}</p>
              <h2>{c.name} houses and what that means for {s.short.toLowerCase()}</h2>
              <p>{c.housing}</p>
              <p>{angle}</p>
              <p>{local}</p>
              <h2>Local details we plan around in {c.name}</h2>
              <ul>
                {quirks.map((q) => <li key={q}>{q}</li>)}
                <li>{c.climate}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="wrap">
          <div className="facts" style={{ marginBottom: "2.5rem" }}>
            <div className="fact"><strong>{c.driveMinutes} min</strong><span>drive from our Ypsilanti shop</span></div>
            <div className="fact"><strong>{c.distanceMiles} mi</strong><span>inside our 20-mile radius</span></div>
            <div className="fact"><strong>24 hrs</strong><span>same flat rate, any hour</span></div>
            <div className="fact"><strong>{c.zips.slice(0, 3).join(", ")}</strong><span>ZIP codes we cover in {c.name}</span></div>
          </div>
          <div className="grid grid--2" style={{ gap: "3rem", alignItems: "start" }}>
            <div>
              <div className={`rule ${tone ? `rule--${tone}` : ""}`} />
              <h2 style={{ fontSize: "1.6rem" }}>What {c.name} homeowners call about</h2>
              <div style={{ marginTop: "1.2rem" }}><Signs items={signs} tone={tone} /></div>
            </div>
            <div>
              <Photo p={photo} />
              <div className="rule" style={{ marginTop: "1.6rem" }} />
              <h2 style={{ fontSize: "1.6rem" }}>Covered on a {c.name} visit</h2>
              <ul className="checks" style={{ marginTop: "1.2rem", gridTemplateColumns: "1fr" }}>
                {includes.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap narrow">
          <div className="rule" />
          <h2>How a {s.short.toLowerCase()} call works</h2>
          <div style={{ marginTop: "1rem" }}><Steps items={steps} /></div>
        </div>
      </section>

      <section className="section section--paper2">
        <div className="wrap">
          <div className="rule" />
          <h2>Reviews from nearby homeowners</h2>
          <div style={{ marginTop: "1.4rem" }}><ReviewCards reviews={reviews} cols={2} /></div>
        </div>
      </section>

      <FaqList faqs={faqs} title={`${s.short} questions from ${c.name}`} />

      <section className="section section--ink">
        <div className="wrap narrow">
          <div className="rule rule--hot" />
          <h2>Serving every part of {c.name}</h2>
          <p style={{ color: "#c3cfdd", marginTop: "1rem" }}>{close}</p>
          <p style={{ color: "#9fb0c3", fontSize: ".95rem" }}>
            Neighborhoods and areas we run to regularly: {hoods.join(", ")}{c.neighborhoods.length > hoods.length ? ", and the rest of " + c.name : ""}.
          </p>
          <CallButtons dark />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid grid--3" style={{ gap: "2.5rem", alignItems: "start" }}>
            <div>
              <h2 style={{ fontSize: "1.3rem" }}>More in {c.name}</h2>
              <ul className="linklist">
                {[...otherServices, ...moreServices].map((o) => (
                  <li key={o.slug}><Link href={serviceCityPath(o.slug, c.slug)}>{o.name} in {c.name}</Link></li>
                ))}
                <li><Link href={cityPath(c.slug)}>All services in {c.name}</Link></li>
              </ul>
            </div>
            <div>
              <h2 style={{ fontSize: "1.3rem" }}>{s.short} nearby</h2>
              <ul className="linklist">
                {nearby.map((n) => <li key={n!.slug}><Link href={serviceCityPath(s.slug, n!.slug)}>{s.short} in {n!.name}</Link></li>)}
                <li><Link href={servicePath(s.slug)}>{s.name} overview</Link></li>
              </ul>
            </div>
            <div>
              <h2 style={{ fontSize: "1.3rem" }}>Worth reading first</h2>
              <ul className="linklist">
                {resources.map((r) => <li key={r!.slug}><Link href={resourcePath(r!.slug)}>{r!.title}</Link></li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title={`${s.name} in ${c.name}, quoted before we start`} text={`Call or text ${SITE.phone}. ${c.name} is a ${c.driveMinutes}-minute run for us and we are open around the clock.`} />
    </>
  );
}
