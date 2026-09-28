import { create } from "zustand";
import { BookingFormData, BookingStep } from "@/types";
import { AIRPORTS, DESTINATIONS, VEHICLES } from "@/lib/data";

interface BookingStore {
  step: BookingStep;
  formData: BookingFormData;
  setStep: (step: BookingStep) => void;
  nextStep: () => void;
  prevStep: () => void;
  updateFormData: (data: Partial<BookingFormData>) => void;
  resetBooking: () => void;
  getEstimatedPrice: () => number;
}

const defaultFormData: BookingFormData = {
  pickupAirportId: AIRPORTS[0].id,
  terminal: AIRPORTS[0].terminals[0],
  destinationId: DESTINATIONS[0].id,
  customDropoffAddress: "",
  pickupDate: new Date().toISOString().split("T")[0],
  pickupTime: "12:00",
  passengers: 2,
  luggage: 2,
  selectedVehicleId: VEHICLES[0].id,
  flightNumber: "",
  passengerName: "",
  passengerEmail: "",
  passengerPhone: "",
  meetAndGreet: true,
  childSeat: false,
  specialNotes: "",
};

export const useBookingStore = create<BookingStore>((set, get) => ({
  step: 1,
  formData: defaultFormData,

  setStep: (step) => set({ step }),

  nextStep: () => {
    const current = get().step;
    if (current < 4) {
      set({ step: (current + 1) as BookingStep });
    }
  },

  prevStep: () => {
    const current = get().step;
    if (current > 1) {
      set({ step: (current - 1) as BookingStep });
    }
  },

  updateFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),

  resetBooking: () =>
    set({
      step: 1,
      formData: defaultFormData,
    }),

  getEstimatedPrice: () => {
    const { formData } = get();
    const vehicle = VEHICLES.find((v) => v.id === formData.selectedVehicleId) || VEHICLES[0];
    const airport = AIRPORTS.find((a) => a.id === formData.pickupAirportId) || AIRPORTS[0];

    // Airport distance multiplier vs Heathrow (base)
    const airportMultiplier = airport.distanceToLondonMiles / 15;
    let price = Math.round(vehicle.basePriceHeathrow * Math.max(0.9, airportMultiplier * 0.85));

    if (formData.meetAndGreet) price += 5;
    return price;
  },
}));
