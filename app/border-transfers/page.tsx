import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/ServicePage";
import { BorderGrid } from "@/components/sections/BorderGrid";
import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getService("border-transfers")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.href,
});

export default function BorderTransfersPage() {
  return (
    <ServicePage service={service}>
      <BorderGrid background="white" />
    </ServicePage>
  );
}
