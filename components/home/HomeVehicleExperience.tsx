import { HomeSectionCards } from "@/components/home/HomeSectionCards";
import { vehicles } from "@/data/vehicles";

/**
 * H2 #10 — Vehicles. Real vehicle data only (data/vehicles.ts), grouped into
 * 4 cards so the heading count stays reasonable — no invented models,
 * capacities, or amenities.
 */
export function HomeVehicleExperience() {
  const byId = Object.fromEntries(vehicles.map((v) => [v.id, v]));

  return (
    <HomeSectionCards
      eyebrow="The Fleet"
      heading="Private Vehicles for Every Journey"
      intro="Every vehicle is matched to your group size and luggage, from a single traveller to a full pilgrim or corporate group."
      columns={4}
      cards={[
        {
          title: "Sedan Transfers",
          body: `From a ${byId.economy.examples} to a ${byId.comfort.examples} — for ${byId.comfort.passengers} with up to ${byId.comfort.luggage}, ideal for city and airport transfers.`,
        },
        {
          title: "Executive and Premium Vehicles",
          body: `${byId.business.examples} — for corporate travel and VIP arrivals, seating ${byId.business.passengers} with ${byId.business.luggage} in a premium cabin.`,
        },
        {
          title: "Family and Group Transfers",
          body: `${byId.suv.examples} — an SUV for ${byId.suv.passengers} and ${byId.suv.luggage}, spacious comfort for families and desert routes like AlUla.`,
        },
        {
          title: "Minivan and Larger Vehicles",
          body: `${byId.van.examples} for ${byId.van.passengers}, or a ${byId.minibus.examples} minibus for ${byId.minibus.passengers} — for larger Umrah, Hajj, and corporate groups.`,
        },
      ]}
    />
  );
}
