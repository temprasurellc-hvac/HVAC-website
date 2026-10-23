"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV, SITE } from "@/data/site";
import { MenuIcon, CloseIcon, PhoneIcon } from "./Icons";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  return (
    <>
      <button
        className="hdr__burger"
        aria-expanded={open}
        aria-controls="mnav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>
      {open && (
        <nav id="mnav" className="mnav" aria-label="Mobile">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</Link>
          ))}
          <Link href="/emergency/" onClick={() => setOpen(false)}>24-Hour Emergency</Link>
          <a className="btn btn--hot btn--lg" href={SITE.phoneHref}><PhoneIcon /> {SITE.phone}</a>
        </nav>
      )}
    </>
  );
}
