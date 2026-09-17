import { HomeSectionCards } from "@/components/home/HomeSectionCards";

/** H2 #5 — Day trips, framed as private transportation, not guided tours. */
export function HomeDayTrips() {
  return (
    <HomeSectionCards
      eyebrow="Day Trips"
      heading="Private Day Trips in Saudi Arabia"
      intro="A private vehicle for a single day of sightseeing, a mountain escape, or a string of business calls — your driver waits between stops, and there's no fixed group-tour schedule to follow."
      tone="sand"
      columns={3}
      cards={[
        {
          title: "Private Day Trips from Riyadh",
          body: "A private return transfer from Riyadh to Diriyah, the restored birthplace of the Saudi state, with your driver waiting to bring you back the same day.",
          href: "/routes/riyadh-to-diriyah",
          linkLabel: "Riyadh to Diriyah",
        },
        {
          title: "Private Day Trips from Jeddah",
          body: "A private transfer from Jeddah up into the cooler hills of Taif — roses, fruit farms, and the scenic Al Hada road — with return transport arranged for the same day.",
          href: "/routes/jeddah-to-taif",
          linkLabel: "Jeddah to Taif",
        },
        {
          title: "Private Trips to AlUla",
          body: "Airport and resort pickups in AlUla, with private transfers to Hegra, Elephant Rock, and the Old Town, plus onward journeys to Madinah for travellers continuing their trip.",
          href: "/taxi-service/alula",
          linkLabel: "AlUla taxi service",
        },
      ]}
    />
  );
}
