import Link from "next/link";
import { MapPin } from "lucide-react";
import { cities, type City } from "@/data/cities";

interface CityGridProps {
  heading?: string;
  subheading?: string;
  /** Restrict to specific city slugs (e.g. related cities). */
  only?: string[];
  /** Exclude a city slug (e.g. the current page). */
  exclude?: string;
  limit?: number;
  background?: "white" | "muted";
}

export function CityGrid({
  heading = "Taxi Service by City",
  subheading = "Choose your city for local rates, popular routes, and airport transfers.",
  only,
  exclude,
  limit,
  background = "muted",
}: CityGridProps) {
  let list: City[] = only
    ? only.map((s) => cities.find((c) => c.slug === s)).filter(Boolean) as City[]
    : cities;
  if (exclude) list = list.filter((c) => c.slug !== exclude);
  if (limit) list = list.slice(0, limit);

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

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {list.map((city) => (
            <Link
              key={city.slug}
              href={`/taxi-service/${city.slug}`}
              className="group flex items-center gap-2.5 rounded-lg border border-border bg-white px-4 py-3 transition-all hover:border-gold hover:shadow-sm"
            >
              <MapPin className="size-4 shrink-0 text-gold" />
              <span className="text-sm font-medium text-navy group-hover:text-gold">
                {city.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
