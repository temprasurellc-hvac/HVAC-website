import Link from "next/link";
import { SITE } from "@/data/site";
import { CallButtons } from "@/components/Blocks";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Page Not Found", description: "That page is not here. Find Temprasure furnace, AC and water heater services for Ypsilanti, MI, or call us any hour.", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap narrow">
        <div className="rule" />
        <h1>That page is not here</h1>
        <p className="lead">The link may be old or mistyped. The useful places are below, or call {SITE.phone} and we will sort it out.</p>
        <ul className="chips" style={{ margin: "1.5rem 0" }}>
          <li><Link href="/services/">Services</Link></li>
          <li><Link href="/service-areas/">Service areas</Link></li>
          <li><Link href="/resources/">Resources</Link></li>
          <li><Link href="/emergency/">24-hour emergency</Link></li>
          <li><Link href="/contact/">Contact</Link></li>
        </ul>
        <CallButtons />
      </div>
    </section>
  );
}
