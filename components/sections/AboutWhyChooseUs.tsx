import { Tag, UserCheck, Car, Plane, Users, Headset } from "lucide-react";

const reasons = [
  {
    icon: Tag,
    title: "Fixed, Transparent Quotes",
    text: "The price is agreed before the journey.",
  },
  {
    icon: UserCheck,
    title: "Professional Drivers",
    text: "Drivers familiar with Saudi cities, routes and major destinations.",
  },
  {
    icon: Car,
    title: "Private Vehicles",
    text: "Customers travel in a private vehicle rather than a shared ride.",
  },
  {
    icon: Plane,
    title: "Airport Pickup",
    text: "Airport transfer coordination for arriving passengers.",
  },
  {
    icon: Users,
    title: "Flexible Vehicle Options",
    text: "Sedans, SUVs, vans and larger vehicles where available.",
  },
  {
    icon: Headset,
    title: "Customer Support",
    text: "Support through the existing communication channels.",
  },
];

/**
 * About-page-only "why customers choose us" grid. A separate component from
 * the shared WhyChooseUs (used on /services) and from the homepage's
 * HomeWhyChooseUs, since each page's copy is deliberately distinct.
 */
export function AboutWhyChooseUs() {
  return (
    <section className="bg-muted py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Why Travellers Choose Saudi Private Transfers
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div key={r.title} className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy text-gold">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-navy">{r.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{r.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
