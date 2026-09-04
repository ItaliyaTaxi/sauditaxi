import Link from "next/link";
import { ArrowRight, Plane, Building2, Globe2, Car } from "lucide-react";

const experiences = [
  {
    icon: Plane,
    title: "Airport Transfers",
    description:
      "Meet-and-greet at arrivals, flight tracking so pickup timing adjusts to your actual landing, and a direct drive to your hotel or destination.",
    href: "/airport-transfers",
    linkLabel: "Airport transfers",
  },
  {
    icon: Building2,
    title: "City-to-City",
    description:
      "Private door-to-door journeys between Saudi cities — Riyadh, Jeddah, the holy cities, and the Eastern Province — without a shared vehicle or fixed timetable.",
    href: "/intercity-transfers",
    linkLabel: "City-to-city routes",
  },
  {
    icon: Globe2,
    title: "Cross-Border",
    description:
      "Road transfers between Saudi Arabia and Bahrain, Kuwait, Qatar and the UAE, handled by drivers who know the crossings and plan for them.",
    href: "/border-transfers",
    linkLabel: "Cross-border transfers",
  },
  {
    icon: Car,
    title: "Chauffeur Service",
    description:
      "Comfortable private transportation for business travel, leisure trips and special journeys, with a vehicle matched to your group and luggage.",
    href: "/services",
    linkLabel: "All services",
  },
];

/** Editorial service overview — four genuine blocks, not generic SEO paragraphs. */
export function HomeServiceExperience() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">The Service</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Built around the journey, not the ride
          </h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2">
          {experiences.map(({ icon: Icon, title, description, href, linkLabel }) => (
            <div key={title} className="bg-white p-7 sm:p-8">
              <span className="flex size-11 items-center justify-center rounded-xl bg-midnight text-brass">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-ink">{title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">{description}</p>
              <Link
                href={href}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-midnight hover:text-brass"
              >
                {linkLabel}
                <ArrowRight className="size-3.5 rtl:rotate-180" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
