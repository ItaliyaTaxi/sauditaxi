import Script from "next/script";

/**
 * Trustpilot "Review Collector" TrustBox — prompts visitors to leave a new
 * review (not a carousel of existing ones). Rendered only on the pages that
 * actually use it (home, contact); Next.js dedupes the bootstrap script if it
 * ends up on more than one.
 */
export function TrustpilotWidget() {
  return (
    <>
      <Script
        src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="afterInteractive"
      />
      <div
        className="trustpilot-widget"
        data-locale="en-US"
        data-template-id="56278e9abfbbba0bdcd568bc"
        data-businessunit-id="6a6748c122933556471da228"
        data-style-height="52px"
        data-style-width="100%"
        data-token="5899638d-9c93-48ba-9bce-88fee4aff881"
      >
        <a
          href="https://www.trustpilot.com/review/saudiprivatetransfers.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trustpilot
        </a>
      </div>
    </>
  );
}
