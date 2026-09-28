export interface Airport {
  id: string;
  name: string;
  code: string;
  postcode: string;
  terminals: string[];
  distanceToLondonMiles: number;
  avgDurationMins: number;
  popular: boolean;
}

export interface DestinationZone {
  id: string;
  name: string;
  zone: string;
  postcodePrefix: string;
  popularLandmarks: string[];
}

export interface Vehicle {
  id: string;
  name: string;
  category: "saloon" | "executive" | "mpv" | "van";
  categoryLabel: string;
  passengers: number;
  luggage: number;
  basePriceHeathrow: number;
  tag?: string;
  image: string;
  description: string;
  features: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlight: string;
  badge?: string;
}

export interface FixedFare {
  id: string;
  airportName: string;
  airportCode: string;
  destinationName: string;
  price: number;
  durationMins: number;
  distanceMiles: number;
  isPopular?: boolean;
  features: string[];
}

export interface Testimonial {
  id: string;
  authorName: string;
  authorRole: string;
  avatarUrl: string;
  rating: number;
  comment: string;
  route: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "booking" | "flights" | "vehicles" | "payments";
}

export interface DriverStat {
  id: string;
  value: string;
  label: string;
  sublabel: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface BookingFormData {
  pickupAirportId: string;
  terminal: string;
  destinationId: string;
  customDropoffAddress: string;
  pickupDate: string;
  pickupTime: string;
  passengers: number;
  luggage: number;
  selectedVehicleId: string;
  flightNumber: string;
  passengerName: string;
  passengerEmail: string;
  passengerPhone: string;
  meetAndGreet: boolean;
  childSeat: boolean;
  specialNotes?: string;
}

export type BookingStep = 1 | 2 | 3 | 4;
