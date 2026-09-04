import { vehicles } from "@/data/vehicles";

/**
 * Real vehicle data only (data/vehicles.ts) — no invented models or specs.
 * A compact strip rather than the homepage's fuller grid, since vehicle
 * selection here is framed as one factor among several, not its own section.
 */
export function AboutVehicles() {
  return (
    <section className="bg-sand py-16 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">Vehicle Selection</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Matched to your journey, not a single default
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Vehicle choice depends on passenger count, luggage, journey length and comfort
            needs — not a one-size-fits-all car.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto">
          <div className="flex min-w-max gap-3 pb-2 sm:min-w-0 sm:flex-wrap">
            {vehicles.map((v) => (
              <div key={v.id} className="w-52 shrink-0 rounded-xl border border-hairline bg-white px-4 py-3.5 sm:w-auto sm:flex-1">
                <p className="font-semibold text-ink">{v.name}</p>
                <p className="mt-1 text-xs text-ink-muted">{v.passengers} · {v.luggage}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
