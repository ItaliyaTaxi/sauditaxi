import { cities } from "@/data/cities";
import { airports } from "@/data/airports";
import { aggregateRating } from "@/data/testimonials";

/**
 * About-page-only stat strip. Deliberately limited to figures that are
 * directly derivable from real project data (city/airport counts, the
 * average rating computed from actual testimonial entries) plus the
 * business's stated always-on support model — NOT the hardcoded, unverified
 * "50,000+ successful transfers" figure in TrustSection or the fixed
 * `reviewCount: 1280` constant in testimonials.ts, neither of which could be
 * independently verified against real business data.
 */
export function AboutStats() {
  const stats = [
    { value: `${cities.length}+`, label: "Cities Covered" },
    { value: `${airports.length}`, label: "Airports Served" },
    { value: `${aggregateRating.ratingValue}/5`, label: "Customer Rating" },
    { value: "24/7", label: "Booking & Support" },
  ];

  return (
    <section className="border-y border-white/10 bg-navy">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <span className="block text-3xl font-extrabold text-gold">{s.value}</span>
            <span className="mt-1 block text-sm text-white/80">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
