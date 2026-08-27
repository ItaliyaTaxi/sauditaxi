import { FileText, Compass, Users, MessageCircle } from "lucide-react";

const principles = [
  {
    icon: FileText,
    title: "Clear Before You Travel",
    text: "Customers should understand the agreed price and journey details before the trip.",
  },
  {
    icon: Compass,
    title: "Reliable From Pickup to Drop-off",
    text: "The focus is on clear coordination, punctuality and smooth transfers.",
  },
  {
    icon: Users,
    title: "Comfortable for Real Journeys",
    text: "Vehicles are matched to passenger numbers, luggage and journey length.",
  },
  {
    icon: MessageCircle,
    title: "Helpful Human Support",
    text: "Customers can reach the team directly when they need assistance.",
  },
];

/**
 * About-page-only section (replaces the generic "Why Book With Us" framing
 * with a values/philosophy statement). Kept separate from the shared
 * WhyChooseUs component (used on /services) since the content and framing
 * here are specific to the About page's narrative.
 */
export function AboutServicePhilosophy() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            What We Believe Good Transfer Service Should Be
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="rounded-2xl border border-border bg-muted/40 p-6">
                <span className="flex size-11 items-center justify-center rounded-xl bg-navy text-gold">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-semibold text-navy">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
