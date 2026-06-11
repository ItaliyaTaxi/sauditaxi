import { CircleCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CtaButtons } from "@/components/CtaButtons";
import { heroImages } from "@/lib/hero";

interface HeroSectionProps {
  /** Renders as the page H1. */
  title: string;
  subtitle: string;
  badge?: string;
  /** Quick selling points shown as a checklist. */
  points?: string[];
  whatsappMessage?: string;
  /** Background image path. Defaults to the home scene. */
  backgroundImage?: string;
  /** Accessible description of the hero image (exposed via aria-label). */
  backgroundAlt?: string;
  /** Optional form card (e.g. the compact quick-quote form) shown beside copy. */
  formCard?: React.ReactNode;
}

export function HeroSection({
  title,
  subtitle,
  badge,
  points,
  whatsappMessage,
  backgroundImage = heroImages.default,
  backgroundAlt,
  formCard,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
        role={backgroundAlt ? "img" : undefined}
        aria-label={backgroundAlt}
        aria-hidden={backgroundAlt ? undefined : true}
      />
      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/25"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-gold/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-24 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36">
        <div className={formCard ? "grid items-center gap-10 lg:grid-cols-2" : "max-w-3xl"}>
          <div className="animate-float-up">
            {badge && <Badge className="bg-gold/20 text-gold">{badge}</Badge>}
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight drop-shadow-sm sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
              {subtitle}
            </p>

            {points && points.length > 0 && (
              <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-white/90 sm:text-base">
                    <CircleCheck className="mt-0.5 size-5 shrink-0 text-gold" />
                    {p}
                  </li>
                ))}
              </ul>
            )}

            <CtaButtons className="mt-8" whatsappMessage={whatsappMessage} onDark />
          </div>

          {formCard && <div className="w-full">{formCard}</div>}
        </div>
      </div>
    </section>
  );
}
