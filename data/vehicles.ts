export interface Vehicle {
  id: string;
  name: string;
  /** Example vehicle models for context. */
  examples: string;
  passengers: string;
  luggage: string;
  description: string;
}

export const vehicles: Vehicle[] = [
  {
    id: "economy",
    name: "Economy",
    examples: "Hyundai Accent, Toyota Yaris",
    passengers: "1–3 passengers",
    luggage: "2 bags",
    description: "Affordable private rides for solo travellers and short city trips.",
  },
  {
    id: "comfort",
    name: "Comfort",
    examples: "Toyota Camry, Hyundai Sonata",
    passengers: "1–3 passengers",
    luggage: "3 bags",
    description: "A roomier sedan for airport runs and longer intercity journeys.",
  },
  {
    id: "business",
    name: "Business",
    examples: "Mercedes E-Class, Lexus ES",
    passengers: "1–3 passengers",
    luggage: "3 bags",
    description: "Premium executive cars for corporate travel and VIP arrivals.",
  },
  {
    id: "suv",
    name: "SUV",
    examples: "Toyota Land Cruiser, GMC Yukon",
    passengers: "1–5 passengers",
    luggage: "4 bags",
    description: "Spacious 4x4 comfort for families and desert routes like AlUla.",
  },
  {
    id: "van",
    name: "Van",
    examples: "Toyota Hiace, Hyundai Staria",
    passengers: "1–9 passengers",
    luggage: "8 bags",
    description: "Ideal for pilgrim groups and families travelling with luggage.",
  },
  {
    id: "minibus",
    name: "Minibus",
    examples: "Toyota Coaster",
    passengers: "10–18 passengers",
    luggage: "Group luggage",
    description: "Group transport for large Umrah, Hajj, and corporate parties.",
  },
];

/** Vehicle type values offered in the quote form. */
export const vehicleOptions = vehicles.map((v) => v.name);
