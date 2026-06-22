import {
  ShieldCheck,
  Plane,
  Headset,
  UserCheck,
  BadgeCheck,
  Tag,
  Lock,
  CheckCircle2,
} from "lucide-react";
import { cities } from "@/data/cities";
import { airports } from "@/data/airports";
import { routes } from "@/data/routes";
import { borders } from "@/data/borders";
import { aggregateRating } from "@/data/testimonials";

// Credibility figures. Cities / airports / routes are derived live from the
// data files, so they stay correct as coverage grows.
const stats = [
  { value: `${cities.length}+`, label: "Cities served" },
  { value: `${airports.length}`, label: "Airports covered" },
  { value: `${routes.length + borders.length}+`, label: "Routes & crossings" },
  { value: "50,000+", label: "Successful transfers" },
];

const pillars = [
  {
    icon: UserCheck,
    title: "Professional drivers",
    text: "Experienced, vetted chauffeurs who know the cities, routes, and holy sites.",
  },
  {
    icon: Plane,
    title: "Flight monitoring",
    text: "We track your flight in real time and adjust pickup automatically.",
  },
  {
    icon: Headset,
    title: "24/7 support",
    text: "Book and get help any time of day on WhatsApp, in English and Arabic.",
  },
  {
    icon: ShieldCheck,
    title: "Meet & greet service",
    text: "Your driver waits in arrivals with a name board and helps with luggage.",
  },
  {
    icon: BadgeCheck,
    title: "Licensed vehicles",
    text: "Clean, modern, well-maintained cars, SUVs, vans, and minibuses.",
  },
  {
    icon: Tag,
    title: "Fixed pricing",
    text: "Your price is agreed before you travel — no meters, no surge, no surprises.",
  },
  {
    icon: Lock,
    title: "Secure booking",
    text: "No prepayment and no account needed — confirm in minutes on WhatsApp.",
  },
  {
    icon: CheckCircle2,
    title: "Rated 4.9 / 5",
    text: `Trusted by ${aggregateRating.reviewCount.toLocaleString()}+ travellers, pilgrims, and businesses.`,
  },
];

const reassurances = [
  "Free flight monitoring",
  "Fixed prices",
  "No hidden fees",
  "24/7 customer support",
];

export function TrustSection({
  background = "white",
}: {
  background?: "white" | "muted";
}) {
  return (
    <section className={background === "muted" ? "bg-muted py-16 sm:py-20" : "bg-white py-16 sm:py-20"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Trusted Across Saudi Arabia
          </h2>
          <p className="mt-3 text-muted-foreground">
            Thousands of travellers, pilgrims, families, and businesses rely on us for
            safe, on-time, fixed-price transfers across the Kingdom.
          </p>
        </div>

        {/* Dynamic credibility stats */}
        <dl className="mt-12 grid grid-cols-2 gap-6 rounded-2xl border border-border bg-navy px-6 py-8 text-center text-white lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-3xl font-extrabold text-gold">{s.value}</span>
                <span className="mt-1 block text-sm text-white/80">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>

        {/* Trust pillars */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="rounded-2xl border border-border bg-white p-5">
                <span className="flex size-11 items-center justify-center rounded-xl bg-navy text-gold">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-semibold text-navy">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
              </div>
            );
          })}
        </div>

        {/* Booking reassurance strip */}
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {reassurances.map((r) => (
            <li key={r} className="inline-flex items-center gap-2 text-sm font-medium text-navy">
              <CheckCircle2 className="size-4 text-gold" />
              {r}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
