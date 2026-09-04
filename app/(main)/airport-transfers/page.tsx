import type { Metadata } from "next";
import { ServiceV2View } from "@/components/services/ServiceV2View";
import { airportTransfersContent } from "@/data/service-pages-v2/airport-transfers";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { getArPathForEnPath } from "@/data/translations/ar";

const path = "/airport-transfers";
const arPath = getArPathForEnPath(path);
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Airport Transfers", path },
];

export const metadata: Metadata = buildMetadata({
  title: "Airport Transfers Saudi Arabia | Private Chauffeur Pickup",
  description:
    "Private airport transfers across Saudi Arabia — a driver waiting after you land, flight-aware pickup timing, and a direct drive to your destination.",
  path,
  ...(arPath ? { alternateLanguages: { en: path, ar: arPath } } : {}),
});

export default function AirportTransfersPage() {
  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: "Airport Transfers",
            description: airportTransfersContent.dek,
            path,
            serviceType: "Airport Transfer",
          }),
          faqSchema(airportTransfersContent.faqs),
        ]}
      />
      <ServiceV2View {...airportTransfersContent} crumbs={crumbs} labels={{ faqHeading: "Airport Transfer Questions" }} />
    </>
  );
}
