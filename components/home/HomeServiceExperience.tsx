import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    title: "Airport Transfers",
    description:
      "Meet-and-greet at arrivals, flight tracking so pickup timing adjusts to your actual landing, and a direct drive to your hotel or destination.",
    href: "/airport-transfers",
    linkLabel: "Airport transfers",
    image: "/images/heroes/airport.webp",
    alt: "Airport terminal in Saudi Arabia",
  },
  {
    title: "City-to-City",
    description:
      "Private door-to-door journeys between Saudi cities — Riyadh, Jeddah, the holy cities, and the Eastern Province — without a shared vehicle or fixed timetable.",
    href: "/intercity-transfers",
    linkLabel: "City-to-city routes",
    image: "/images/heroes/city.webp",
    alt: "A Saudi city skyline",
  },
  {
    title: "Cross-Border",
    description:
      "Road transfers between Saudi Arabia and Bahrain, Kuwait, Qatar and the UAE, handled by drivers who know the crossings and plan for them.",
    href: "/border-transfers",
    linkLabel: "Cross-border transfers",
    image: "/images/heroes/border.webp",
    alt: "A Saudi border crossing",
  },
  {
    title: "Chauffeur Service",
    description:
      "Comfortable private transportation for business travel, leisure trips and special journeys, with a vehicle matched to your group and luggage.",
    href: "/services",
    linkLabel: "All services",
    image: "/images/heroes/intercity.webp",
    alt: "A private highway journey in Saudi Arabia",
  },
];

/** Editorial, alternating image/text service blocks — not four identical cards. */
export function HomeServiceExperience() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">The Service</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Built around the journey, not the ride
          </h2>
        </div>

        <div className="mt-12 space-y-10">
          {experiences.map(({ title, description, href, linkLabel, image, alt }, i) => (
            <div
              key={title}
              className="grid items-center gap-6 overflow-hidden rounded-2xl border border-hairline sm:grid-cols-2 sm:gap-0"
            >
              <div className={cn("relative h-56 w-full sm:h-72", i % 2 === 1 && "sm:order-2")}>
                <Image src={image} alt={alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className={cn("p-6 sm:p-9", i % 2 === 1 && "sm:order-1")}>
                <h3 className="text-xl font-semibold text-ink sm:text-2xl">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{description}</p>
                <Link
                  href={href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-midnight hover:text-brass"
                >
                  {linkLabel}
                  <ArrowRight className="size-3.5 rtl:rotate-180" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
