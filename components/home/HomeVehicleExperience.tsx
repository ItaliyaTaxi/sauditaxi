import { vehicles } from "@/data/vehicles";

/** Real vehicle data only (data/vehicles.ts) — no invented models, capacities, or pricing. */
export function HomeVehicleExperience() {
  return (
    <section className="bg-sand py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">The Fleet</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            A vehicle matched to your journey
          </h2>
        </div>

        <div className="mt-10 overflow-x-auto">
          <div className="flex min-w-max gap-4 pb-2 sm:min-w-0 sm:grid sm:grid-cols-3 lg:grid-cols-6">
            {vehicles.map((v) => (
              <div key={v.id} className="w-56 shrink-0 rounded-2xl border border-hairline bg-white p-5 sm:w-auto">
                <p className="font-semibold text-ink">{v.name}</p>
                <p className="mt-1 text-xs text-ink-muted">{v.examples}</p>
                <div className="mt-4 space-y-1 text-sm text-ink-soft">
                  <p>{v.passengers}</p>
                  <p>{v.luggage}</p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
