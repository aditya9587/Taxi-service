import { Testimonial, FaqItem } from "@/types";

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "review-1",
    authorName: "Oliver Sterling",
    authorRole: "Managing Director, Barclays UK",
    avatarUrl: "/images/avatar-1.jpg",
    rating: 5,
    comment: "Flawless service from Heathrow T5 to Canary Wharf. Our flight was delayed by 45 minutes, but the chauffeur was waiting in arrivals with a clear nameboard. Spotless Mercedes S-Class.",
    route: "Heathrow (LHR) → Canary Wharf",
    verified: true,
  },
  {
    id: "review-2",
    authorName: "Sophie Laurent",
    authorRole: "International Business Traveler",
    avatarUrl: "/images/avatar-2.jpg",
    rating: 5,
    comment: "I travel to London twice a month. AeroCab is the only company I trust for Gatwick transfers. Fixed prices mean no surprises in traffic. Highly recommended!",
    route: "Gatwick (LGW) → Mayfair, London",
    verified: true,
  },
  {
    id: "review-3",
    authorName: "Marcus Vance",
    authorRole: "Family Vacationer (Group of 5)",
    avatarUrl: "/images/avatar-3.jpg",
    rating: 5,
    comment: "Booked the 6-seater MPV from Stansted to Kensington with 6 heavy suitcases and two toddlers. Driver helped load all bags and provided clean child booster seats.",
    route: "Stansted (STN) → Kensington",
    verified: true,
  },
  {
    id: "review-4",
    authorName: "Elena Rostova",
    authorRole: "Global Event Director",
    avatarUrl: "/images/avatar-4.jpg",
    rating: 5,
    comment: "Outstanding chauffeur team! We booked 4 luxury Mercedes V-Class vans for our VIP speakers from London City Airport. On time, polite, and very professional.",
    route: "London City (LCY) → Westminster",
    verified: true,
  },
  {
    id: "review-5",
    authorName: "David K. Henderson",
    authorRole: "Corporate Partner, Deloitte",
    avatarUrl: "/images/avatar-1.jpg",
    rating: 5,
    comment: "Punctual, quiet, and spotless executive sedan. The wifi onboard allowed me to finish my presentation on the way from Luton to St Pancras.",
    route: "Luton (LTN) → King's Cross St Pancras",
    verified: true,
  },
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "flights",
    question: "What happens if my incoming flight is delayed or arrives early?",
    answer: "We automatically track your flight using live aviation radar systems. Your pickup time is dynamically adjusted to your actual landing time at no extra charge.",
  },
  {
    id: "faq-2",
    category: "booking",
    question: "Where will I meet my driver at the airport?",
    answer: "Your chauffeur will meet you inside the arrivals hall holding a sign with your name. You will also receive an SMS and email notification with your driver's direct mobile number and car license plate prior to landing.",
  },
  {
    id: "faq-3",
    category: "booking",
    question: "Are your prices truly fixed or can they increase in heavy London traffic?",
    answer: "Our fares are 100% fixed upfront. You pay the exact quoted price at the time of booking. There are zero hidden fees, zero surge charges, and zero tolls added afterwards.",
  },
  {
    id: "faq-4",
    category: "vehicles",
    question: "How much waiting time is included at the airport?",
    answer: "All airport pickups include 60 minutes of complimentary waiting time after your plane lands. This gives you ample time to clear passport control, baggage claim, and customs without rushing.",
  },
  {
    id: "faq-5",
    category: "vehicles",
    question: "Can I request child safety seats or booster seats?",
    answer: "Yes! Child safety seats and booster seats for ages 0–12 are available upon request during the booking process at no extra cost.",
  },
  {
    id: "faq-6",
    category: "payments",
    question: "What payment methods do you accept and how do refunds work?",
    answer: "We accept all major debit and credit cards (Visa, Mastercard, American Express), Apple Pay, and Google Pay. You can cancel free of charge up to 24 hours before pickup.",
  },
];
