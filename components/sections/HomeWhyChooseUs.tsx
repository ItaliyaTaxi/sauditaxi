import { Car, UserCheck, Tag, MapPin, Plane, Headset } from "lucide-react";

const benefits = [
  {
    icon: Car,
    title: "Private & Comfortable",
    text: "Travel in a private vehicle without sharing your journey with strangers.",
  },
  {
    icon: UserCheck,
    title: "Professional Drivers",
    text: "Connect with professional drivers familiar with Saudi routes and destinations.",
  },
  {
    icon: Tag,
    title: "Transparent Pricing",
    text: "Know your transfer price before confirming your booking.",
  },
  {
    icon: MapPin,
    title: "Door-to-Door Service",
    text: "Pickup and drop-off at your specified locations.",
  },
  {
    icon: Plane,
    title: "Airport Pickup",
    text: "Convenient airport pickup arrangements for travellers arriving in Saudi Arabia.",
  },
  {
    icon: Headset,
    title: "Customer Support",
    text: "Assistance before and during your transfer.",
  },
];

/**
 * Homepage-only "why choose us" grid. Deliberately a separate component from
 * the shared TrustSection (used on route/city/airport/service pages) so this
 * page can stay at 6 curated cards without affecting — or being constrained
 * by — TrustSection's 12-pillar layout used elsewhere.
 */
export function HomeWhyChooseUs() {
  return (
    <section className="bg-muted py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Why Book Your Saudi Transfer With Us?
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="rounded-2xl border border-border bg-white p-6">
                <span className="flex size-11 items-center justify-center rounded-xl bg-navy text-gold">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-semibold text-navy">{b.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{b.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
