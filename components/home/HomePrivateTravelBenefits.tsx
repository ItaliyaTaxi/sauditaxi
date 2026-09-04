import { Check } from "lucide-react";

const benefits = [
  { title: "No shared vehicle", detail: "The car is yours for the trip — no route detours to drop other passengers first." },
  { title: "Door-to-door pickup", detail: "Collected from your exact address, hotel lobby, or arrivals hall — not a fixed pickup point." },
  { title: "A predictable journey", detail: "One fixed price agreed before you travel, and a driver who's already planned the route." },
  { title: "Room for luggage", detail: "Vehicles sized to your group and bags, from a sedan to a van for a full family or group." },
  { title: "Flexible pickup locations", detail: "Airports, hotels, private addresses, or a border crossing — wherever the journey starts." },
  { title: "Coordinated airport arrivals", detail: "Flight tracking means your driver adjusts to a delayed or early landing automatically." },
];

/** Practical, specific reasons to choose a private transfer — not generic superlatives. */
export function HomePrivateTravelBenefits() {
  return (
    <section className="bg-midnight py-16 text-white sm:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">Why a Private Transfer</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            What actually changes when the car is yours
          </h2>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="flex items-start gap-3.5">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brass/15">
                <Check className="size-3.5 text-brass" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-white">{b.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-white/60">{b.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
