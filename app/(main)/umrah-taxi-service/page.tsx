import type { Metadata } from "next";
import { UmrahTransfersHub } from "@/components/services/UmrahTransfersHub";
import { umrahTaxiServiceContent } from "@/data/service-pages-v2/umrah-taxi-service";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { getArPathForEnPath } from "@/data/translations/ar";

const path = "/umrah-taxi-service";
const arPath = getArPathForEnPath(path);
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Umrah Taxi Service", path },
];

export const metadata: Metadata = buildMetadata({
  title: "Umrah Transportation Saudi Arabia | Private Transfers",
  description:
    "Private transportation for Umrah journeys — airport to Makkah, Makkah to Madinah, and hotel transfers, arranged calmly and in advance.",
  path,
  ...(arPath ? { alternateLanguages: { en: path, ar: arPath } } : {}),
});

export default function UmrahTaxiPage() {
  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: "Umrah Transportation",
            description: umrahTaxiServiceContent.dek,
            path,
            serviceType: "Umrah Transfer",
          }),
          faqSchema(umrahTaxiServiceContent.faqs),
        ]}
      />
      <UmrahTransfersHub content={umrahTaxiServiceContent} crumbs={crumbs} />
    </>
  );
}
