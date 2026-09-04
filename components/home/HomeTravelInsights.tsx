import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const insights = [
  {
    slug: "riyadh-to-jeddah-distance",
    title: "Travelling between Saudi cities",
    detail: "Riyadh to Jeddah — road distance, driving time, and whether the drive makes sense versus flying.",
  },
  {
    slug: "jeddah-to-makkah-distance",
    title: "Planning a pilgrimage transfer",
    detail: "Jeddah to Makkah — the most-travelled airport-to-holy-city route, distance and timing explained.",
  },
  {
    slug: "dammam-to-bahrain-distance",
    title: "Saudi–Bahrain border journeys",
    detail: "Dammam to Bahrain over the King Fahd Causeway — distance, timing, and what the crossing involves.",
  },
  {
    slug: "riyadh-to-abu-dhabi-distance",
    title: "Saudi–UAE road transfers",
    detail: "Riyadh to Abu Dhabi — the international road distance, the Al Batha border, and realistic journey time.",
  },
  {
    slug: "riyadh-to-dubai-distance",
    title: "Long-distance private travel",
    detail: "Riyadh to Dubai — one of the longer regional road journeys, broken down stage by stage.",
  },
];

/** Genuine travel-planning links to real distance guides — not generic SEO filler. */
export function HomeTravelInsights() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">Travel Guidance</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Planning a journey? Start here
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Distance, timing, and border context for the routes travellers ask about most.
          </p>
        </div>

        <div className="mt-10 divide-y divide-hairline border-y border-hairline">
          {insights.map((i) => (
            <Link
              key={i.slug}
              href={`/distance/${i.slug}`}
              className="group flex items-center justify-between gap-6 py-5 transition-colors hover:bg-sand/40"
            >
              <div>
                <p className="font-semibold text-ink">{i.title}</p>
                <p className="mt-1 text-sm text-ink-soft">{i.detail}</p>
              </div>
              <ArrowUpRight className="size-5 shrink-0 text-ink-muted transition-colors group-hover:text-brass" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
