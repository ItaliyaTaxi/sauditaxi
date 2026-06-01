# Schema Markup Plan

Use JSON-LD schema on the website.

## Homepage Schema
Use:
- LocalBusiness
- TaxiService
- Organization
- WebSite
- BreadcrumbList

## Service Page Schema
Use:
- Service
- LocalBusiness
- FAQPage
- BreadcrumbList

## City Page Schema
Use:
- TaxiService
- Service
- FAQPage
- BreadcrumbList

## Route Page Schema
Use:
- Service
- FAQPage
- BreadcrumbList

## Example TaxiService Schema

```json
{
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "name": "Saudi Arabia Taxi Service",
  "description": "Private taxi, airport transfer, city transfer, border transfer and intercity transport service across Saudi Arabia.",
  "areaServed": {
    "@type": "Country",
    "name": "Saudi Arabia"
  },
  "serviceType": [
    "Airport Transfer",
    "Private Taxi",
    "City Transfer",
    "Intercity Transfer",
    "Border Transfer",
    "Umrah Taxi Service",
    "Hajj Transport"
  ],
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://yourdomain.com/get-quote"
  }
}
```

## FAQ Schema Questions
Use these on relevant pages:
- How can I book a taxi in Saudi Arabia?
- Do you provide airport pickup?
- Can I book a taxi from Jeddah airport to Makkah?
- Do you provide Makkah to Madinah private transfers?
- Can I book border transfer from Saudi Arabia to Bahrain?
- Are vehicles available for families and groups?
- Can I request a quote on WhatsApp?
