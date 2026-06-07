import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/sections/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Saudi Private Transfers collects, uses, and protects your personal information when you request a taxi or transfer quote in Saudi Arabia.",
  path: "/privacy-policy",
});

const sections: LegalSection[] = [
  {
    heading: "Information We Collect",
    paragraphs: [
      `${siteConfig.name} collects the information you provide when you request a quote or contact us. This helps us understand your trip and respond with availability and pricing.`,
    ],
    list: [
      "Your name and contact details (phone/WhatsApp number and, optionally, email).",
      "Trip details: pickup and drop-off locations, date, time, passengers, and luggage.",
      "Vehicle preference, flight number (if provided), and any message you send.",
      "Technical data such as the page you submitted from, and basic analytics data.",
    ],
  },
  {
    heading: "How We Use Your Information",
    list: [
      "To respond to your quote request and arrange your transfer.",
      "To contact you with availability, pricing, and booking confirmation.",
      "To coordinate your trip with drivers and transport partners.",
      "To improve our service and respond to enquiries and support requests.",
    ],
  },
  {
    heading: "Lead Form Data",
    paragraphs: [
      "When you submit a quote or contact form, the details are stored securely so our team can manage your request through our internal CRM. Access to this data is restricted to authorised staff.",
    ],
  },
  {
    heading: "WhatsApp and Email Communication",
    paragraphs: [
      "When you choose to contact us by WhatsApp, your message and number are processed to handle your request. If you provide an email address, we may send you a confirmation and follow-up messages relating to your booking.",
      "We do not send unsolicited marketing. Communication is focused on your transfer request.",
    ],
  },
  {
    heading: "Sharing Information with Transport Partners",
    paragraphs: [
      "To fulfil your booking we share the necessary trip details (such as pickup, drop-off, time, and contact number) with the assigned driver or transport partner. We share only what is needed to complete your transfer.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    heading: "Cookies and Analytics",
    paragraphs: [
      "We may use cookies and analytics tools to understand how visitors use the website and to improve performance and content. You can control cookies through your browser settings.",
    ],
  },
  {
    heading: "Data Security",
    paragraphs: [
      "We take reasonable technical and organisational measures to protect your information. Lead data is stored in a secured database, and administrative access is password-protected and restricted to authorised staff.",
    ],
  },
  {
    heading: "User Rights",
    paragraphs: [
      "You may request access to, correction of, or deletion of the personal information we hold about you. To make a request, contact us using the details below and we will respond within a reasonable time.",
    ],
  },
  {
    heading: "Data Retention",
    paragraphs: [
      "We retain lead and booking information for as long as needed to provide our service, respond to enquiries, and meet legal or operational requirements. When data is no longer needed, it is deleted or anonymised.",
    ],
  },
  {
    heading: "Contact Information",
    paragraphs: [
      `If you have any questions about this Privacy Policy or your data, contact us by email at ${siteConfig.email} or through our booking form.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your personal information when you request a taxi or transfer in Saudi Arabia."
      updated="29 May 2026"
      crumbs={crumbs}
      sections={sections}
    />
  );
}
