import type { Metadata } from "next";
import { ServiceV2View } from "@/components/services/ServiceV2View";
import { ziyaratTaxiServiceContent } from "@/data/service-pages-v2/ziyarat-taxi-service";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { getArPathForEnPath } from "@/data/translations/ar";

const path = "/ziyarat-taxi-service";
const arPath = getArPathForEnPath(path);
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Ziyarat Taxi Service", path },
];

export const metadata: Metadata = buildMetadata({
  title: "Ziyarat Transportation | Makkah & Madinah Private Transfers",
  description:
    "Private transportation for Ziyarat visits to historic sites around Makkah and Madinah — flexible multi-stop journeys with a driver who knows the route.",
  path,
  ...(arPath ? { alternateLanguages: { en: path, ar: arPath } } : {}),
});

export default function ZiyaratTaxiPage() {
  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: "Ziyarat Transportation",
            description: ziyaratTaxiServiceContent.dek,
            path,
            serviceType: "Ziyarat Transfer",
          }),
          faqSchema(ziyaratTaxiServiceContent.faqs),
        ]}
      />
      <ServiceV2View {...ziyaratTaxiServiceContent} crumbs={crumbs} labels={{ faqHeading: "Ziyarat Transportation Questions" }} />
    </>
  );
}
