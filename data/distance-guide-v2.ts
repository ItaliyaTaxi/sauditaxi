import type { DistanceGuideV2Content } from "@/components/distance-v2/DistanceGuideV2View";

/**
 * "Road Distance Guide V2" — a small batch of informational /distance/{slug}
 * pages using a third, deliberately distinct visual design (see
 * components/distance-v2/DistanceGuideV2View.tsx) from both the original
 * distance-page template (data/distance-pages.ts) and the "rich journey"
 * design (data/journey-pages.ts). Purely additive: wired into
 * app/(main)/distance/[slug]/page.tsx and app/sitemap.ts alongside the
 * other two collections, none of which are modified.
 *
 * These pages are deliberately informational, not commercial: the only
 * link to a booking flow is the single `cta` block at the end of each
 * page's blocks, pointing at the matching /routes/{slug} commercial page.
 */

export interface DistanceGuideV2Page extends DistanceGuideV2Content {
  slug: string;
  from: string;
  to: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
}

const BORDER_SOURCES = [
  { label: "Saudi Arabia–United Arab Emirates border (Wikipedia)", url: "https://en.wikipedia.org/wiki/Saudi_Arabia%E2%80%93United_Arab_Emirates_border" },
  { label: "Highway 10, Saudi Arabia (Wikipedia)", url: "https://en.wikipedia.org/wiki/Highway_10_(Saudi_Arabia)" },
  { label: "Al Batha–Ghuwaifat border crossing — practical crossing information", url: "https://bordercrossinghub.com/batha-al-batha-uae-side-border-crossing-2/" },
];

