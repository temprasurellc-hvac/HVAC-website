import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ResourceCategory } from "@/data/types";
import { SITE } from "@/data/site";
import { RESOURCES, RESOURCE_CATEGORIES, RESOURCE_CATEGORY_LABEL, RESOURCE_CATEGORY_DESC, resourcesByCategory, resourceBySlug, serviceBySlug, resourcePath, resourceCatPath, servicePath , og, metaClamp } from "@/lib/content";
import { Markdown, headings, stripMd } from "@/lib/markdown";
import { PageHero, CtaBand, FaqList } from "@/components/Blocks";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema } from "@/lib/schema";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return [...RESOURCE_CATEGORIES.map((c) => ({ slug: c })), ...RESOURCES.map((r) => ({ slug: r.slug }))];
}

const isCat = (s: string): s is ResourceCategory => (RESOURCE_CATEGORIES as string[]).includes(s);

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  if (isCat(slug)) {
    const n = resourcesByCategory(slug).length;
    return {
      title: `${RESOURCE_CATEGORY_LABEL[slug]} Guides | HVAC Resources`,
      description: metaClamp(`${n} ${RESOURCE_CATEGORY_LABEL[slug].toLowerCase()} guides for Southeast Michigan homeowners. ${RESOURCE_CATEGORY_DESC[slug]}`),
      alternates: { canonical: resourceCatPath(slug) },
    };
  }
  const r = resourceBySlug(slug);
  if (!r) return {};
  return {
    title: r.metaTitle.length > 47 ? { absolute: r.metaTitle } : r.metaTitle,
    description: metaClamp(r.metaDescription),
    alternates: { canonical: resourcePath(r.slug) },
    openGraph: { ...og(r.title, metaClamp(r.metaDescription), resourcePath(r.slug), "article"), publishedTime: r.published, modifiedTime: r.updated },
  };
}

function fmt(d: string) {
  return new Date(d + "T12:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function ResourceOrCategory({ params }: { params: Promise<Params> }) {
  const { slug } = await params;

  if (isCat(slug)) {
    const list = resourcesByCategory(slug);
    return (
      <>
        <PageHero crumbs={[{ name: "Resources", href: "/resources/" }, { name: RESOURCE_CATEGORY_LABEL[slug], href: resourceCatPath(slug) }]} title={`${RESOURCE_CATEGORY_LABEL[slug]} guides`} lead={RESOURCE_CATEGORY_DESC[slug]} />
        <section className="section">
          <div className="wrap">
            <div className="rcards rcards--3">
              {list.map((r) => (
                <article key={r.slug} className="rcard">
                  <small>{r.readMinutes} min read · updated {fmt(r.updated)}</small>
                  <h3><Link href={resourcePath(r.slug)}>{r.title}</Link></h3>
                  <p>{r.quickAnswer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section section--white section--tight">
          <div className="wrap">
            <h2 style={{ fontSize: "1.3rem", marginBottom: ".8rem" }}>Other categories</h2>
            <ul className="chips">
              {RESOURCE_CATEGORIES.filter((c) => c !== slug).map((c) => <li key={c}><Link href={resourceCatPath(c)}>{RESOURCE_CATEGORY_LABEL[c]}</Link></li>)}
            </ul>
          </div>
        </section>
        <CtaBand />
      </>
    );
  }

  const r = resourceBySlug(slug);
  if (!r) notFound();
  const toc = headings(r.body);
  const words = stripMd(r.body).split(/\s+/).length;
  const services = r.relatedServices.map(serviceBySlug).filter(Boolean);
  const related = r.relatedResources.map(resourceBySlug).filter(Boolean);
  const more = resourcesByCategory(r.category).filter((x) => x.slug !== r.slug).slice(0, 4);

  return (
    <>
      <JsonLd data={articleSchema({ title: r.title, description: r.metaDescription, url: resourcePath(r.slug), published: r.published, updated: r.updated, wordCount: words })} />
      <PageHero crumbs={[{ name: "Resources", href: "/resources/" }, { name: RESOURCE_CATEGORY_LABEL[r.category], href: resourceCatPath(r.category) }, { name: r.title, href: resourcePath(r.slug) }]} title={r.title} tone="article">
        <p className="crumbs" style={{ marginTop: ".8rem" }}>{r.readMinutes} min read · Updated {fmt(r.updated)} · By the Temprasure team, Ypsilanti MI</p>
      </PageHero>
      <article className="section">
        <div className="wrap" style={{ display: "grid", gap: "3rem", gridTemplateColumns: "minmax(0,1fr)" }}>
          <div className="prose">
            <div className="quick">
              <p><strong>Short answer</strong>{r.quickAnswer}</p>
            </div>
            {toc.length > 3 && (
              <nav aria-label="In this guide" style={{ marginBottom: "2rem" }}>
                <ul className="chips">{toc.map((h) => <li key={h.id}><a href={`#${h.id}`}>{h.text}</a></li>)}</ul>
              </nav>
            )}
            <Markdown md={r.body} />
          </div>
        </div>
      </article>
      <FaqList faqs={r.faqs} title="Related questions" />
      <section className="section">
        <div className="wrap">
          <div className="grid grid--3" style={{ gap: "2.5rem", alignItems: "start" }}>
            {services.length > 0 && (
              <div>
                <h2 style={{ fontSize: "1.3rem" }}>Services that fix this</h2>
                <ul className="linklist">{services.map((s) => <li key={s!.slug}><Link href={servicePath(s!.slug)}>{s!.name}</Link></li>)}</ul>
              </div>
            )}
            {related.length > 0 && (
              <div>
                <h2 style={{ fontSize: "1.3rem" }}>Keep reading</h2>
                <ul className="linklist">{related.map((x) => <li key={x!.slug}><Link href={resourcePath(x!.slug)}>{x!.title}</Link></li>)}</ul>
              </div>
            )}
            {more.length > 0 && (
              <div>
                <h2 style={{ fontSize: "1.3rem" }}>More {RESOURCE_CATEGORY_LABEL[r.category].toLowerCase()}</h2>
                <ul className="linklist">{more.map((x) => <li key={x.slug}><Link href={resourcePath(x.slug)}>{x.title}</Link></li>)}</ul>
              </div>
            )}
          </div>
        </div>
      </section>
      <CtaBand title="Rather have a technician look at it?" text={`Call or text ${SITE.phone} any hour. We serve 20 miles around Ypsilanti at a flat rate, and we will tell you if it is something you can handle yourself.`} />
    </>
  );
}
