import { QuotationDownloadSection } from "@/components/quotation/QuotationDownloadSection";
import type { Quotation } from "@/lib/quotations";

export const dynamic = "force-dynamic";

const mockQuotation: Quotation = {
  id: "test-id",
  quoteNumber: "QUO-20260729-01",
  publicToken: "test-token",
  leadId: null,
  clientName: "Ahmed Al-Fahad",
  clientPhone: "+966 50 123 4567",
  clientEmail: "ahmed.alfahad@example.com",
  serviceType: "Airport Transfer",
  pickupLocation: "King Abdulaziz International Airport (JED)",
  dropoffLocation: "Fairmont Makkah Clock Royal Tower",
  date: "2026-08-15",
  time: "14:30",
  flightNumber: "SV 1621",
  specialRequests: "Child seat required for a 4-year-old; family travelling with elderly parent.",
  bookingReference: "REF-88213",
  lineItems: [
    {
      description: "Jeddah Airport to Makkah — Private Transfer",
      vehicleType: "GMC Yukon (SUV)",
      passengers: "5",
      luggage: "6 bags",
      amount: 450,
    },
    {
      description: "Waiting time beyond free allowance (30 min)",
      vehicleType: null,
      passengers: null,
      luggage: null,
      amount: 50,
    },
  ],
  currency: "SAR",
  totalAmount: 500,
  paymentTerms: "A 50% deposit confirms this booking; the balance is due on the day of service.",
  cancellationPolicy: "Free cancellation up to 24 hours before pickup. Cancellations within 24 hours may be subject to a fee.",
  notes: "Please have your Umrah visa documents ready for the driver at pickup.",
  status: "Sent",
  quoteDate: "2026-07-29",
  validUntil: "2026-08-12",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export default function QAQuotePreviewPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 print:px-0 print:py-0 sm:py-12">
      <QuotationDownloadSection quotation={mockQuotation} />
    </div>
  );
}
