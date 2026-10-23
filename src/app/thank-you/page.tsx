import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/site";
import { PageHero } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Request received",
  description: "We have your service request and will call or text you shortly.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thank-you/" },
};

export default function ThankYou() {
  return (
    <>
      <PageHero crumbs={[{ name: "Request received", href: "/thank-you/" }]} title="Got it. We'll call or text you shortly." lead={`If it is urgent, don't wait on us: call ${SITE.phone} now and you will reach Al directly.`} />
      <section className="section">
        <div className="wrap narrow prose">
          <p>While you wait, a few things that help on arrival: clear a path to the furnace or water heater, note the brand and any blinking light pattern on the furnace, and have the thermostat accessible.</p>
          <p><Link href="/resources/">Browse the resource library</Link> or <Link href="/">return home</Link>.</p>
        </div>
      </section>
    </>
  );
}
