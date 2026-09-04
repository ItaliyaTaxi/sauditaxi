import { vehicles } from "@/data/vehicles";

/**
 * Real vehicle data only (data/vehicles.ts) — no invented models, capacities,
 * or pricing. No vehicle photography exists in the system (data/vehicles.ts
 * has no image field, and no vehicle photos live under public/images), so
 * this stays a data-led fleet showcase rather than using stock photography
 * of specific car models we can't verify are actually operated.
 */
export function HomeVehicleExperience() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">The Fleet</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            A vehicle matched to your journey
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((v) => (
            <div key={v.id} className="rounded-2xl border border-hairline bg-sand/50 p-6">
              <div className="flex items-baseline justify-between gap-2">
                <p className="text-lg font-semibold text-ink">{v.name}</p>
                <p className="text-xs font-medium uppercase tracking-wide text-brass">{v.passengers}</p>
              </div>
              <p className="mt-1 text-xs text-ink-muted">{v.examples}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{v.description}</p>
              <p className="mt-4 border-t border-hairline pt-3 text-xs text-ink-muted">{v.luggage}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
