import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { Clock, MapPin, ArrowRight, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { BlogContent } from "@/components/blog/BlogContent";
import { VehicleOptions } from "@/components/sections/VehicleOptions";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { QuoteForm } from "@/components/QuoteForm";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";
import { arPages, getArPage, arPath, getArPathForEnPath, type ArPage } from "@/data/translations/ar";
import { pageHeroes } from "@/lib/hero";
import { getCity } from "@/data/cities";
import { getAirport } from "@/data/airports";
import { getRoute, routes } from "@/data/routes";
import { hotelsForCity } from "@/data/hotels";
import { isDomesticCityRoute, isAirportToCityRoute, classifyRoute } from "@/lib/route-journey";
import { buildArabicRouteBlocks, parseArabicFromTo } from "@/lib/route-composer";
import { RouteJourneyView } from "@/components/routes/RouteJourneyView";
import { AirportRouteView } from "@/components/routes/AirportRouteView";
import { airportTransferName } from "@/lib/hotel-transfers";
import { cityAirportFactsAr } from "@/lib/city-hub-facts";
import { JourneyPageView } from "@/components/journey/JourneyPageView";
import { DistanceGuideV2View } from "@/components/distance-v2/DistanceGuideV2View";
import { ServiceV2View } from "@/components/services/ServiceV2View";
import { LegalPageView } from "@/components/legal/LegalPageView";
import { ContactPageView } from "@/components/contact/ContactPageView";
import { QuotePageView } from "@/components/quote/QuotePageView";
import { ServicesHubView } from "@/components/services-hub/ServicesHubView";
import { CityHubView, type CityHubLinkItem, type CityHubContent } from "@/components/city-hub/CityHubView";
import { AirportHubView } from "@/components/airport-hub/AirportHubView";

const arServiceV2Labels = { faqHeading: "أسئلة شائعة" };

const arDistanceV2Labels = {
  faqHeading: "أسئلة شائعة حول هذا الطريق",
  sourcesHeading: "المصادر",
  sourceFootnote:
    "المسافات وأوقات السفر تقريبية وقد تختلف حسب نقطة الانطلاق الدقيقة، والطريق المتبع، وظروف المعبر الحدودي، وحركة السير. آخر تحقق:",
};

const arJourneyLabels = {
  home: "الرئيسية",
  quickAnswer: "الإجابة السريعة",
  journeyAtAGlance: "الرحلة في لمحة",
  routeMap: "خريطة المسار",
  mapCaption: "بيانات الخريطة من خرائط جوجل.",
  distanceExplained: "المسافة بالتفصيل",
  howLong: "كم تستغرق الرحلة؟",
  understandingRoute: "فهم المسار",
  borderCrossing: "معلومات المعبر الحدودي",
  planYourJourney: "خطط لرحلتك",
  waysToTravel: "طرق السفر",
  ctaPrompt: "هل تخطط لهذه الرحلة بسيارة خاصة؟ اطّلع على",
  faqHeading: "الأسئلة الشائعة",
  relatedJourneys: "رحلات ذات صلة",
  sources: "المصادر",
  sourceFootnote:
    "المسافات وأوقات السفر تقريبية وقد تختلف حسب نقطة الانطلاق الدقيقة، والطريق المتبع، وظروف المعبر الحدودي، وحركة السير. آخر تحقق:",
  conclusion: "الخلاصة",
};

const heroFor = (page: ArPage): string => {
  if (page.type === "airport" || page.type === "hotel-transfer") return pageHeroes.airport;
  if (page.type === "attraction") return page.enPath.startsWith("/madinah/") ? pageHeroes.madinah : pageHeroes.makkah;
  if (page.type === "route" || page.type === "blog" || page.type === "distance") return pageHeroes.makkah;
  if (page.type === "city" || page.type === "city-hub") return pageHeroes.city;
  return pageHeroes.home;
};

/** /cities/{city} -> {city}, for the city-hub type only (enPath is always in this form). */
const citySlugFor = (page: ArPage): string => page.enPath.replace("/cities/", "");

const dict = getDictionary("ar");

export function generateStaticParams() {
  // The 41 hotel-transfer entries 301-redirect to their city-hub anchor
  // (proxy.ts, built from the same arPages array) and are excluded here —
  // see lib/city-hub-facts.ts / the "city-hub" type above. Data stays in
  // arPages (needed to build the redirect map); only static generation and
  // the sitemap (app/sitemap.ts) exclude them.
  return arPages.filter((p) => p.type !== "hotel-transfer").map((p) => ({ slug: p.slug.split("/") }));
}

// Old Arabic slugs that were only ever referenced from breadcrumbs (never
// built as real pages) but already have a live page covering the same
// topic. Redirecting avoids duplicating content that would otherwise
// cannibalize the live page for the same query. next.config.ts's
// redirects() did not reliably match these non-ASCII source paths in
// testing, so the alias is resolved here instead.
const LEGACY_AR_ALIASES: Record<string, string> = {
  "تاكسي-عمرة": "نقل-العمرة",
  "النقل-الحدودي": "النقل-عبر-الحدود",
};

// Next.js already decodes dynamic segments before they reach this component,
// so decodeURIComponent here is normally a no-op — but if a proxy/CDN layer
// ever forwards an already-decoded or malformed value, decodeURIComponent
// throws URIError, which previously propagated as an unhandled exception
// (HTTP 500) instead of a normal "page doesn't exist" 404.
function safeSlug(slugParts: string[]): string {
  const joined = slugParts.join("/");
  try {
    return decodeURIComponent(joined);
  } catch {
    return joined;
  }
}

function resolve(slugParts: string[]): ArPage | undefined {
  return getArPage(safeSlug(slugParts));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = resolve(slug);
  if (!page) return {};
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: arPath(page),
    alternateLanguages: { en: page.enPath, ar: arPath(page) },
  });
}

