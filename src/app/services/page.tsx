import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORY_ORDER, CATEGORY_LABEL, servicesByCategory, servicePath } from "@/lib/content";
import { PageHero, CtaBand, CallButtons } from "@/components/Blocks";
import { ArrowIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "HVAC Services Ypsilanti MI | Furnace, AC & More",
  description: "Every residential heating, cooling and water heater service Temprasure offers within 20 miles of Ypsilanti: repair, replacement, tune-ups, ductwork and more.",
  alternates: { canonical: "/services/" },
};

export default function ServicesIndex() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", href: "/services/" }]}
        title="Residential heating, cooling and water heater services"
        lead="Repair first, replace when it is the honest answer. Every brand, every house within 20 miles of 48197, 24 hours a day at a flat rate."
      >
        <CallButtons dark />
      </PageHero>
      {CATEGORY_ORDER.map((cat, i) => {
        const list = servicesByCategory(cat);
        if (!list.length) return null;
        return (
          <section key={cat} className={`section--tight section ${i % 2 ? "section--white" : ""}`}>
            <div className="wrap">
              <h2 style={{ marginBottom: "1rem" }}>{CATEGORY_LABEL[cat]}</h2>
              <div className="trows trows--2">
                {list.map((s) => (
                  <Link key={s.slug} href={servicePath(s.slug)} className={`trow trow--${s.category}`}>
                    <span className="trow__bar" />
                    <span className="trow__body">
                      <h3>{s.name}</h3>
                      <p>{s.heroLead}</p>
                    </span>
                    <span className="trow__go"><ArrowIcon /></span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}
      <CtaBand />
    </>
  );
}
