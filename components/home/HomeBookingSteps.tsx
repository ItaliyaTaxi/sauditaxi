const steps = [
  { n: "01", title: "Tell us your journey", detail: "Pickup, destination, date and passenger count — on WhatsApp or the quote form." },
  { n: "02", title: "Receive a fixed quote", detail: "We reply with a clear, all-in price and vehicle recommendation, no meter and no surge." },
  { n: "03", title: "Confirm your booking", detail: "Approve the quote and your driver is scheduled for the agreed pickup time." },
  { n: "04", title: "Meet your driver", detail: "Your driver waits at the agreed point and takes you directly to your destination." },
];

/** A simple 4-step process on a subtle sand background, connected by a line. */
export function HomeBookingSteps() {
  return (
    <section className="bg-sand py-16 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">How It Works</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            From request to ride, in four steps
          </h2>
        </div>

        {/* Desktop: connected by a horizontal line running behind the step markers. */}
        <ol className="relative mt-14 hidden sm:grid sm:grid-cols-4 sm:gap-8">
          <div className="absolute left-0 right-0 top-[9px] hidden h-px bg-brass/30 sm:block" aria-hidden="true" />
          {steps.map((s) => (
            <li key={s.n} className="relative">
              <span className="relative z-10 flex size-[18px] items-center justify-center rounded-full border-2 border-brass bg-sand">
                <span className="size-2 rounded-full bg-brass" />
              </span>
              <p className="mt-4 text-xs font-semibold text-ink-muted">{s.n}</p>
              <p className="mt-1.5 font-semibold text-ink">{s.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.detail}</p>
            </li>
          ))}
        </ol>

        {/* Mobile: vertical timeline. */}
        <ol className="mt-10 space-y-6 sm:hidden">
          {steps.map((s, i) => (
            <li key={s.n} className="relative ps-8">
              {i !== steps.length - 1 && (
                <span className="absolute top-5 bottom-[-24px] start-[8px] w-px bg-brass/30" aria-hidden="true" />
              )}
              <span className="absolute start-0 top-1 flex size-[18px] items-center justify-center rounded-full border-2 border-brass bg-sand">
                <span className="size-2 rounded-full bg-brass" />
              </span>
              <p className="text-xs font-semibold text-ink-muted">{s.n}</p>
              <p className="mt-1 font-semibold text-ink">{s.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{s.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
