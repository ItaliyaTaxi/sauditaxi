import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/ServicePage";
import { RouteGrid } from "@/components/sections/RouteGrid";
import { CityGrid } from "@/components/sections/CityGrid";
import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getService("umrah-taxi-service")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.href,
});

export default function UmrahTaxiPage() {
  return (
    <ServicePage service={service}>
      <RouteGrid
        background="white"
        heading="Popular Umrah Transfer Routes"
        subheading="The most-requested pilgrim transfers between Jeddah, Makkah, and Madinah."
        only={[
          "jeddah-to-makkah",
          "makkah-to-madinah",
          "madinah-to-makkah",
          "jeddah-to-madinah",
        ]}
      />
      <CityGrid
        background="muted"
        heading="Holy City Taxi Services"
        subheading="Local transfers and Ziyarat in the cities of pilgrimage."
        only={["makkah", "madinah", "jeddah", "taif"]}
      />
    </ServicePage>
  );
}
