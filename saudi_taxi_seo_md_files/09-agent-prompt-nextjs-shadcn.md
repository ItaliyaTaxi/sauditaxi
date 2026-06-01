# Agent Prompt — Build Next.js shadcn Saudi Taxi Lead Generation Website

Build a modern, SEO-optimized taxi lead generation website for Saudi Arabia using:

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Responsive mobile-first design
- SEO metadata on every page
- JSON-LD schema
- Dynamic pages for cities, airports, routes, borders, and services

## Website Purpose
The website will generate taxi and transfer leads across Saudi Arabia. It should cover all major Saudi cities, airports, borders, religious destinations, tourist places, and intercity routes.

## Design Style
Create a premium taxi/transport website design:
- Clean and modern
- Professional
- Fast loading
- Mobile responsive
- Trust-focused
- Strong CTA buttons
- WhatsApp-first lead generation
- Use sections that are reusable across pages

Suggested theme:
- Black / dark navy
- Yellow or gold accent
- White background sections
- Clean cards
- Rounded components
- Professional vehicle/road/airport imagery

## Required Main Pages
Create these pages:

- Home
- About
- Contact
- Get Quote
- Services
- Airport Transfers
- City Transfers
- Intercity Transfers
- Border Transfers
- Umrah Taxi Service
- Hajj Transport Service
- Ziyarat Taxi Service

## Dynamic Page Types
Create reusable dynamic page templates for:

### City Taxi Pages
Route:
`/taxi-service/[city]`

Use data file:
`data/cities.ts`

Include pages for:
Riyadh, Jeddah, Makkah, Madinah, Dammam, Khobar, Jubail, Taif, Abha, Tabuk, AlUla, Yanbu, Hail, Najran, Jazan, Al Qassim, Buraidah, Hofuf, Al Ahsa, Khamis Mushait.

### Airport Transfer Pages
Route:
`/airport-transfer/[airport]`

Use data file:
`data/airports.ts`

Include:
Riyadh Airport, Jeddah Airport, Madinah Airport, Dammam Airport, Taif Airport, Abha Airport, Tabuk Airport, Yanbu Airport, AlUla Airport, Jazan Airport, Hail Airport.

### Route Pages
Route:
`/routes/[slug]`

Use data file:
`data/routes.ts`

Include popular routes:
Jeddah to Makkah, Makkah to Madinah, Madinah to Makkah, Jeddah to Madinah, Riyadh to Dammam, Dammam to Riyadh, Riyadh to Jeddah, Riyadh to AlUla, Madinah to AlUla, Jeddah to Taif, Khobar to Bahrain, Dammam to Bahrain, Riyadh to Qatar Border.

### Border Transfer Pages
Route:
`/border-transfers/[border]`

Use data file:
`data/borders.ts`

Include:
Bahrain Causeway, Qatar Border, UAE Border, Kuwait Border, Jordan Border.

## Required Components
Create reusable components:

- Header
- Footer
- HeroSection
- QuoteForm
- WhatsAppButton
- ServiceCards
- CityGrid
- RouteGrid
- AirportGrid
- VehicleOptions
- WhyChooseUs
- HowItWorks
- FAQSection
- CTASection
- Breadcrumbs
- SchemaScript
- TestimonialSection
- TrustBadges

## Quote Form Fields
The quote form must include:

- Full name
- Phone number / WhatsApp number
- Pickup location
- Drop-off location
- Date
- Time
- Passengers
- Luggage
- Vehicle type
- Flight number, optional
- Message

On submit, create a WhatsApp message link with all details included.

## WhatsApp CTA
Add sticky WhatsApp button on all pages.

Buttons:
- Get Quote on WhatsApp
- Call Now
- Book Airport Transfer
- Request Price

## SEO Requirements
For every page:
- Generate metadata using Next.js metadata API
- Add unique title
- Add unique meta description
- Add canonical URL
- Add Open Graph metadata
- Add JSON-LD schema
- Add FAQ schema where FAQs exist
- Use one H1 per page
- Use SEO-friendly URLs
- Add internal links to related pages

## Schema Requirements
Add JSON-LD schemas:
- TaxiService
- LocalBusiness
- Service
- Organization
- WebSite
- BreadcrumbList
- FAQPage

Create a reusable component:
`components/seo/SchemaScript.tsx`

## Sitemap and Robots
Create:
- `app/sitemap.ts`
- `app/robots.ts`

Sitemap must include all:
- Static pages
- City pages
- Airport pages
- Route pages
- Border pages

## Page Content
Use SEO content templates for:
- City pages
- Route pages
- Airport pages
- Border pages

Each page should include:
- Hero section
- Short intro
- Benefits section
- Popular routes
- Vehicle options
- How booking works
- FAQ
- CTA
- Quote form

## Important
Do not create thin pages. Every dynamic page should have useful and unique content using city, airport, route, or border data.

Use shared components wherever possible. Keep the code clean, scalable, and easy to update.
