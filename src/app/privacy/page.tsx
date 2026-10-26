import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { PageHero } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Temprasure LLC handles the information you share through this website and by phone or text.",
  alternates: { canonical: "/privacy/" },
  robots: { index: false, follow: true },
};

export default function Privacy() {
  return (
    <>
      <PageHero crumbs={[{ name: "Privacy", href: "/privacy/" }]} title="Privacy policy" />
      <section className="section">
        <div className="wrap prose">
          <p>This website belongs to {SITE.legalName}, {SITE.address.street}, {SITE.address.city}, {SITE.address.state} {SITE.address.zip}.</p>
          <h2>What we collect</h2>
          <p>When you submit the service request form, call or text us, we receive the name, phone number, email address, service address and description of the problem that you provide. We use it to schedule and perform the work you asked for, to send appointment updates, and to follow up afterward.</p>
          <h2>What we do not do</h2>
          <p>We do not sell or rent your information. We do not share it with anyone except as needed to do the work (for example, a parts supplier or a permit office) or as required by law.</p>
          <h2>Website analytics</h2>
          <p>This site may use privacy-respecting analytics to count visits and see which pages are useful. The site itself sets no advertising cookies.</p>
          <h2>Text messages</h2>
          <p>If you text us or give us your mobile number, we may text you about your appointment. Reply STOP at any time to opt out of texts.</p>
          <h2>Questions</h2>
          <p>Call {SITE.phone}.</p>
        </div>
      </section>
    </>
  );
}
