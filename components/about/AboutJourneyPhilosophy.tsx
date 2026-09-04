import { Check } from "lucide-react";

const points = [
  { title: "Direct travel", detail: "The vehicle is yours for the trip — no shared route or extra stops for other passengers." },
  { title: "Convenient pickup", detail: "Collected from an airport, hotel, or private address, not a fixed pickup point." },
  { title: "Clear journey planning", detail: "Pickup, route and price agreed before you travel, not worked out on the day." },
  { title: "Luggage-aware vehicle choice", detail: "The vehicle is sized to your group and bags — a sedan, SUV or van as the trip needs." },
  { title: "Airport coordination", detail: "Flight tracking means pickup timing adjusts to your actual arrival, not a fixed slot." },
  { title: "Planning for the crossing", detail: "Cross-border journeys are planned around the border itself, not just the drive to it." },
];

/** Journey philosophy — practical customer benefits, not empty marketing language. */
export function AboutJourneyPhilosophy() {
  return (
    <section className="bg-midnight py-16 text-white sm:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">Our Approach</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            More Than a Point-to-Point Ride
          </h2>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div key={p.title} className="flex items-start gap-3.5">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brass/15">
                <Check className="size-3.5 text-brass" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-white">{p.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-white/60">{p.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
