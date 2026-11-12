import type { Metadata } from "next";
import Link from "next/link";
import { PHOTOS } from "@/data/photos";
import { PageHero, CtaBand, CallButtons } from "@/components/Blocks";
import { PhotoGrid } from "@/components/Photos";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/data/site";
import { src } from "@/data/photos";

export const metadata: Metadata = {
  title: "Job Photos | Furnace, AC & Water Heater Work",
  description: "Real job photos from Temprasure: furnace and AC replacements, water heater installs, coil swaps and package-unit service in Ypsilanti, Ann Arbor and Canton.",
  alternates: { canonical: "/our-work/" },
};

export default function OurWork() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "ImageGallery", name: "Temprasure job photos", url: `${SITE.url}/our-work/`, image: PHOTOS.map((p) => ({ "@type": "ImageObject", contentUrl: SITE.url + src(p), caption: p.caption, description: p.alt })) }} />
      <PageHero crumbs={[{ name: "Our work", href: "/our-work/" }]} title="Real jobs, real basements" lead="No stock photos. Every picture below is a Temprasure job in a Southeast Michigan home: the equipment that came out, the equipment that went in, and Al doing the work.">
        <CallButtons dark />
      </PageHero>
      <section className="section">
        <div className="wrap">
          <PhotoGrid />
        </div>
      </section>
      <section className="section section--white">
        <div className="wrap prose">
          <div className="rule" />
          <h2 style={{ marginTop: 0 }}>What you are looking at</h2>
          <p>
            Most of these are replacements: a furnace that had reached the end, an air conditioner from the 1990s, a water heater that finally let go. We photograph the old equipment before it comes out because homeowners deserve to see why, and we photograph the new install because the details matter: a sealed plenum, a level pad, a new drip leg on the gas line, PVC venting pitched correctly on a high-efficiency furnace.
          </p>
          <p>
            You will also see package units on manufactured homes. A lot of companies will not touch them. We service them across Washtenaw and Wayne County, including the parks in Ypsilanti Township, Belleville, Sumpter and New Boston.
          </p>
          <p>
            If you want to talk through a replacement, <Link href="/contact/">request a free estimate</Link> or read <Link href="/resources/repair-or-replace-furnace/">how we decide between repair and replace</Link> first.
          </p>
        </div>
      </section>
      <CtaBand title="Want yours done this cleanly?" text="Free estimates on replacements, flat-rate repairs, and photos of the old and new equipment on every job." />
    </>
  );
}
