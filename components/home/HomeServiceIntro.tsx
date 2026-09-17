/** H2 #1 — a short, text-only overview of the service and its coverage. No H3s. */
export function HomeServiceIntro() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">The Service</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Private Transfer Services in Saudi Arabia
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            We provide private, pre-booked transportation across Saudi Arabia — a single vehicle and driver
            for your entire journey, with no shared rides and no fixed timetable. Coverage spans Riyadh,
            Jeddah, Makkah, Madinah, Dammam, Al Khobar, Taif, and AlUla, connecting airports, hotels,
            business districts, and the holy cities.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Whether you need an airport pickup, a city-to-city transfer, an Umrah or Hajj journey, a day
            trip, or a chauffeur for a full day of appointments, the price is agreed before you travel and
            your driver is confirmed in advance. Selected cross-border transfers into the GCC are also
            available.
          </p>
        </div>
      </div>
    </section>
  );
}
