/**
 * City-specific airport-transfer facts shown on the /cities/{city} hub
 * (English) and its /ar/{slug} counterpart (Arabic). Shared here so both
 * renderers read the exact same source facts — the Arabic object is a
 * translation of the English one, never independently authored.
 *
 * Sourced only from data already committed elsewhere in the codebase, never
 * invented for this section:
 *  - Makkah drop-off constraint and miqat guidance: paraphrased from the
 *    `about`/FAQ fields of the jeddah-to-makkah and madinah-to-makkah
 *    entries in data/routes.ts (same fact, same wording as far as possible).
 *  - Seasonal timing: the exact FAQ answer already used on multiple Makkah
 *    route pages in data/routes.ts ("Same-day booking is often possible...").
 * TODO (Riyadh/Jeddah/Dammam): no equivalent operational fact exists yet in
 * data/hotels.ts, data/airports.ts, or the route pages for these 3 cities —
 * left blank rather than invented. Fill in and both sections will render.
 */
export interface CityAirportFacts {
  dropoffConstraint?: string;
  miqat?: string;
  seasonal?: string;
}

export const cityAirportFacts: Record<string, CityAirportFacts> = {
  makkah: {
    dropoffConstraint:
      "Private vehicles can't enter the pedestrian zone directly around the Masjid al-Haram, so your driver will confirm a nearby designated drop-off point with you in advance.",
    miqat:
      "If you haven't yet entered ihram, mention it when booking — your driver can plan a stop at the appropriate miqat before continuing to Makkah (for those arriving via Madinah, commonly Dhul Hulaifah / Abyar Ali).",
    seasonal:
      "The drive can extend during Umrah season or Hajj when traffic near Makkah is heavier. Same-day booking is often possible, though booking a day ahead gives more vehicle choice, especially during Ramadan or peak Umrah season.",
  },
  madinah: {
    miqat:
      "Pilgrims travelling on to Makkah from a Madinah hotel can request a stop at the miqat — commonly Dhul Hulaifah (Abyar Ali), just outside Madinah — before continuing the journey.",
    seasonal:
      "Same-day booking is often possible, though booking a day ahead gives more vehicle choice, especially during Ramadan or peak Umrah season.",
  },
  // TODO: riyadh, jeddah, dammam — add once an operational fact exists in
  // data/hotels.ts, data/airports.ts, or that city's route pages.
};

/** Arabic translation of cityAirportFacts above — same facts, same cities, no additions. */
export const cityAirportFactsAr: Record<string, CityAirportFacts> = {
  makkah: {
    dropoffConstraint:
      "لا يمكن للمركبات الخاصة الدخول إلى المنطقة المخصصة للمشاة حول المسجد الحرام مباشرة، لذا سيؤكد لك السائق أقرب نقطة نزول مخصصة مسبقًا.",
    miqat:
      "إذا لم تكن قد أحرمت بعد، أخبرنا عند الحجز — يمكن لسائقك التوقف عند الميقات المناسب قبل متابعة الطريق إلى مكة (للقادمين عبر المدينة المنورة، غالبًا ذو الحليفة / آبار علي).",
    seasonal:
      "قد تطول الرحلة خلال موسم العمرة أو الحج بسبب ازدحام الحركة قرب مكة المكرمة. الحجز في نفس اليوم ممكن غالبًا، لكن الحجز قبل يوم يمنحك خيارات أوسع للمركبات، خصوصًا في رمضان أو موسم العمرة الذروة.",
  },
  madinah: {
    miqat:
      "الحجاج المتابعون إلى مكة المكرمة من فندق في المدينة المنورة يمكنهم طلب التوقف عند الميقات — غالبًا ذو الحليفة (آبار علي) خارج المدينة المنورة مباشرة — قبل متابعة الرحلة.",
    seasonal:
      "الحجز في نفس اليوم ممكن غالبًا، لكن الحجز قبل يوم يمنحك خيارات أوسع للمركبات، خصوصًا في رمضان أو موسم العمرة الذروة.",
  },
  // TODO: riyadh, jeddah, dammam — نفس ملاحظة النسخة الإنجليزية أعلاه.
};
