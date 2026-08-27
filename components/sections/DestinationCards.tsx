import Image from "next/image";
import Link from "next/link";
import { cities, type City } from "@/data/cities";
import { cityHero } from "@/lib/hero";

interface DestinationCardsProps {
  heading?: string;
  subheading?: string;
  only?: string[];
  background?: "white" | "muted";
}

/**
 * Premium image-card destination grid for the homepage. Separate from
 * CityGrid (a compact text-chip list used elsewhere) since this section
 * needs imagery — reuses the site's existing themed hero images via
 * cityHero() rather than introducing new photography.
 */
export function DestinationCards({
  heading = "Popular Destinations in Saudi Arabia",
  subheading = "Book a private transfer to and from Saudi Arabia's most visited cities.",
  only,
  background = "white",
}: DestinationCardsProps) {
  const list: City[] = only
    ? (only.map((s) => cities.find((c) => c.slug === s)).filter(Boolean) as City[])
    : cities;

  if (list.length === 0) return null;

  return (
    <section className={background === "muted" ? "bg-muted py-16 sm:py-20" : "bg-white py-16 sm:py-20"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {heading && (
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              {heading}
            </h2>
            {subheading && <p className="mt-3 text-muted-foreground">{subheading}</p>}
          </div>
        )}

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((city) => {
            const hero = cityHero(city.slug, city.name);
            return (
              <Link
                key={city.slug}
                href={`/taxi-service/${city.slug}`}
                className="group relative block overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={hero.src}
                    alt={hero.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    unoptimized={hero.src.endsWith(".svg")}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                    aria-hidden="true"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-lg font-bold text-white">{city.name}</h3>
                  <p className="mt-0.5 line-clamp-2 text-xs text-white/80">{city.intro}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
