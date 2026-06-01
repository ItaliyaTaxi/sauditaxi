import { z } from "zod";

/** Trim strings, convert "" to undefined, and cap length to sanitize input. */
const str = (max = 500) =>
  z
    .string()
    .trim()
    .max(max)
    .optional()
    .transform((v) => (v ? v : undefined));

/**
 * Validation for the public lead/quote forms. Phone is required (every form
 * collects a WhatsApp number); everything else is optional.
 */
export const leadSchema = z.object({
  fullName: str(120),
  email: z.string().trim().email().max(160).optional().or(z.literal("").transform(() => undefined)),
  phone: z.string().trim().min(5, "A valid phone/WhatsApp number is required").max(40),
  pickupLocation: str(200),
  dropoffLocation: str(200),
  date: str(40),
  time: str(40),
  passengers: str(20),
  luggage: str(20),
  vehicleType: str(60),
  flightNumber: str(40),
  message: str(2000),
  sourcePage: str(300),
  serviceType: str(120),
});

export type LeadFormInput = z.infer<typeof leadSchema>;
