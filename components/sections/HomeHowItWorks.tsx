import { MessageCircle, FileText, CircleCheck, Car } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Tell Us Your Journey",
    text: "Enter your pickup and destination details.",
  },
  {
    icon: FileText,
    title: "Receive Your Quote",
    text: "Our team provides your transfer quotation.",
  },
  {
    icon: CircleCheck,
    title: "Confirm Your Booking",
    text: "Confirm the vehicle, price and travel details.",
  },
  {
    icon: Car,
    title: "Meet Your Driver",
    text: "Your driver picks you up at the agreed location.",
  },
];

/**
 * Homepage-only 4-step "how it works" — deliberately a separate component
 * from the shared HowItWorks (used on 15+ route/city/airport/service pages
 * with a fixed 3-step, grid-cols-3 layout) so this page can use 4 steps
 * without altering that shared component's layout everywhere else.
 */
export function HomeHowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Book Your Saudi Transfer in 4 Easy Steps
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative text-center">
                <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-gold text-navy">
                  <Icon className="size-6" />
                </span>
                <span className="mt-3 inline-block text-sm font-bold text-gold">
                  {String(i + 1).padStart(2, "0")}
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
