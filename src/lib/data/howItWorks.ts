import { HowItWorksStep, DriverStat } from "@/types";

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: 1,
    title: "Select Pickup & Airport Terminal",
    description: "Choose your arrival airport (Heathrow, Gatwick, Stansted, Luton, London City) and dropoff location anywhere in London.",
    icon: "MapPin",
  },
  {
    step: 2,
    title: "Choose Vehicle & Instant Fixed Fare",
    description: "Compare Executive Saloon, Business Class, MPV 6-Seater, or VIP Mercedes V-Class with 100% upfront fixed pricing.",
    icon: "Car",
  },
  {
    step: 3,
    title: "Provide Flight Details & Notes",
    description: "Enter flight number for live status tracking and custom meet-and-greet nameplate text for terminal pickup.",
    icon: "ClipboardCheck",
  },
  {
    step: 4,
    title: "Driver Meets You at Arrivals",
    description: "Your driver greets you at the arrivals hall with a name sign, assists with your luggage, and drives you smoothly.",
    icon: "Sparkles",
  },
];

export const DRIVER_STATS: DriverStat[] = [
  {
    id: "transfers",
    value: "15,000+",
    label: "Completed Airport Transfers",
    sublabel: "Across all 6 Greater London airports",
  },
  {
    id: "rating",
    value: "4.9/5",
    label: "Average Passenger Rating",
    sublabel: "Based on 3,400+ Trustpilot & Google reviews",
  },
  {
    id: "fixed-price",
    value: "100%",
    label: "Fixed Fare Guarantee",
    sublabel: "No surge pricing during rain, traffic, or peak hours",
  },
  {
    id: "support",
    value: "24/7",
    label: "Live UK Dispatch Team",
    sublabel: "Dedicated phone and live chat support line",
  },
];
