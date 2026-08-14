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

const featuredPriorityRoutes = [
  "riyadh-to-neom",
  "riyadh-to-taif",
  "riyadh-to-hail",
  "riyadh-to-tabuk",
  "riyadh-to-jubail",
  "riyadh-to-hofuf",
  "khobar-to-riyadh",
  "hail-to-riyadh",
  "qassim-to-riyadh",
  "yanbu-to-riyadh",
  "riyadh-to-khobar",
  "riyadh-to-qassim",
  "riyadh-to-yanbu",
  "riyadh-to-abha",
];

export default function IntercityTransfersPage() {
  return (
    <ServicePage service={service}>
      <RouteGrid
        background="white"
        heading="Popular Intercity Routes"
        subheading="Fixed-price private transfers between Saudi Arabia's major cities."
        only={featuredPriorityRoutes}
      />
    </ServicePage>
  );
}
