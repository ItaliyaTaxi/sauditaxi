import Link from "next/link";
import {
  CircleCheck,
  MapPin,
  ArrowRight,
  Clock,
  Route as RouteIcon,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Tabs } from "@/components/ui/Tabs";
import { StatsBand, type Stat } from "@/components/sections/StatsBand";
import { JourneyMap, type JourneyStop } from "@/components/sections/JourneyMap";
import { cities } from "@/data/cities";
import { routes } from "@/data/routes";
import { borders } from "@/data/borders";
import type { ServiceContent } from "@/data/service-content/types";

// Dynamic credibility figures (cities / routes pulled live from the data files).
const stats: Stat[] = [
  { value: 50000, suffix: "+", label: "Transfers completed" },
  { value: 24, suffix: "/7", label: "Support & booking" },
  { value: cities.length, suffix: "+", label: "Cities covered" },
  { value: routes.length + borders.length, suffix: "+", label: "Routes & crossings" },
];

// Cross-border journey map — rendered only where it adds meaning.
const JOURNEY_MAPS: Record<string, { heading: string; origin: string; stops: JourneyStop[] }> = {
  "border-transfers": {
    heading: "One Provider Across Every GCC Crossing",
    origin: "Saudi Arabia",
    stops: [
      { place: "Bahrain", note: "King Fahd Causeway" },
      { place: "Qatar", note: "Salwa Border" },
      { place: "United Arab Emirates", note: "Al Batha Border" },
      { place: "Kuwait", note: "Al Khafji Crossing" },
      { place: "Jordan", note: "Al Haditha Crossing" },
    ],
  },
};

const bg = (b: "white" | "muted") =>
  b === "muted" ? "bg-muted py-16 sm:py-20" : "bg-white py-16 sm:py-20";

