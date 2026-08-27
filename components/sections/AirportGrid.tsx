import Link from "next/link";
import { Plane } from "lucide-react";
import { airports, type Airport } from "@/data/airports";

interface AirportGridProps {
  heading?: string;
  subheading?: string;
  /** Restrict to specific airport slugs, in the given order (e.g. curated homepage picks). */
  only?: string[];
  exclude?: string;
  limit?: number;
  background?: "white" | "muted";
}

export function AirportGrid({
  heading = "Airport Transfers Across Saudi Arabia",
  subheading = "Meet-and-greet pickups with flight tracking at every major airport.",
  only,
  exclude,
  limit,
  background = "white",
}: AirportGridProps) {
  let list: Airport[] = only
    ? (only.map((s) => airports.find((a) => a.slug === s)).filter(Boolean) as Airport[])
    : airports;
  if (exclude) list = list.filter((a) => a.slug !== exclude);
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

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((airport) => (
            <Link
              key={airport.slug}
              href={`/airport-transfer/${airport.slug}`}
              className="group flex items-start gap-3 rounded-lg border border-border bg-white px-4 py-3.5 transition-all hover:border-gold hover:shadow-sm"
            >
              <Plane className="mt-0.5 size-5 shrink-0 text-gold" />
              <span>
                <span className="block text-sm font-semibold text-navy group-hover:text-gold">
                  {airport.city} Airport ({airport.code})
                </span>
                <span className="block text-xs text-muted-foreground">
                  {airport.name}
                </span>
                <span className="mt-1 line-clamp-2 block text-xs text-muted-foreground/80">
                  {airport.intro}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
