import { urlset, pagesEntries, XML } from "@/lib/sitemaps";
export const dynamic = "force-static";
export function GET() { return new Response(urlset(pagesEntries()), XML); }
