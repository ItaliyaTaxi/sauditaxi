import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/ServicePage";
import { BorderGrid } from "@/components/sections/BorderGrid";
import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { getArPathForEnPath } from "@/data/translations/ar";

const service = getService("border-transfers")!;
const arPath = getArPathForEnPath(service.href);

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.href,
  ...(arPath ? { alternateLanguages: { en: service.href, ar: arPath } } : {}),
});

export default function BorderTransfersPage() {
  return (
    <ServicePage service={service}>
      <BorderGrid background="white" />
    </ServicePage>
  );
}
