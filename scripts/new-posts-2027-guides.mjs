// Evergreen Saudi travel & transfer guides (2027 batch).
// Each article lives in ./posts-2027/<slug>.mjs as `export const post = {...}`.
// This module appends the shared call-to-action and derives FAQPage schema,
// then exports the finished array for seed-blogs.mjs to upsert.

import { post as entryRequirements2027 } from "./posts-2027/saudi-entry-requirements-2027.mjs";
import { post as dmmAirportGuide } from "./posts-2027/king-fahd-airport-complete-guide.mjs";
import { post as dmmHotels } from "./posts-2027/best-hotels-near-dammam-airport.mjs";
import { post as dammamToBahrain } from "./posts-2027/dammam-to-bahrain-travel-guide.mjs";
import { post as dammamTravelGuide } from "./posts-2027/dammam-travel-guide.mjs";
import { post as airportPickupGuide } from "./posts-2027/saudi-airport-pickup-guide.mjs";
import { post as digitalNomadGuide } from "./posts-2027/saudi-arabia-digital-nomad-guide.mjs";
import { post as businessTravelGuide } from "./posts-2027/saudi-arabia-business-travel-guide.mjs";
import { post as causewayGuide } from "./posts-2027/king-fahd-causeway-guide.mjs";
import { post as transferTips } from "./posts-2027/saudi-airport-transfer-tips.mjs";

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

export const extraPosts2027Guides = [
  entryRequirements2027,
  dmmAirportGuide,
  dmmHotels,
  dammamToBahrain,
  dammamTravelGuide,
  airportPickupGuide,
  digitalNomadGuide,
  businessTravelGuide,
  causewayGuide,
  transferTips,
].map(finalise);
