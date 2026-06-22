import type { ServiceContent } from "./types";
import { content as airportTransfers } from "./airport-transfers";
import { content as cityTransfers } from "./city-transfers";
import { content as intercityTransfers } from "./intercity-transfers";
import { content as borderTransfers } from "./border-transfers";
import { content as umrahTaxiService } from "./umrah-taxi-service";
import { content as hajjTransportService } from "./hajj-transport-service";
import { content as ziyaratTaxiService } from "./ziyarat-taxi-service";
import { content as hotelTransfers } from "./hotel-transfers";

/** Map of service slug → long-form content. */
export const serviceContent: Record<string, ServiceContent> = {
  "airport-transfers": airportTransfers,
  "city-transfers": cityTransfers,
  "intercity-transfers": intercityTransfers,
  "border-transfers": borderTransfers,
  "umrah-taxi-service": umrahTaxiService,
  "hajj-transport-service": hajjTransportService,
  "ziyarat-taxi-service": ziyaratTaxiService,
  "hotel-transfers": hotelTransfers,
};

export function getServiceContent(slug: string): ServiceContent | undefined {
  return serviceContent[slug];
}

export type { ServiceContent };
