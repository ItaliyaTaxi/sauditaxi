import { Star, ShieldCheck, Clock, Globe } from "lucide-react";

const icons = [Star, Clock, ShieldCheck, Globe];

const defaultLabels = {
  rating: "Customer rating",
  support: "Booking & support",
  private: "Private transfers",
  cities: "Cities covered",
};

/**
 * Stays a Server Component — Arabic callers pass `labels` in Arabic (see
 * data/translations/ar.ts callers) instead of this component detecting
 * locale itself. Stats (4.9/5, 24/7, 100%, 19+) are locale-independent.
 */
export function TrustBadges({
  labels = defaultLabels,
}: {
  labels?: { rating: string; support: string; private: string; cities: string };
}) {
  const badges = [
    { stat: "4.9/5", label: labels.rating },
    { stat: "24/7", label: labels.support },
    { stat: "100%", label: labels.private },
    { stat: "19+", label: labels.cities },
  ];
  return (
    <section className="border-y border-white/10 bg-navy-soft">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
        {badges.map((b, i) => {
          const Icon = icons[i] ?? Star;
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
