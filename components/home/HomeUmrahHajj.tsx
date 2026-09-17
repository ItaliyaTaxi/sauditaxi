import { HomeSectionCards } from "@/components/home/HomeSectionCards";

/** H2 #3 — Umrah and Hajj transfers. Deliberately no permit/authorisation claims. */
export function HomeUmrahHajj() {
  return (
    <HomeSectionCards
      eyebrow="Pilgrim Transport"
      heading="Umrah and Hajj Transfers in Saudi Arabia"
      intro="Practical transportation for the journeys an Umrah or Hajj trip typically involves, between Jeddah and Madinah airports, Makkah, Madinah, and hotels."
      tone="sand"
      columns={3}
      cards={[
        {
          title: "Umrah Transfers",
          body: "Private transportation for an Umrah journey — airport to Makkah, Makkah to Madinah, and the hotel transfers in between, arranged calmly and in advance for travellers arriving tired after a long flight.",
          href: "/umrah-taxi-service",
          linkLabel: "Umrah taxi service",
        },
        {
          title: "Hajj Transfers",
          body: "Private transportation, not official Hajj arrangements — we are not a Hajj operator and don't issue permits. What we help with is the transportation layer around an already-arranged Hajj trip: airport-to-accommodation transfers and group logistics.",
          href: "/hajj-transport-service",
          linkLabel: "Hajj transport service",
        },
        {
          title: "Makkah and Madinah Transfers",
          body: "Direct private transfers between Makkah and Madinah along the Hijra highway, with rest-stop flexibility for families and elders, plus hotel transfers near the Haram and the Prophet's Mosque.",
          href: "/routes/makkah-to-madinah",
          linkLabel: "Makkah to Madinah route",
        },
      ]}
    />
  );
}
