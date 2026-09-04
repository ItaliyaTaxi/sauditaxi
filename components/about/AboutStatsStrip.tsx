import { cities } from "@/data/cities";
import { airports } from "@/data/airports";
import { aggregateRating } from "@/data/testimonials";

/**
 * Restyled version of the old AboutStats — same deliberate rule (only
 * figures directly derivable from real project data, never the unverified
 * "50,000+ transfers" style claim): city/airport counts and the average
 * rating computed from actual testimonial entries, plus the stated
 * always-on support model.
 */
export function AboutStatsStrip() {
  const stats = [
    { value: `${cities.length}+`, label: "Cities covered" },
    { value: `${airports.length}`, label: "Airports served" },
    { value: `${aggregateRating.ratingValue}/5`, label: "Customer rating" },
    { value: "24/7", label: "Booking & support" },
  ];

  return (
    <section className="border-b border-hairline bg-white">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <span className="block text-2xl font-bold text-midnight sm:text-3xl">{s.value}</span>
            <span className="mt-1 block text-sm text-ink-soft">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
