import { HomeSectionCards } from "@/components/home/HomeSectionCards";

/** H2 #6 — Private chauffeur services. */
export function HomeChauffeur() {
  return (
    <HomeSectionCards
      eyebrow="Chauffeur Service"
      heading="Private Chauffeur Services in Saudi Arabia"
      intro="A private chauffeur and vehicle matched to your group and luggage, for journeys that need more flexibility than a single point-to-point transfer."
      columns={3}
      cards={[
        {
          title: "Private Chauffeur Service",
          body: "Comfortable private transportation for business travel, leisure trips, and special journeys, with a vehicle sized to your group and luggage — a sedan for one or two, or an SUV or van for a family.",
          href: "/services",
          linkLabel: "All services",
        },
        {
          title: "Business and Corporate Transfers",
          body: "Corporate travel accounts and reliable pickups for business meetings, with drivers who plan around your schedule. Riyadh's business districts are covered with fixed-quote private cars.",
          href: "/taxi-service/riyadh",
          linkLabel: "Riyadh taxi service",
        },
        {
          title: "Full-Day Private Transportation",
          body: "Full-day driver hire is available in major Saudi cities — a single vehicle and driver for a day of meetings, sightseeing, or family outings, booked as one continuous trip rather than separate rides.",
          href: "/city-transfers",
          linkLabel: "City transfer service",
        },
      ]}
    />
  );
}
