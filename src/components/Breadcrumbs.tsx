import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { breadcrumbSchema, type Crumb } from "@/lib/schema";

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const all: Crumb[] = [{ name: "Home", href: "/" }, ...crumbs];
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <JsonLd data={breadcrumbSchema(all)} />
      <ol>
        {all.map((c, i) =>
          i === all.length - 1 ? (
            <li key={c.href} aria-current="page">{c.name}</li>
          ) : (
            <li key={c.href}><Link href={c.href}>{c.name}</Link></li>
          ),
        )}
      </ol>
    </nav>
  );
}
