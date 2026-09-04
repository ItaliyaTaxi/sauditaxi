import { Car, Plane, MessageSquare, Luggage, Headset, MapPin } from "lucide-react";

const points = [
  { icon: Car, label: "A private vehicle, door to door" },
  { icon: Plane, label: "Flight tracking for airport pickups" },
  { icon: MessageSquare, label: "Clear communication before you travel" },
  { icon: Luggage, label: "A vehicle sized to your passengers and luggage" },
  { icon: MapPin, label: "Drivers who plan for cross-border crossings" },
  { icon: Headset, label: "Support through WhatsApp and the quote form" },
];

/** Factual assurances only — no invented awards, ratings, or guarantees. */
export function AboutWhatToExpect() {
  return (
    <section className="bg-sand py-16 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">What Customers Can Expect</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            What&apos;s built into every booking
          </h2>
        </div>

        <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {points.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 rounded-xl border border-hairline bg-white px-4 py-3.5">
              <Icon className="size-4 shrink-0 text-brass" aria-hidden="true" />
              <span className="text-sm font-medium text-ink">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
