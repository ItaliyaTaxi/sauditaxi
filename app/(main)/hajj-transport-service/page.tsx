import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/ServicePage";
import { RouteGrid } from "@/components/sections/RouteGrid";
import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { getArPathForEnPath } from "@/data/translations/ar";

const service = getService("hajj-transport-service")!;
const arPath = getArPathForEnPath(service.href);

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.href,
  ...(arPath ? { alternateLanguages: { en: service.href, ar: arPath } } : {}),
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
