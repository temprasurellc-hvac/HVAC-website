import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/site";
import { CITIES, citiesByCounty, cityPath } from "@/lib/content";
import { PageHero, CallButtons, CtaBand } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "HVAC Contractor Service Area | Ypsilanti, MI",
  description: `Temprasure serves ${CITIES.length} communities within 20 miles of Ypsilanti: Ann Arbor, Canton, Belleville, Saline, Westland and Plymouth. Flat-rate pricing, open 24 hours.`,
  alternates: { canonical: "/service-areas/" },
};

export default function ServiceAreas() {
  const counties = citiesByCounty();
  return (
    <>
      <PageHero
        crumbs={[{ name: "Service areas", href: "/service-areas/" }]}
        title="Where we work: 20 miles around Ypsilanti"
        lead={`Our shop is on Lakeridge Street in Ypsilanti, and every community below is inside our 20-mile radius. ${CITIES.length} cities, townships and villages across Washtenaw, western Wayne, and the edges of Monroe and Oakland Counties, all at the same flat-rate pricing with no trip surcharge.`}
      >
        <CallButtons dark />
      </PageHero>
      <section className="section">
        <div className="wrap prose">
          <p>
            A 20-mile radius sounds like a lot of ground, and it is: from the farm roads of Augusta Township to the brick ranches of Livonia, from Chelsea on Consumers Energy gas to Romulus under the Metro Airport approach. We drew the line at 20 miles because that is the distance we can keep a same-day promise on. Farther than that and a no-heat call in a snowstorm turns into a next-day call, and we would rather tell you no than tell you tomorrow.
          </p>
          <p>
            Each community page below covers the housing stock we see there, the utilities and quirks that affect heating and cooling, and the full list of services we run in that area. If your town is not listed but you are close, call {SITE.phone} and ask; the radius is a guideline, not a wall.
          </p>
        </div>
      </section>
      {counties.map(([county, list], i) => (
        <section key={county} className={`section section--tight ${i % 2 === 0 ? "section--white" : ""}`}>
          <div className="wrap">
            <div className="rule" />
            <h2>{county}</h2>
            <div className="rcards rcards--3" style={{ marginTop: "1.4rem" }}>
              {list.sort((a, b) => a.distanceMiles - b.distanceMiles).map((c) => (
                <article key={c.slug} className="rcard">
                  <small>{c.distanceMiles} mi · about {c.driveMinutes} min · {c.zips.join(", ")}</small>
                  <h3><Link href={cityPath(c.slug)}>{c.name}</Link></h3>
                  <p>{c.about.split(". ")[0]}.</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}
      <CtaBand />
    </>
  );
}
