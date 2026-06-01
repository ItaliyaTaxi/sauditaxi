import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/ServicePage";
import { RouteGrid } from "@/components/sections/RouteGrid";
import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getService("intercity-transfers")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.href,
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