export function ServiceContentSections({
  content,
  slug,
}: {
  content: ServiceContent;
  slug: string;
}) {
  const map = JOURNEY_MAPS[slug];

  // The long-form prose becomes a compact tabbed panel (all copy stays in the
  // DOM for SEO). Coverage paragraphs join the tabs; the city links render as
  // chips below so the internal-linking signal is preserved.
  const tabItems = [
    { label: "Overview", paragraphs: content.overview.paragraphs },
    { label: content.coverage.heading.replace(/^.*?:\s*/, "") || "Coverage", paragraphs: content.coverage.paragraphs },
    { label: "Travel Tips", paragraphs: content.travelerTips.paragraphs },
  ];

  return (
    <>
      {/* Animated statistics */}
      <StatsBand stats={stats} />

      {/* Service details as tabs (overview / coverage / tips) */}
      <section className={bg("white")} aria-labelledby="sc-overview">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 id="sc-overview" className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              {content.overview.heading}
            </h2>
            <div className="mt-6 rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-8">
              <Tabs items={tabItems} />
            </div>
          </Reveal>

          {/* Coverage city chips — contextual internal links */}
          <Reveal className="mt-8">
            <div className="flex flex-wrap gap-2">
              {content.coverage.cities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/taxi-service/${c.slug}`}
                  className="lift inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3.5 py-1.5 text-sm text-navy hover:border-gold hover:text-gold"
                >
                  <MapPin className="size-3.5 text-gold" />
                  {c.label}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why choose — glass-style icon cards on dark */}
      <section className="relative overflow-hidden bg-navy py-16 sm:py-20" aria-labelledby="sc-why">
        <div
          className="pointer-events-none absolute -bottom-24 -right-16 size-96 rounded-full bg-gold/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 id="sc-why" className="max-w-3xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {content.whyChoose.heading}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.whyChoose.items.map((it, i) => (
              <Reveal key={it.title} delay={(i % 3) * 80}>
                <div className="lift h-full rounded-2xl bg-gradient-to-br from-white/[0.09] to-white/[0.02] p-6 ring-1 ring-white/10">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-gold text-navy">
                    <CircleCheck className="size-5" />
                  </span>
                  <h3 className="mt-4 font-semibold text-white">{it.title}</h3>
                  <p className="mt-1.5 text-sm text-white/70">{it.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Animated cross-border journey map (where relevant) */}
      {map && <JourneyMap heading={map.heading} origin={map.origin} stops={map.stops} />}

      {/* Explore individual site pages — direct link-out to the cluster's own pages */}
      {content.exploreSites && content.exploreSites.items.length > 0 && (
        <section className={bg("white")} aria-labelledby="sc-explore">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 id="sc-explore" className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                {content.exploreSites.heading}
              </h2>
              {content.exploreSites.intro && (
                <p className="mt-3 max-w-3xl text-muted-foreground">{content.exploreSites.intro}</p>
              )}
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {content.exploreSites.items.map((r, i) => {
                const inner = (
                  <div className="lift glow flex h-full flex-col rounded-2xl border border-border bg-white p-6">
                    <div className="h-1 w-12 rounded-full bg-gradient-to-r from-gold to-gold-soft" aria-hidden="true" />
                    <div className="mt-4 flex items-center gap-2 text-base font-bold text-navy">
                      <MapPin className="size-4 shrink-0 text-gold" />
                      {r.to}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-xs font-medium text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="size-3.5 text-gold" /> {r.distance}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="size-3.5 text-gold" /> {r.duration}
                      </span>
                    </div>
                    <p className="mt-4 flex-1 text-sm text-muted-foreground">{r.benefit}</p>
                    {r.href && (
                      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy">
                        View page <ArrowRight className="size-4 text-gold" />
                      </span>
                    )}
                  </div>
                );
                return (
                  <Reveal key={`${r.from}-${r.to}`} delay={(i % 3) * 80}>
                    {r.href ? (
                      <Link href={r.href} className="block h-full">
                        {inner}
                      </Link>
                    ) : (
                      inner
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Popular routes — floating premium cards */}
      <section className={bg("muted")} aria-labelledby="sc-routes">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 id="sc-routes" className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              {content.popularRoutes.heading}
            </h2>
            {content.popularRoutes.intro && (
              <p className="mt-3 max-w-3xl text-muted-foreground">{content.popularRoutes.intro}</p>
            )}
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.popularRoutes.routes.map((r, i) => {
              const inner = (
                <div className="lift glow flex h-full flex-col rounded-2xl border border-border bg-white p-6">
                  <div className="h-1 w-12 rounded-full bg-gradient-to-r from-gold to-gold-soft" aria-hidden="true" />
                  <div className="mt-4 flex items-center gap-2 text-base font-bold text-navy">
                    <RouteIcon className="size-4 shrink-0 text-gold" />
                    {r.from} <span className="text-gold">→</span> {r.to}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-xs font-medium text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="size-3.5 text-gold" /> {r.distance}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="size-3.5 text-gold" /> {r.duration}
                    </span>
                  </div>
                  <p className="mt-4 flex-1 text-sm text-muted-foreground">{r.benefit}</p>
                  {r.href && (
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy">
                      View route <ArrowRight className="size-4 text-gold" />
                    </span>
                  )}
                </div>
              );
              return (
                <Reveal key={`${r.from}-${r.to}`} delay={(i % 3) * 80}>
                  {r.href ? (
                    <Link href={r.href} className="block h-full">
                      {inner}
                    </Link>
                  ) : (
                    inner
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking process — visual timeline */}
      <section className={bg("white")} aria-labelledby="sc-booking">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 id="sc-booking" className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              {content.booking.heading}
            </h2>
          </Reveal>
          <ol className="relative mt-10 space-y-8 border-l-2 border-dashed border-gold/40 pl-8">
            {content.booking.steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 70} className="relative">
                <span className="absolute -left-[2.85rem] flex size-9 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy shadow-lg shadow-gold/30">
                  {i + 1}
                </span>
                <h3 className="font-semibold text-navy">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Trust & safety — 3D glass cards on dark */}
      <section className="relative overflow-hidden bg-navy-soft py-16 sm:py-20" aria-labelledby="sc-trust">
        <div
          className="pointer-events-none absolute -top-24 left-1/4 size-96 rounded-full bg-gold/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 id="sc-trust" className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {content.trustSafety.heading}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.trustSafety.items.map((it, i) => (
              <Reveal key={it.title} delay={(i % 3) * 80}>
                <div className="tilt h-full rounded-2xl bg-gradient-to-br from-white/[0.1] to-white/[0.02] p-6 ring-1 ring-white/10">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-gold text-navy">
                    <ShieldCheck className="size-5" />
                  </span>
                  <h3 className="mt-4 font-semibold text-white">{it.title}</h3>
                  <p className="mt-1.5 text-sm text-white/70">{it.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {content.relatedServices.length > 0 && (
            <Reveal className="mt-12 border-t border-white/10 pt-8">
              <h3 className="text-lg font-bold text-white">Explore related services</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {content.relatedServices.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="lift inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/15 hover:bg-gold hover:text-navy"
                  >
                    {l.label}
                    <ArrowRight className="size-3.5" />
                  </Link>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
