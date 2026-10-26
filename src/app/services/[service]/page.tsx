import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE } from "@/data/site";
import { reviewsFor } from "@/data/reviews";
import { SERVICES, CITIES, serviceBySlug, resourceBySlug, servicePath, serviceCityPath, resourcePath , og } from "@/lib/content";
import { PageHero, CallButtons, CtaBand, FaqList, Signs, Steps, ReviewCards } from "@/components/Blocks";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";
import { photosFor } from "@/data/photos";
import { PhotoStrip } from "@/components/Photos";

type Params = { service: string };
const clamp = (d: string) => (d.length <= 160 ? d : d.slice(0, 157).replace(/\s\S*$/, "") + "…");

export function generateStaticParams(): Params[] {
  return SERVICES.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { service } = await params;
  const s = serviceBySlug(service);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: clamp(s.metaDescription),
    alternates: { canonical: servicePath(s.slug) },
    openGraph: og(`${s.metaTitle} | Temprasure`, clamp(s.metaDescription), servicePath(s.slug)),
  };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { service } = await params;
  const s = serviceBySlug(service);
  if (!s) notFound();
  const tone = s.category === "cooling" ? "cold" : s.category === "heating" ? "hot" : undefined;
  const reviews = reviewsFor(s.reviewTopic, 3);
  const related = s.related.map(serviceBySlug).filter(Boolean);
  const resources = s.resources.map(resourceBySlug).filter(Boolean);
  const photos = photosFor(s.slug, 3);

  return (
    <>
      <JsonLd data={serviceSchema({ name: `${s.name} in Ypsilanti, MI`, description: s.metaDescription, url: servicePath(s.slug), serviceType: s.name })} />
      <PageHero crumbs={[{ name: "Services", href: "/services/" }, { name: s.name, href: servicePath(s.slug) }]} title={s.h1} lead={s.heroLead} tone={tone}>
        <CallButtons dark />
      </PageHero>

      <section className="section">
        <div className="wrap">
          <div className="grid" style={{ gridTemplateColumns: "minmax(0, 1fr)", gap: "3rem" }}>
            <div className="prose">
              {s.intro.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      <PhotoStrip photos={photos} title={`${s.short} work we have photographed`} />

      <section className="section section--paper2">
        <div className="wrap">
          <div className={`rule ${tone ? `rule--${tone}` : ""}`} />
          <h2>Signs it is time to call</h2>
          <div style={{ marginTop: "1.6rem" }}><Signs items={s.signs} tone={tone} /></div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid grid--2" style={{ gap: "3rem", alignItems: "start" }}>
            <div>
              <div className="rule" />
              <h2>How the visit goes</h2>
              <div style={{ marginTop: "1rem" }}><Steps items={s.process} /></div>
            </div>
            <div>
              <div className="rule" />
              <h2>What this covers</h2>
              <ul className="checks" style={{ marginTop: "1rem", gridTemplateColumns: "1fr" }}>
                {s.includes.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="wrap narrow">
          <div className="rule" />
          <h2>How pricing works</h2>
          <div style={{ marginTop: "1rem", color: "#c3cfdd", fontSize: "1.05rem" }}>
            {s.pricing.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <CallButtons dark />
        </div>
      </section>

      <section className="section section--paper2">
        <div className="wrap">
          <div className="rule" />
          <h2>From the people we have helped</h2>
          <div style={{ marginTop: "1.4rem" }}><ReviewCards reviews={reviews} /></div>
        </div>
      </section>

      <FaqList faqs={s.faqs} />

      <section className="section">
        <div className="wrap">
          <div className="rule rule--wide" style={{ marginBottom: "2rem" }} />
          <div className="grid grid--2" style={{ gap: "3rem", alignItems: "start" }}>
            <div>
              <h2 style={{ fontSize: "1.5rem" }}>{s.name} near you</h2>
              <p className="lead" style={{ fontSize: "1rem" }}>Local pages for each community we serve, with the housing and equipment details that matter there.</p>
              <ul className="linklist linklist--2">
                {CITIES.map((c) => (
                  <li key={c.slug}><Link href={serviceCityPath(s.slug, c.slug)}>{s.short} in {c.name}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              {related.length > 0 && (
                <>
                  <h2 style={{ fontSize: "1.5rem" }}>Related services</h2>
                  <ul className="linklist" style={{ marginBottom: "2rem" }}>
                    {related.map((r) => <li key={r!.slug}><Link href={servicePath(r!.slug)}>{r!.name}</Link></li>)}
                  </ul>
                </>
              )}
              {resources.length > 0 && (
                <>
                  <h2 style={{ fontSize: "1.5rem" }}>Read before you call</h2>
                  <ul className="linklist">
                    {resources.map((r) => <li key={r!.slug}><Link href={resourcePath(r!.slug)}>{r!.title}</Link></li>)}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <CtaBand title={`${s.name}, done right the first visit`} text={`Call or text ${SITE.phone} and tell us what the system is doing. We'll give you a real arrival window and a flat-rate quote before any work starts.`} />
    </>
  );
}
