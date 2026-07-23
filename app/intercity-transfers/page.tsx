import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/ServicePage";
import { RouteGrid } from "@/components/sections/RouteGrid";
import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { getArPathForEnPath } from "@/data/translations/ar";

const service = getService("intercity-transfers")!;
const arPath = getArPathForEnPath(service.href);

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.href,
  ...(arPath ? { alternateLanguages: { en: service.href, ar: arPath } } : {}),
});

export default function IntercityTransfersPage() {
  return (
    <ServicePage service={service}>
      <RouteGrid
        background="white"
        heading="Popular Intercity Routes"
        subheading="Fixed-price private transfers between Saudi Arabia's major cities."
      />
    </ServicePage>
  );
}
