import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { REVIEWS } from "@/data/reviews";
import { PageHero, CtaBand, ReviewCards, RatingLine } from "@/components/Blocks";
import { JsonLd } from "@/components/JsonLd";
import { reviewSchema, ORG_ID } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Temprasure Reviews | Ypsilanti HVAC Customer Reviews" },
  description: `Google reviews of Temprasure LLC from Ypsilanti, Ann Arbor, Canton and Belleville homeowners: same-day furnace and AC repair, honest advice, flat-rate pricing.`,
  alternates: { canonical: "/reviews/" },
};

export default function Reviews() {
  const topics: { key: typeof REVIEWS[number]["topic"]; label: string }[] = [
    { key: "furnace", label: "Furnace and heating" },
    { key: "ac", label: "Air conditioning" },
    { key: "install", label: "Replacements and installs" },
    { key: "water-heater", label: "Water heaters" },
    { key: "general", label: "The company" },
  ];
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "LocalBusiness", "@id": ORG_ID, name: SITE.name, review: reviewSchema(REVIEWS.slice(0, 12)) }} />
      <PageHero crumbs={[{ name: "Reviews", href: "/reviews/" }]} title="What customers say about Temprasure" lead="Every review below is a real Google review, lightly trimmed for length. We show the five-star ones here; the critical ones are on our Google profile, and we have read every one of them.">
        <RatingLine />
        <p style={{ marginTop: "1rem" }}>
          <a className="btn btn--ghost" href={SITE.mapsUrl} rel="noopener noreferrer" target="_blank">See all reviews on Google</a>
        </p>
      </PageHero>
      {topics.map((t, i) => {
        const list = REVIEWS.filter((r) => r.topic === t.key);
        if (!list.length) return null;
        return (
          <section key={t.key} className={`section section--tight ${i % 2 ? "section--white" : ""}`}>
            <div className="wrap">
              <div className="rule" />
              <h2>{t.label}</h2>
              <div style={{ marginTop: "1.4rem" }}><ReviewCards reviews={list} /></div>
            </div>
          </section>
        );
      })}
      <CtaBand title="Had us out recently?" text="A Google review takes a minute and helps the next homeowner in a hot house find us. If something went wrong, call Al directly first and we will make it right." />
    </>
  );
}