const serviceTypeFor = (type: ArPage["type"]): string =>
  ({
    service: "Taxi Service",
    airport: "Airport Transfer",
    city: "Taxi Service",
    route: "Intercity Transfer",
    "hotel-transfer": "Airport Transfer",
    about: "Taxi Service",
    contact: "Taxi Service",
    blog: "Taxi Service",
    attraction: "Private Transfer",
    "city-hub": "Airport Transfer",
    distance: "Distance Information",
    journey: "Distance Information",
    distanceV2: "Distance Information",
    serviceV2: "Taxi Service",
    legal: "Taxi Service",
    contactV2: "Taxi Service",
    quoteV2: "Taxi Service",
    servicesV2: "Taxi Service",
  })[type];

type QuoteSearchParams = {
  pickup?: string;
  dropoff?: string;
  date?: string;
  time?: string;
  passengers?: string;
};

export default async function ArabicPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<QuoteSearchParams>;
}) {
  const { slug } = await params;
  const key = safeSlug(slug);
  const alias = LEGACY_AR_ALIASES[key];
  // HTTP headers must be ASCII — an un-encoded Arabic destination in the
  // Location header throws (Node: "Invalid character in header content"),
  // which itself produced a 500. Percent-encode it.
  if (alias) redirect(`/ar/${encodeURIComponent(alias)}`);

  const page = resolve(slug);
  if (!page) notFound();

  if (page.type === "distanceV2" && page.distanceV2) {
    return (
      <>
        <SchemaScript
          schema={[breadcrumbSchema(page.breadcrumbs), faqSchema(page.distanceV2.faqs)]}
        />
        <DistanceGuideV2View
          {...page.distanceV2}
          h1={page.h1}
          from={page.distanceV2From ?? ""}
          to={page.distanceV2To ?? ""}
          crumbs={page.breadcrumbs}
          labels={arDistanceV2Labels}
        />
      </>
    );
  }

  if (page.type === "legal" && page.legal) {
    return (
      <>
        <SchemaScript schema={breadcrumbSchema(page.breadcrumbs)} />
        <LegalPageView {...page.legal} crumbs={page.breadcrumbs} />
      </>
    );
  }

  if (page.type === "contactV2" && page.contactV2) {
    return (
      <>
        <SchemaScript schema={breadcrumbSchema(page.breadcrumbs)} />
        <ContactPageView
          {...page.contactV2}
          crumbs={page.breadcrumbs}
          formSlot={<QuoteForm serviceType="صفحة اتصل بنا" twoColumn={false} />}
        />
      </>
    );
  }

  if (page.type === "quoteV2" && page.quoteV2) {
    const sp = await searchParams;
    return (
      <>
        <SchemaScript schema={breadcrumbSchema(page.breadcrumbs)} />
        <QuotePageView
          {...page.quoteV2}
          crumbs={page.breadcrumbs}
          formSlot={
            <QuoteForm
              serviceType="صفحة اطلب عرض سعر"
              defaultPickup={sp.pickup ?? ""}
              defaultDropoff={sp.dropoff ?? ""}
              defaultDate={sp.date ?? ""}
              defaultTime={sp.time ?? ""}
              defaultPassengers={sp.passengers || "2"}
            />
          }
        />
      </>
    );
  }

  if (page.type === "servicesV2" && page.servicesHub) {
    return (
      <>
        <SchemaScript schema={breadcrumbSchema(page.breadcrumbs)} />
        <ServicesHubView {...page.servicesHub} crumbs={page.breadcrumbs} />
      </>
    );
  }

  if (page.type === "city") {
    const enCity = getCity(page.enPath.replace("/taxi-service/", ""));
    const eyebrow = page.breadcrumbs[1]?.name ?? "دليل المدينة";

    let airportCard: CityHubContent["airportCard"];
    if (enCity?.nearestAirportSlug) {
      const arAirport = arPages.find(
        (p) => p.type === "airport" && p.enPath === `/airport-transfer/${enCity.nearestAirportSlug}`
      );
      if (arAirport) {
        airportCard = {
          heading: "النقل من المطار",
          text: `تحتاج استقبالًا من المطار أيضًا؟ نغطي ${arAirport.h1}.`,
          linkLabel: "عرض نقل المطار",
          href: arPath(arAirport),
        };
      }
    }

    const nearbyCities: CityHubLinkItem[] = arPages
      .filter((p) => p.type === "city" && p.slug !== page.slug)
      .map((p) => ({
        label: p.breadcrumbs[p.breadcrumbs.length - 1]?.name ?? p.h1,
        href: arPath(p),
      }));

    const services: CityHubLinkItem[] = [
      { label: "النقل بين المدن", href: "/ar/النقل-بين-المدن" },
      { label: "نقل من المطار", href: "/ar/نقل-من-المطار" },
      ...(["تنقلات-جدة", "تاكسي-مكة", "تاكسي-المدينة"].includes(page.slug)
        ? [
            { label: "نقل العمرة", href: "/ar/نقل-العمرة" },
            { label: "نقل الزيارة", href: "/ar/نقل-الزيارة" },
          ]
        : []),
    ];

    return (
      <>
        <SchemaScript
          schema={[
            breadcrumbSchema(page.breadcrumbs),
            serviceSchema({
              name: page.h1,
              description: page.intro,
              path: arPath(page),
              serviceType: "City Taxi Service",
              areaServed: "المملكة العربية السعودية",
            }),
            faqSchema(page.faqs),
          ]}
        />
        <CityHubView
          eyebrow={eyebrow}
          h1={page.h1}
          dek={page.intro}
          heroImage={page.heroImage ?? heroFor(page)}
          heroAlt={page.heroAlt ?? page.h1}
          facts={[]}
          extraSections={page.sections}
          airportCard={airportCard}
          nearbyCitiesHeading={nearbyCities.length > 0 ? "مدن قريبة" : undefined}
          nearbyCities={nearbyCities}
          servicesHeading="خدمات ذات صلة"
          services={services}
          faqsHeading="الأسئلة الشائعة"
          faqs={page.faqs}
          ctaHeading="جاهز لحجز نقلك؟"
          ctaText="شاركنا تفاصيل رحلتك، ونرد بسعر ثابت قبل السفر."
          ctaLabel="اطلب عرض سعر"
          ctaHref="/ar/اطلب-عرض-سعر"
          crumbs={page.breadcrumbs}
        />
      </>
    );
  }

  if (page.type === "airport") {
    const enAirport = getAirport(page.enPath.replace("/airport-transfer/", ""));
    const journeySteps = [
      { label: "تبدأ متابعة رحلتك الجوية", detail: "نتابع رقم رحلتك فور الحجز لمعرفة موعد الهبوط الفعلي حتى لو تغيّر." },
      { label: "يستقبلك السائق في صالة الوصول", detail: "ينتظرك سائقك داخل صالة الوصول بلافتة تحمل اسمك، بعد استلام الأمتعة مباشرة." },
      { label: "مساعدة في حمل الأمتعة", detail: "يساعدك السائق في حمل أمتعتك من صالة الوصول إلى المركبة." },
      { label: "نقل مباشر إلى وجهتك", detail: "تُنقل مباشرة إلى فندقك أو وجهتك بالسعر الثابت المتفق عليه عند الحجز." },
    ];

    const cityArPage = enAirport?.citySlug
      ? arPages.find((p) => p.type === "city" && p.enPath === `/taxi-service/${enAirport.citySlug}`)
      : undefined;

    return (
      <>
        <SchemaScript
          schema={[
            breadcrumbSchema(page.breadcrumbs),
            serviceSchema({
              name: page.h1,
              description: page.intro,
              path: arPath(page),
              serviceType: "Airport Transfer",
              areaServed: "المملكة العربية السعودية",
            }),
            faqSchema(page.faqs),
          ]}
        />
        <AirportHubView
          eyebrow="نقل من المطار"
          h1={page.h1}
          dek={page.intro}
          heroImage={page.heroImage ?? heroFor(page)}
          heroAlt={page.heroAlt ?? page.h1}
          facts={[
            ...(page.distance ? [{ label: "المسافة", value: page.distance }] : []),
            ...(page.duration ? [{ label: "المدة", value: page.duration }] : []),
          ]}
          journeyHeading="كيف يعمل استقبال المطار"
          journeySteps={journeySteps}
          guideSections={page.sections}
          cityCard={
            cityArPage
              ? {
                  heading: `خدمة تاكسي في ${cityArPage.breadcrumbs[cityArPage.breadcrumbs.length - 1]?.name ?? ""}`,
                  text: "تحتاج تنقلًا داخل المدينة أيضًا؟ نغطي الرحلات المحلية والفندقية.",
                  linkLabel: "عرض خدمة التاكسي في المدينة",
                  href: arPath(cityArPage),
                }
              : undefined
          }
          faqsHeading="الأسئلة الشائعة"
          faqs={page.faqs}
          ctaHeading="جاهز لحجز نقلك من المطار؟"
          ctaText="شاركنا رقم رحلتك ووجهتك، ونرد بسعر ثابت قبل السفر."
          ctaLabel="اطلب عرض سعر"
          ctaHref="/ar/اطلب-عرض-سعر"
          crumbs={page.breadcrumbs}
        />
      </>
    );
  }

  // Arabic domestic city-to-city route pages get the same new journey-type
  // shell as their English counterparts (Phase 3 redesign). Reuses each
  // page's own already-real Arabic sections/faqs — content is not
  // re-authored here, only restructured into the new design. Airport/
  // border/international Arabic route pages (out of scope) fall through to
  // the generic renderer below, unchanged.
  if (page.type === "route") {
    const enSlug = page.enPath.replace("/routes/", "");
    const enRoute = getRoute(enSlug);
    if (enRoute && isDomesticCityRoute(enRoute)) {
      const journeyType = classifyRoute(enRoute);
      const parsed = parseArabicFromTo(page.h1);
      const arFrom = parsed?.from ?? enRoute.from;
      const arTo = parsed?.to ?? enRoute.to;
      const distance = page.distance ?? enRoute.distance;
      const duration = page.duration ?? enRoute.duration;

      const reverseEnRoute = routes.find((r) => r.from === enRoute.to && r.to === enRoute.from);
      const reverseArPage = reverseEnRoute
        ? arPages.find((p) => p.type === "route" && p.enPath === `/routes/${reverseEnRoute.slug}`)
        : undefined;

      const blocks = buildArabicRouteBlocks(
        journeyType,
        arFrom,
        arTo,
        distance,
        duration,
        page.sections,
        reverseArPage ? arPath(reverseArPage) : undefined,
        reverseArPage ? parseArabicFromTo(reverseArPage.h1)?.to ?? reverseArPage.h1 : undefined
      );

      // Related routes/cities: only ever link to a real Arabic page — never
      // fall back to an English internal link for these, per the "don't
      // automatically send Arabic users to English pages" rule.
      const candidateEnSlugs = routes
        .filter(
          (r) =>
            r.slug !== enRoute.slug &&
            r.slug !== reverseEnRoute?.slug &&
            (r.from === enRoute.from || r.to === enRoute.to) &&
            isDomesticCityRoute(r)
        )
        .slice(0, 6);
      const relatedRouteItems = candidateEnSlugs
        .map((r) => arPages.find((p) => p.type === "route" && p.enPath === `/routes/${r.slug}`))
        .filter((p): p is NonNullable<typeof p> => p !== undefined)
        .map((p) => {
          const t = parseArabicFromTo(p.h1);
          return { label: t ? `${t.from} إلى ${t.to}` : p.h1, distance: p.distance, duration: p.duration, href: arPath(p) };
        });

      const relatedCityItems = enRoute.relatedCitySlugs
        .map((s) => arPages.find((p) => p.type === "city" && p.enPath === `/taxi-service/${s}`))
        .filter((p): p is NonNullable<typeof p> => p !== undefined)
        .map((p) => ({ label: p.breadcrumbs[p.breadcrumbs.length - 1]?.name ?? p.h1, href: arPath(p) }));

      return (
        <>
          <SchemaScript
            schema={[
              breadcrumbSchema(page.breadcrumbs),
              serviceSchema({
                name: page.h1,
                description: page.intro,
                path: arPath(page),
                serviceType: "Intercity Transfer",
                areaServed: "المملكة العربية السعودية",
              }),
              faqSchema(page.faqs),
            ]}
          />
          <RouteJourneyView
            eyebrow="نقل خاص بين المدن"
            h1={page.h1}
            dek={page.intro}
            heroImage={page.heroImage ?? heroFor(page)}
            heroAlt={page.heroAlt ?? page.h1}
            facts={[
              { label: "المسافة", value: distance },
              { label: "مدة القيادة التقريبية", value: duration },
            ]}
            from={arFrom}
            to={arTo}
            blocks={blocks}
            pickupHeading="نقاط الانطلاق الشائعة"
            pickupPoints={["المطار", "الفندق", "المنزل", "مقر العمل"]}
            dropoffHeading="نقاط الوصول الشائعة"
            dropoffPoints={["الفندق", "المطار", "وسط المدينة", "الوجهة السياحية"]}
            relatedRoutesHeading={relatedRouteItems.length > 0 ? "رحلات ذات صلة" : undefined}
            relatedRoutes={relatedRouteItems}
            relatedCitiesHeading={relatedCityItems.length > 0 ? "خدمة التاكسي في مدن هذه الرحلة" : undefined}
            relatedCities={relatedCityItems}
            faqsHeading="الأسئلة الشائعة"
            faqs={page.faqs}
            ctaHeading="جاهز لحجز هذه الرحلة؟"
            ctaText={`شاركنا وقت الانطلاق وعدد الركاب لرحلة ${arFrom} إلى ${arTo}، ونرد بسعر ثابت.`}
            ctaLabel="اطلب عرض سعر"
            ctaHref="/ar/اطلب-عرض-سعر"
            formHeading={`${arFrom} ← ${arTo}`}
            formSubheading="سعر ثابت لرحلتك الخاصة."
            formSlot={
              <QuoteForm
                serviceType={`رحلة ${arFrom} إلى ${arTo}`}
                route={`${enRoute.from} to ${enRoute.to}`}
                defaultPickup={enRoute.from}
                defaultDropoff={enRoute.to}
              />
            }
            crumbs={page.breadcrumbs}
          />
        </>
      );
    }

    if (enRoute && isAirportToCityRoute(enRoute)) {
      const parsed = parseArabicFromTo(page.h1);
      const arAirport = parsed?.from ?? enRoute.from;
      const arCity = parsed?.to ?? enRoute.to;
      const distance = page.distance ?? enRoute.distance;
      const duration = page.duration ?? enRoute.duration;

      const airportSlug = enRoute.slug.split("-to-")[0];
      const enAirport = getAirport(airportSlug);
      const arAirportPage = enAirport
        ? arPages.find((p) => p.type === "airport" && p.enPath === `/airport-transfer/${enAirport.slug}`)
        : undefined;
      const destinationEnCity = getCity(
        enRoute.relatedCitySlugs.find((s) => getCity(s)?.name.toLowerCase() === enRoute.to.toLowerCase()) ??
          enRoute.relatedCitySlugs[0] ??
          ""
      );
      const arCityPage = destinationEnCity
        ? arPages.find((p) => p.type === "city" && p.enPath === `/taxi-service/${destinationEnCity.slug}`)
        : undefined;

      const cityToAirportEnReverse = routes.find((r) => r.from === enRoute.to && r.to === enRoute.from);
      const arReversePage = cityToAirportEnReverse
        ? arPages.find((p) => p.type === "route" && p.enPath === `/routes/${cityToAirportEnReverse.slug}`)
        : undefined;

      const relatedArAirportRoutes = routes
        .filter((r) => r.slug !== enRoute.slug && isAirportToCityRoute(r) && (r.from === enRoute.from || r.to === enRoute.to))
        .map((r) => arPages.find((p) => p.type === "route" && p.enPath === `/routes/${r.slug}`))
        .filter((p): p is NonNullable<typeof p> => p !== undefined)
        .slice(0, 4)
        .map((p) => {
          const t = parseArabicFromTo(p.h1);
          return { label: t ? `${t.from} إلى ${t.to}` : p.h1, distance: p.distance, duration: p.duration, href: arPath(p) };
        });

      const hubLinks = [
        ...(arAirportPage ? [{ label: `مركز ${arAirportPage.breadcrumbs[arAirportPage.breadcrumbs.length - 1]?.name ?? "نقل المطار"}`, href: arPath(arAirportPage) }] : []),
        ...(arCityPage ? [{ label: `خدمة تاكسي ${arCityPage.breadcrumbs[arCityPage.breadcrumbs.length - 1]?.name ?? ""}`, href: arPath(arCityPage) }] : []),
      ];

      const arrivalSteps = [
        { label: "تبدأ متابعة رحلتك الجوية", detail: "نتابع رقم رحلتك فور الحجز، لنعرف موعد هبوطها الفعلي حتى لو تغيّر." },
        { label: "يستقبلك السائق في صالة الوصول", detail: page.sections[0]?.paragraphs[0] ?? "ينتظرك سائقك داخل صالة الوصول بلافتة تحمل اسمك، بعد استلام الأمتعة مباشرة." },
        ...(page.sections[0]?.paragraphs[1] ? [{ label: "الطريق إلى الوجهة", detail: page.sections[0].paragraphs[1] }] : []),
        { label: "الانطلاق مباشرة إلى وجهتك", detail: `يساعدك السائق بأمتعتك، وتُنقل مباشرة نحو ${arCity} بالسعر الثابت المتفق عليه عند الحجز.` },
      ];

      const bookingSteps = [
        { label: "شارك تفاصيل رحلتك", detail: `رقم الرحلة، تاريخ ووقت الوصول، ووجهتك في ${arCity}.` },
        { label: "استلم سعرًا ثابتًا", detail: "يُؤكَّد السعر قبل السفر — دون عداد ودون رسوم مفاجئة." },
        { label: "استقبل سائقك عند الوصول", detail: "ينتظرك السائق في صالة الوصول، مع متابعة رحلتك في حال أي تأخير." },
        { label: "انطلق مباشرة إلى وجهتك", detail: "نقل مباشر من الباب إلى الباب، مع المساعدة في حمل الأمتعة." },
      ];

      return (
        <>
          <SchemaScript
            schema={[
              breadcrumbSchema(page.breadcrumbs),
              serviceSchema({
                name: page.h1,
                description: page.intro,
                path: arPath(page),
                serviceType: "Airport Transfer",
                areaServed: "المملكة العربية السعودية",
              }),
              faqSchema(page.faqs),
            ]}
          />
          <AirportRouteView
            eyebrow="نقل من المطار"
            h1={page.h1}
            dek={page.intro}
            heroImage={page.heroImage ?? heroFor(page)}
            heroAlt={page.heroAlt ?? page.h1}
            airportLabel={arAirport}
            cityLabel={arCity}
            facts={[
              { label: "المسافة", value: distance },
              { label: "الفئة", value: "نقل من المطار" },
            ]}
            journeyTimeHeading="مدة الرحلة"
            pureDrivingLabel="مدة القيادة الصافية"
            pureDrivingValue={duration}
            totalJourneyNote="هذه مدة القيادة في ظروف طبيعية. قد تطول رحلتك الكاملة بسبب إجراءات الوصول واستلام الأمتعة وحركة السير، فاعتبرها تقديرًا لزمن الطريق نفسه لا وعدًا بموعد وصول محدد."
            arrivalHeading={`الاستقبال في ${arAirport}`}
            arrivalSteps={arrivalSteps}
            roadJourneyHeading="رحلة الطريق"
            roadJourneyParagraphs={page.sections[0]?.paragraphs ?? [page.intro]}
            destinationHeading={`الوصول إلى ${arCity}`}
            destinationParagraphs={page.sections[1]?.paragraphs ?? page.sections.slice(1).flatMap((s) => s.paragraphs)}
            vehicleHeading="المركبة والأمتعة"
            vehicleText="سيارة صالون تكفي مسافرًا منفردًا أو زوجين بأمتعة معتادة، بينما تناسب سيارة SUV أو فان العائلات أو من لديهم أمتعة أكثر — أخبرنا بعدد الركاب والحقائب عند الحجز."
            whoSuitsHeading="من تناسبه هذه الرحلة"
            whoSuits={[
              { title: "المسافرون القادمون جوًا", description: `نقل مباشر من ${arAirport} إلى ${arCity} دون انتظار حافلة مشتركة.` },
              { title: "العائلات والمجموعات", description: "مركبة واحدة لكامل المجموعة والأمتعة، بحجم يُحدَّد عند الحجز." },
            ]}
            bookingHeading="كيف يتم الحجز"
            bookingSteps={bookingSteps}
            checklistHeading="ما تحتاج تجهيزه"
            checklist={["رقم الرحلة وتاريخ الوصول", `عنوان أو اسم الفندق في ${arCity}`, "عدد الركاب والحقائب", "رقم تواصل ليوم السفر"]}
            reverseHeading={arReversePage ? "التخطيط لرحلة العودة" : undefined}
            reverseText={
              arReversePage
                ? `تحتاج العودة إلى المطار لاحقًا؟ نوفر أيضًا نقلًا خاصًا في هذا الاتجاه، بتوقيت يناسب رحلة مغادرتك.`
                : undefined
            }
            reverseLinkLabel={arReversePage ? (parseArabicFromTo(arReversePage.h1)?.from ? `${parseArabicFromTo(arReversePage.h1)!.from} إلى ${parseArabicFromTo(arReversePage.h1)!.to}` : arReversePage.h1) : undefined}
            reverseHref={arReversePage ? arPath(arReversePage) : undefined}
            relatedRoutesHeading={relatedArAirportRoutes.length > 0 ? "رحلات مطار ذات صلة" : undefined}
            relatedRoutes={relatedArAirportRoutes}
            hubLinksHeading={hubLinks.length > 0 ? "قد يهمك أيضًا:" : undefined}
            hubLinks={hubLinks}
            faqsHeading="الأسئلة الشائعة"
            faqs={page.faqs}
            ctaHeading="جاهز لحجز هذا النقل؟"
            ctaText={`شاركنا رقم رحلتك ووجهتك في ${arCity}، ونرد بسعر ثابت قبل السفر.`}
            ctaLabel="اطلب عرض سعر"
            ctaHref="/ar/اطلب-عرض-سعر"
            formHeading={`${arAirport} ← ${arCity}`}
            formSubheading="سعر ثابت لنقل مطارك."
            formSlot={
              <QuoteForm
                serviceType={`نقل ${arAirport} إلى ${arCity}`}
                route={`${enRoute.from} to ${enRoute.to}`}
                defaultPickup={enRoute.from}
                defaultDropoff={enRoute.to}
              />
            }
            crumbs={page.breadcrumbs}
          />
        </>
      );
    }
  }

  if (page.type === "serviceV2" && page.serviceV2) {
    return (
      <>
        <SchemaScript
          schema={[
            breadcrumbSchema(page.breadcrumbs),
            serviceSchema({
              name: page.h1,
              description: page.serviceV2.dek,
              path: page.enPath,
              serviceType: serviceTypeFor(page.type),
              areaServed: "المملكة العربية السعودية",
            }),
            faqSchema(page.serviceV2.faqs),
          ]}
        />
        <ServiceV2View {...page.serviceV2} crumbs={page.breadcrumbs} labels={arServiceV2Labels} />
      </>
    );
  }

  if (page.type === "journey" && page.journey) {
    return (
      <>
        <SchemaScript
          schema={[breadcrumbSchema(page.breadcrumbs), faqSchema(page.journey.faqs)]}
        />
        <JourneyPageView
          {...page.journey}
          h1={page.h1}
          from={page.journeyFrom ?? ""}
          to={page.journeyTo ?? ""}
          crumbs={page.breadcrumbs}
          labels={arJourneyLabels}
        />
      </>
    );
  }

  const faqs = page.faqs.slice(0, 20);
  const isBookable = ["service", "airport", "city", "route", "hotel-transfer", "attraction", "city-hub"].includes(
    page.type
  );

  // city-hub: mirrors app/(main)/cities/[city]/page.tsx's structure — airport
  // facts computed from data/hotels.ts/data/airports.ts, hotel table read
  // directly from data/hotels.ts (never re-authored in Arabic), prose facts
  // from cityAirportFactsAr (a translation of cityAirportFacts, not new text).
  let hubCity: ReturnType<typeof getCity> | undefined;
  let hubAirport: ReturnType<typeof getAirport> | undefined;
  let hubHotels: ReturnType<typeof hotelsForCity> = [];
  let hubFacts: (typeof cityAirportFactsAr)[string] | undefined;
  let hubDistanceRange: { min: number; max: number } | null = null;
  let hubDurationRange: { min: number; max: number } | null = null;
  if (page.type === "city-hub") {
    const citySlug = citySlugFor(page);
    hubCity = getCity(citySlug);
    hubAirport = hubCity?.nearestAirportSlug ? getAirport(hubCity.nearestAirportSlug) : undefined;
    hubHotels = hotelsForCity(citySlug);
    hubFacts = cityAirportFactsAr[citySlug];
    const distances = hubHotels.map((h) => h.distanceKm);
    const durations = hubHotels.map((h) => h.durationMin);
    hubDistanceRange = distances.length > 0 ? { min: Math.min(...distances), max: Math.max(...distances) } : null;
    hubDurationRange = durations.length > 0 ? { min: Math.min(...durations), max: Math.max(...durations) } : null;
  }

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema(page.breadcrumbs),
          serviceSchema({
            name: page.h1,
            description: page.intro,
            path: arPath(page),
            serviceType: serviceTypeFor(page.type),
            areaServed: "المملكة العربية السعودية",
          }),
          faqSchema(faqs),
        ]}
      />

      <PageHeader
        title={page.h1}
        subtitle={page.intro}
        crumbs={page.breadcrumbs}
        backgroundImage={page.heroImage ?? heroFor(page)}
        backgroundAlt={page.heroAlt ?? page.h1}
        ctaLabel={dict.cta.getAQuote}
        contactLabel={dict.cta.contactUs}
        contactHref="/ar/اتصل-بنا"
        showCtas={!isBookable && page.type !== "distance"}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-3">
            {(page.distance || page.duration) && (
              <div className="flex flex-wrap gap-3">
                {page.duration && (
                  <span className="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm font-medium text-navy">
                    <Clock className="size-4 text-gold" /> {page.duration}
                  </span>
                )}
                {page.distance && (
                  <span className="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm font-medium text-navy">
                    <MapPin className="size-4 text-gold" /> {page.distance}
                  </span>
                )}
              </div>
            )}

            {page.type === "distance" ? (
              <div className="mt-6">
                {page.quickAnswer && (
                  <div className="rounded-xl border border-gold/30 bg-gold/5 p-6">
                    <h2 className="text-sm font-bold uppercase tracking-wide text-navy">الإجابة السريعة</h2>
                    <div className="mt-3 grid gap-4 sm:grid-cols-2">
                      <div className="flex items-start gap-2">
                        <MapPin className="mt-0.5 size-5 shrink-0 text-gold" />
                        <div>
                          <p className="text-sm font-semibold text-navy">مسافة القيادة</p>
                          <p className="text-sm text-muted-foreground">{page.quickAnswer.drivingDistance}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="mt-0.5 size-5 shrink-0 text-gold" />
                        <div>
                          <p className="text-sm font-semibold text-navy">مدة القيادة</p>
                          <p className="text-sm text-muted-foreground">{page.quickAnswer.drivingTime}</p>
                        </div>
                      </div>
                      {page.quickAnswer.straightLineDistance && (
                        <div className="flex items-start gap-2 sm:col-span-2">
                          <MapPin className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-semibold text-navy">المسافة المباشرة (خط مستقيم)</p>
                            <p className="text-sm text-muted-foreground">{page.quickAnswer.straightLineDistance}</p>
                          </div>
                        </div>
                      )}
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">{page.quickAnswer.note}</p>
                  </div>
                )}

                <div className="mt-8 space-y-8">
                  {page.sections.map((s) => (
                    <div key={s.heading}>
                      <h2 className="text-xl font-bold text-navy sm:text-2xl">{s.heading}</h2>
                      <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                        {s.paragraphs.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {page.transportOptions && page.transportOptions.length > 0 && (
                  <div className="mt-10">
                    <h2 className="text-xl font-bold text-navy sm:text-2xl">طرق السفر</h2>
                    <div className="mt-4 space-y-4">
                      {page.transportOptions.map((t) => (
                        <div key={t.mode} className="rounded-xl border border-border bg-white p-5 shadow-sm">
                          <h3 className="text-lg font-semibold text-navy">{t.mode}</h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            <span className="font-medium text-navy">المدة: </span>
                            {t.duration}
                          </p>
                          <p className="mt-2 text-sm text-muted-foreground">
                            <span className="font-medium text-navy">الأنسب لـ: </span>
                            {t.suitability}
                          </p>
                          <div className="mt-3 grid gap-3 sm:grid-cols-2">
                            <p className="text-sm text-muted-foreground">
                              <span className="font-medium text-navy">المزايا: </span>
                              {t.advantages}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              <span className="font-medium text-navy">القيود: </span>
                              {t.limitations}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {page.ctaRoutePath && page.ctaLabel && (
                  <div className="mt-10 rounded-xl border border-gold/30 bg-gold/5 p-6">
                    <p className="text-sm text-navy">
                      هل تخطط لهذه الرحلة بسيارة خاصة؟ اطّلع على{" "}
                      <Link
                        href={page.ctaRoutePath}
                        className="font-semibold text-navy underline underline-offset-2 hover:text-gold"
                      >
                        {page.ctaLabel}
                      </Link>{" "}
                      للحصول على سعر ثابت وخيارات المركبات والحجز.
                    </p>
                  </div>
                )}
              </div>
            ) : page.type === "city-hub" && hubCity && hubAirport ? (
              <div className="mt-6 space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-navy sm:text-2xl">
                    أساسيات النقل من مطار {hubCity.name}
                  </h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {hubDistanceRange && hubDurationRange && (
                      <div className="rounded-xl border border-border bg-muted/40 p-5">
                        <h3 className="font-semibold text-navy">المسافة من {hubAirport.name}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          فنادقنا في {hubCity.name} ({hubHotels.length}) تبعد بين {hubDistanceRange.min}
                          {hubDistanceRange.min === hubDistanceRange.max ? "" : `–${hubDistanceRange.max}`} كم عن{" "}
                          {hubAirport.name} ({hubAirport.code}) — نحو {hubDurationRange.min}
                          {hubDurationRange.min === hubDurationRange.max ? "" : `–${hubDurationRange.max}`} دقيقة
                          بالسيارة، حسب حركة السير.
                        </p>
                      </div>
                    )}
                    <div className="rounded-xl border border-border bg-muted/40 p-5">
                      <h3 className="font-semibold text-navy">صالات {hubAirport.name}</h3>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        {hubAirport.terminals.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    </div>
                    {hubFacts?.dropoffConstraint && (
                      <div className="rounded-xl border border-border bg-muted/40 p-5">
                        <h3 className="font-semibold text-navy">نقطة النزول</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{hubFacts.dropoffConstraint}</p>
                      </div>
                    )}
                    {hubFacts?.miqat && (
                      <div className="rounded-xl border border-border bg-muted/40 p-5">
                        <h3 className="font-semibold text-navy">الميقات</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{hubFacts.miqat}</p>
                      </div>
                    )}
                    {hubFacts?.seasonal && (
                      <div className="rounded-xl border border-border bg-muted/40 p-5 sm:col-span-2">
                        <h3 className="font-semibold text-navy">التوقيت الموسمي</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{hubFacts.seasonal}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div id="hotels" className="scroll-mt-20">
                  <h2 className="text-xl font-bold text-navy sm:text-2xl">
                    كل فنادق {hubCity.name} التي ننقل إليها
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {hubHotels.length} فندقًا، بالاتجاهين، سعر ثابت متفق عليه قبل السفر.
                  </p>
                  <div className="mt-4 overflow-x-auto rounded-2xl border border-border bg-white">
                    <table className="w-full min-w-[640px] text-right text-sm">
                      <thead>
                        <tr className="border-b border-border bg-muted/60 text-xs font-semibold uppercase tracking-wide text-navy">
                          <th className="px-4 py-3">الفندق</th>
                          <th className="px-4 py-3">الحي</th>
                          <th className="px-4 py-3">النجوم</th>
                          <th className="px-4 py-3">المسافة</th>
                          <th className="px-4 py-3">المدة</th>
                          <th className="px-4 py-3">عرض السعر</th>
                        </tr>
                      </thead>
                      <tbody>
                        {hubHotels.map((h) => (
                          <tr key={h.slug} className="border-b border-border last:border-0">
                            <td className="px-4 py-3 font-medium text-navy">{h.name}</td>
                            <td className="px-4 py-3 text-muted-foreground">{h.area}</td>
                            <td className="px-4 py-3 text-muted-foreground">{h.stars}★</td>
                            <td className="px-4 py-3 text-muted-foreground">{h.distanceKm} كم</td>
                            <td className="px-4 py-3 text-muted-foreground">{h.durationMin} دقيقة</td>
                            <td className="px-4 py-3">
                              <a
                                href={`/get-quote?pickup=${encodeURIComponent(hubAirport.name)}&dropoff=${encodeURIComponent(h.name)}`}
                                className="font-semibold text-navy underline decoration-dotted hover:text-gold"
                              >
                                {dict.cta.getAQuote}
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ) : page.contentHtml ? (
              <div className="mt-6">
                <BlogContent html={page.contentHtml} />
              </div>
            ) : (
              <div className="mt-6 space-y-8">
                {page.sections.map((s) => (
                  <div key={s.heading}>
                    <h2 className="text-xl font-bold text-navy sm:text-2xl">{s.heading}</h2>
                    <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                      {s.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {isBookable && (
            <div className="lg:col-span-2">
              <div className="sticky top-20 rounded-2xl border border-border bg-muted/40 p-6 shadow-sm">
                <h2 className="text-lg font-bold text-navy">{dict.cta.getAQuote}</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  سعر ثابت لرحلتك، نرد عليك عبر واتساب.
                </p>
                <div className="mt-4">
                  <QuoteForm serviceType={page.h1} />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {page.type !== "distance" && (
        <VehicleOptions
          heading="اختر مركبتك"
          subheading="من السيارات الاقتصادية إلى الحافلات الصغيرة الجماعية — اختر ما يناسب مجموعتك وأمتعتك."
          background="muted"
        />
      )}
      {page.type !== "distance" && (
        <HowItWorks
          heading={dict.howItWorks.heading}
          subheading={dict.howItWorks.subheading}
          steps={dict.howItWorks.steps}
          stepLabel={(n) => dict.howItWorks.step.replace("{n}", String(n))}
          background="white"
        />
      )}
      <FAQSection faqs={faqs} heading={dict.faq.heading} background="muted" />

      {page.type === "distance" && page.relatedLinks && page.relatedLinks.length > 0 && (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-bold text-navy">صفحات ذات صلة</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {page.relatedLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-medium text-navy transition-colors hover:border-gold"
                >
                  {l.label}
                  <ArrowRight className="size-3.5 text-gold rtl:rotate-180" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.type === "distance" && page.sources && page.sources.length > 0 && (
        <section className="bg-muted py-10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-bold uppercase tracking-wide text-navy">المصادر</h2>
            <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground">
              {page.sources.map((s) => (
                <li key={s.url} className="flex items-start gap-1.5">
                  <ExternalLink className="mt-0.5 size-3 shrink-0" />
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="underline decoration-dotted hover:text-navy"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-muted-foreground">
              المسافات وأوقات السفر تقريبية وقد تختلف حسب نقطة الانطلاق الدقيقة، والطريق المُتّبع، وحركة السير أو
              الظروف الموسمية.
            </p>
          </div>
        </section>
      )}

      {page.type !== "distance" && (
        <CTASection
          title="هل أنت مستعد لحجز رحلتك؟"
          subtitle="أرسل تفاصيل رحلتك الآن واحصل على عرض سعر ثابت وسريع عبر واتساب."
          whatsappLabel={dict.cta.getAQuote}
          contactLabel={dict.cta.contactUs}
          contactHref="/ar/اتصل-بنا"
        />
      )}
    </>
  );
}
