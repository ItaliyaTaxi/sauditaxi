import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/ServicePage";
import { RouteGrid } from "@/components/sections/RouteGrid";
import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getService("hajj-transport-service")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.href,
});

export default function HajjTransportPage() {
  return (
    <ServicePage service={service}>
      <RouteGrid
        background="white"
        heading="Hajj & Pilgrim Transfer Routes"
        subheading="Group transfers across the holy cities and the main pilgrim routes."
        only={["jeddah-to-makkah", "makkah-to-madinah", "jeddah-to-madinah"]}
      />
    </ServicePage>
  );
}
