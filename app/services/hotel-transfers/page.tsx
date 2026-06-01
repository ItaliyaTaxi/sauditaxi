import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/ServicePage";
import { CityGrid } from "@/components/sections/CityGrid";
import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getService("hotel-transfers")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.href,
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
