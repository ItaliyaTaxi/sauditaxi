import Image from "next/image";
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
  /** Background image path. Defaults to the home scene. */
  backgroundImage?: string;
  /** Accessible description of the hero image (exposed via aria-label). */
  backgroundAlt?: string;
}

export function PageHeader({
  title,
  subtitle,
  crumbs,
  whatsappMessage,
  showCtas = true,
  backgroundImage = heroImages.default,
  backgroundAlt,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <Image
        src={backgroundImage}
        alt={backgroundAlt ?? ""}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        unoptimized={backgroundImage.endsWith(".svg")}
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-20 right-0 size-72 rounded-full bg-gold/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
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
