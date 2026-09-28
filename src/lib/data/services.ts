import { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "airport-transfers",
    title: "Airport Transfers",
    description: "Door-to-terminal pickup from all UK airports to central London and nationwide destinations with live flight tracking.",
    icon: "Plane",
    highlight: "60 mins free waiting time included at arrivals.",
    badge: "Most Popular",
  },
  {
    id: "executive-chauffeur",
    title: "Executive Chauffeur",
    description: "Discreet VIP chauffeur service for corporate clients, diplomacy teams, and high-profile international visitors.",
    icon: "ShieldCheck",
    highlight: "Uniformed chauffeurs with Mercedes S-Class & V-Class fleet.",
  },
  {
    id: "hourly-hire",
    title: "Hourly & Event Hire",
    description: "Flexible hourly chauffeur bookings for fashion week, business summits, shopping trips, or multi-stop city tours.",
    icon: "Clock",
    highlight: "Unlimited stops within booked hours.",
  },
  {
    id: "long-distance",
    title: "Long Distance UK Transfers",
    description: "Direct luxury transfers from London airports to Oxford, Cambridge, Birmingham, Manchester, Edinburgh, and Bath.",
    icon: "Compass",
    highlight: "Fixed fare with zero luggage surcharge.",
  },
  {
    id: "hotel-pickups",
    title: "Hotel & Cruise Transfers",
    description: "Seamless hotel door pickup to Southampton, Dover, and Portsmouth cruise terminals or 5-star London hotels.",
    icon: "Building2",
    highlight: "Punctual hotel lobby luggage assistance.",
  },
  {
    id: "flight-tracking",
    title: "24/7 Flight Monitoring",
    description: "We monitor your incoming flight number automatically. Delayed or early, your driver adjusts pickup time accordingly.",
    icon: "Radio",
    highlight: "Zero extra charges for flight delays.",
    badge: "Smart Sync",
  },
];
