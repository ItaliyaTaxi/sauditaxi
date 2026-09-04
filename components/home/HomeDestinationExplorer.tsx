import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cities } from "@/data/cities";
import { borders } from "@/data/borders";

const saudiSlugs = ["riyadh", "jeddah", "makkah", "madinah", "dammam", "khobar", "alula", "taif"];
const gccSlugs = ["bahrain-causeway", "kuwait-border", "qatar-border", "uae-border"];

/**
 * "Where We Take You" — real city/border pages only (data/cities.ts,
 * data/borders.ts), no invented URLs. Editorial destination grid rather than
 * generic service cards.
 */
export function HomeDestinationExplorer() {
  const saudiCities = saudiSlugs
    .map((slug) => cities.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));
  const gccBorders = gccSlugs
    .map((slug) => borders.find((b) => b.slug === slug))
    .filter((b): b is NonNullable<typeof b> => Boolean(b));

  return (
    <section className="bg-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">Where We Take You</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Across Saudi Arabia, and into the GCC
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Private transfers to Saudi Arabia&apos;s major cities, and cross-border road journeys
            to the GCC destinations we serve.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">Saudi Arabia</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {saudiCities.map((city) => (
              <Link
                key={city.slug}
                href={`/taxi-service/${city.slug}`}
                className="group flex items-center justify-between gap-2 rounded-xl border border-hairline bg-white px-4 py-3.5 transition-colors hover:border-brass"
              >
                <span className="text-sm font-medium text-ink">{city.name}</span>
                <ArrowUpRight className="size-4 shrink-0 text-ink-muted transition-colors group-hover:text-brass" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">GCC Connections</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {gccBorders.map((border) => (
              <Link
                key={border.slug}
                href={`/border-transfers/${border.slug}`}
                className="group flex items-center justify-between gap-2 rounded-xl border border-hairline bg-white px-4 py-3.5 transition-colors hover:border-brass"
              >
                <span className="text-sm font-medium text-ink">{border.country}</span>
                <ArrowUpRight className="size-4 shrink-0 text-ink-muted transition-colors group-hover:text-brass" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
