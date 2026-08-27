import { Car, UserCheck, Tag, Headset } from "lucide-react";

const items = [
  {
    icon: Car,
    title: "Private Transfers",
    text: "Door-to-door transportation",
  },
  {
    icon: UserCheck,
    title: "Professional Drivers",
    text: "Experienced local drivers",
  },
  {
    icon: Tag,
    title: "Transparent Pricing",
    text: "Know your transfer cost before booking",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    text: "Assistance before and during your journey",
  },
];

/**
 * Compact value-prop strip directly below the homepage hero. Deliberately
 * lighter than TrustSection's stat block + 12-pillar grid (used site-wide on
 * route/city/airport pages) — this is homepage-only, so changing it never
 * affects those other pages.
 */
export function HomeTrustBar() {
  return (
    <section className="border-b border-border bg-white py-8 sm:py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-navy text-gold">
                <Icon className="size-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-navy">{item.title}</span>
                <span className="block text-xs text-muted-foreground">{item.text}</span>
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
