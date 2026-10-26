# Temprasure LLC — Content Brief (read fully before writing anything)

## The business (facts — do not invent beyond these)
- **Temprasure LLC**, residential HVAC only (no commercial). Owner-operated by **Al (Alfred)**; the office/reviews are sometimes answered by **Diamond**.
- Shop: 4812 Lakeridge St, Ypsilanti, MI 48197 (off Washtenaw Ave, near Golfside/Clark Rd). Phone **(313) 701-9471**. Website temprasurehvac.com.
- **Open 24 hours**, 7 days. No overtime surcharge for nights/weekends/holidays. **Flat-rate pricing** (quoted before work). A **flat dispatch fee** covers trip + diagnosis and is credited toward an approved repair. Free, no-obligation estimates on **replacements/installs**.
- Service area: **20-mile radius of 48197** — Washtenaw County + western Wayne County + edges of Monroe/Oakland/Livingston.
- Google: 4.2 stars, 37 reviews, reviews back to 2019. Family-owned, Black-owned, LGBTQ+ friendly.
- Services: furnace & heating repair/replacement/maintenance; AC & cooling repair/replacement/maintenance; heat pumps; water heater repair & replacement; whole-home humidifier install/repair/replacement; ductwork repair & replacement; thermostats; service agreements (maintenance plans); new-home-purchase HVAC inspections; 24-hour emergency service.
- Real review themes to lean on: same-day when 10 other shops said a week; honest "repair it, don't replace it" calls that saved people thousands; encouraged a second opinion on a furnace replacement; shows up nights/weekends/holidays (New Year's Eve furnace, July no-AC); text updates when on the way; price quoted = price paid; patient with elderly non-English-speaking customers; came back on a weekend to fix a post-install issue.
- **Do NOT** state: license numbers, a founding year, brands "carried"/dealer status, financing terms, specific dollar prices, warranties with specific year counts, employee counts, or awards. Do NOT promote **ductless mini-splits** as a service (don't disparage them either; just don't sell them). We can say "we repair every brand".
- Dollar figures: NEVER in service or city pages. In **resource/cost guides only**, give honest Southeast-Michigan *ranges* phrased as ranges ("typically runs in the low hundreds", "most homeowners in Washtenaw County see quotes between roughly $X and $Y") — ranges are fine there because they are educational, but attribute to "typical market pricing", never as Temprasure's price list.

## Local reality (Southeast Michigan)
- Gas utility: **DTE Energy** across almost the whole radius (Consumers Energy serves parts of western Washtenaw around Chelsea/Dexter/Manchester and some Livingston addresses). Electric: DTE nearly everywhere. Rural pockets use propane.
- Climate: humid summers (upper 80s, dew points 65–72), freeze-thaw winters, 6,000+ heating degree days, polar vortex cold snaps every few years, Huron River valley humidity, lake-effect mostly misses the area. Most homes have basements (many "Michigan basements" in pre-1940 houses), crawlspaces in some 1950s-60s ranches, slabs in some 1970s+ builds.
- Housing: pre-war two-stories in Ypsi/Ann Arbor cores; 1920s–40s bungalows; huge stock of 1950s–70s ranches/colonials in Westland/Wayne/Garden City/Livonia/Inkster/Ypsi Township; 1990s–2010s subdivisions in Canton/Pittsfield/Saline/Superior/Van Buren/Northville/Plymouth Twp; rural farmhouses and newer acreage builds in Augusta/York/Lodi/Sumpter/Salem.
- Common equipment: 80% and 90%+ gas furnaces, split-system central AC (R-22 on pre-2010, R-410A after, R-454B/R-32 from 2025), 40/50-gal atmospheric gas water heaters, bypass/fan-powered humidifiers, sheet-metal trunk + flex branch ducts.

## Voice & quality bar
- Hand-written, specific, plain-spoken, **first-person plural ("we") from Temprasure**. Confident but honest; the company's reputation is built on telling people when NOT to replace.
- **Long-form and genuinely useful.** Every paragraph must contain a concrete detail (a component, a symptom, a number, a street, a housing era, a utility, a code reality). No filler, no "in today's fast-paced world", no "look no further", no "we pride ourselves".
- No em-dash spam; use normal punctuation. No emojis. American spelling.
- **Uniqueness is the bar.** Pages will be measured for 8-gram overlap. Variants in `cityIntros`/`cityAngles`/`cityCloses` must be *structurally* different from each other (different opening sentence shape, different angle, different details), not reworded copies.
- Tokens available in city-bank strings: `{city}` `{cityFull}` `{county}` `{zip}` `{neighborhood}` `{landmark}` `{drive}` `{utility}` `{era}`. Use them naturally, 3–6 per variant. Never put tokens in hub `intro`, `signs`, `process`, `includes`, `pricing`, `faqs`.
- Links in Resource bodies: `[AC repair](/services/ac-repair/)`, `[Ann Arbor](/service-areas/ann-arbor/)`, `[another guide](/resources/<slug>/)`.

## Slugs (use EXACTLY these for cross-references)
### Services (23)
ac-repair, ac-installation, ac-maintenance, emergency-ac-repair,
furnace-repair, furnace-installation, furnace-maintenance, heating-repair, emergency-heating-repair,
heat-pump-repair, heat-pump-installation, heat-pump-maintenance,
hvac-repair, hvac-installation, hvac-maintenance, thermostat-installation,
water-heater-repair, water-heater-installation,
humidifier-installation, ductwork-repair, ductwork-replacement,
service-agreements, new-home-hvac-inspection

### Cities (34)
ypsilanti, ypsilanti-township, ann-arbor, pittsfield-township, superior-township, saline, dexter, chelsea, milan, scio-township, ann-arbor-township, lodi-township, york-township, augusta-township, whittaker, willis, salem-township, whitmore-lake,
canton, belleville, van-buren-township, sumpter-township, romulus, westland, wayne, inkster, garden-city, plymouth, plymouth-township, northville, livonia, new-boston, dundee, south-lyon

### Resources (61)
troubleshooting: ac-not-cooling-what-to-check-first, ac-frozen-coil-causes, ac-capacitor-failure-signs, furnace-not-turning-on-troubleshooting, furnace-blowing-cold-air, furnace-short-cycling-causes, furnace-error-codes-what-the-blinking-light-means, pilot-light-vs-hot-surface-ignitor, ac-breaker-keeps-tripping, water-around-furnace-condensate-drain, thermostat-not-working-troubleshooting, no-hot-water-what-to-check
buying-guides: repair-or-replace-air-conditioner, repair-or-replace-furnace, furnace-efficiency-explained-80-vs-96-afue, what-size-air-conditioner-do-i-need, what-size-furnace-do-i-need-michigan, heat-pump-vs-furnace-michigan, cold-climate-heat-pumps-in-southeast-michigan, single-stage-vs-two-stage-vs-variable-speed, best-furnace-brands-honest-take, tank-vs-tankless-water-heater-michigan
maintenance: furnace-tune-up-checklist, ac-tune-up-checklist, how-often-change-furnace-filter, furnace-filter-sizes-and-merv-ratings, prepare-furnace-for-michigan-winter, prepare-ac-for-summer, water-heater-maintenance-flush-anode, humidifier-maintenance-pad-replacement
costs-and-pricing: ac-repair-cost-ypsilanti, furnace-repair-cost-ypsilanti, new-furnace-cost-michigan, new-ac-cost-michigan, water-heater-replacement-cost-michigan, heat-pump-installation-cost-michigan, hvac-service-call-fee-explained, flat-rate-vs-hourly-hvac-pricing
efficiency-and-rebates: michigan-hvac-rebates-and-tax-credits, dte-energy-rebates-hvac, consumers-energy-rebates-hvac, lower-heating-bill-michigan-winter, lower-cooling-bill-humidity
michigan-homeowner: r22-refrigerant-phase-out-michigan, r454b-new-refrigerant-2025-what-changed, hvac-inspection-before-buying-a-home-washtenaw, carbon-monoxide-furnace-safety-michigan, hvac-permits-ypsilanti-washtenaw-county, michigan-basement-hvac-moisture-problems, ductwork-leaks-older-michigan-homes, how-long-do-furnaces-last-michigan, how-long-do-air-conditioners-last-michigan
water-heaters: water-heater-leaking-what-to-do, water-heater-pilot-light-wont-stay-lit, water-heater-lifespan-and-replacement-signs, water-heater-temperature-setting-safety
air-quality: whole-home-humidifier-benefits-michigan-winter, ideal-indoor-humidity-michigan, static-shock-dry-air-winter-fix, why-is-my-house-dusty-ductwork, uneven-temperatures-upstairs-hot-downstairs-cold
