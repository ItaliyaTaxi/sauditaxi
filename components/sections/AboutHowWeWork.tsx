import { MessageCircle, ClipboardCheck, FileCheck, Car } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Tell Us About Your Journey",
    text: "Send pickup, destination, date, time and passenger details through the quote form or WhatsApp.",
  },
  {
    icon: ClipboardCheck,
    title: "We Arrange the Right Transfer",
    text: "We review your requirements and provide the appropriate vehicle and price.",
  },
  {
    icon: FileCheck,
    title: "Confirm Your Journey",
    text: "Once the details are confirmed, your transfer is arranged.",
  },
  {
    icon: Car,
    title: "Travel With Your Driver",
    text: "Your driver meets you at the agreed pickup point and takes you to your destination.",
  },
];

/**
 * About-page-only 4-step process section, framed around how the company
 * operates rather than a generic booking-flow explainer. Kept separate from
 * the shared HowItWorks (used on 15+ other pages with a fixed 3-step
 * layout) so this page can use 4 steps without affecting those pages.
 */
export function AboutHowWeWork() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            A Simple Way to Arrange Your Transfer
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
