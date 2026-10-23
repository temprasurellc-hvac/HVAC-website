import type { Resource } from "../types";

export const furnaceErrorCodesWhatTheBlinkingLightMeans: Resource = {
  slug: "furnace-error-codes-what-the-blinking-light-means",
  title: "Furnace Error Codes: What the Blinking Light Is Trying to Tell You",
  metaTitle: "Furnace Error Codes: Blinking Light Meaning",
  metaDescription:
    "The LED on your furnace board is a fault code. How to read it, what common codes mean on Carrier, Lennox, Goodman, Trane and Rheem, and which are urgent.",
  category: "troubleshooting",
  quickAnswer:
    "The blinking LED on a furnace control board is a fault code: count the flashes, pause, and repeat, then match the count to the legend printed inside the furnace door. Most codes fall into five families: pressure switch, limit switch, ignition failure, flame sensed when it should not be, and polarity or voltage faults. A steady light usually means normal operation.",
  published: "2026-10-16",
  updated: "2026-10-16",
  readMinutes: 5,
  body: `## Where the light is and how to read it

Pull the lower door off the furnace, or look through the small window in it, and find the control board. There will be one LED, or on newer boards two (often one red, one green, or a two-digit display). The board blinks in a pattern: a number of flashes, a pause of a second or two, then the same number again. Count the flashes between pauses. On many boards a slow steady blink means the board is powered and idle, a rapid blink means it is running normally through a call for heat, and a counted pattern means a stored fault.

Two things make this easier. First, the legend is printed on a sticker inside the door or on the board itself, and that legend is specific to your furnace, so it beats any generic list including this one. Second, most boards store the last fault even after the furnace recovers, and some will replay it if you hold the thermostat call or press a button on the board. Write the pattern down before you cut power, because turning the service switch off clears the memory on most models.

## The five families of codes

Manufacturers number things differently, but nearly every residential gas furnace faults for the same handful of reasons.

- **Pressure switch did not close (or stuck closed).** The inducer motor started but could not prove draft, or the switch was already closed before the inducer ran. Blocked intake or exhaust pipe, full condensate trap, cracked hose, weak inducer, or a bad switch.
- **Limit switch open.** The furnace overheated. Restricted airflow from a dirty filter, closed registers, a weak blower, or a plugged secondary heat exchanger. A rollout switch tripping often shares this code family and is more serious.
- **Ignition failure or lockout.** The furnace tried to light three times and gave up. Cracked ignitor, dirty flame sensor, gas valve not opening, or gas supply off. A soft lockout clears in an hour; a hard lockout needs a power reset.
- **Flame sensed with gas valve off.** The board sees a flame signal when it should not. Usually a leaking gas valve or a shorted sensor wire. This one is a shut-it-off-and-call code.
- **Reversed polarity, low voltage, or grounding.** The hot and neutral at the furnace are swapped, the 24-volt transformer is weak, or the board lacks a good ground. Common after someone replaced the furnace service switch or added a receptacle on the same circuit.

## Common brand patterns in Southeast Michigan homes

We repair every brand, and these come up constantly on the 1990s through 2010s furnaces in Canton, Pittsfield and Van Buren subdivisions. Treat these as starting points, not gospel; check your door sticker.

**Carrier, Bryant and Payne** share boards. A code 31 is pressure switch did not close. 33 is limit or rollout open. 34 is ignition proving failure. 13 is a limit lockout after too many trips. 14 is ignition lockout after three tries. A two-flash on older single-LED boards is pressure switch stuck closed; three flashes is pressure switch open.

**Lennox** uses a two-LED system on many boards. A slow alternating blink is normal operation. Codes like E223 or E250 on the digital display models point to pressure switch and flame-sensor issues respectively; the legend inside the door has the full table.

**Goodman and Amana** use a single red LED. One flash is ignition failure lockout. Two flashes is pressure switch stuck closed. Three is pressure switch open. Four is open limit. Five is flame sensed with no call. Seven is a low flame signal. A continuous light means normal, no light means no power or a bad board.

**Trane and American Standard** are similar to Goodman: two flashes is a lockout from too many retries, three is pressure switch, four is open limit, five is flame sensed out of sequence, six is reversed polarity or 115-volt problem, seven is low flame signal.

**Rheem and Ruud** boards often read a two-digit display. Codes 10 and 11 are rollout and limit respectively. 12 and 13 are pressure switch. 57 is low flame sense. 61 and 93 are blower or board faults.

**York, Luxaire and Coleman** use a similar single-LED count system, with three for pressure switch, four for limit, six for pressure switch stuck closed, and seven or eight for gas valve or flame-proving errors.

## The codes you can act on yourself

A pressure switch code on a 90%-plus furnace during a snowstorm: go outside and clear the PVC intake and exhaust. A limit code: change the filter, open every register, and make sure the return grille in the basement is not blocked. An ignition lockout: confirm the gas valve handle on the pipe next to the furnace is in line with the pipe, then reset the furnace by flipping the service switch off for 30 seconds. One reset is reasonable. If the furnace locks out again on the next cycle, stop resetting it; the fault is real and resetting repeatedly just adds stress. [Furnace not turning on troubleshooting](/resources/furnace-not-turning-on-troubleshooting/) walks through the full reset sequence and what to check between attempts.

## The codes you should not act on yourself

Flame sensed with the gas valve closed, a rollout switch that has tripped, or any code accompanied by a gas odor, soot, or a CO alarm: shut the furnace off at the service switch and leave it off. If you smell gas, leave the house and call DTE at 800-947-5000, then 911. A rollout trip means flame left the burner box; the usual cause is a blocked heat exchanger or flue, and the furnace needs a heat exchanger inspection before it runs again. Read [carbon monoxide and furnace safety in Michigan](/resources/carbon-monoxide-furnace-safety-michigan/) for how to think about those.

## Why the code is the start, not the diagnosis

A pressure switch code does not mean the pressure switch is bad; it means the switch did not close, and nine times out of ten the cause is somewhere else in the draft path. A limit code points to airflow, not the limit switch. Replacing the part named in the code without finding out why it opened is how homeowners end up paying for a switch and then paying again two weeks later. When we come out, we read the code, then measure: draft pressure with a manometer, temperature rise with a probe, flame signal in microamps, and 24-volt and 115-volt supply. That turns a code into an actual cause.

## When to call

Any code that repeats after one reset, any fault that comes with a smell or soot, and any blinking you cannot match to the legend are reasons to book a [furnace repair](/services/furnace-repair/) visit. Tell us the code when you call; it helps us bring the right parts. The most common code-related repairs, flame sensors, ignitors, pressure switches and limit switches, are all parts we carry on the truck, so most code calls are finished the same visit. A fall [furnace tune-up](/services/furnace-maintenance/) that includes cleaning the flame sensor and checking draft pressure prevents most of the codes you will ever see.`,
  faqs: [
    {
      q: "What does a steady light on my furnace mean?",
      a: "On most boards a steady or slow-blinking light means the board has power and no active fault. If the furnace is not running with a steady light, the problem is upstream, usually the thermostat or a door switch.",
    },
    {
      q: "What does it mean when the furnace light blinks rapidly?",
      a: "On many Carrier, Bryant and Goodman boards, a rapid blink means the furnace is running normally through a heat cycle. A counted pattern with pauses is a fault code.",
    },
    {
      q: "Can I clear a furnace error code by turning it off and on?",
      a: "Yes, cutting power at the service switch for 30 seconds clears most codes and lockouts. If the fault returns, the cause is still there. Write the code down before you reset so a technician knows what the board saw.",
    },
    {
      q: "Why does my furnace show a pressure switch code only when it is windy?",
      a: "Wind blowing into the exhaust termination on a sidewall-vented furnace can back-pressure the inducer enough to open the switch. A vent termination kit or relocating the pipes usually solves it.",
    },
    {
      q: "Which furnace codes are dangerous?",
      a: "Flame detected out of sequence, a tripped rollout switch, and any code accompanied by a CO alarm or gas smell. Shut the furnace off and call; do not keep resetting those.",
    },
  ],
  relatedServices: ["furnace-repair", "furnace-maintenance", "emergency-heating-repair"],
  relatedResources: [
    "furnace-not-turning-on-troubleshooting",
    "furnace-blowing-cold-air",
    "carbon-monoxide-furnace-safety-michigan",
    "furnace-short-cycling-causes",
  ],
};
