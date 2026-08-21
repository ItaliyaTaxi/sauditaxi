# Template source files (full) — companion to DUPLICATION_AUDIT.md

Read-only reference material for Section 2. Each file is reproduced exactly as it exists in the working tree at the time of this audit (HEAD `54ed92b`). Nothing here has been modified.

---

## 1. `app/(main)/routes/[slug]/page.tsx` (339 lines)

Template for all 194 `/routes/{slug}` route pages. `generateStaticParams()` loops over the merged `routes` array (`data/routes.ts` + `data/dammam-routes.ts` + `data/makkah-routes.ts`).

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, CircleCheck } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { VehicleOptions } from "@/components/sections/VehicleOptions";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { LatestGuides } from "@/components/sections/LatestGuides";
import { routeHero } from "@/lib/hero";
import { RouteGrid } from "@/components/sections/RouteGrid";
import { CityGrid } from "@/components/sections/CityGrid";
import { QuoteForm } from "@/components/QuoteForm";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { routes, getRoute } from "@/data/routes";
import type { Faq } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";
import { getArPathForEnPath } from "@/data/translations/ar";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";

type Params = { slug: string };

const pickupPoints = [
  "Airport",
  "Hotel",
  "Home address",
  "Business location",
  "Railway or bus station",
  "Religious site",
];
const dropoffPoints = [
  "Hotel",
  "Airport",
  "City center",
  "Religious destination",
  "Tourist location",
  "Border point",
];

export function generateStaticParams() {
  return routes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = getRoute(slug);
  if (!route) return {};
  const path = `/routes/${route.slug}`;
  const arPath = getArPathForEnPath(path);
  return buildMetadata({
    title:
      route.metaTitle ??
      `${route.from} to ${route.to} Taxi | Private Transfer`,
    description:
      route.metaDescription ??
      `Book a private ${route.from} to ${route.to} taxi (${route.distance}, approx. ${route.duration}). Fixed price, professional driver, easy WhatsApp booking.`,
    path,
    ...(arPath ? { alternateLanguages: { en: path, ar: arPath } } : {}),
  });
}

function routeFaqs(from: string, to: string): Faq[] {
  return [
    {
      question: `How can I book a taxi from ${from} to ${to}?`,
      answer: `You can book by sending your trip details through WhatsApp or our quote form. We reply with a fixed price for the ${from} to ${to} transfer.`,
    },
    {
      question: `Is the ${from} to ${to} transfer private?`,
      answer: `Yes, the transfer is fully private for your booking — no shared rides and no waiting for other passengers.`,
    },
    {
      question: `Can I choose the vehicle type for ${from} to ${to}?`,
      answer: `Yes. You can request economy, comfort, business, SUV, van, or minibus depending on your group size and availability.`,
    },
  ];
}

