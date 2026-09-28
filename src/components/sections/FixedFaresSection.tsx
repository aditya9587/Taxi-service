"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Check, ArrowRight, ShieldCheck, Tag } from "lucide-react";
import { FIXED_FARES } from "@/lib/data";
import { useBookingStore } from "@/lib/store/useBookingStore";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function FixedFaresSection() {
  const reduceMotion = useReducedMotion();
  const { updateFormData, setStep } = useBookingStore();

  const handleBookRoute = (fare: typeof FIXED_FARES[0]) => {
    // Map airport code to airport id
    const airportIdMap: Record<string, string> = {
      LHR: "lhr",
      LGW: "lgw",
      STN: "stn",
      LTN: "ltn",
      LCY: "lcy",
    };
    const airportId = airportIdMap[fare.airportCode] || "lhr";

    updateFormData({ pickupAirportId: airportId });
    setStep(1);
    const wizard = document.getElementById("booking-wizard");
    wizard?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="fixed-fares" className="py-24 bg-brand-dark border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-yellow">
            TRANSPARENT PRICING
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sora text-white tracking-tight">
            Fixed fares. No surge. Ever.
          </h2>
          <p className="text-sm text-brand-muted">
            The price you see is the final price you pay. Guaranteed fixed airport rates regardless of traffic delays or weather.
          </p>
        </div>

        {/* Fixed Fare Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {FIXED_FARES.slice(0, 3).map((fare, index) => (
            <motion.div
              key={fare.id}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <Card
                className={`w-full flex flex-col justify-between p-8 rounded-2xl ${
                  fare.isPopular
                    ? "bg-brand-card border-brand-yellow ring-1 ring-brand-yellow shadow-2xl shadow-brand-yellow/10 relative"
                    : "bg-brand-card border-brand-border"
                }`}
              >
                {fare.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge variant="yellow" size="sm">
                      MOST POPULAR ROUTE
                    </Badge>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Airport & Route Header */}
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-brand-yellow">
                        {fare.airportCode} AIRPORT
                      </span>
                      <span className="text-xs text-brand-muted font-mono">{fare.durationMins} mins</span>
                    </div>
                    <h3 className="text-xl font-bold font-sora text-white mt-1">
                      {fare.airportName}
                    </h3>
                    <p className="text-xs text-brand-muted mt-1">To {fare.destinationName}</p>
                  </div>

                  {/* Price Banner */}
                  <div className="bg-brand-dark/80 p-4 rounded-xl border border-brand-border/60">
                    <span className="text-[10px] uppercase font-mono text-brand-muted block">
                      Guaranteed Fixed Price
                    </span>
                    <div className="text-4xl font-bold font-sora text-brand-yellow mt-0.5">
                      £{fare.price}
                    </div>
                    <span className="text-xs text-brand-muted">Includes 60 Mins Free Airport Waiting</span>
                  </div>

                  {/* Included features */}
                  <ul className="space-y-3 text-xs text-white">
                    {fare.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-brand-yellow shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <Button
                    variant={fare.isPopular ? "primary" : "outline"}
                    className="w-full"
                    onClick={() => handleBookRoute(fare)}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Book This Route
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
