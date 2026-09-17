import { HomeSectionCards } from "@/components/home/HomeSectionCards";

/**
 * H2 #7 — Cross-border transfers. Only the 4 GCC borders actually served
 * (data/borders.ts also has a Jordan crossing, which isn't GCC and is
 * deliberately left out of this section).
 */
export function HomeCrossBorder() {
  return (
    <HomeSectionCards
      eyebrow="Cross-Border"
      heading="Cross-Border Transfers from Saudi Arabia to the GCC"
      intro="Private road transfers between Saudi Arabia and neighbouring GCC countries, with drivers who know the crossings. Cross-border journeys may involve border, visa, and vehicle requirements that vary — check current rules before you travel."
      tone="midnight"
      columns={4}
      cards={[
        {
          title: "Saudi Arabia to Bahrain Transfers",
          body: "Private transfers over the King Fahd Causeway from Khobar and Dammam directly to Manama and anywhere in Bahrain.",
          href: "/border-transfers/bahrain-causeway",
          linkLabel: "Bahrain border transfer",
        },
        {
          title: "Saudi Arabia to UAE Transfers",
          body: "A genuine cross-border road journey from the Eastern Province into the UAE via the Al Batha border, planned as a long-distance drive with proper rest stops.",
          href: "/border-transfers/uae-border",
          linkLabel: "UAE border transfer",
        },
        {
          title: "Saudi Arabia to Qatar Transfers",
          body: "Road transfers from the Eastern Province to Qatar via the Salwa border crossing, handled by drivers who plan for the crossing itself, not just the drive.",
          href: "/border-transfers/qatar-border",
          linkLabel: "Qatar border transfer",
        },
        {
          title: "Saudi Arabia to Kuwait Transfers",
          body: "The long north-eastern drive from Dammam, Jubail, or Riyadh to the Al Khafji crossing, planned with proper rest stops for a genuinely long journey.",
          href: "/border-transfers/kuwait-border",
          linkLabel: "Kuwait border transfer",
        },
      ]}
    />
  );
}
