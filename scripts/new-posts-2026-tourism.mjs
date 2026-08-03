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
import { post as flightDelayed } from "./posts-2026/flight-delayed-saudi-arabia.mjs";
import { post as elderlyParents } from "./posts-2026/saudi-arabia-with-elderly-parents.mjs";
import { post as cashlessPayments } from "./posts-2026/cashless-payment-apps-saudi-arabia.mjs";
import { post as fridayPrayer } from "./posts-2026/friday-prayer-travel-tips-saudi-arabia.mjs";
import { post as hotelNearHaram } from "./posts-2026/hotel-near-haram-what-to-know.mjs";
import { post as travelScams } from "./posts-2026/saudi-arabia-travel-scams.mjs";
import { post as aiVsLocal } from "./posts-2026/ai-travel-planning-vs-local-experts.mjs";
import { post as riyadhToAlula } from "./posts-2026/riyadh-to-alula-road-trip.mjs";
import { post as madinahToYanbu } from "./posts-2026/madinah-to-yanbu-transfer-guide.mjs";
import { post as businessTravelBahrainDammam } from "./posts-2026/business-travel-bahrain-dammam.mjs";
import { post as familyTravelBahrainSaudi } from "./posts-2026/family-travel-bahrain-saudi-arabia.mjs";
import { post as gccResidentsRoadTravel } from "./posts-2026/gcc-residents-road-travel-saudi-arabia.mjs";
import { post as bestVehicleCrossBorder } from "./posts-2026/best-vehicle-cross-border-travel.mjs";
import { post as bahrainToSaudiByRoad } from "./posts-2026/bahrain-to-saudi-arabia-by-road.mjs";
import { post as travelDocumentsBahrainSaudi } from "./posts-2026/travel-documents-bahrain-saudi-arabia.mjs";

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
  flightDelayed,
  elderlyParents,
  cashlessPayments,
  fridayPrayer,
  hotelNearHaram,
  travelScams,
  aiVsLocal,
  riyadhToAlula,
  madinahToYanbu,
  businessTravelBahrainDammam,
  familyTravelBahrainSaudi,
  gccResidentsRoadTravel,
  bestVehicleCrossBorder,
  bahrainToSaudiByRoad,
  travelDocumentsBahrainSaudi,
].map(finalise);
