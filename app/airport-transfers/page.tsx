import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/ServicePage";
import { AirportGrid } from "@/components/sections/AirportGrid";
import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getService("airport-transfers")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.href,
});

export default function AirportTransfersPage() {
  return (
    <ServicePage service={service}>
      <AirportGrid background="white" />
    </ServicePage>
  );
}
