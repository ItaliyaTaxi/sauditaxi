import type { Metadata } from "next";
import { ServiceV2View } from "@/components/services/ServiceV2View";
import { hotelTransfersContent } from "@/data/service-pages-v2/hotel-transfers";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { getArPathForEnPath } from "@/data/translations/ar";

const path = "/services/hotel-transfers";
const arPath = getArPathForEnPath(path);
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Hotel Transfers", path },
];

export const metadata: Metadata = buildMetadata({
  title: "Hotel Transfers Saudi Arabia | Door-to-Door Private Rides",
  description:
    "Private hotel transfers in Saudi Arabia — airport to hotel, hotel to hotel, or hotel to destination, with pickup from the lobby and a fixed price.",
  path,
  ...(arPath ? { alternateLanguages: { en: path, ar: arPath } } : {}),
});

export default function HotelTransfersPage() {
  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: "Hotel Transfers",
            description: hotelTransfersContent.dek,
            path,
            serviceType: "Hotel Transfer",
          }),
          faqSchema(hotelTransfersContent.faqs),
        ]}
      />
      <ServiceV2View {...hotelTransfersContent} crumbs={crumbs} labels={{ faqHeading: "Hotel Transfer Questions" }} />
    </>
  );
}
