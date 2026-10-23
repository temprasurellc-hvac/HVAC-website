import Link from "next/link";
import { SITE } from "@/data/site";
import { SERVICES, CITIES, RESOURCE_CATEGORIES, RESOURCE_CATEGORY_LABEL, servicePath, cityPath, resourceCatPath } from "@/lib/content";
import { PhoneIcon, MessageIcon, MailIcon } from "./Icons";

export function Footer() {
  const topServices = ["ac-repair", "furnace-repair", "ac-installation", "furnace-installation", "heat-pump-installation", "water-heater-installation", "hvac-maintenance", "service-agreements", "emergency-heating-repair", "new-home-hvac-inspection"];
  const topCities = ["ypsilanti", "ann-arbor", "canton", "belleville", "saline", "westland", "pittsfield-township", "superior-township", "plymouth", "wayne"];
  return (
    <>
      <footer className="ftr">
        <div className="wrap ftr__grid">
          <div className="ftr__brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/logo-160.webp" alt={SITE.name} width="64" height="64" />
            <p>
              Family-owned residential heating, cooling and water heater company in Ypsilanti, Michigan. Serving homes within 20 miles of 48197, 24 hours a day, at a flat rate.
            </p>
            <p>
              <a className="ftr__phone" href={SITE.phoneHref}>{SITE.phone}</a>
              <br />
              {SITE.address.street}, {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
              <br />
              {SITE.hours}
            </p>
            <p>
              <a href={SITE.mapsUrl} rel="noopener noreferrer" target="_blank">Google Business Profile</a>
            </p>
          </div>
          <div>
            <h3>Services</h3>
            <ul>
              {topServices.map((s) => {
                const svc = SERVICES.find((x) => x.slug === s);
                return svc ? <li key={s}><Link href={servicePath(s)}>{svc.name}</Link></li> : null;
              })}
              <li><Link href="/services/">All services</Link></li>
            </ul>
          </div>
          <div>
            <h3>Service areas</h3>
            <ul>
              {topCities.map((c) => {
                const city = CITIES.find((x) => x.slug === c);
                return city ? <li key={c}><Link href={cityPath(c)}>{city.name}</Link></li> : null;
              })}
              <li><Link href="/service-areas/">All {CITIES.length} communities</Link></li>
            </ul>
          </div>
          <div>
            <h3>Resources</h3>
            <ul>
              {RESOURCE_CATEGORIES.map((c) => (
                <li key={c}><Link href={resourceCatPath(c)}>{RESOURCE_CATEGORY_LABEL[c]}</Link></li>
              ))}
              <li><Link href="/emergency/">24-hour emergency</Link></li>
              <li><Link href="/our-work/">Our work</Link></li>
              <li><Link href="/reviews/">Reviews</Link></li>
              <li><Link href="/about/">About Temprasure</Link></li>
              <li><Link href="/contact/">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="wrap ftr__bottom">
          <span>© {new Date().getFullYear()} {SITE.legalName}. Residential service only.</span>
          <span><Link href="/privacy/">Privacy</Link> · <Link href="/sitemap.xml">Sitemap</Link></span>
        </div>
      </footer>
      <div className="callbar" aria-label="Quick contact">
        <a href={SITE.phoneHref}><PhoneIcon /> Call now</a>
        <a href={SITE.smsHref}><MessageIcon /> Text us</a>
        {SITE.email && <a href={`mailto:${SITE.email}`}><MailIcon /> Email</a>}
      </div>
    </>
  );
}