export const distanceGuideV2Pages: DistanceGuideV2Page[] = [
  // ── 1. Riyadh → Abu Dhabi ────────────────────────────────────────────────
  {
    slug: "riyadh-to-abu-dhabi-distance",
    from: "Riyadh",
    to: "Abu Dhabi",
    h1: "International Road Distance & Journey Guide",
    metaTitle: "Riyadh to Abu Dhabi Road Distance & Journey Time",
    metaDescription:
      "How far is Riyadh from Abu Dhabi by road? Verified distance (~880-900 km), driving time, the Al Batha border, and what the journey involves.",
    eyebrow: "Road Distance Guide",
    dek: "How far Riyadh and Abu Dhabi really are by road, what the Al Batha border adds to the trip, and what the drive itself involves.",
    lastVerified: "2026-09-02",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈880-900 km",
        segments: [
          { from: "Riyadh", to: "Al Batha Border", km: 530, displayValue: "~530 km" },
          { from: "Al Batha Border", to: "Abu Dhabi", km: 358, displayValue: "~355-360 km" },
        ],
        note: "Independently verified road-distance estimates, not a live routing calculation. Older figures circulating elsewhere (around 750 km) understate the actual road distance — see sources below.",
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Riyadh to Abu Dhabi via Highway 10 and the Al Batha / Al Ghuwaifat crossing.",
        origin: "Riyadh, Saudi Arabia",
        destination: "Abu Dhabi, United Arab Emirates",
      },
      {
        type: "stages",
        heading: "How the Journey Breaks Down",
        steps: [
          { label: "Riyadh departure", detail: "Onto Highway 10, heading south-east toward Al Kharj." },
          { label: "Saudi road journey", detail: "A long, flat desert stretch via Haradh, clipping the north-western corner of the Empty Quarter." },
          { label: "Saudi–UAE border", detail: "Saudi exit formalities at Al Batha, then Emirati entry at Al Ghuwaifat." },
          { label: "UAE road journey", detail: "Onto the E11 corridor heading toward Abu Dhabi." },
          { label: "Abu Dhabi arrival", detail: "The final stretch into the city." },
        ],
        note: "Stage order reflects the standard highway routing; the exact roads suggested can vary slightly by GPS provider.",
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "~10-10.5 hours",
        totalJourney: "Often 12+ hours in practice",
        factors: [
          "Border processing time is highly variable — reports range from well under an hour to several hours at busy periods",
          "A rest stop is realistic on a drive this length, and sensible on the desert stretch",
          "Departure time affects how much city traffic you meet leaving Riyadh and entering Abu Dhabi",
        ],
      },
      {
        type: "borderNote",
        heading: "The Al Batha / Al Ghuwaifat Border",
        paragraphs: [
          "The crossing operates around the clock. Saudi exit processing happens at Al Batha; Emirati entry processing, a short distance further, happens at Al Ghuwaifat. Vehicles are typically inspected on both sides, and private cars continuing into the UAE need mandatory third-party UAE vehicle insurance, generally purchased at the border itself.",
          "Passport and visa requirements for entering the UAE depend on nationality and are updated from time to time — this page doesn't attempt to state them, since getting that wrong could genuinely disrupt a trip. Check current requirements with Saudi Arabia's passport authority (Jawazat) and the UAE's federal immigration authority before travelling.",
        ],
      },
      {
        type: "prose",
        heading: "The Road Itself",
        narrow: true,
        paragraphs: [
          "Highway 10 runs largely straight and flat for most of this route, through open desert with long gaps between towns and services. The section near the border clips the north-western corner of the Rub' al Khali (the Empty Quarter) — the road itself is a modern highway, but the surrounding landscape is genuinely remote.",
          "On the UAE side, the E11 is a faster, more built-up corridor as it approaches Abu Dhabi, with services becoming noticeably more frequent than on the Saudi stretch.",
        ],
      },
      {
        type: "planningNotes",
        heading: "Planning Notes",
        items: [
          { question: "When should I leave Riyadh?", answer: "An early departure keeps you ahead of the busier mid-morning period at the border and gives more daylight for the desert stretch." },
          { question: "What should I allow extra time for?", answer: "The border, primarily — its timing is the least predictable part of the whole trip, more so than the driving itself." },
          { question: "How should I treat the ~10-hour estimate?", answer: "As pure driving time in free-flowing conditions. Add a rest stop and the border, and a realistic total is closer to 12+ hours door to door." },
          { question: "Does luggage volume affect the drive?", answer: "Not the driving time, but it's worth confirming vehicle capacity in advance if you're travelling with a lot of it — see the transfer options linked below." },
        ],
      },
      {
        type: "contextCard",
        heading: "Arriving in Abu Dhabi",
        paragraphs: [
          "After roughly ten hours on the road plus the border, arriving in Abu Dhabi at the end of the E11 corridor marks a genuine change of pace — city traffic, taller buildings, and considerably more services than the desert stretch behind you. If your journey continues to a specific address, it's worth having that confirmed in advance, since a long drive is not the moment to be figuring out final-mile directions.",
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph:
          "If you only need the Saudi-side leg, see our guide to the <a href='/distance/riyadh-to-al-batha-border-distance'>road distance from Riyadh to the Al Batha border</a>. For the journey in the opposite direction, see <a href='/distance/abu-dhabi-to-riyadh-distance'>Abu Dhabi to Riyadh</a>.",
      },
      {
        type: "cta",
        text: "Planning to travel this route by private vehicle?",
        linkLabel: "See our Riyadh to Abu Dhabi private transfer",
        linkPath: "/routes/riyadh-to-abu-dhabi",
      },
    ],
    faqs: [
      { question: "How is the ~880-900 km figure calculated?", answer: "It's derived from independent road-distance sources (not a single live routing query), cross-checked by adding the verified Riyadh-to-border distance (~530 km) to the verified border-to-Abu-Dhabi distance (~355-360 km)." },
      { question: "Why do some sources show a shorter distance, around 750 km?", answer: "Older or less-detailed estimates sometimes understate this route. The 750 km figure doesn't match the independently verified sources we checked for this page and appears to be inaccurate." },
      { question: "Is the driving time the same in both directions?", answer: "The distance is effectively the same either way; timing differs mainly with traffic and border queues on the day, not the direction of travel." },
      { question: "Does the distance change depending on the exact route taken?", answer: "Slightly — GPS providers occasionally suggest marginally different roads through Al Kharj or Haradh, but the variation is small relative to the total distance." },
      { question: "How much of the total journey time is the border versus driving?", answer: "Driving is the larger, more predictable share at around ten hours. The border is the smaller but far less predictable share — anywhere from under an hour to several hours." },
    ],
    sources: [
      { label: "Riyadh to Abu Dhabi driving distance — distance.to", url: "https://www.distance.to/Riyadh/Abu-Dhabi" },
      { label: "Riyadh to Abu Dhabi distance — Travelmath", url: "https://www.travelmath.com/distance/from/Riyadh,+Saudi+Arabia/to/Abu+Dhabi,+United+Arab+Emirates" },
      { label: "Al Batha border crossing to Abu Dhabi distance", url: "https://www.distancesfrom.com/sa/distance-from-Al-Batha-Border-Crossing-Post-to-abu-dhabi/DistanceHistory/13938229.aspx" },
      ...BORDER_SOURCES,
    ],
  },

  // ── 2. Abu Dhabi → Riyadh ────────────────────────────────────────────────
  {
    slug: "abu-dhabi-to-riyadh-distance",
    from: "Abu Dhabi",
    to: "Riyadh",
    h1: "Return Road Journey & Saudi Entry Guide",
    metaTitle: "Abu Dhabi to Riyadh Distance – Road Journey Guide",
    metaDescription:
      "Abu Dhabi to Riyadh by road: verified distance (~880-900 km), what changes when entering Saudi Arabia at Al Batha, and realistic journey timing.",
    eyebrow: "Road Distance Guide",
    dek: "The road journey back into Saudi Arabia — what changes at entry, and how the return distance and timing compare to the outbound trip.",
    lastVerified: "2026-09-02",
    blocks: [
      {
        type: "stages",
        heading: "The Journey in Stages",
        steps: [
          { label: "UAE departure", detail: "Leaving Abu Dhabi on the E11, heading for the Al Ghuwaifat crossing." },
          { label: "Approaching the border", detail: "The E11 corridor thins out as it nears the frontier." },
          { label: "Saudi entry", detail: "Emirati exit at Al Ghuwaifat, then Saudi entry processing at Al Batha." },
          { label: "Saudi road journey", detail: "Onto Highway 10 west, via Haradh and Al Kharj." },
          { label: "Riyadh arrival", detail: "The final approach into the capital." },
        ],
      },
      {
        type: "borderNote",
        heading: "Entering Saudi Arabia",
        paragraphs: [
          "Coming from the UAE, you'll clear Emirati exit formalities at Al Ghuwaifat before Saudi entry processing at Al Batha, a short distance further. The crossing runs 24 hours, and vehicles are generally inspected on entry.",
          "Visa and entry requirements for Saudi Arabia depend on nationality and change periodically — this page won't guess at them. Check current requirements with Saudi Arabia's passport authority (Jawazat) before you travel, particularly if you're arriving by private vehicle rather than by air.",
        ],
      },
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈880-900 km",
        segments: [
          { from: "Abu Dhabi", to: "Al Batha Border", km: 358, displayValue: "~355-360 km" },
          { from: "Al Batha Border", to: "Riyadh", km: 530, displayValue: "~530 km" },
        ],
        note: "The same physical route as the outbound journey, described from the Abu Dhabi side.",
      },
      {
        type: "profile",
        heading: "Route Profile",
        layout: "split",
        items: [
          { label: "Countries crossed", value: "UAE → Saudi Arabia" },
          { label: "Border", value: "Al Ghuwaifat / Al Batha" },
          { label: "Main highway, Saudi side", value: "Highway 10" },
          { label: "Arrival city", value: "Riyadh" },
        ],
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Abu Dhabi to Riyadh via the Al Ghuwaifat / Al Batha crossing and Highway 10.",
        origin: "Abu Dhabi, United Arab Emirates",
        destination: "Riyadh, Saudi Arabia",
      },
      {
        type: "timeReality",
        heading: "Realistic Journey Timing",
        pureDriving: "~10-10.5 hours",
        totalJourney: "Often 12+ hours in practice",
        factors: [
          "Saudi entry processing is the least predictable part of the trip — treat any single figure with caution",
          "The long Highway 10 stretch after the border benefits from at least one rest stop",
          "Arriving in Riyadh during evening rush hour adds noticeably more time than a daytime arrival",
        ],
      },
      {
        type: "prose",
        heading: "The Saudi-Side Drive",
        narrow: true,
        paragraphs: [
          "Once through the border, the route runs west on Highway 10 through Haradh and past Al Kharj before reaching Riyadh's outskirts. It's a long, largely featureless stretch of desert highway — the terrain and road quality don't change much until the capital's skyline becomes visible.",
          "This is the same road used by the outbound Riyadh-to-Abu-Dhabi journey, just travelled in the opposite direction — the driving character of the route doesn't meaningfully differ by direction.",
        ],
      },
      {
        type: "contextCard",
        heading: "Arriving in Riyadh",
        paragraphs: [
          "After the border and the long desert drive, Riyadh's arrival is a return to a genuinely large, modern capital — heavier traffic, more road options, and a wider range of onward connections, including the airport if that's your next stop. Having your exact Riyadh destination confirmed in advance saves navigating it at the end of a long travel day.",
        ],
      },
      {
        type: "planningNotes",
        heading: "Planning Notes",
        items: [
          { question: "What should I know before leaving the UAE?", answer: "Confirm your Saudi entry requirements in advance, since these vary by nationality and aren't something to leave until you're at the crossing." },
          { question: "How predictable is Saudi entry processing?", answer: "Not very — reports vary from under an hour to several hours depending on the day and time. Treat it as the least predictable segment of the trip." },
          { question: "Does the estimate change if I'm heading to the airport?", answer: "The driving distance is similar, but factor in Riyadh's own traffic patterns and check-in timing separately from the road journey itself." },
          { question: "Is the return leg really the same distance?", answer: "Yes — this is the same physical route as Riyadh to Abu Dhabi, described from the opposite direction." },
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph:
          "For the outbound direction, see <a href='/distance/riyadh-to-abu-dhabi-distance'>Riyadh to Abu Dhabi road distance</a>. If you're arriving from the border rather than from Abu Dhabi directly, our <a href='/distance/al-batha-border-to-riyadh-distance'>Al Batha border to Riyadh guide</a> covers just that leg.",
      },
      {
        type: "cta",
        text: "Planning to travel this route by private vehicle?",
        linkLabel: "See our Abu Dhabi to Riyadh private transfer",
        linkPath: "/routes/abu-dhabi-to-riyadh",
      },
    ],
    faqs: [
      { question: "Is the distance really identical in both directions?", answer: "Yes, in practical terms — it's the same road network covered in reverse. Any difference between the two directions comes down to traffic and border timing on the day, not the route itself." },
      { question: "What's different about entering Saudi Arabia versus leaving it?", answer: "The formalities themselves are broadly similar in structure (exit checks on one side, entry checks on the other), but entry requirements — visas, permitted stay, documentation — are specific to the country you're entering, so they differ by direction." },
      { question: "Do I need anything specific to enter Saudi Arabia by road?", answer: "Requirements depend on nationality and change periodically, so we'd point you to Saudi Arabia's passport authority (Jawazat) for the current position rather than guess here." },
      { question: "How long should I budget from an Abu Dhabi address to a Riyadh address?", answer: "Around 10-10.5 hours of pure driving, plus the border and any rest stops — a realistic door-to-door estimate is often 12 hours or more." },
      { question: "Does traffic in Abu Dhabi meaningfully affect the total time?", answer: "It can add some time at the start of the trip, particularly during the morning or evening rush, though it's a smaller factor than the border or the long highway stretch." },
    ],
    sources: [
      { label: "Abu Dhabi to Riyadh driving distance — Trippy", url: "https://www.trippy.com/distance/Abu-Dhabi-to-Riyadh" },
      { label: "Riyadh to Abu Dhabi distance — Travelmath", url: "https://www.travelmath.com/distance/from/Riyadh,+Saudi+Arabia/to/Abu+Dhabi,+United+Arab+Emirates" },
      { label: "Al Batha to Riyadh driving distance — Rome2rio", url: "https://www.rome2rio.com/s/Al-Batha-Saudi-Arabia/Riyadh" },
      ...BORDER_SOURCES,
    ],
  },

  // ── 3. Riyadh → Al Batha Border ─────────────────────────────────────────
  {
    slug: "riyadh-to-al-batha-border-distance",
    from: "Riyadh",
    to: "Al Batha Border",
    h1: "Saudi-to-Border Distance Guide",
    metaTitle: "Riyadh to Al Batha Border – Road Distance Guide",
    metaDescription:
      "How far is the Al Batha border from Riyadh? Verified road distance (~530 km) and driving time (~7-7.5 hrs) for the Saudi-side leg of the journey.",
    eyebrow: "Road Distance Guide",
    dek: "The Saudi-side road distance from Riyadh to the Al Batha crossing — separate from the full international journey into the UAE.",
    lastVerified: "2026-09-02",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈530 km",
        segments: [{ from: "Riyadh", to: "Al Batha Border", km: 530, displayValue: "~530 km" }],
        note: "This is the Saudi-side distance only, ending at the crossing itself — not the distance into a UAE city.",
      },
      {
        type: "profile",
        heading: "Route Profile",
        layout: "strip",
        items: [
          { label: "Driving time", value: "~7-7.5 hours" },
          { label: "Main highway", value: "Highway 10" },
          { label: "Border", value: "Al Batha / Al Ghuwaifat" },
          { label: "Route type", value: "Saudi-side, ends at the crossing" },
        ],
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Riyadh to the Al Batha border crossing via Highway 10.",
        origin: "Riyadh, Saudi Arabia",
        destination: "Al Batha Border Crossing, Saudi Arabia",
      },
      {
        type: "stages",
        heading: "How the Drive Breaks Down",
        steps: [
          { label: "Riyadh departure", detail: "South-east onto Highway 10 toward Al Kharj." },
          { label: "Saudi highway journey", detail: "Via Haradh, a long, flat desert stretch." },
          { label: "Al Batha border arrival", detail: "The Saudi-side crossing facility." },
        ],
      },
      {
        type: "timeReality",
        heading: "How Long It Takes",
        pureDriving: "~7-7.5 hours",
        factors: [
          "This is driving time only — it doesn't include any time spent at the crossing itself",
          "A single rest stop is realistic given the distance and the limited services along the way",
        ],
        note: "For what happens after the border, see the border-context note below.",
      },
      {
        type: "prose",
        heading: "What This Distance Covers",
        narrow: true,
        paragraphs: [
          "This figure describes the Saudi side of the journey only — Riyadh to the Al Batha crossing point, before any border processing. It's a meaningfully shorter distance than the full international trip, since the Saudi-to-UAE leg beyond the border adds a further ~355-360 km to reach Abu Dhabi, or somewhat more to reach Dubai.",
          "If you're planning the complete journey into the UAE rather than just the Saudi-side leg, our <a href='/distance/riyadh-to-abu-dhabi-distance'>Riyadh to Abu Dhabi distance guide</a> covers the full route and what changes at the crossing.",
        ],
      },
      {
        type: "planningNotes",
        heading: "Planning Notes",
        items: [
          { question: "When should I leave to reach the border at a reasonable time?", answer: "An early-morning departure from Riyadh gets you to the crossing before the busier late-morning period, which tends to affect border timing more than the drive itself." },
          { question: "How does this compare to the full Riyadh–Abu Dhabi distance?", answer: "It's around 350-370 km shorter, since it stops at the crossing rather than continuing into the UAE." },
          { question: "What should I know if I'm continuing into the UAE the same day?", answer: "Build in a buffer for the crossing itself, which is the least predictable part of a same-day trip — see our border-crossing note above." },
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph:
          "For the complete international distance, see <a href='/distance/riyadh-to-abu-dhabi-distance'>Riyadh to Abu Dhabi</a>. For the journey continuing from the border, see <a href='/distance/al-batha-border-to-riyadh-distance'>Al Batha border to Riyadh</a> (the reverse leg).",
      },
      {
        type: "cta",
        text: "Need a private transfer for just this leg?",
        linkLabel: "See our Riyadh to Al Batha border transfer",
        linkPath: "/routes/riyadh-to-al-batha-border",
      },
    ],
    faqs: [
      { question: "Why is this shorter than the Riyadh to Abu Dhabi distance?", answer: "Because it stops at the Saudi side of the crossing rather than continuing roughly 355-360 km further into the UAE to reach Abu Dhabi." },
      { question: "Does this distance include the border crossing itself?", answer: "No — it's the driving distance to the crossing point. Processing time at the border is separate and highly variable." },
      { question: "Which highway does the route follow?", answer: "Highway 10, running south-east from Riyadh via Al Kharj and Haradh to the Al Batha crossing." },
      { question: "Is the distance to the border the same regardless of my final UAE destination?", answer: "Yes — the Riyadh-to-border leg is fixed at around 530 km. Only the onward UAE distance changes depending on whether you're headed to Abu Dhabi, Dubai, or elsewhere." },
      { question: "How accurate is the ~530 km figure?", answer: "It's drawn from independent route-distance sources and cross-checked against the full Riyadh–Abu Dhabi figure minus the known border-to-Abu-Dhabi leg, which converge closely." },
    ],
    sources: [
      { label: "Al Batha to Riyadh driving distance — Rome2rio", url: "https://www.rome2rio.com/s/Al-Batha-Saudi-Arabia/Riyadh" },
      { label: "Al Batha border crossing to Abu Dhabi distance", url: "https://www.distancesfrom.com/sa/distance-from-Al-Batha-Border-Crossing-Post-to-abu-dhabi/DistanceHistory/13938229.aspx" },
      ...BORDER_SOURCES,
    ],
  },

  // ── 4. Al Batha Border → Riyadh ─────────────────────────────────────────
  {
    slug: "al-batha-border-to-riyadh-distance",
    from: "Al Batha Border",
    to: "Riyadh",
    h1: "Border-to-Riyadh Road Journey Guide",
    metaTitle: "Al Batha Border to Riyadh – Road Distance Guide",
    metaDescription:
      "The road distance and driving time from the Al Batha border crossing to Riyadh (~530 km, ~7-7.5 hrs) — the Saudi-side leg after crossing.",
    eyebrow: "Road Distance Guide",
    dek: "Continuing into Saudi Arabia after the Al Batha crossing — the distance, driving time, and road journey to Riyadh.",
    lastVerified: "2026-09-02",
    blocks: [
      {
        type: "profile",
        heading: "Route Profile",
        layout: "bignumber",
        items: [
          { label: "Road distance to Riyadh", value: "~530 km" },
          { label: "Driving time", value: "~7-7.5 hours" },
        ],
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Al Batha border crossing to Riyadh via Highway 10.",
        origin: "Al Batha Border Crossing, Saudi Arabia",
        destination: "Riyadh, Saudi Arabia",
      },
      {
        type: "stages",
        heading: "From the Border to Riyadh",
        steps: [
          { label: "Border departure point", detail: "The Saudi-side facility at Al Batha, once processing is complete." },
          { label: "Saudi highway journey", detail: "West on Highway 10, via Haradh and Al Kharj." },
          { label: "Approaching Riyadh", detail: "The capital's outskirts come into view after the long desert stretch." },
        ],
      },
      {
        type: "timeReality",
        heading: "How Long the Drive Takes",
        pureDriving: "~7-7.5 hours",
        factors: [
          "This is the driving time from the border onward — it doesn't include however long processing took before you left the crossing",
          "A rest stop partway is realistic given the distance",
        ],
        note: "Border-clearance timing itself is separate and highly variable — from well under an hour to several hours depending on when you cross.",
      },
      {
        type: "prose",
        heading: "Continuing After the Border",
        narrow: true,
        paragraphs: [
          "Once through Saudi entry formalities, the drive to Riyadh is a single, largely uninterrupted stretch of Highway 10 heading west — the same road used by the outbound Riyadh-to-border leg, just travelled from the crossing inward. There isn't a meaningfully different route option; this is the standard highway connection between the two points.",
          "Because border-clearance timing varies so much from one crossing to the next, this figure covers only the driving portion — from the point you actually leave the border, not from whenever you arrived at it.",
        ],
      },
      {
        type: "contextCard",
        heading: "Arriving in Riyadh",
        paragraphs: [
          "After the border and the drive, Riyadh offers considerably more onward options than the crossing did — city routes, hotels, and King Khalid International Airport if you're continuing by air. If your journey ends at the airport, it's worth accounting for Riyadh's own traffic separately from the highway estimate above.",
        ],
      },
      {
        type: "planningNotes",
        heading: "Planning Notes",
        items: [
          { question: "How is this different from Riyadh to the border?", answer: "Same road, same distance, opposite direction — the driving time doesn't meaningfully differ by direction." },
          { question: "Does the distance change depending on where I started in the UAE?", answer: "No — this figure begins at the Saudi-side border point itself, regardless of whether you travelled from Abu Dhabi, Dubai, or elsewhere beforehand." },
          { question: "What should I know about timing after clearing the border?", answer: "Plan the onward drive as its own ~7-7.5 hour block, separate from however long the crossing itself took." },
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph:
          "For the outbound leg, see <a href='/distance/riyadh-to-al-batha-border-distance'>Riyadh to Al Batha border</a>. If you're travelling the complete international route from the UAE, see <a href='/distance/abu-dhabi-to-riyadh-distance'>Abu Dhabi to Riyadh</a>.",
      },
      {
        type: "cta",
        text: "Need a pre-arranged pickup at the border?",
        linkLabel: "See our Al Batha border to Riyadh transfer",
        linkPath: "/routes/al-batha-border-to-riyadh",
      },
    ],
    faqs: [
      { question: "Is the distance the same as Riyadh to the border?", answer: "Yes — it's the same ~530 km route, just travelled in the opposite direction." },
      { question: "Does this figure start from the border itself or from somewhere in the UAE?", answer: "From the Saudi-side border point at Al Batha. Whatever UAE distance you covered beforehand isn't included in this figure." },
      { question: "How long after crossing should I expect to reach Riyadh?", answer: "Around 7-7.5 hours of driving from the point you leave the border, plus any rest stop you take along the way." },
      { question: "Is this the same route as the outbound Riyadh-to-border leg, just reversed?", answer: "Yes — there's a single standard highway connection (Highway 10) between the two points." },
      { question: "What's the main highway used?", answer: "Highway 10, running between the Al Batha crossing and Riyadh via Haradh and Al Kharj." },
    ],
    sources: [
      { label: "Al Batha to Riyadh driving distance — Rome2rio", url: "https://www.rome2rio.com/s/Al-Batha-Saudi-Arabia/Riyadh" },
      ...BORDER_SOURCES,
    ],
  },

  // ── 5. Dammam → Al Batha Border ─────────────────────────────────────────
  {
    slug: "dammam-to-al-batha-border-distance",
    from: "Dammam",
    to: "Al Batha Border",
    h1: "Eastern Province-to-Border Road Guide",
    metaTitle: "Dammam to Al Batha Border – Road Distance Guide",
    metaDescription:
      "The road distance from Dammam to the Al Batha border (~400 km, ~4-4.5 hrs) — and why estimates for this Eastern Province route vary by source.",
    eyebrow: "Road Distance Guide",
    dek: "The Eastern Province road distance to the Al Batha crossing — shorter than from Riyadh, with a genuine spread in the distance estimates worth explaining.",
    lastVerified: "2026-09-02",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈400 km",
        segments: [{ from: "Dammam", to: "Al Batha Border", km: 400, displayValue: "~400 km" }],
        note: "Sources for this specific leg range from roughly 345 to 430 km — see \"Why the Distance Estimates Vary\" below.",
      },
      {
        type: "profile",
        heading: "Route Profile",
        layout: "table",
        items: [
          { label: "Driving time", value: "~4-4.5 hours" },
          { label: "Main highway", value: "Highway 95 corridor" },
          { label: "Border", value: "Al Batha / Al Ghuwaifat" },
          { label: "Compared to the Riyadh route", value: "~90 min-2 hrs shorter" },
        ],
      },
      {
        type: "stages",
        heading: "How the Drive Breaks Down",
        steps: [
          { label: "Dammam departure", detail: "South through the Eastern Province." },
          { label: "Eastern Province interior", detail: "Past the region's interior towns." },
          { label: "Joining the interior corridor", detail: "Connecting with the road network used further south by the Riyadh-originating route." },
          { label: "Al Batha border arrival", detail: "The Saudi-side crossing facility." },
        ],
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Dammam to the Al Batha border crossing via the Highway 95 corridor.",
        origin: "Dammam, Saudi Arabia",
        destination: "Al Batha Border Crossing, Saudi Arabia",
      },
      {
        type: "timeReality",
        heading: "How Long It Takes",
        pureDriving: "~4-4.5 hours",
        factors: [
          "Shorter and generally more predictable than the Riyadh route, simply by virtue of the shorter distance",
          "A single rest stop is enough for most travellers on a drive this length",
        ],
      },
      {
        type: "prose",
        heading: "Why the Distance Estimates Vary",
        narrow: true,
        paragraphs: [
          "Unlike the Riyadh-to-border leg, where independent sources converge fairly tightly around 530 km, estimates for Dammam to Al Batha spread more widely — from around 345 km on one routing service to around 426 km on another. Both figures come from route-distance calculators rather than a single authoritative source, and the gap likely reflects different assumed roads through the Eastern Province before the two routes converge.",
          "Rather than pick one number and present it as exact, we show it as a range and centre the headline figure at roughly 400 km, which sits between the two — and note that at this distance, the practical difference in driving time is a matter of minutes, not hours.",
        ],
      },
      {
        type: "planningNotes",
        heading: "Planning Notes",
        items: [
          { question: "Is this really shorter than from Riyadh?", answer: "Yes, by roughly ninety minutes to two hours of driving, since the Eastern Province sits closer to the crossing." },
          { question: "Which highway should I expect to use?", answer: "The Highway 95 corridor through the Eastern Province, connecting into the interior road network toward the border." },
          { question: "What should I plan for on a 4+ hour desert drive?", answer: "One rest stop is generally sufficient at this distance, along with confirming fuel before the final stretch, where services thin out." },
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph:
          "For the longer route from the capital, see <a href='/distance/riyadh-to-al-batha-border-distance'>Riyadh to Al Batha border</a>. For the full international distance from Riyadh into the UAE, see <a href='/distance/riyadh-to-abu-dhabi-distance'>Riyadh to Abu Dhabi</a>.",
      },
      {
        type: "cta",
        text: "Need a private transfer for this leg?",
        linkLabel: "See our Dammam to Al Batha border transfer",
        linkPath: "/routes/dammam-to-al-batha-border",
      },
    ],
    faqs: [
      { question: "Why do sources disagree on the exact distance?", answer: "Route-distance calculators assume slightly different roads through the Eastern Province before the routes converge toward the border, producing a spread of roughly 345-430 km depending on the source." },
      { question: "Is this shorter than driving from Riyadh?", answer: "Yes, meaningfully — around 90 minutes to two hours less driving, since the Eastern Province is closer to the crossing than the capital." },
      { question: "What highway connects Dammam to the border?", answer: "The Highway 95 corridor through the Eastern Province, joining the interior road network used further south." },
      { question: "Does this distance include the border crossing itself?", answer: "No — it's the driving distance to the crossing point only. Processing time at the border is separate." },
      { question: "How was the ~400 km estimate reached?", answer: "By taking the midpoint of the two independent route-distance figures we found (approximately 345 km and 426 km) rather than presenting either as definitive." },
    ],
    sources: [
      { label: "Dammam to Al Batha driving distance — Rome2rio", url: "https://www.rome2rio.com/s/Dammam/Al-Batha-Saudi-Arabia" },
      { label: "Dammam to Al Batha Border Crossing Post distance", url: "https://www.distancesfrom.com/sa/distance-from-Dammam-to-Al-Batha-Border-Crossing-Post-Al-Batha/DistanceHistory/13652943.aspx" },
      { label: "Highway 95, Saudi Arabia (Wikipedia)", url: "https://en.wikipedia.org/wiki/Highway_95_(Saudi_Arabia)" },
      ...BORDER_SOURCES,
    ],
  },
];

export function getDistanceGuideV2Page(slug: string): DistanceGuideV2Page | undefined {
  return distanceGuideV2Pages.find((p) => p.slug === slug);
}
