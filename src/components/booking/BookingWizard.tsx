"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  MapPin,
  Plane,
  Calendar,
  Clock,
  Users,
  Briefcase,
  CheckCircle2,
  Car,
  ChevronRight,
  ArrowLeft,
  Shield,
  Sparkles,
  Info,
} from "lucide-react";
import { useBookingStore } from "@/lib/store/useBookingStore";
import { AIRPORTS, DESTINATIONS, VEHICLES } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function BookingWizard() {
  const reduceMotion = useReducedMotion();
  const {
    step,
    formData,
    setStep,
    nextStep,
    prevStep,
    updateFormData,
    resetBooking,
    getEstimatedPrice,
  } = useBookingStore();

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  const currentAirport = AIRPORTS.find((a) => a.id === formData.pickupAirportId) || AIRPORTS[0];
  const currentDestination = DESTINATIONS.find((d) => d.id === formData.destinationId) || DESTINATIONS[0];
  const currentVehicle = VEHICLES.find((v) => v.id === formData.selectedVehicleId) || VEHICLES[0];

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  const handleStep3Submit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = "AC-" + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setBookingConfirmed(true);
  };

  return (
    <Card
      id="booking-wizard"
      className="bg-brand-card/95 border-brand-border backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-black/80 rounded-2xl relative z-10"
    >
      {/* Wizard Header / Step Indicator */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-yellow">
              INSTANT FIXED PRICE BOOKING
            </span>
          </div>
          <span className="text-xs font-mono text-brand-muted">Step {step} of 3</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-brand-dark rounded-full h-1.5 overflow-hidden">
          <div
            className="bg-brand-yellow h-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Confirmation Modal View */}
      {bookingConfirmed ? (
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-6 space-y-6"
        >
          <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <Badge variant="success">TRANSFER BOOKED & CONFIRMED</Badge>
            <h3 className="text-2xl font-bold font-sora text-white">Booking Ref: #{bookingRef}</h3>
            <p className="text-sm text-brand-muted max-w-md mx-auto">
              Thank you {formData.passengerName || "Valued Passenger"}! We have received your booking. A confirmation SMS & email have been sent to {formData.passengerEmail || "your email"}.
            </p>
          </div>

          {/* Booking Summary Box */}
          <div className="bg-brand-dark/80 rounded-xl p-4 border border-brand-border text-left space-y-3 text-sm">
            <div className="flex justify-between border-b border-brand-border pb-2">
              <span className="text-brand-muted">Route:</span>
              <span className="font-semibold text-white">
                {currentAirport.name} → {currentDestination.name}
              </span>
            </div>
            <div className="flex justify-between border-b border-brand-border pb-2">
              <span className="text-brand-muted">Terminal:</span>
              <span className="text-white">{formData.terminal}</span>
            </div>
            <div className="flex justify-between border-b border-brand-border pb-2">
              <span className="text-brand-muted">Pickup Date & Time:</span>
              <span className="text-white">
                {formData.pickupDate} at {formData.pickupTime}
              </span>
            </div>
            <div className="flex justify-between border-b border-brand-border pb-2">
              <span className="text-brand-muted">Flight Number:</span>
              <span className="font-mono text-brand-yellow">{formData.flightNumber || "BA178 (Tracked)"}</span>
            </div>
            <div className="flex justify-between border-b border-brand-border pb-2">
              <span className="text-brand-muted">Vehicle Selected:</span>
              <span className="text-white">{currentVehicle.name}</span>
            </div>
            <div className="flex justify-between pt-1 font-bold text-base">
              <span className="text-brand-yellow">Total Fixed Price:</span>
              <span className="text-brand-yellow">£{getEstimatedPrice()}</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Button
              className="w-full"
              onClick={() => {
                setBookingConfirmed(false);
                resetBooking();
              }}
            >
              Book Another Transfer
            </Button>
          </div>
        </motion.div>
      ) : (
        <>
          {/* STEP 1: PICKUP & DESTINATION */}
          {step === 1 && (
            <form onSubmit={handleStep1Submit} className="space-y-4">
              {/* Pickup Airport */}
              <Select
                label="Arrival Airport (UK)"
                leftIcon={<Plane className="w-4 h-4" />}
                value={formData.pickupAirportId}
                onChange={(e) => {
                  const selectedId = e.target.value;
                  const newAirport = AIRPORTS.find((a) => a.id === selectedId) || AIRPORTS[0];
                  updateFormData({
                    pickupAirportId: selectedId,
                    terminal: newAirport.terminals[0],
                  });
                }}
                options={AIRPORTS.map((a) => ({
                  label: `${a.name} (${a.code})`,
                  value: a.id,
                }))}
              />

              {/* Terminal Select */}
              <Select
                label="Airport Terminal"
                value={formData.terminal}
                onChange={(e) => updateFormData({ terminal: e.target.value })}
                options={currentAirport.terminals.map((t) => ({
                  label: t,
                  value: t,
                }))}
              />

              {/* Dropoff Destination */}
              <Select
                label="London Destination / Borough"
                leftIcon={<MapPin className="w-4 h-4" />}
                value={formData.destinationId}
                onChange={(e) => updateFormData({ destinationId: e.target.value })}
                options={DESTINATIONS.map((d) => ({
                  label: `${d.name} (${d.zone})`,
                  value: d.id,
                }))}
              />

              {/* Specific Street Address / Hotel */}
              <Input
                label="Specific Dropoff Address or Hotel Name"
                placeholder="e.g. The Shard, 31 St Thomas St, SE1 9RY"
                value={formData.customDropoffAddress}
                onChange={(e) => updateFormData({ customDropoffAddress: e.target.value })}
              />

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  type="date"
                  label="Pickup Date"
                  leftIcon={<Calendar className="w-4 h-4" />}
                  value={formData.pickupDate}
                  onChange={(e) => updateFormData({ pickupDate: e.target.value })}
                  required
                />
                <Input
                  type="time"
                  label="Flight Landing Time"
                  leftIcon={<Clock className="w-4 h-4" />}
                  value={formData.pickupTime}
                  onChange={(e) => updateFormData({ pickupTime: e.target.value })}
                  required
                />
              </div>

              {/* Passengers & Luggage */}
              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="number"
                  min={1}
                  max={8}
                  label="Passengers"
                  leftIcon={<Users className="w-4 h-4" />}
                  value={formData.passengers}
                  onChange={(e) => updateFormData({ passengers: Number(e.target.value) })}
                  required
                />
                <Input
                  type="number"
                  min={0}
                  max={10}
                  label="Suitcases"
                  leftIcon={<Briefcase className="w-4 h-4" />}
                  value={formData.luggage}
                  onChange={(e) => updateFormData({ luggage: Number(e.target.value) })}
                  required
                />
              </div>

              {/* Submit Step 1 */}
              <Button type="submit" className="w-full mt-4" rightIcon={<ChevronRight className="w-4 h-4" />}>
                Calculate Fixed Price & Select Vehicle
              </Button>
            </form>
          )}

          {/* STEP 2: VEHICLE SELECTION */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-brand-muted bg-brand-dark/50 p-2.5 rounded-lg border border-brand-border">
                <span>
                  Route: <strong className="text-white">{currentAirport.code}</strong> →{" "}
                  <strong className="text-white">{currentDestination.name}</strong>
                </span>
                <span className="text-brand-yellow font-semibold">{currentAirport.avgDurationMins} mins approx</span>
              </div>

              <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
                {VEHICLES.map((vehicle) => {
                  const isSelected = formData.selectedVehicleId === vehicle.id;
                  const price = getEstimatedPrice();

                  return (
                    <div
                      key={vehicle.id}
                      onClick={() => updateFormData({ selectedVehicleId: vehicle.id })}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? "bg-brand-yellow/10 border-brand-yellow ring-1 ring-brand-yellow"
                          : "bg-brand-dark/60 border-brand-border hover:border-white/20"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-white text-base">{vehicle.name}</h4>
                          {vehicle.tag && <Badge variant="yellow">{vehicle.tag}</Badge>}
                        </div>
                        <p className="text-xs text-brand-muted max-w-xs">{vehicle.description}</p>
                        <div className="flex items-center gap-4 text-xs text-brand-muted pt-1">
                          <span className="flex items-center gap-1">
                            <Users className="w-3.5 h-3.5 text-brand-yellow" /> Max {vehicle.passengers}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-3.5 h-3.5 text-brand-yellow" /> Max {vehicle.luggage} bags
                          </span>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="text-2xl font-bold font-sora text-brand-yellow">£{price}</div>
                        <span className="text-[10px] text-brand-muted uppercase tracking-wider block">
                          Fixed Upfront Fare
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  leftIcon={<ArrowLeft className="w-4 h-4" />}
                  className="w-1/3"
                >
                  Back
                </Button>
                <Button onClick={nextStep} className="w-2/3" rightIcon={<ChevronRight className="w-4 h-4" />}>
                  Continue to Passenger Info
                </Button>
              </div>
            </div>
          )}

          {/* STEP 3: PASSENGER & FLIGHT DETAILS */}
          {step === 3 && (
            <form onSubmit={handleStep3Submit} className="space-y-4">
              <Input
                label="Flight Number (for live delay tracking)"
                placeholder="e.g. BA178, AA100, EK005"
                leftIcon={<Plane className="w-4 h-4" />}
                value={formData.flightNumber}
                onChange={(e) => updateFormData({ flightNumber: e.target.value })}
                required
              />

              <Input
                label="Passenger Full Name"
                placeholder="e.g. James Bond"
                value={formData.passengerName}
                onChange={(e) => updateFormData({ passengerName: e.target.value })}
                required
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  type="email"
                  label="Email (for instant receipt)"
                  placeholder="james@example.com"
                  value={formData.passengerEmail}
                  onChange={(e) => updateFormData({ passengerEmail: e.target.value })}
                  required
                />
                <Input
                  type="tel"
                  label="Mobile Phone (for driver SMS)"
                  placeholder="+44 7700 900000"
                  value={formData.passengerPhone}
                  onChange={(e) => updateFormData({ passengerPhone: e.target.value })}
                  required
                />
              </div>

              {/* Extra Perks Checkboxes */}
              <div className="space-y-2 pt-2 border-t border-brand-border">
                <label className="flex items-center gap-3 cursor-pointer text-xs text-white">
                  <input
                    type="checkbox"
                    checked={formData.meetAndGreet}
                    onChange={(e) => updateFormData({ meetAndGreet: e.target.checked })}
                    className="w-4 h-4 accent-brand-yellow rounded"
                  />
                  <span>
                    Include <strong>Terminal Meet & Greet</strong> with custom nameboard (£5 parking fee included)
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer text-xs text-white">
                  <input
                    type="checkbox"
                    checked={formData.childSeat}
                    onChange={(e) => updateFormData({ childSeat: e.target.checked })}
                    className="w-4 h-4 accent-brand-yellow rounded"
                  />
                  <span>Request complimentary Child / Booster Seat</span>
                </label>
              </div>

              {/* Total Price Display */}
              <div className="bg-brand-yellow/10 border border-brand-yellow/30 p-3.5 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-xs text-brand-muted block uppercase tracking-wider font-mono">
                    TOTAL FIXED FARE
                  </span>
                  <span className="text-xs text-white">Zero surge fees • Pay on arrival</span>
                </div>
                <div className="text-2xl font-bold font-sora text-brand-yellow">£{getEstimatedPrice()}</div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  leftIcon={<ArrowLeft className="w-4 h-4" />}
                  className="w-1/3"
                >
                  Back
                </Button>
                <Button type="submit" className="w-2/3" rightIcon={<Sparkles className="w-4 h-4" />}>
                  Confirm Booking Now
                </Button>
              </div>
            </form>
          )}
        </>
      )}
    </Card>
  );
}
