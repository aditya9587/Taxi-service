import { DestinationZone } from "@/types";

export const DESTINATIONS: DestinationZone[] = [
  {
    id: "westminster",
    name: "Central London / Westminster",
    zone: "Zone 1",
    postcodePrefix: "SW1",
    popularLandmarks: ["Big Ben", "Buckingham Palace", "Victoria Station", "Mayfair"],
  },
  {
    id: "city-of-london",
    name: "City of London / Financial District",
    zone: "Zone 1",
    postcodePrefix: "EC1",
    popularLandmarks: ["Bank", "St Paul's", "Tower Bridge", "Liverpool Street"],
  },
  {
    id: "canary-wharf",
    name: "Canary Wharf & Docklands",
    zone: "Zone 2",
    postcodePrefix: "E14",
    popularLandmarks: ["One Canada Square", "O2 Arena", "ExCeL London"],
  },
  {
    id: "kensington",
    name: "Kensington & Chelsea",
    zone: "Zone 1",
    postcodePrefix: "W8",
    popularLandmarks: ["Harrods", "Knightsbridge", "Notting Hill", "Chelsea"],
  },
  {
    id: "camden",
    name: "Camden & King's Cross",
    zone: "Zone 2",
    postcodePrefix: "NW1",
    popularLandmarks: ["St Pancras International", "Camden Market", "Euston"],
  },
  {
    id: "greenwich",
    name: "Greenwich & South East London",
    zone: "Zone 2/3",
    postcodePrefix: "SE10",
    popularLandmarks: ["Royal Observatory", "Cutty Sark", "London Bridge"],
  },
  {
    id: "paddington",
    name: "Paddington & Bayswater",
    zone: "Zone 1",
    postcodePrefix: "W2",
    popularLandmarks: ["Paddington Station", "Hyde Park", "Marble Arch"],
  },
  {
    id: "stratford",
    name: "Stratford & East London",
    zone: "Zone 2/3",
    postcodePrefix: "E20",
    popularLandmarks: ["Queen Elizabeth Olympic Park", "Westfield Stratford"],
  },
];
