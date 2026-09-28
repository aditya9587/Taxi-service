"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Users, Briefcase, Check, ArrowRight, Sparkles } from "lucide-react";
import { VEHICLES } from "@/lib/data";
import { useBookingStore } from "@/lib/store/useBookingStore";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

type FleetFilter = "all" | "saloon" | "executive" | "mpv" | "van";

export function FleetSection() {
  const reduceMotion = useReducedMotion();
  const [filter, setFilter] = useState<FleetFilter>("all");
  const { updateFormData, setStep } = useBookingStore();

  const filteredVehicles =
    filter === "all" ? VEHICLES : VEHICLES.filter((v) => v.category === filter);

  const handleSelectVehicle = (vehicleId: string) => {
    updateFormData({ selectedVehicleId: vehicleId });
    setStep(1);
    const wizard = document.getElementById("booking-wizard");
    wizard?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="fleet" className="py-24 bg-brand-dark border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-yellow">
              OUR CHAUFFEUR FLEET
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sora text-white tracking-tight">
              Pick the perfect vehicle<br className="hidden sm:inline" /> for the moment.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { label: "All Vehicles", value: "all" },
              { label: "Saloon / Hybrid", value: "saloon" },
              { label: "Executive Sedan", value: "executive" },
              { label: "6-Seater MPV", value: "mpv" },
              { label: "Luxury Van", value: "van" },
            ].map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setFilter(tab.value as FleetFilter)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all min-h-[44px] ${
                  filter === tab.value
                    ? "bg-brand-yellow text-brand-dark shadow-md shadow-brand-yellow/20"
                    : "bg-brand-card text-brand-muted hover:text-white border border-brand-border"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="h-full flex flex-col justify-between group border-brand-border hover:border-brand-yellow/50 p-6">
                <div className="space-y-4">
                  {/* Top Badge & Tag */}
                  <div className="flex items-center justify-between">
                    <Badge variant="dark" size="sm">
                      {vehicle.categoryLabel}
                    </Badge>
                    {vehicle.tag && <Badge variant="yellow">{vehicle.tag}</Badge>}
                  </div>

                  {/* Vehicle Image */}
                  <div className="relative w-full h-48 rounded-xl overflow-hidden bg-brand-dark/80 border border-brand-border/60">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Vehicle Info */}
                  <div>
                    <h3 className="text-xl font-bold font-sora text-white">{vehicle.name}</h3>
                    <p className="text-xs text-brand-muted mt-1 leading-relaxed">{vehicle.description}</p>
                  </div>

                  {/* Specs Pill row */}
                  <div className="flex items-center gap-4 text-xs font-mono text-white/90 bg-brand-dark/60 p-3 rounded-lg border border-brand-border/60">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-brand-yellow" />
                      <span>{vehicle.passengers} Passengers</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-brand-yellow" />
                      <span>{vehicle.luggage} Suitcases</span>
                    </div>
                  </div>

                  {/* Feature Checkmarks */}
                  <ul className="space-y-2 pt-1 text-xs text-brand-muted">
                    {vehicle.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer: Price & CTA */}
                <div className="pt-6 mt-6 border-t border-brand-border flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-brand-muted block">
                      Heathrow to London
                    </span>
                    <div className="text-2xl font-bold font-sora text-brand-yellow">
                      From £{vehicle.basePriceHeathrow}
                    </div>
                  </div>

                  <Button
                    size="sm"
                    onClick={() => handleSelectVehicle(vehicle.id)}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Select
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