export default async function RoutePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const route = getRoute(slug);
  if (!route) notFound();

  const faqs = (route.faqs ?? routeFaqs(route.from, route.to)).slice(0, 15);
  const path = `/routes/${route.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Routes", path: "/intercity-transfers" },
    { name: `${route.from} to ${route.to}`, path },
  ];

  // 1. Find exact reverse route if it exists
  const reverseRoute = routes.find(
    (r) =>
      r.slug !== route.slug &&
      r.from.toLowerCase() === route.to.toLowerCase() &&
      r.to.toLowerCase() === route.from.toLowerCase()
  );

  // 2. Smart related routes prioritization:
  //    - Reverse route first
  //    - Shared origin routes
  //    - Shared destination routes
  //    - Regionally / contextually connected routes
  const candidateRoutes: string[] = [];
  if (reverseRoute) candidateRoutes.push(reverseRoute.slug);

  routes
    .filter(
      (r) =>
        r.slug !== route.slug &&
        r.slug !== reverseRoute?.slug &&
        r.from.toLowerCase() === route.from.toLowerCase()
    )
    .forEach((r) => candidateRoutes.push(r.slug));

  routes
    .filter(
      (r) =>
        r.slug !== route.slug &&
        r.slug !== reverseRoute?.slug &&
        r.to.toLowerCase() === route.to.toLowerCase() &&
        !candidateRoutes.includes(r.slug)
    )
    .forEach((r) => candidateRoutes.push(r.slug));

  routes
    .filter(
      (r) =>
        r.slug !== route.slug &&
        !candidateRoutes.includes(r.slug) &&
        (r.category === route.category ||
          r.relatedCitySlugs.some((c) => route.relatedCitySlugs.includes(c)))
    )
    .forEach((r) => candidateRoutes.push(r.slug));

  const relatedRoutes = candidateRoutes.slice(0, 6);

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: `${route.from} to ${route.to} Taxi Transfer`,
            description: route.intro,
            path,
            serviceType: "Intercity Transfer",
            dateModified: route.lastUpdated,
          }),
          faqSchema(faqs),
        ]}
      />

      <PageHeader
        title={`${route.from} to ${route.to} Taxi Service`}
        subtitle={route.intro}
        crumbs={crumbs}
        backgroundImage={route.heroImage ?? routeHero(route.from, route.to).src}
        backgroundAlt={route.heroAlt ?? routeHero(route.from, route.to).alt}
        whatsappMessage={`Hello! I'd like a quote for a ${route.from} to ${route.to} taxi.`}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-gold/30 bg-gold/5 p-5">
              <h2 className="text-sm font-bold uppercase tracking-wide text-navy">
                Key takeaways
              </h2>
              <ul className="mt-3 space-y-1.5 text-sm text-navy">
                <li>
                  • {route.from} to {route.to}: {route.distance}, approximately {route.duration} by private transfer.
                </li>
                <li>• Fixed price agreed before you travel — no meter, no surge, no toll surprises.</li>
                <li>• Door-to-door pickup and drop-off, available 24/7.</li>
                {route.lastUpdated && <li>• Page reviewed {route.lastUpdated}.</li>}
              </ul>
            </div>

            {reverseRoute && (
              <div className="mt-6 rounded-xl border border-border bg-muted/40 p-5">
                <h3 className="text-sm font-bold uppercase tracking-wide text-navy">
                  Return Journey Available
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Planning your return trip? We also provide private transfers in the opposite direction from{" "}
                  <Link
                    href={`/routes/${reverseRoute.slug}`}
                    className="font-semibold text-navy underline underline-offset-2 hover:text-gold"
                  >
                    {reverseRoute.from} to {reverseRoute.to}
                  </Link>{" "}
                  with fixed fares and door-to-door pickup.
                </p>
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm font-medium text-navy">
                <Clock className="size-4 text-gold" /> Approx. {route.duration}
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm font-medium text-navy">
                <MapPin className="size-4 text-gold" /> {route.distance}
              </span>
            </div>

            <h2 className="mt-8 text-2xl font-bold text-navy">
              Private transfer from {route.from} to {route.to}
            </h2>
            <p className="mt-3 text-muted-foreground">{route.about}</p>
            <p className="mt-3 text-muted-foreground">
              Our private transfer service is suitable for tourists, families,
              business travellers, Umrah passengers, and groups travelling with
              luggage.
            </p>

            <h2 className="mt-10 text-xl font-bold text-navy">
              Good to know about this route
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {route.notes.map((n) => (
                <li key={n} className="flex items-start gap-2 text-sm text-navy">
                  <CircleCheck className="mt-0.5 size-4 shrink-0 text-gold" />
                  {n}
                </li>
              ))}
            </ul>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-muted/40 p-5">
                <h3 className="font-semibold text-navy">Pickup locations</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {pickupPoints.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <ArrowRight className="size-3.5 text-gold" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-muted/40 p-5">
                <h3 className="font-semibold text-navy">Drop-off locations</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {dropoffPoints.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <ArrowRight className="size-3.5 text-gold" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h2 className="mt-10 text-xl font-bold text-navy">
              Booking details required
            </h2>
            <p className="mt-3 text-muted-foreground">
              To confirm your quote, please provide your pickup and drop-off
              locations, date and time, passenger and luggage count, your flight
              number if it&apos;s an airport pickup, and a contact number.
            </p>

            {/* Rich long-form sections (international / cross-border routes) */}
            {route.sections && route.sections.length > 0 && (
              <div className="mt-10 space-y-8 [&_a]:font-medium [&_a]:text-gold [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-navy">
                {route.sections.map((s) => (
                  <div key={s.heading}>
                    <h2 className="text-xl font-bold text-navy sm:text-2xl">{s.heading}</h2>
                    <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                      {s.paragraphs.map((p, i) => (
                        <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-20 rounded-2xl border border-border bg-muted/40 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-navy">
                {route.from} → {route.to} Quote
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Fixed price for your private transfer on WhatsApp.
              </p>
              <div className="mt-4">
                <QuoteForm
                  serviceType={`${route.from} to ${route.to} transfer`}
                  route={`${route.from} to ${route.to}`}
                  defaultPickup={route.from}
                  defaultDropoff={route.to}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <VehicleOptions background="muted" />
      <HowItWorks background="white" />

      {relatedRoutes.length > 0 && (
        <RouteGrid
          background="muted"
          heading="Related Routes"
          subheading="Other popular private transfers you may need."
          only={relatedRoutes}
        />
      )}

      {route.relatedCitySlugs.length > 0 && (
        <CityGrid
          background="white"
          heading="Taxi Service in Cities on This Route"
          subheading="Local transfers in the cities connected by this journey."
          only={route.relatedCitySlugs}
        />
      )}

      <FAQSection faqs={faqs} background="muted" />
      <LatestGuides background="muted" />
      <CTASection
        title={`Book Your ${route.from} to ${route.to} Taxi`}
        whatsappMessage={`Hello! I'd like to book a ${route.from} to ${route.to} taxi.`}
      />
    </>
  );
}
```

---

## 2. `app/(main)/blog/[slug]/page.tsx` (290 lines)

Single template for all 97 blog posts. Data source is the Supabase `blogs` table (not a git-tracked file) — `content` is a pre-authored HTML blob per row (`BlogContent` renders it via `dangerouslySetInnerHTML`, not shown here since it's a thin wrapper). Everything else in this file (breadcrumbs, hero chrome, TOC extraction, FAQ accordion, tags, `AuthorBox`, share buttons, prev/next, related-posts grid, `BlogSidebar`, `CTASection`) is shared UI driven by the row's fields.

```tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, CalendarDays, User, Tag, ListTree, ArrowLeft, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogContent } from "@/components/blog/BlogContent";
import { BlogCard } from "@/components/blog/BlogCard";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { AuthorBox } from "@/components/blog/AuthorBox";
import { BlogInlineCta } from "@/components/blog/BlogInlineCta";
import { CTASection } from "@/components/sections/CTASection";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { buildMetadata } from "@/lib/seo";
import { getArPathForEnPath } from "@/data/translations/ar";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { formatBlogDate } from "@/lib/format";
import {
  getPublishedBlogBySlug,
  getRelatedBlogs,
  getAdjacentBlogs,
  extractToc,
} from "@/lib/blogs";

export const revalidate = 300;

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getPublishedBlogBySlug(slug);
  if (!blog) {
    return buildMetadata({
      title: "Article not found",
      description: "This article could not be found.",
      path: `/blog/${slug}`,
      index: false,
    });
  }

  const title = blog.metaTitle || blog.title;
  const description = blog.metaDescription || blog.excerpt || siteConfig.description;
  const image = blog.featuredImage || siteConfig.ogImage;

  const blogPath = `/blog/${blog.slug}`;
  const blogArPath = getArPathForEnPath(blogPath);
  const meta = buildMetadata({
    title,
    description,
    path: blogPath,
    image,
    ...(blogArPath ? { alternateLanguages: { en: blogPath, ar: blogArPath } } : {}),
  });

  meta.openGraph = {
    ...meta.openGraph,
    type: "article",
    publishedTime: blog.publishedAt ?? undefined,
    modifiedTime: blog.updatedAt,
    authors: [blog.author],
    section: blog.category,
    tags: blog.tags,
  };
  if (blog.focusKeyword || blog.secondaryKeywords.length) {
    meta.keywords = [blog.focusKeyword, ...blog.secondaryKeywords].filter(Boolean) as string[];
  }
  return meta;
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const blog = await getPublishedBlogBySlug(slug);
  if (!blog) notFound();

  const related = await getRelatedBlogs(blog, 3);
  const { prev, next } = await getAdjacentBlogs(blog.slug);
  const toc = extractToc(blog.content);
  const url = absoluteUrl(`/blog/${blog.slug}`);

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: blog.title, path: `/blog/${blog.slug}` },
  ];

  const schemas = [
    breadcrumbSchema(crumbs),
    articleSchema({
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt || siteConfig.description,
      path: `/blog/${blog.slug}`,
      image: blog.featuredImage || siteConfig.ogImage,
      author: blog.author,
      datePublished: blog.publishedAt,
      dateModified: blog.updatedAt,
      keywords: [blog.focusKeyword, ...blog.secondaryKeywords].filter(Boolean) as string[],
      section: blog.category,
    }),
    ...(blog.schemaJson ? [blog.schemaJson] : []),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />

      {/* Hero */}
      <section className="border-b border-border bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-24 sm:px-6 lg:px-8 lg:pb-16 lg:pt-36">
          <Breadcrumbs items={crumbs} onDark />
          <Link
            href={`/blog?category=${encodeURIComponent(blog.category)}`}
            className="mt-6 inline-block rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy"
          >
            {blog.category}
          </Link>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">{blog.title}</h1>
          {blog.excerpt && <p className="mt-4 text-lg text-white/85">{blog.excerpt}</p>}
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/70">
            <span className="inline-flex items-center gap-1.5">
              <User className="size-4" /> {blog.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-4" /> {formatBlogDate(blog.publishedAt ?? blog.createdAt)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-4" /> {blog.readingTime} min read
            </span>
            {blog.updatedAt.slice(0, 10) !== (blog.publishedAt ?? blog.createdAt).slice(0, 10) && (
              <span className="inline-flex items-center gap-1.5 text-gold">
                <CalendarDays className="size-4" /> Updated {formatBlogDate(blog.updatedAt)}
              </span>
            )}
          </div>
        </div>
      </section>

      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
            {/* Left: article */}
            <article className="min-w-0">
              {blog.featuredImage && (
                <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={blog.featuredImage}
                    alt={blog.featuredImageAlt ?? blog.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 720px"
                    className="object-cover"
                    unoptimized={blog.featuredImage.endsWith(".svg")}
                  />
                </div>
              )}

              {toc.length > 1 && (
                <nav className="mb-8 rounded-2xl border border-border bg-muted/40 p-5" aria-label="Table of contents">
                  <p className="flex items-center gap-2 text-sm font-bold text-navy">
                    <ListTree className="size-4 text-gold" /> In this guide
                  </p>
                  <ol className="mt-3 space-y-1.5 text-sm">
                    {toc.map((h) => (
                      <li key={h.id}>
                        <a href={`#${h.id}`} className="text-navy/80 hover:text-gold">
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              <BlogInlineCta slug={blog.slug} />
              <BlogContent html={blog.content} />
              <BlogInlineCta slug={blog.slug} />

              {blog.faqs.length > 0 && (
                <section className="mt-14" aria-labelledby="faq-heading">
                  <h2 id="faq-heading" className="text-2xl font-bold text-navy">
                    Frequently Asked Questions
                  </h2>
                  <div className="mt-6 divide-y divide-border rounded-2xl border border-border">
                    {blog.faqs.map((f, i) => (
                      <details key={i} className="group p-5" {...(i === 0 ? { open: true } : {})}>
                        <summary className="cursor-pointer list-none font-semibold text-navy marker:hidden">
                          {f.question}
                        </summary>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.answer}</p>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              {blog.tags.length > 0 && (
                <div className="mt-10 flex flex-wrap items-center gap-2">
                  <Tag className="size-4 text-muted-foreground" />
                  {blog.tags.map((t) => (
                    <span key={t} className="rounded-full bg-muted px-3 py-1 text-xs text-navy">
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <AuthorBox author={blog.author} />

              <div className="mt-8 border-t border-border pt-6">
                <ShareButtons url={url} title={blog.title} />
              </div>

              {(prev || next) && (
                <nav className="mt-8 grid gap-4 sm:grid-cols-2" aria-label="More articles">
                  {prev ? (
                    <Link
                      href={`/blog/${prev.slug}`}
                      className="group rounded-xl border border-border p-4 transition-colors hover:border-gold"
                    >
                      <span className="flex items-center gap-1 text-xs font-semibold text-muted-foreground">
                        <ArrowLeft className="size-3.5" /> Previous Article
                      </span>
                      <span className="mt-1 block font-semibold text-navy group-hover:text-gold">
                        {prev.title}
                      </span>
                    </Link>
                  ) : (
                    <span className="hidden sm:block" />
                  )}
                  {next ? (
                    <Link
                      href={`/blog/${next.slug}`}
                      className="group rounded-xl border border-border p-4 text-right transition-colors hover:border-gold sm:col-start-2"
                    >
                      <span className="flex items-center justify-end gap-1 text-xs font-semibold text-muted-foreground">
                        Next Article <ArrowRight className="size-3.5" />
                      </span>
                      <span className="mt-1 block font-semibold text-navy group-hover:text-gold">
                        {next.title}
                      </span>
                    </Link>
                  ) : null}
                </nav>
              )}

              {related.length > 0 && (
                <section className="mt-12">
                  <h2 className="text-2xl font-bold text-navy">Related guides</h2>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    {related.map((b) => (
                      <BlogCard key={b.id} blog={b} />
                    ))}
                  </div>
                </section>
              )}
            </article>

            {/* Right: sticky sidebar (desktop only) — excluded from Section 3/4/5/7 measurement as a "sidebar" per the audit brief */}
            <aside className="hidden lg:block">
              <div className="lg:sticky lg:top-24">
                <BlogSidebar currentSlug={blog.slug} />
              </div>
            </aside>
          </div>
        </div>
      </div>

      <CTASection />
    </>
  );
}
```

---

## 3. `app/(main)/cities/[city]/page.tsx` (291 lines)

Template for the 5 city-hub pages. `generateStaticParams()` loops over `citiesWithHotels()` (cities in `data/cities.ts` that have ≥1 row in `data/hotels.ts`).

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Plane, ArrowRight, CircleCheck, Building2, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { VehicleOptions } from "@/components/sections/VehicleOptions";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { LatestGuides } from "@/components/sections/LatestGuides";
import { RouteGrid } from "@/components/sections/RouteGrid";
import { HotelTransferGrid } from "@/components/sections/HotelTransferGrid";
import { HotelTransferExplorer } from "@/components/sections/HotelTransferExplorer";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { getCity } from "@/data/cities";
import { getAirport } from "@/data/airports";
import { routes } from "@/data/routes";
import { hotelsForCity } from "@/data/hotels";
import { cityHero } from "@/lib/hero";
import type { Faq } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";
import { getArPathForEnPath } from "@/data/translations/ar";
import {
  breadcrumbSchema,
  serviceSchema,
  taxiServiceSchema,
  faqSchema,
} from "@/lib/schema";
import {
  citiesWithHotels,
  transfersForCity,
  airportTransferName,
} from "@/lib/hotel-transfers";

type Params = { city: string };

export const dynamicParams = false;

export function generateStaticParams() {
  return citiesWithHotels().map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  const airport = city.nearestAirportSlug ? getAirport(city.nearestAirportSlug) : undefined;
  const aName = airport ? airportTransferName(airport) : `${city.name} Airport`;
  const path = `/cities/${city.slug}`;
  const arPath = getArPathForEnPath(path);
  return buildMetadata({
    title: `${city.name} Airport Transfers | Hotel Taxi from ${aName}`,
    description: `Private ${city.name} airport transfers between ${aName} and every major 3, 4 & 5-star hotel. Fixed prices, meet & greet, flight tracking, and 24/7 booking.`,
    path,
    ...(arPath ? { alternateLanguages: { en: path, ar: arPath } } : {}),
  });
}

function fallbackHubFaqs(cityName: string, aName: string): Faq[] {
  return [
    {
      question: `How do I book an airport transfer in ${cityName}?`,
      answer: `Choose your hotel route below, or send your flight number, arrival date, and hotel on WhatsApp or the quote form. We reply with a fixed price for your private ${aName} transfer.`,
    },
    {
      question: `Do you cover every hotel in ${cityName}?`,
      answer: `We operate transfers to all major 3, 4, and 5-star hotels in ${cityName}. If your hotel isn't listed, send us the address and we'll arrange a private transfer to the door.`,
    },
    {
      question: `Is the transfer from ${aName} private?`,
      answer: `Yes. Every ${cityName} airport transfer is a private, direct ride for your booking only — no shared vehicles and no waiting for other passengers.`,
    },
    {
      question: `What if my flight is delayed?`,
      answer: `We track your flight and adjust the pickup time automatically, with free waiting time included, so a delay never costs you the ride.`,
    },
    {
      question: `Can I book a return transfer back to ${aName}?`,
      answer: `Yes. Every hotel has a matching return route back to ${aName}. Open any route page and follow the link to its reverse transfer.`,
    },
  ];
}

export default async function CityHubPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const airport = city.nearestAirportSlug ? getAirport(city.nearestAirportSlug) : undefined;
  if (!airport) notFound();

  const aName = airportTransferName(airport);
  const transfers = transfersForCity(city.slug);
  const hotels = hotelsForCity(city.slug);

  const path = `/cities/${city.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Airport Transfers", path: "/airport-transfers" },
    { name: `${city.name} Hotel Transfers`, path },
  ];

  const featured = transfers
    .filter((t) => t.direction === "airport-to-hotel" && t.hotel.stars === 5)
    .slice(0, 6);

  const recentSlugs = hotels.slice(-3).map((h) => h.slug);
  const recent = transfers.filter(
    (t) => t.direction === "airport-to-hotel" && recentSlugs.includes(t.hotel.slug)
  );

  const cityRoutes = routes
    .filter((r) => r.relatedCitySlugs.includes(city.slug))
    .map((r) => r.slug);

  const faqs = (city.hubFaqs ?? fallbackHubFaqs(city.name, aName)).slice(0, 12);

  const hotelCount = hotels.length;

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema(crumbs),
          taxiServiceSchema(),
          serviceSchema({
            name: `${city.name} Airport Hotel Transfers`,
            description: `Private airport transfers between ${airport.name} (${airport.code}) and hotels across ${city.name}.`,
            path,
            serviceType: "Airport Transfer",
            areaServed: `${city.name}, Saudi Arabia`,
            dateModified: city.lastUpdated,
          }),
          faqSchema(faqs),
        ]}
      />

      <PageHeader
        title={`${city.name} Airport Transfers`}
        subtitle={`Private transfers between ${airport.name} (${airport.code}) and every major hotel in ${city.name} — fixed prices, meet & greet, and 24/7 booking.`}
        crumbs={crumbs}
        backgroundImage={city.heroImage ?? cityHero(city.slug, city.name).src}
        backgroundAlt={city.heroAlt ?? cityHero(city.slug, city.name).alt}
        whatsappMessage={`Hello! I'd like an airport transfer quote in ${city.name}, Saudi Arabia.`}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-xl border border-gold/30 bg-gold/5 p-5 text-left">
            <h2 className="text-sm font-bold uppercase tracking-wide text-navy">
              Key takeaways
            </h2>
            <ul className="mt-3 space-y-1.5 text-sm text-navy">
              <li>
                • Private, fixed-price transfers between {airport.name} ({airport.code})
                and {hotelCount} hotels across {city.name}, in both directions.
              </li>
              <li>• Meet-and-greet pickup with real-time flight tracking on arrival.</li>
              <li>• Return transfers back to the airport are available for every hotel route.</li>
              {city.lastUpdated && <li>• Page reviewed {city.lastUpdated}.</li>}
            </ul>
          </div>

          <div className="mx-auto mt-8 max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Private hotel transfers from {airport.name}
            </h2>
            <p className="mt-4 text-muted-foreground">
              We connect {airport.name} ({airport.code}) with {hotelCount} of the
              most-requested hotels in {city.name}, in both directions. Every ride
              is private and door-to-door, with a professional chauffeur, a fixed
              price agreed before you travel, and meet-and-greet pickup for arrivals.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-2">
            {[
              "Meet & greet in the arrivals hall",
              "Real-time flight monitoring",
              "Free waiting time on airport pickups",
              "Fixed prices — no surge, no meter",
              "Family vehicles and group vans",
              "24/7 WhatsApp booking",
            ].map((h) => (
              <div key={h} className="flex items-start gap-2 text-sm text-navy">
                <CircleCheck className="mt-0.5 size-4 shrink-0 text-gold" />
                {h}
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
            <Link
              href={`/airport-transfer/${airport.slug}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-gold"
            >
              <Plane className="size-4 text-gold" />
              {city.name} airport transfer overview
              <ArrowRight className="size-4 text-gold" />
            </Link>
            <Link
              href={`/taxi-service/${city.slug}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-gold"
            >
              <Building2 className="size-4 text-gold" />
              {city.name} city taxi service
              <ArrowRight className="size-4 text-gold" />
            </Link>
          </div>
        </div>
      </section>

      {featured.length > 0 && (
        <HotelTransferGrid
          background="muted"
          heading="Popular Hotel Transfers"
          subheading={`Our most-booked ${city.name} luxury airport transfers.`}
          transfers={featured}
        />
      )}

      <HotelTransferExplorer transfers={transfers} airportName={aName} />

      {recent.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                <Sparkles className="size-6 text-gold" />
                Recently Added Routes
              </h2>
              <p className="mt-3 text-muted-foreground">
                The newest {city.name} hotel transfers in our network.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {recent.map((t) => (
                <Link
                  key={t.path}
                  href={t.path}
                  className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-md"
                >
                  <span className="text-sm font-semibold text-navy">
                    {t.from} → {t.to}
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-gold" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <VehicleOptions background="muted" />
      <HowItWorks background="white" />

      {cityRoutes.length > 0 && (
        <RouteGrid
          background="muted"
          heading={`Popular Destinations from ${city.name}`}
          subheading="Private intercity and tourist transfers beyond the airport run."
          only={cityRoutes}
        />
      )}

      <FAQSection faqs={faqs} background="white" />
      <LatestGuides background="muted" />
      <CTASection
        title={`Book Your ${city.name} Airport Transfer`}
        whatsappMessage={`Hello! I'd like to book an airport transfer in ${city.name}.`}
      />
    </>
  );
}
```

---

## 4. `app/(main)/[city]/[route]/page.tsx` (471 lines) — hotel-transfer + point-transfer template

Not one of the 3 corpora Section 3 measures, but the largest single templated page type on the site (236 pages: 175 hotel-transfer + 61 point-transfer). `generateStaticParams()` merges `hotelTransfers` (`lib/hotel-transfers.ts`, generated from `data/hotels.ts`) and `pointTransfers` (`lib/point-transfers.ts`, 12 hand-written arrays). See `DUPLICATION_AUDIT.md` Section 2 for the summary; full source omitted here for space — read directly at `app/(main)/[city]/[route]/page.tsx` and `lib/hotel-transfers.ts`.
