import { NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Book Ride", href: "#booking-wizard" },
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#fleet" },
  { label: "Fixed Fares", href: "#fixed-fares" },
  { label: "Airports & Map", href: "#coverage-map" },
  // { label: "Reviews", href: "#reviews" },
  // { label: "FAQ", href: "#faq" },
];

export const COMPANY_INFO = {
  name: "AeroCab London",
  tagline: "Ride Smarter Across The City",
  phone: "+44 (0)20 7946 0912",
  whatsapp: "+44 7700 900821",
  email: "support@aerocab.co.uk",
  address: "Terminal House, 52 Grosvenor Gardens, London SW1W 0AU, United Kingdom",
  licenceNumber: "TfL Private Hire Licence #091823",
  operatingHours: "24 Hours a Day, 365 Days a Year",
  socials: {
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  airportsList: [
    "Heathrow Airport (LHR)",
    "Gatwick Airport (LGW)",
    "Stansted Airport (STN)",
    "Luton Airport (LTN)",
    "London City Airport (LCY)",
    "Southend Airport (SEN)",
  ],
  popularRoutes: [
    "Heathrow to Central London",
    "Gatwick to London Victoria",
    "Stansted to Liverpool Street",
    "Luton to King's Cross St Pancras",
    "Heathrow to Canary Wharf",
    "London City to Mayfair & Soho",
  ],
};
