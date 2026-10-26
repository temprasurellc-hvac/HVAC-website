# Temprasure LLC — temprasurehvac.com

Static Next.js 15 site for Temprasure LLC, a residential HVAC company in Ypsilanti, MI. Built by Black Flag Edge.

## Stack
- Next.js 15 App Router, TypeScript, `output: "export"` (pure static, deploy anywhere)
- Hand-written CSS in `src/app/globals.css` (inlined into every page at build by `scripts/postbuild.mjs`)
- Self-hosted Archivo variable font (`public/fonts/archivo.woff2`, width axis used for display type)
- No client JS except the mobile nav toggle and the contact form

## Content model (`src/data/`)
- `site.ts` — business facts, phone, hours, geo, nav
- `services/*.ts` — 23 services, each with hub-page content plus token-based city content banks
- `cities/*.ts` — 34 communities with hand-written about / housing / climate / quirks
- `resources/*.ts` — 61 long-form guides (markdown-lite body)
- `reviews.ts` — real Google reviews

Pages: home, 23 service hubs, 34 city hubs, 23×34 = 782 service×city pages, 61 guides, 8 guide categories, about, reviews, contact, emergency, privacy.

Service×city pages pick intro / angle / FAQ / close variants by a stable hash of the URL so each page is a distinct composition; `npm run verify` measures 8-gram uniqueness across the build.

## Commands
```
npm install
npm run dev
npm run build      # next build + inline CSS → out/
npm run verify     # structural + uniqueness checks on out/
```

## Deploy
Vercel: framework preset **Next.js**, output is static. `vercel.json` sets cache headers.

## Before launch — confirm with Al
- Email address (none published yet; `SITE.email`)
- Google review short link (`SITE.reviewUrl`)
- Form endpoint: set `NEXT_PUBLIC_FORM_ENDPOINT` (Formspree/Basin/etc.) — until then the form falls back to opening an SMS
- IndexNow: add `INDEXNOW_KEY` repo secret and place `public/<key>.txt` containing the key
- Subdivision names flagged in `src/data/cities/` are from memory; a local eye should skim them
