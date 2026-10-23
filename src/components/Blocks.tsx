import Link from "next/link";
import { SITE } from "@/data/site";
import type { FAQ, Step } from "@/data/types";
import type { Review } from "@/data/reviews";
import { PhoneIcon, ArrowIcon, MessageIcon } from "./Icons";
import { JsonLd } from "./JsonLd";
import { faqSchema } from "@/lib/schema";
import type { Crumb } from "@/lib/schema";
import { Breadcrumbs } from "./Breadcrumbs";

export function PageHero({
  crumbs, title, lead, tone, children,
}: { crumbs: Crumb[]; title: string; lead?: string; tone?: "cold" | "hot" | "article"; children?: React.ReactNode }) {
  return (
    <section className={`phero${tone ? ` phero--${tone}` : ""}`}>
      <div className="wrap">
        <Breadcrumbs crumbs={crumbs} />
        <h1>{title}</h1>
        {lead && <p className="phero__lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}

export function CallButtons({ dark, book = true }: { dark?: boolean; book?: boolean }) {
  return (
    <div className="hero__ctas">
      <a className="btn btn--hot btn--lg" href={SITE.phoneHref}><PhoneIcon /> {SITE.phone}</a>
      {book && (
        <Link className={`btn btn--lg ${dark ? "btn--ghost" : "btn--ghost-dark"}`} href="/contact/">
          Book online <ArrowIcon />
        </Link>
      )}
    </div>
  );
}

export function CtaBand({ title, text }: { title?: string; text?: string }) {
  return (
    <section className="cta">
      <div className="wrap">
        <div>
          <h2>{title ?? "Need heat or cooling back today?"}</h2>
          <p>{text ?? "Call or text and you reach Al, not a call center. Same-day service whenever possible, flat-rate pricing quoted before any work, and the same rate at 2 a.m. as 2 p.m."}</p>
        </div>
        <div className="cta__actions">
          <a className="btn btn--hot btn--lg" href={SITE.phoneHref}><PhoneIcon /> {SITE.phone}</a>
          <a className="btn btn--ghost btn--lg" href={SITE.smsHref}><MessageIcon /> Text a photo</a>
        </div>
      </div>
    </section>
  );
}

export function FaqList({ faqs, title = "Questions we hear most" }: { faqs: FAQ[]; title?: string }) {
  if (!faqs.length) return null;
  return (
    <section className="section section--white">
      <div className="wrap narrow">
        <div className="rule" />
        <h2>{title}</h2>
        <div className="faq" style={{ marginTop: "1.4rem" }}>
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
        <JsonLd data={faqSchema(faqs)} />
      </div>
    </section>
  );
}

export function Signs({ items, tone }: { items: Step[]; tone?: "hot" | "cold" }) {
  return (
    <div className="signs">
      {items.map((s) => (
        <div key={s.title} className={`sign${tone ? ` sign--${tone}` : ""}`}>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </div>
      ))}
    </div>
  );
}

export function Steps({ items }: { items: Step[] }) {
  return (
    <ol className="steps">
      {items.map((s) => (
        <li key={s.title} className="step">
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function Stars() {
  return <span className="review__stars" aria-label="5 out of 5 stars">★★★★★</span>;
}

export function ReviewCards({ reviews, cols = 3 }: { reviews: Review[]; cols?: 2 | 3 }) {
  return (
    <div className={`reviews reviews--${cols}`}>
      {reviews.map((r) => (
        <blockquote key={r.name + r.when} className="review" style={{ margin: 0 }}>
          <Stars />
          <p>{r.text}</p>
          <footer><strong>{r.name}</strong> · Google review, {r.when}</footer>
        </blockquote>
      ))}
    </div>
  );
}

export function RatingLine() {
  return (
    <p className="rating">
      <span className="rating__stars" aria-hidden="true">★★★★★</span>
      <span>{SITE.rating.value} stars · {SITE.rating.count} Google reviews</span>
    </p>
  );
}

export function TrustFacts() {
  return (
    <div className="hero__facts">
      <div><strong>24 hours</strong>Open every day, no overtime charge</div>
      <div><strong>Same-day</strong>Most no-heat and no-cool calls</div>
      <div><strong>Flat rate</strong>Quoted before any work starts</div>
      <div><strong>Owner on the job</strong>Al answers and shows up</div>
    </div>
  );
}
