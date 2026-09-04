import { TrustpilotWidget } from "@/components/TrustpilotWidget";

/**
 * Customer trust, without inventing reviews. The homepage's previous
 * TestimonialSection draws on data/testimonials.ts — first-party authored
 * quotes we can't independently verify as verbatim customer words, so
 * rather than present them as reviews here, this section uses the one
 * genuinely third-party, verifiable trust signal already integrated on the
 * site: the live Trustpilot widget. data/testimonials.ts is untouched and
 * still used elsewhere (the About page, and site-wide Review schema).
 */
export function HomeCustomerTrust() {
  return (
    <section className="bg-sand py-16 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">Verified by our customers</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Reviewed on Trustpilot
            </h2>
          </div>
          <div className="w-full max-w-sm">
            <TrustpilotWidget />
          </div>
        </div>
      </div>
    </section>
  );
}
