import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const guides = [
  { slug: "riyadh-to-dammam-distance", title: "Airport arrivals vs. urban transfers", detail: "Riyadh to Dammam — what changes between a short city transfer and a longer intercity drive." },
  { slug: "jeddah-to-madinah-distance", title: "Pilgrimage-related travel", detail: "Jeddah to Madinah — timing and distance for one of the most-requested pilgrim routes." },
  { slug: "dammam-to-bahrain-distance", title: "Saudi–GCC border journeys", detail: "Dammam to Bahrain — why a border crossing needs its own planning, not just a longer drive." },
  { slug: "riyadh-to-abu-dhabi-distance", title: "Long-distance road transfers", detail: "Riyadh to Abu Dhabi — how a genuine long-haul journey differs from a short city trip." },
];

/**
 * Demonstrates topical/route knowledge without unverifiable expertise
 * claims — by linking to the actual distance/route research already on
 * the site rather than asserting "years of experience."
 */
export function AboutTravelExpertise() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">Understanding Saudi Road Journeys</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Different journeys need different planning
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            An airport arrival, a short city transfer, a long intercity drive and a
            cross-border journey each have their own timing and planning considerations.
          </p>
        </div>

        <div className="mt-10 divide-y divide-hairline border-y border-hairline">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/distance/${g.slug}`}
              className="group flex items-center justify-between gap-6 py-5 transition-colors hover:bg-sand/40"
            >
              <div>
                <p className="font-semibold text-ink">{g.title}</p>
                <p className="mt-1 text-sm text-ink-soft">{g.detail}</p>
              </div>
              <ArrowUpRight className="size-5 shrink-0 text-ink-muted transition-colors group-hover:text-brass" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
