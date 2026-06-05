import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/sections/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Terms & Conditions", path: "/terms-and-conditions" },
];

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description:
    "The terms and conditions for using the Saudi Taxi Transfers website and requesting taxi, airport, and transfer quotes across Saudi Arabia.",
  path: "/terms-and-conditions",
});

const sections: LegalSection[] = [
  {
    heading: "Introduction",
    paragraphs: [
      `These Terms & Conditions govern your use of the ${siteConfig.name} website and the booking-request service we provide. By submitting a quote request, contacting us, or otherwise using this website, you agree to these terms. If you do not agree, please do not use the service.`,
    ],
  },
  {
    heading: "Services Provided",
    paragraphs: [
      "We operate a taxi and transfer lead-generation and booking-coordination service across Saudi Arabia, covering airport transfers, city rides, intercity routes, border crossings, and Umrah, Hajj, and Ziyarat transport.",
      "We connect customers with professional drivers and transport partners. The transport itself is performed by drivers or partner companies, and your trip is subject to their availability.",
    ],
  },
  {
    heading: "Booking Requests",
    paragraphs: [
      "Submitting the quote form or contacting us by email is a request for a quote, not a confirmed booking. A booking is only confirmed once we reply and you accept the quoted price and trip details.",
      "You are responsible for providing accurate pickup, drop-off, date, time, passenger, and luggage details so we can quote and arrange your transfer correctly.",
    ],
  },
  {
    heading: "Quotes and Pricing",
    paragraphs: [
      "Quotes are based on the information you provide and are valid for a limited time. Prices may change if trip details change — for example, additional stops, waiting time, route changes, extra passengers, or excess luggage.",
      "Tolls, parking, border fees, and similar third-party charges may be included in or added to your quote and will be communicated before your trip is confirmed.",
    ],
  },
  {
    heading: "Payment Terms",
    paragraphs: [
      "Payment terms (cash, card, or other methods) are confirmed at the time of booking. No payment is required simply to receive a quote.",
      "Any deposit or prepayment requirements for specific routes or vehicle types will be communicated clearly before you confirm.",
    ],
  },
  {
    heading: "Cancellations",
    paragraphs: [
      "If you need to cancel or change a confirmed booking, please notify us as early as possible by email or through our booking form.",
      "Cancellation conditions may vary by route, vehicle type, and how close the cancellation is to the pickup time. Any applicable cancellation terms will be shared at the time of booking.",
    ],
  },
  {
    heading: "Driver / Partner Responsibility",
    paragraphs: [
      "Transport is provided by professional drivers and partner companies who are responsible for the safe operation and licensing of their vehicles in accordance with Saudi regulations.",
      "We take reasonable care in coordinating reliable partners, but the driver or partner remains responsible for the conduct of the journey.",
    ],
  },
  {
    heading: "Customer Responsibilities",
    list: [
      "Provide accurate and complete trip details when requesting a quote.",
      "Be available and ready at the agreed pickup time and location.",
      "Treat drivers, vehicles, and partner staff with respect.",
      "Comply with Saudi laws and any vehicle safety requirements during the trip.",
      "Carry valid travel documents for border transfers (passport and visa where required).",
    ],
  },
  {
    heading: "Delays and Waiting Time",
    paragraphs: [
      "We track flights for airport pickups and include reasonable wait time. Extended waiting beyond the agreed allowance, or delays caused by the customer, may incur additional charges.",
      "We are not liable for delays caused by traffic, weather, road closures, border processing, or other circumstances beyond our reasonable control.",
    ],
  },
  {
    heading: "Luggage and Passenger Information",
    paragraphs: [
      "You must declare the correct number of passengers and luggage items so we assign a suitable vehicle. The driver may decline to carry passengers or luggage that exceed the vehicle's safe and legal capacity.",
    ],
  },
  {
    heading: "Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, our liability is limited to coordinating your transfer request. We are not liable for indirect, incidental, or consequential losses arising from the use of the service or the transport provided by drivers or partners.",
      "Nothing in these terms excludes any liability that cannot be excluded under applicable law.",
    ],
  },
  {
    heading: "Changes to Terms",
    paragraphs: [
      "We may update these Terms & Conditions from time to time. The latest version will always be available on this page, and your continued use of the service constitutes acceptance of the updated terms.",
    ],
  },
  {
    heading: "Contact Information",
    paragraphs: [
      `For any questions about these terms, contact us by email at ${siteConfig.email} or through our booking form.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      subtitle="The terms that apply when you use our website and request a taxi or transfer quote in Saudi Arabia."
      updated="29 May 2026"
      crumbs={crumbs}
      sections={sections}
    />
  );
}
