import Link from "next/link";
import { cities } from "@/data/cities";
import { borders } from "@/data/borders";

const saudiSlugs = ["riyadh", "jeddah", "makkah", "madinah", "dammam", "khobar", "alula", "taif"];
const gccSlugs = ["bahrain-causeway", "kuwait-border", "qatar-border", "uae-border"];

/**
 * Where We Operate — one compact paragraph plus real links, deliberately
 * NOT a repeated "Saudi Private Transfers in {city}" paragraph per city
 * (explicitly avoided per the task brief — that pattern reads as location
 * spam, not genuine geographic scope).
 */
export function AboutWhereWeOperate() {
  const saudiCities = saudiSlugs
    .map((slug) => cities.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));
  const gccBorders = gccSlugs
    .map((slug) => borders.find((b) => b.slug === slug))
    .filter((b): b is NonNullable<typeof b> => Boolean(b));

  return (
    <section className="bg-sand py-16 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">Where We Operate</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Serving Journeys Across Saudi Arabia and Beyond
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Private transfers cover Saudi Arabia&apos;s major cities and gateways, plus
            selected cross-border road journeys into neighbouring GCC countries.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">Saudi Arabia</h3>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {saudiCities.map((city) => (
              <Link
                key={city.slug}
                href={`/taxi-service/${city.slug}`}
                className="rounded-lg border border-hairline bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brass"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">GCC Connections</h3>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {gccBorders.map((border) => (
              <Link
                key={border.slug}
                href={`/border-transfers/${border.slug}`}
                className="rounded-lg border border-hairline bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brass"
              >
                {border.country}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
