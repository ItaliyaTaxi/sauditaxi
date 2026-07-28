// Evergreen Saudi tourism & travel blog posts (2026 batch).
// Each article lives in ./posts-2026/<slug>.mjs as `export const post = {...}`.
// This module appends the shared call-to-action and derives FAQPage schema,
// then exports the finished array for seed-blogs.mjs to upsert.

import { post as jeddahSeason } from "./posts-2026/jeddah-season-2026.mjs";
import { post as touristVisa } from "./posts-2026/saudi-tourist-visa-2026.mjs";
import { post as redSea } from "./posts-2026/red-sea-project.mjs";
import { post as neom } from "./posts-2026/neom-travel-guide.mjs";
import { post as jeddahTerminals } from "./posts-2026/jeddah-airport-terminal-guide.mjs";
import { post as taifSummer } from "./posts-2026/taif-summer.mjs";
import { post as jeddahToAlula } from "./posts-2026/jeddah-to-alula.mjs";
import { post as riyadhAir } from "./posts-2026/riyadh-air.mjs";
import { post as riyadhDayTrips } from "./posts-2026/riyadh-day-trips.mjs";
import { post as augustTravel } from "./posts-2026/saudi-arabia-in-august.mjs";
import { post as soloSafety } from "./posts-2026/solo-tourist-safety-saudi-arabia.mjs";
import { post as airportWifi } from "./posts-2026/saudi-airport-wifi-guide.mjs";

// Shared CTA appended to every article (kept verbatim in sync with seed-blogs).
const GENERAL_CTA = `<h2 id="book-your-transfer">Book Your Private Transfer</h2>
<p>Travel across Saudi Arabia in comfort and on your own schedule. We provide fixed-price <a href="/airport-transfers">airport transfers</a>, reliable <a href="/city-transfers">city taxi service</a>, and long-distance <a href="/intercity-transfers">intercity transfers</a> — professional drivers, clean vehicles, and no surge pricing. <a href="/get-quote">Request a fixed-price quote</a> in under a minute.</p>`;

/** Build FAQPage JSON-LD from a post's faqs so rich results are emitted. */
function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (faqs ?? []).map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** Append the CTA and attach FAQ schema to a raw post object. */
function finalise(post) {
  return {
    ...post,
    content: `${post.content.trim()}\n\n${GENERAL_CTA}`,
    schemaJson: post.faqs && post.faqs.length ? faqSchema(post.faqs) : null,
  };
}

export const extraPosts2026 = [
  jeddahSeason,
  touristVisa,
  redSea,
  neom,
  jeddahTerminals,
  taifSummer,
  jeddahToAlula,
  riyadhAir,
  riyadhDayTrips,
  augustTravel,
  soloSafety,
  airportWifi,
].map(finalise);
