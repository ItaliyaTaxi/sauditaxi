import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/ServicePage";
import { CityGrid } from "@/components/sections/CityGrid";
import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getService("city-transfers")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.href,
});

export default function CityTransfersPage() {
  return (
    <ServicePage service={service}>
      <CityGrid background="white" />
    </ServicePage>
  );
}
