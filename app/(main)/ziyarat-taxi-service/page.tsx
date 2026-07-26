import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/ServicePage";
import { CityGrid } from "@/components/sections/CityGrid";
import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { getArPathForEnPath } from "@/data/translations/ar";

const service = getService("ziyarat-taxi-service")!;
const arPath = getArPathForEnPath(service.href);

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.href,
  ...(arPath ? { alternateLanguages: { en: service.href, ar: arPath } } : {}),
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
