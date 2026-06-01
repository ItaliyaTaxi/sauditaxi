import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { CtaButtons } from "@/components/CtaButtons";
import { heroImages } from "@/lib/hero";

interface PageHeaderProps {
  /** Rendered as the page H1. */
  title: string;
  subtitle?: string;
  crumbs: Crumb[];
  whatsappMessage?: string;
  showCtas?: boolean;
  /** Background image path. Defaults to the road scene. */
  backgroundImage?: string;
}

export function PageHeader({
  title,
  subtitle,
  crumbs,
  whatsappMessage,
  showCtas = true,
  backgroundImage = heroImages.default,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/65"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-20 right-0 size-72 rounded-full bg-gold/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Breadcrumbs items={crumbs} onDark />
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight drop-shadow-sm sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-white/85 sm:text-xl">{subtitle}</p>
        )}
        {showCtas && (
          <CtaButtons className="mt-7" whatsappMessage={whatsappMessage} onDark />
        )}
      </div>
    </section>
  );
}
