import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/site";
import { PageHero, CallButtons, CtaBand, RatingLine } from "@/components/Blocks";
import { ArrowIcon } from "@/components/Icons";
import { CREW_PHOTOS } from "@/data/photos";
import { PhotoStrip } from "@/components/Photos";

export const metadata: Metadata = {
  title: { absolute: "About Temprasure | Family-Owned HVAC in Ypsilanti, MI" },
  description: "Temprasure LLC is a family-owned, Black-owned HVAC company in Ypsilanti, MI, run by Al, a working technician who answers his own phone. We fix before we replace.",
  alternates: { canonical: "/about/" },
};

export default function About() {
  return (
    <>
      <PageHero crumbs={[{ name: "About", href: "/about/" }]} title="A technician's company, not a sales company" lead="Temprasure is owner-operated out of Ypsilanti. The person you talk to on the phone is the person who shows up with the gauges, and the price he quotes is the price you pay.">
        <CallButtons dark />
      </PageHero>
      <section className="section">
        <div className="wrap prose">
          <h2 style={{ marginTop: 0 }}>Who we are</h2>
          <p>
            Temprasure LLC is a family-owned, Black-owned residential heating and cooling company based at 4812 Lakeridge Street in Ypsilanti, Michigan. Al, the owner, is a working HVAC technician who built the company around a simple idea: a homeowner with a dead furnace in January should be able to reach a real person, get a real arrival time, and get a real diagnosis, and none of that should depend on how much equipment they are willing to buy.
          </p>
          <p>
            We only do residential work. Houses, condos, duplexes, small rentals. That focus means the truck is stocked for the equipment you actually have, from the 1990s Carrier in a Westland ranch to the builder-grade Goodman in a 2008 Canton colonial to the power-vent water heater in an Ann Arbor basement. It also means we know the housing in this area block by block: the Michigan basements on Ypsilanti's east side, the undersized returns in Pittsfield Township subdivisions, the propane tanks on the farm roads south of Willis.
          </p>
          <h2>How a call with us goes</h2>
          <p>
            You call or text {SITE.phone}. Al answers, or calls you back within minutes if he is under a furnace. You describe what the system is doing. He tells you whether to shut it off, gives you an arrival window, and texts when he is on the way. At the house, the diagnosis is done with instruments, not a flashlight and a guess: static pressure, temperature split, refrigerant pressures with superheat and subcooling, combustion analysis on gas furnaces, capacitor microfarads, amp draw. You get shown what failed and quoted a flat rate for fixing it before any work starts. If you approve, the dispatch fee is credited toward the job.
          </p>
          <p>
            Replacement estimates are free and come in writing. If we recommend replacing a furnace or air conditioner, we tell you why, in terms of what the equipment is doing and what the repair would cost against a new unit. More than one reviewer has mentioned that we told them to get a second opinion. We mean it. A homeowner who checks our work and comes back is a customer for twenty years.
          </p>
          <h2>Repair first</h2>
          <p>
            Most of the HVAC industry is compensated to sell equipment. We are not. The reviews on our Google profile tell the story better than we can: a furnace fixed for a small repair where another company would have pushed a replacement, a 26-year-old air conditioner honestly declared dead and replaced on the schedule we promised, a heat exchanger with holes in it replaced within two days after we encouraged the homeowner to get it checked by someone else. We fix what can be fixed, we replace what cannot, and we say which is which.
          </p>
          <h2>Open 24 hours, same rate</h2>
          <p>
            Heat does not fail at convenient times. Our phone is answered around the clock, 365 days a year, and we run no-heat and no-cooling calls at night, on weekends and on holidays, including a New Year's Eve furnace that nine other shops would not come out for. There is no overtime or emergency surcharge. The flat rate at 2 a.m. is the flat rate at 2 p.m.
          </p>
          <h2>We have not always gotten it right</h2>
          <p>
            Our Google rating is 4.2 stars across 37 reviews, not 5.0, and we would rather you read the critical ones than pretend they are not there. Over the years there have been calls where we misdiagnosed a problem, quoted a repair that another company fixed more cheaply, or dropped the ball on a callback. Each of those changed how we work: we now verify a capacitor under load before quoting a compressor, we confirm a drain path before leaving a water call, and we text a status update the same day if a part is on order. A small company earns trust one house at a time, and we have the scars to prove we have been doing it a while.
          </p>
          <h2>Where we work</h2>
          <p>
            Everything within 20 miles of 48197. That is Ypsilanti and its township, Ann Arbor, Pittsfield, Superior, Saline, Dexter, Chelsea, Milan, Whitmore Lake and the rural townships of Washtenaw County, plus Canton, Belleville, Van Buren, Sumpter, Romulus, Westland, Wayne, Inkster, Garden City, Plymouth, Northville, Livonia, New Boston, Dundee and South Lyon. The full list, with what we see in each community, is on the <Link href="/service-areas/">service areas page</Link>.
          </p>
          <RatingLine />
          <p style={{ marginTop: "1rem" }}><Link href="/reviews/" className="btn btn--ghost-dark">Read the reviews <ArrowIcon /></Link></p>
        </div>
      </section>
      <PhotoStrip photos={CREW_PHOTOS.slice(0, 3)} title="Al on the job" />
      <CtaBand />
    </>
  );
}
