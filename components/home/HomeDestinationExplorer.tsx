import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cities } from "@/data/cities";

const citySlugs = ["riyadh", "jeddah", "makkah", "madinah", "dammam", "khobar", "taif", "alula"];

const blurbs: Record<string, string> = {
  riyadh:
    "The capital and largest city, with meet-and-greet pickup at King Khalid International Airport, corporate travel accounts, and transfers to every district and beyond.",
  jeddah:
    "The gateway to the holy cities, with airport-to-Makkah transfers, Hajj Terminal and Terminal 1 pickups, and Corniche hotel transfers for pilgrims and Red Sea visitors.",
  makkah:
    "Hotel transfers around the Haram and Clock Tower district, Ziyarat tours of the historic sites, and private rides to Madinah for pilgrims travelling with luggage.",
  madinah:
    "Airport meet-and-greet, hotel transfers near the Prophet's Mosque, and Ziyarat tours of Quba, Uhud, and the historic mosques, timed around prayer schedules.",
  dammam:
    "King Fahd International Airport pickups, transfers across the Dammam-Khobar-Dhahran metro area, and cross-border rides to Bahrain over the King Fahd Causeway.",
  khobar:
    "The Eastern Province's coastal city, minutes from the Bahrain Causeway, with King Fahd Airport pickups and Corniche hotel transfers for business and leisure travellers.",
  taif:
    "The cool mountain retreat above Makkah, with airport transfers, the scenic Makkah-to-Taif mountain route, and sightseeing rides to Al Hada and Al Shafa.",
  alula:
    "Saudi Arabia's heritage destination, with airport and resort transfers, private rides to Hegra and the Old Town, and onward journeys to Madinah and Riyadh.",
};

/** H2 #8 — Locations. Real /taxi-service/{slug} pages only (data/cities.ts). */
export function HomeDestinationExplorer() {
  const destinations = citySlugs
    .map((slug) => cities.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <section className="bg-sand py-16 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">Locations</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Private Transfers in Major Saudi Cities
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Private transfer coverage across the Kingdom&apos;s most-travelled cities — each with its own
            dedicated route and service pages.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((city) => (
            <Link
              key={city.slug}
              href={`/taxi-service/${city.slug}`}
              className="group flex flex-col rounded-2xl border border-hairline bg-white p-5 transition-colors hover:border-brass"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold text-ink">{city.name}</h3>
                <ArrowUpRight className="size-4 shrink-0 text-ink-muted transition-colors group-hover:text-brass" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{blurbs[city.slug]}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
