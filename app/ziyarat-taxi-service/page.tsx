import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/ServicePage";
import { CityGrid } from "@/components/sections/CityGrid";
import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getService("ziyarat-taxi-service")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.href,
});

export default function ZiyaratTaxiPage() {
  return (
    <ServicePage service={service}>
      <CityGrid
        background="white"
        heading="Ziyarat in the Holy Cities"
        subheading="Private visits to the historic Islamic sites of Makkah and Madinah."
        only={["makkah", "madinah"]}
      />
    </ServicePage>
  );
}
