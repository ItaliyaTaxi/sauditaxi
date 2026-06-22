import { MapPin, ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export interface JourneyStop {
  place: string;
  /** Sub-label, e.g. the border crossing or note. */
  note?: string;
}

/**
 * Visual journey map — an animated vertical chain of destinations connected by
 * a drawing line. Used to turn a list of cross-border destinations into an
 * interactive-feeling graphic instead of a paragraph.
 */
export function JourneyMap({
  heading,
  origin,
  stops,
}: {
  heading: string;
  origin: string;
  stops: JourneyStop[];
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-16 sm:py-20">
      <div
        className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {heading}
        </h2>

        <div className="mt-12 flex flex-col items-center">
          {/* Origin node */}
          <Reveal className="w-full max-w-md">
            <div className="glass rounded-2xl px-6 py-4 text-center text-white shadow-2xl">
              <span className="text-xs uppercase tracking-widest text-gold">From</span>
              <p className="mt-1 text-lg font-bold">{origin}</p>
            </div>
          </Reveal>

          {stops.map((s, i) => (
            <div key={s.place} className="flex w-full max-w-md flex-col items-center">
              {/* connector */}
              <span
                className="connector-grow my-3 h-10 w-px bg-gradient-to-b from-gold/70 to-gold/20"
                style={{ animationDelay: `${i * 120}ms` }}
                aria-hidden="true"
              />
              <ChevronDown className="-mt-2 mb-2 size-4 text-gold/70" aria-hidden="true" />
              <Reveal className="w-full" delay={i * 80}>
                <div className="lift glass flex items-center justify-between gap-4 rounded-2xl px-6 py-4 text-white">
                  <span className="flex items-center gap-3">
                    <MapPin className="size-5 shrink-0 text-gold" />
                    <span className="font-semibold">{s.place}</span>
                  </span>
                  {s.note && <span className="text-xs text-white/60">{s.note}</span>}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
