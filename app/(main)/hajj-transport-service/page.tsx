import type { Metadata } from "next";
import { ServiceV2View } from "@/components/services/ServiceV2View";
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
  title: "Hajj Transportation Planning | Saudi Private Transfers",
  description:
    "Private transportation planning for Hajj travel — airport, hotel and group transfers, clearly separated from official Hajj permits and access rules.",
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
            name: "Hajj Transportation Planning",
            description: hajjTransportServiceContent.dek,
            path,
            serviceType: "Hajj Transfer",
          }),
          faqSchema(hajjTransportServiceContent.faqs),
        ]}
      />
      <ServiceV2View {...hajjTransportServiceContent} crumbs={crumbs} labels={{ faqHeading: "Hajj Transportation Questions" }} />
    </>
  );
}
