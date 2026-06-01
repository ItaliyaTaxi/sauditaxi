# Technical SEO Requirements

## Next.js SEO
Use Next.js App Router metadata for every page:
- title
- description
- canonical
- openGraph
- twitter
- robots

## Sitemap
Generate dynamic sitemap including:
- static pages
- city pages
- airport pages
- route pages
- border pages
- service pages

File:
`app/sitemap.ts`

## Robots
Create:
`app/robots.ts`

Allow all important pages and block admin/private paths.

## URL Rules
Use lowercase URLs.
Use hyphen-separated slugs.
Avoid duplicate pages.
Use canonical URLs.

## Internal Linking
Every page should link to:
- Homepage
- Get Quote page
- Main service page
- Related city pages
- Related route pages
- Airport transfer page
- WhatsApp CTA

## Performance
- Use optimized images
- Use responsive layouts
- Lazy-load heavy sections
- Keep Core Web Vitals strong
- Use server components where possible

## Heading Structure
Each page must have:
- One H1 only
- Clear H2 sections
- H3 for smaller subsections
- FAQ section with H2 and H3 questions

## Image SEO
Every image must include descriptive alt text:
Example:
`Private taxi service in Riyadh Saudi Arabia`

## Lead Tracking
Forms should include hidden fields:
- page URL
- service type
- city
- route
- source page
