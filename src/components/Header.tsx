import Link from "next/link";
import { SITE, NAV } from "@/data/site";
import { PhoneIcon } from "./Icons";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="hdr">
      <div className="hdr__top">
        <div className="wrap">
          <span>
            <strong>Open 24 hours</strong> · No overtime charge nights, weekends or holidays
          </span>
          <span>
            Serving 20 miles around Ypsilanti, MI · <strong>Flat-rate pricing</strong>
          </span>
        </div>
      </div>
      <div className="wrap hdr__bar">
        <Link href="/" className="hdr__logo" aria-label={`${SITE.name} home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/logo-160.webp" alt="" width="48" height="48" />
          <span>Temprasure</span>
        </Link>
        <nav className="hdr__nav" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}>{n.label}</Link>
          ))}
        </nav>
        <div className="hdr__cta">
          <a href={SITE.phoneHref} className="hdr__phone">
            <small>Call or text, any hour</small>
            {SITE.phone}
          </a>
          <a href={SITE.phoneHref} className="hdr__call" aria-label={`Call ${SITE.phone}`}>
            <PhoneIcon />
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
