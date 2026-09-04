import { ShieldCheck, Plane, Globe2 } from "lucide-react";
import { TrustpilotWidget } from "@/components/TrustpilotWidget";

const assurances = [
  { icon: ShieldCheck, label: "Professional driver coordination on every booking" },
  { icon: Plane, label: "Live flight tracking for airport pickups" },
  { icon: Globe2, label: "Cross-border journey support at Saudi–GCC crossings" },
];

/**
 * Customer trust, without inventing reviews. The homepage's previous
 * TestimonialSection draws on data/testimonials.ts — first-party authored
 * quotes we can't independently verify as verbatim customer words, so
 * rather than present them as reviews here, this section pairs the one
 * genuinely third-party, verifiable trust signal already integrated on the
 * site (the live Trustpilot widget) with factual service assurances.
 * data/testimonials.ts is untouched and still used elsewhere (the About
 * page, and site-wide Review schema).
 */
export function HomeCustomerTrust() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-2xl border border-hairline bg-sand/50 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">Verified by our customers</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">Reviewed on Trustpilot</h2>
            <ul className="mt-6 space-y-3">
              {assurances.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5 text-sm text-ink-soft">
                  <Icon className="size-4 shrink-0 text-brass" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-80">
            <TrustpilotWidget />
          </div>
        </div>
      </div>
    </section>
  );
}
