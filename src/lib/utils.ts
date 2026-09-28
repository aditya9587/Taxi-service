import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateEstimatedFare(
  basePrice: number,
  passengers: number,
  luggage: number,
  meetAndGreet: boolean = true,
  childSeat: boolean = false
): number {
  let fare = basePrice;

  // Extra luggage capacity fee if > 4 items on standard
  if (luggage > 4 && basePrice < 70) {
    fare += 10;
  }

  if (meetAndGreet) {
    fare += 5; // Parking & airport entry toll contribution
  }

  if (childSeat) {
    fare += 0; // Free amenity
  }

  return Math.round(fare);
}
