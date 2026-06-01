import { Star, ShieldCheck, Clock, Globe } from "lucide-react";

const badges = [
  { icon: Star, stat: "4.9/5", label: "Customer rating" },
  { icon: Clock, stat: "24/7", label: "Booking & support" },
  { icon: ShieldCheck, stat: "100%", label: "Private transfers" },
  { icon: Globe, stat: "19+", label: "Cities covered" },
];

export function TrustBadges() {
  return (
    <section className="border-y border-white/10 bg-navy-soft">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
        {badges.map((b) => {
          const Icon = b.icon;
          return (
            <div key={b.label} className="flex items-center justify-center gap-3 text-white">
              <Icon className="size-7 text-gold" />
              <span>
                <span className="block text-xl font-bold leading-none">{b.stat}</span>
                <span className="block text-xs text-white/70">{b.label}</span>
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
