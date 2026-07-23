import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/ServicePage";
import { AirportGrid } from "@/components/sections/AirportGrid";
import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { getArPathForEnPath } from "@/data/translations/ar";

const service = getService("airport-transfers")!;
const arPath = getArPathForEnPath(service.href);

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.href,
  ...(arPath ? { alternateLanguages: { en: service.href, ar: arPath } } : {}),
});

export default function AirportTransfersPage() {
  return (
    <ServicePage service={service}>
      <AirportGrid background="white" />
    </ServicePage>
  );
}
