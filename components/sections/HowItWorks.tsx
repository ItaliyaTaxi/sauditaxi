import { MessageCircle, FileText, Car } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Send your trip details",
    text: "Share pickup, drop-off, date, time, and passengers via WhatsApp or the quote form.",
  },
  {
    icon: FileText,
    title: "Get a fixed quote",
    text: "We reply quickly with a clear, all-in price and the right vehicle for your group.",
  },
  {
    icon: Car,
    title: "Travel with a driver",
    text: "Your professional driver arrives on time and takes you door-to-door, stress-free.",
  },
];

export function HowItWorks({
  background = "white",
}: {
  background?: "white" | "muted";
}) {
  return (
    <section className={background === "muted" ? "bg-muted py-16 sm:py-20" : "bg-white py-16 sm:py-20"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            How Booking Works
          </h2>
          <p className="mt-3 text-muted-foreground">
            Three simple steps from request to ride — no app, no account.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative text-center">
                <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-gold text-navy">
                  <Icon className="size-6" />
                </span>
                <span className="mt-3 inline-block text-sm font-bold text-gold">
                  Step {i + 1}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
