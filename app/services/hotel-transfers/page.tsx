import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/ServicePage";
import { CityGrid } from "@/components/sections/CityGrid";
import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { getArPathForEnPath } from "@/data/translations/ar";

const service = getService("hotel-transfers")!;
const arPath = getArPathForEnPath(service.href);

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.href,
  ...(arPath ? { alternateLanguages: { en: service.href, ar: arPath } } : {}),
});

export default function HotelTransfersPage() {
  return (
    <ServicePage service={service}>
      <CityGrid
        background="white"
        heading="Hotel Transfers by City"
        subheading="Door-to-door hotel pickups and drop-offs across Saudi Arabia."
      />
    </ServicePage>
  );
}
