"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { MapPin, Navigation, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { AIRPORTS } from "@/lib/data";
import { useBookingStore } from "@/lib/store/useBookingStore";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function CoverageMapSection() {
  const reduceMotion = useReducedMotion();
  const [activeAirportId, setActiveAirportId] = useState("lhr");
  const { updateFormData, setStep } = useBookingStore();

  const activeAirport = AIRPORTS.find((a) => a.id === activeAirportId) || AIRPORTS[0];

  const handleSelectAirport = (id: string) => {
    setActiveAirportId(id);
    updateFormData({ pickupAirportId: id });
    setStep(1);
    const wizard = document.getElementById("booking-wizard");
    wizard?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="coverage-map" className="py-24 bg-brand-dark border-t border-brand-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 space-y-3">
          <Badge variant="yellow" size="md">
            GREATER LONDON COVERAGE NETWORK
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sora text-white tracking-tight">
            Operating across all 6 UK airports<br /> to any London postal code.
          </h2>
          <p className="text-sm text-brand-muted max-w-xl">
            Select an airport below to view distance to Central London, average transfer duration, and book instant transfers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Airport Interactive List */}
          <div className="lg:col-span-5 space-y-3">
            {AIRPORTS.map((airport) => {
              const isActive = airport.id === activeAirportId;

              return (
                <div
                  key={airport.id}
                  onClick={() => setActiveAirportId(airport.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isActive
                      ? "bg-brand-yellow/10 border-brand-yellow ring-1 ring-brand-yellow"
                      : "bg-brand-card border-brand-border hover:border-white/20"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <MapPin className={`w-4 h-4 ${isActive ? "text-brand-yellow" : "text-brand-muted"}`} />
                      <h4 className="font-bold text-white text-base">{airport.name}</h4>
                    </div>
                    <div className="text-xs text-brand-muted pl-6 flex items-center gap-3 font-mono">
                      <span>Code: {airport.code}</span>
                      <span>•</span>
                      <span>{airport.distanceToLondonMiles} miles to London</span>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-xs font-semibold text-brand-yellow block font-mono">
                      ~{airport.avgDurationMins} mins
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectAirport(airport.id);
                      }}
                      className="text-[11px] underline text-brand-muted hover:text-white mt-0.5"
                    >
                      Book Pickup
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Map Visual Shell */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="relative w-full h-[450px] sm:h-[500px] rounded-2xl overflow-hidden border border-brand-border shadow-2xl group">
              <Image
                src="/images/coverage-map.jpg"
                alt="London Airport Transit Network Map"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/40" />

              {/* Active Airport Overlay Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-brand-card/95 backdrop-blur-md border border-brand-border flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono font-bold uppercase text-white">
                      SELECTED ROUTE: {activeAirport.code} → CENTRAL LONDON
                    </span>
                  </div>
                  <p className="text-xs text-brand-muted mt-1">
                    Direct express transfer via M4 / M25 / A13 highways. Zero congestion surcharge.
                  </p>
                </div>
                <Button size="sm" onClick={() => handleSelectAirport(activeAirport.id)}>
                  Book {activeAirport.code} Now
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
