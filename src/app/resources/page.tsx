import type { Metadata } from "next";
import Link from "next/link";
import { RESOURCES, RESOURCE_CATEGORIES, RESOURCE_CATEGORY_LABEL, RESOURCE_CATEGORY_DESC, resourcesByCategory, resourcePath, resourceCatPath } from "@/lib/content";
import { PageHero, CtaBand } from "@/components/Blocks";
import { ArrowIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: { absolute: "HVAC Resource Library | Southeast Michigan | Temprasure" },
  description: `${RESOURCES.length} long-form guides on furnaces, air conditioners, heat pumps, water heaters, humidity, costs and rebates, written by a working Ypsilanti, MI HVAC company.`,
  alternates: { canonical: "/resources/" },
};

export default function ResourcesIndex() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Resources", href: "/resources/" }]}
        title="The Southeast Michigan HVAC library"
        lead={`${RESOURCES.length} guides written for the houses, utilities and weather around Ypsilanti and Ann Arbor. Troubleshoot before you call, understand a quote before you sign it, and know what a Michigan winter actually does to equipment.`}
      />
      {RESOURCE_CATEGORIES.map((cat, i) => {
        const list = resourcesByCategory(cat);
        if (!list.length) return null;
        return (
          <section key={cat} className={`section section--tight ${i % 2 ? "section--white" : ""}`}>
            <div className="wrap">
              <div className="rule" />
              <h2><Link href={resourceCatPath(cat)} style={{ color: "inherit", textDecoration: "none" }}>{RESOURCE_CATEGORY_LABEL[cat]}</Link></h2>
              <p className="lead" style={{ fontSize: "1rem" }}>{RESOURCE_CATEGORY_DESC[cat]}</p>
              <div className="rcards rcards--3" style={{ marginTop: "1.4rem" }}>
                {list.map((r) => (
                  <article key={r.slug} className="rcard">
                    <small>{r.readMinutes} min read</small>
                    <h3><Link href={resourcePath(r.slug)}>{r.title}</Link></h3>
                    <p>{r.metaDescription}</p>
                  </article>
                ))}
              </div>
              <p style={{ marginTop: "1.2rem" }}><Link href={resourceCatPath(cat)} className="btn btn--ghost-dark">All {RESOURCE_CATEGORY_LABEL[cat].toLowerCase()} guides <ArrowIcon /></Link></p>
            </div>
          </section>
        );
      })}
      <CtaBand title="Still stuck after reading?" text="Call or text and describe what the system is doing. If it is something you can safely fix yourself, we will tell you. If it is not, we will come out." />
    </>
  );
}
