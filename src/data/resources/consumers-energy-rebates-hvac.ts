import type { Resource } from "../types";

export const consumersEnergyRebatesHvac: Resource = {
  slug: "consumers-energy-rebates-hvac",
  title: "Consumers Energy HVAC Rebates for Chelsea, Dexter and Western Washtenaw",
  metaTitle: "Consumers Energy HVAC Rebates: Western Washtenaw",
  metaDescription:
    "How Consumers Energy's residential rebates work for homeowners in Chelsea, Dexter and Manchester: furnaces, heat pumps, thermostats, and how to apply.",
  category: "efficiency-and-rebates",
  quickAnswer:
    "Consumers Energy serves natural gas in western Washtenaw County around Chelsea, Dexter and Manchester and some Livingston County addresses, and offers residential rebates on qualifying high-efficiency furnaces, heat pumps, smart thermostats and other measures. If your gas bill is from Consumers, apply there even if DTE supplies your electricity. Amounts change yearly; consumersenergy.com has the current list.",
  published: "2026-10-16",
  updated: "2026-10-16",
  readMinutes: 5,
  body: `## First, figure out which utility you have

Most of the Ypsilanti area is DTE for both gas and electric, but the map changes west of Ann Arbor. Consumers Energy supplies natural gas to Chelsea, much of Dexter and Dexter Township, Manchester, Lima and Sylvan Townships, parts of Scio and Webster, and a number of addresses up toward Whitmore Lake and into Livingston County. Many of those same homes get electricity from DTE. A few rural pockets in Lyndon and Sharon Townships have no gas main at all and run on propane, which puts them outside both utilities' gas rebate programs.

The practical rule: look at the bill for the fuel the equipment uses. A gas furnace rebate comes from whoever sells you gas. A heat pump or central AC rebate comes from whoever sells you electricity. A house in Dexter with Consumers gas and DTE electric applies to Consumers for the furnace and to DTE for the heat pump. That split trips people up every year.

## What Consumers Energy has rebated

Consumers runs its residential energy efficiency program under the same Michigan energy waste reduction law that funds DTE's, so the measure lists look similar. In recent program years it has covered:

- **Condensing gas furnaces** at or above a stated AFUE, usually 95% or higher, with the rebate sometimes stepping up at 97%.
- **Gas boilers** at high efficiency, which matters in older Chelsea and Manchester homes with hot-water heat.
- **Smart thermostats**, often with a discount through Consumers' online store and a rebate for enrolling in a peak-demand program.
- **Air-source heat pumps and heat pump water heaters** on the electric side, for the customers who have Consumers electric, which in our area is a smaller group than those with Consumers gas.
- **Tankless and high-efficiency gas water heaters** in some years.
- **Insulation, air sealing and duct sealing** through the home performance program, generally requiring an assessment.
- **Home energy audits** at low or no cost.

Amounts and thresholds are set each program year and the measure list is trimmed or expanded. We are not going to print a dollar figure that will be stale by spring. The current list lives at consumersenergy.com under residential rebates.

## Qualification and paperwork

A qualifying furnace is defined by its AFUE rating and, often, its blower type. The AHRI certificate and the model number on your invoice are what Consumers checks. An ECM blower has added a bonus in some years. Anything below the AFUE threshold, including every 80% furnace, is not eligible.

Consumers has required that some measures be installed by a participating contractor registered with its program, and the application typically needs:

- The itemized invoice with model and serial numbers and the installation date.
- The AHRI reference number for a matched system.
- Your Consumers account number.
- Submission within a set window after installation, usually a couple of months.

For a few measures the rebate is applied instantly by the contractor. For most it is mailed after review.

The application portal and the forms are separate from DTE's, and the two utilities do not share records. A homeowner who files a furnace rebate with DTE by mistake because the electric bill is DTE will get a denial weeks later and may miss the Consumers deadline in the process. Look at the gas bill before you file.

Boilers deserve a mention, because western Washtenaw has more hot-water heat than the Ypsilanti side. The older brick homes on Main Street in Chelsea and the farmhouses around Manchester often have cast-iron radiators fed by a boiler that is decades old. Consumers has rebated condensing boilers at high AFUE in recent years, and the savings from replacing a 1970s atmospheric boiler with a modulating condensing unit are larger than almost any furnace swap, because the old boiler may be running at 60 percent efficiency or worse.

## The DTE-electric, Consumers-gas house

This is the common case in Dexter and Chelsea, and it affects which equipment makes financial sense.

A **high-efficiency furnace** earns a Consumers gas rebate and may earn the federal 25C credit. The gas savings accrue on the Consumers bill. [Furnace efficiency 80 vs 96](/resources/furnace-efficiency-explained-80-vs-96-afue/) covers how much that is through a western Washtenaw winter, which runs a touch colder than Ypsilanti because of the open farmland and elevation.

A **heat pump** in the same house earns a DTE electric rebate, the federal credit, and possibly a state HEAR rebate, but the heating it displaces is Consumers gas. The switchover temperature on a dual-fuel system should be set based on the actual DTE electric rate and the actual Consumers gas rate, not a generic chart. [Heat pump vs furnace in Michigan](/resources/heat-pump-vs-furnace-michigan/) walks through that calculation.

A **smart thermostat** may be eligible from both utilities, but you can usually only claim one rebate per device. Pick the larger.

A **tune-up** rebate, in the years either utility offers one, follows the same fuel logic: a furnace tune-up rebate would come from Consumers, an AC tune-up rebate from DTE. Ask which program the contractor is registered with before assuming the visit qualifies.

## Propane homes

Rural addresses in Lyndon, Sharon, Freedom and Bridgewater Townships that heat with propane have no gas utility and therefore no gas rebate. For those homes the heat pump math is different and often better, because propane has historically cost far more per unit of heat than natural gas, and a cold-climate heat pump with the propane furnace as backup can cut the propane bill substantially. The DTE electric rebate and the federal credit still apply. Cold-climate heat pumps in Southeast Michigan covers performance, and [heat pump installation cost](/resources/heat-pump-installation-cost-michigan/) covers the installed range before incentives.

## Stacking with federal and state programs

A Consumers rebate combines with the federal 25C credit in the same way a DTE rebate does. Michigan's HOMES and HEAR rebates through EGLE are a separate, income-based layer that may apply to heat pumps and electrical work. The full picture, including the caveats about Congress and about program funding, is in [Michigan HVAC rebates and tax credits](/resources/michigan-hvac-rebates-and-tax-credits/).

## How we handle Consumers territory

Chelsea and Dexter sit at the western edge of our 20-mile radius, and we work there regularly. On every replacement estimate in Consumers gas territory, we tell you which utility each rebate comes from, which tier of equipment crosses the threshold, and we complete the contractor portion of the application. The rebate is not deducted from the quote; it arrives from the utility. Our [furnace installation](/services/furnace-installation/) and heat pump installation estimates are free, and we would rather tell a homeowner in Manchester that a repair makes more sense than sell a furnace, rebate or no rebate.`,
  faqs: [
    {
      q: "I have DTE electric and Consumers gas. Which rebate do I apply for?",
      a: "Apply to the utility that supplies the fuel the equipment uses. Furnace and gas water heater rebates go to Consumers; heat pump, central AC and heat pump water heater rebates go to DTE.",
    },
    {
      q: "Does Consumers Energy rebate 80% furnaces?",
      a: "No. The threshold has been condensing efficiency, 95% AFUE or higher, in every recent program year.",
    },
    {
      q: "Can I claim a smart thermostat rebate from both utilities?",
      a: "Usually only one rebate per device. If both utilities offer one, claim the larger. Some thermostat rebates are tied to enrolling in a peak-demand program.",
    },
    {
      q: "My house is on propane in Lyndon Township. Any rebates?",
      a: "No gas utility rebate, since there is no gas utility. A heat pump still qualifies for the DTE electric rebate, the federal credit and possibly state HEAR funds, and it tends to pay off faster against propane than against natural gas.",
    },
    {
      q: "Do Consumers rebate amounts change?",
      a: "Yes, every program year, and some measures run out of funding before year end. Check consumersenergy.com for the current list before choosing equipment.",
    },
  ],
  relatedServices: ["furnace-installation", "heat-pump-installation", "thermostat-installation"],
  relatedResources: [
    "michigan-hvac-rebates-and-tax-credits",
    "dte-energy-rebates-hvac",
    "heat-pump-vs-furnace-michigan",
    "furnace-efficiency-explained-80-vs-96-afue",
  ],
};
