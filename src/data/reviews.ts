export type Review = {
  name: string;
  when: string;
  stars: 5;
  text: string;
  services?: string[];
  topic: "ac" | "furnace" | "water-heater" | "general" | "install";
  featured?: boolean;
};

/** Real Google reviews for Temprasure LLC (names shortened to first name + initial where available). */
export const REVIEWS: Review[] = [
  {
    name: "JE W.",
    when: "2026",
    stars: 5,
    topic: "ac",
    featured: true,
    services: ["AC repair"],
    text: "Al was great! I had no A/C on the hottest day of the year and I was able to diagnose it to a failed capacitor. I was calling for the part and no one had stock. I spoke with Al and he was able to help me within an hour — came out, installed and rolling same day. Al is a great guy, highly recommend.",
  },
  {
    name: "Troy T.",
    when: "2025",
    stars: 5,
    topic: "install",
    featured: true,
    services: ["AC installation", "Thermostat installation"],
    text: "On June 24 around 3:00 p.m., our A/C stopped working. I called several A/C repair companies and they all told me that it would take from several days to a few weeks to come out. Then I ran across Temprasure. I spoke to Al, and he came out the same day and diagnosed my 26-year-old A/C unit. The bad news is that it could not be repaired. The good news is that I purchased a new A/C unit and his team installed the new unit with no issues. Everything Al said about the installation experience actually occurred as he stated, from the delivery date of the unit to the time it took to install it. Not to mention the prices were more than reasonable.",
  },
  {
    name: "Scott G.",
    when: "2024",
    stars: 5,
    topic: "furnace",
    featured: true,
    services: ["Furnace replacement"],
    text: "Al and his team are great. Our furnace stopped working on New Year's Eve. I called 10 HVAC shops and no one would come out except Al. He helped determine our problem and within a week I had a new furnace that was covered by my home insurance. I had a few problems post-install and the Temprasure team came over immediately on the weekend to fix it. Great company. Highly recommend!!",
  },
  {
    name: "Jillian R.",
    when: "2024",
    stars: 5,
    topic: "ac",
    services: ["AC maintenance"],
    text: "Al is kind, prompt, and has great communication. He rescheduled with me when the weather was not warm enough to ensure no damage was done to my AC unit but communicated early and professionally. He also offered an early-bird discount for getting my service done before the thick of summer, which I appreciated. Thanks for spending part of your birthday making sure my AC unit was running smoothly!",
  },
  {
    name: "Jessica P.",
    when: "2023",
    stars: 5,
    topic: "furnace",
    featured: true,
    services: ["Furnace repair"],
    text: "Alfred at Temprasure is our go-to guy when it comes to our HVAC. We've used him twice (soon to be a third time) and he's always been honest, trustworthy, communicative, and reliable. We recommend him 100%. He has saved us thousands over the last couple of years by diagnosing and fixing our furnace where I'm convinced any other company would have tried to sell us a new furnace or some hefty fix. Don't use anyone else!",
  },
  {
    name: "Mike W.",
    when: "2023",
    stars: 5,
    topic: "furnace",
    services: ["Heating repair"],
    text: "Al was great, very punctual, kept us updated through the whole process when he was on his way. Explained exactly what he did to get us back up and running with our heat. 10/10 would go to them again. UPDATE: Have only used Temprasure since the first time we used him — he always makes sure that we're taken care of and does everything in his power to make sure we have heat or air conditioning before he leaves!",
  },
  {
    name: "Celina G.",
    when: "2020",
    stars: 5,
    topic: "furnace",
    featured: true,
    services: ["Furnace replacement"],
    text: "Our heat went out, called Alfred, the owner, and he was here within the hour to tell us that we needed a new furnace, because the heat exchanger had holes and was leaking gas! He returned 2 days later to replace the unit; it was a lengthy process, about 10 hours, but it was well worth it! Very professional, told us exactly what we needed, even encouraged us to get a second opinion, which we did, and they said the same thing! So we went with Al!",
  },
  {
    name: "Trale W.",
    when: "2019",
    stars: 5,
    topic: "general",
    text: "Temprasure is one of the best-managed companies I've ever come into contact with. Not only did Al do a great job but he did so in a timely manner. He worked as if it was his home in need. I would recommend him to anyone who has heating and cooling needs.",
  },
  {
    name: "Kareem L.",
    when: "2024",
    stars: 5,
    topic: "general",
    text: "Al & Co. came out and took very good care of me and my family. He showed up within an hour of me making contact and was able to diagnose and take care of the problem quickly and for reasonable pricing.",
  },
  {
    name: "Carol M.",
    when: "2023",
    stars: 5,
    topic: "water-heater",
    featured: true,
    services: ["Water heater replacement", "Evaporator coil replacement"],
    text: "They replaced my water heater and the coil for my central air. The price quoted is what I paid. They were on time and also kept me informed by text. I will most definitely use them again. Yes, I recommend them.",
  },
  {
    name: "Jt M.",
    when: "2025",
    stars: 5,
    topic: "furnace",
    services: ["Furnace repair"],
    text: "Alfred was super knowledgeable and was able to pinpoint what was wrong with my furnace. They are a 24-hour on-call service and they charge a flat rate. I'll definitely be using them again in the future for any of my HVAC needs. Well done.",
  },
  {
    name: "Michael C.",
    when: "2019",
    stars: 5,
    topic: "ac",
    text: "My AC hadn't been working for the past few days. I called Al on Saturday to see if he could come out sometime next week. I told him what my problem was and he asked me if Sunday morning would be good for him to come over and take a look at it. Of course I said yes. He came this morning and fixed the problem. Very pleased with his service.",
  },
  {
    name: "Orsolya",
    when: "2022",
    stars: 5,
    topic: "water-heater",
    featured: true,
    services: ["Water heater replacement"],
    text: "My elderly non-English-speaking parents needed their water heater replaced and Temprasure did not leave until they made sure my parents were satisfied and happy to have hot water once again. They were very patient with them and did not abandon them even though I know sometimes it's hard to deal with my non-speaking parents. They checked back with us a few days later to make sure everything was still working good. I definitely would recommend this company.",
  },
  {
    name: "Genevieve L.",
    when: "2021",
    stars: 5,
    topic: "ac",
    text: "My tenants found out the AC was broken on a hot spring day and Al was able to come that day and fix the problem. Thanks Al for being so communicative and clear about what to expect, including price and timeline.",
  },
  {
    name: "Marc L.",
    when: "2019",
    stars: 5,
    topic: "ac",
    text: "AC stopped working. Started contacting places and getting told it would be the following week. Al at Temprasure said he was booked all day, but could come out that night. AC is working again and pricing was very reasonable.",
  },
  {
    name: "Devon P.",
    when: "2019",
    stars: 5,
    topic: "general",
    text: "Al is very polite and professional. Is willing to answer any questions you may have. I would recommend Temprasure to 10/10 people looking for HVAC work.",
  },
  {
    name: "Dana J.",
    when: "2022",
    stars: 5,
    topic: "furnace",
    text: "My heat stopped working and I called to set up an appointment for the next day. They came on time and provided quality and great service! I will recommend and use them again.",
  },
  {
    name: "Kathy G.",
    when: "2022",
    stars: 5,
    topic: "furnace",
    text: "Al/Temprasure are the best! When I called about my furnace he came over immediately and took care of it. I recommend Temprasure to everyone! Thank you Al!!",
  },
  {
    name: "Tony N.",
    when: "2019",
    stars: 5,
    topic: "furnace",
    text: "Very knowledgeable and very friendly. Didn't take very long for him to get the furnace running again. Would highly recommend him.",
  },
  {
    name: "Joshua S.",
    when: "2019",
    stars: 5,
    topic: "furnace",
    text: "Very professional. I didn't know what was going on with my furnace. I called them and they came over and looked at it and immediately knew what the problem was. Took them 5 minutes to fix it!",
  },
  {
    name: "Shariff B.",
    when: "2019",
    stars: 5,
    topic: "general",
    text: "Excellent quality service and a trustworthy company — honest inspections. You will definitely get your money's worth. An overwhelmingly great experience.",
  },
  {
    name: "Samuel P.",
    when: "2019",
    stars: 5,
    topic: "general",
    text: "Temprasure is by far the best heating and cooling business I have been referred to. They are quick and very good at what they do. I would recommend them to everyone who may need some work done.",
  },
  {
    name: "Jai M.",
    when: "2019",
    stars: 5,
    topic: "general",
    text: "Great company — fast, trustworthy and reliable. Will get the job done in a timely manner. I will recommend this company to anyone with HVAC needs.",
  },
  {
    name: "Michael D.",
    when: "2022",
    stars: 5,
    topic: "general",
    text: "Fantastic and friendly service!",
  },
];

export const reviewsFor = (topic: Review["topic"] | "any", n = 3): Review[] => {
  const pool = topic === "any" ? REVIEWS : REVIEWS.filter((r) => r.topic === topic);
  const list = pool.length >= n ? pool : [...pool, ...REVIEWS.filter((r) => !pool.includes(r))];
  return list.slice(0, n);
};

export const FEATURED_REVIEWS = REVIEWS.filter((r) => r.featured);
