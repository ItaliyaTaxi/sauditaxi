import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cities } from "@/data/cities";
import { borders } from "@/data/borders";

const secondarySaudiSlugs = ["jeddah", "makkah", "madinah", "dammam", "khobar", "alula", "taif"];
const gccSlugs = ["bahrain-causeway", "kuwait-border", "qatar-border", "uae-border"];

/**
 * "Where We Take You" — a featured Riyadh module (real photography + its
 * existing intro copy from data/cities.ts) plus the remaining Saudi cities
 * and GCC borders as a compact link grid. Real city/border pages only.
 */
export function HomeDestinationExplorer() {
  const riyadh = cities.find((c) => c.slug === "riyadh");
  const saudiCities = secondarySaudiSlugs
    .map((slug) => cities.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));
  const gccBorders = gccSlugs
    .map((slug) => borders.find((b) => b.slug === slug))
    .filter((b): b is NonNullable<typeof b> => Boolean(b));

  return (
    <section className="bg-sand py-16 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">Where We Take You</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Across Saudi Arabia, and into the GCC
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {riyadh && (
            <Link
              href={`/taxi-service/${riyadh.slug}`}
              className="group relative flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-2xl border border-hairline p-7 text-white sm:p-9"
            >
              <Image
                src="/images/journey/riyadh-skyline.jpg"
                alt="Riyadh, the Saudi capital"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/40 to-midnight/10" aria-hidden="true" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">Featured</p>
                <h3 className="mt-2 text-2xl font-bold sm:text-3xl">{riyadh.name}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">
                  {riyadh.intro.split(".")[0]}.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brass">
                  Explore Riyadh transfers
                  <ArrowRight className="size-3.5 rtl:rotate-180" />
                </span>
              </div>
            </Link>
          )}

          <div className="grid grid-cols-2 gap-3 content-start">
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
