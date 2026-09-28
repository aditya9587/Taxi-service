import { z } from "zod";

export const bookingStep1Schema = z.object({
  pickupAirportId: z.string().min(1, "Please select an arrival airport"),
  terminal: z.string().min(1, "Please select a terminal"),
  destinationId: z.string().min(1, "Please select a London destination"),
  customDropoffAddress: z.string().optional(),
  pickupDate: z.string().min(1, "Pickup date is required"),
  pickupTime: z.string().min(1, "Pickup time is required"),
  passengers: z.number().min(1, "At least 1 passenger is required").max(8, "Maximum 8 passengers"),
  luggage: z.number().min(0, "Luggage count cannot be negative").max(10, "Maximum 10 luggage items"),
});

export const bookingStep3Schema = z.object({
  flightNumber: z.string().min(2, "Flight number is required (e.g. BA178, AA100)"),
  passengerName: z.string().min(2, "Full name is required"),
  passengerEmail: z.string().email("Valid email address is required"),
  passengerPhone: z.string().min(7, "Valid contact phone number is required"),
  meetAndGreet: z.boolean(),
  childSeat: z.boolean(),
  specialNotes: z.string().optional(),
});

export type BookingStep1Input = z.infer<typeof bookingStep1Schema>;
export type BookingStep3Input = z.infer<typeof bookingStep3Schema>;
