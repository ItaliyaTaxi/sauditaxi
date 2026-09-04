const steps = [
  { n: "01", title: "Tell us your journey", detail: "Pickup, destination, date and passenger count — on WhatsApp or the quote form." },
  { n: "02", title: "Receive a fixed quote", detail: "We reply with a clear, all-in price and vehicle recommendation, no meter and no surge." },
  { n: "03", title: "Confirm your booking", detail: "Approve the quote and your driver is scheduled for the agreed pickup time." },
  { n: "04", title: "Meet your driver", detail: "Your driver waits at the agreed point and takes you directly to your destination." },
];

/** A simple, visually restrained 4-step process — no icons or heavy styling. */
export function HomeBookingSteps() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">How It Works</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            From request to ride, in four steps
          </h2>
        </div>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="border-t-2 border-brass pt-4">
              <span className="text-sm font-semibold text-ink-muted">{s.n}</span>
              <p className="mt-2 font-semibold text-ink">{s.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
