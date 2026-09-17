import { HomeSectionCards } from "@/components/home/HomeSectionCards";

/** H2 #2 — Airport Transfers, one card per airport actually served. */
export function HomeServiceExperience() {
  return (
    <HomeSectionCards
      eyebrow="Airport Pickup"
      heading="Saudi Arabia Airport Transfers"
      intro="Meet-and-greet pickup at arrivals, with flight tracking so your driver adjusts to an early or delayed landing automatically. We serve major Saudi airports with direct transfers to hotels, residences, business locations, and onward travel to Makkah and Madinah."
      columns={2}
      cards={[
        {
          title: "Riyadh Airport Transfers",
          body: "Private pickup at King Khalid International Airport, with corporate and business-travel accounts available. Drivers connect every district of the capital, plus onward transfers to the Eastern Province and the holy cities.",
          href: "/airport-transfer/riyadh-airport",
          linkLabel: "Riyadh Airport transfers",
        },
        {
          title: "Jeddah Airport Transfers",
          body: "Meet-and-greet at King Abdulaziz International Airport, including the Hajj Terminal and Terminal 1, with direct transfers to Makkah, Corniche hotels, and onward travel to Madinah or Taif.",
          href: "/airport-transfer/jeddah-airport",
          linkLabel: "Jeddah Airport transfers",
        },
        {
          title: "Madinah Airport Transfers",
          body: "Airport meet-and-greet at Prince Mohammad bin Abdulaziz International Airport, with hotel transfers near the Prophet's Mosque and private long-distance trips to Makkah and AlUla.",
          href: "/airport-transfer/madinah-airport",
          linkLabel: "Madinah Airport transfers",
        },
        {
          title: "Dammam Airport Transfers",
          body: "Pickup at King Fahd International Airport, with transfers across the Dammam, Khobar, and Dhahran metro area, plus cross-border rides to Bahrain over the King Fahd Causeway.",
          href: "/airport-transfer/dammam-airport",
          linkLabel: "Dammam Airport transfers",
        },
      ]}
    />
  );
}
