import type { Metadata } from "next";
import { HajjTransfersHub } from "@/components/services/HajjTransfersHub";
import { hajjTransportServiceContent } from "@/data/service-pages-v2/hajj-transport-service";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { getArPathForEnPath } from "@/data/translations/ar";

const path = "/hajj-transport-service";
const arPath = getArPathForEnPath(path);
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Hajj Transport Service", path },
];

export const metadata: Metadata = buildMetadata({
  title: "Private Hajj Transfers Saudi Arabia | Airport & City Transport",
  description:
    "Private Hajj transportation — airport, hotel, and Makkah-Madinah transfers, clearly separated from official Hajj permits and access rules.",
  path,
  ...(arPath ? { alternateLanguages: { en: path, ar: arPath } } : {}),
});

export default function HajjTransportPage() {
  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: "Hajj Transportation",
            description: hajjTransportServiceContent.dek,
            path,
            serviceType: "Hajj Transfer",
          }),
          faqSchema(hajjTransportServiceContent.faqs),
        ]}
      />
      <HajjTransfersHub content={hajjTransportServiceContent} crumbs={crumbs} />
    </>
  );
}
