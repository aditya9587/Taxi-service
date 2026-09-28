"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function CtaBannerSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-20 bg-brand-dark border-t border-brand-border overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-card via-brand-dark to-brand-card border border-brand-border rounded-3xl p-10 sm:p-16 text-center space-y-8 relative overflow-hidden shadow-2xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-brand-yellow/10 blur-3xl rounded-full pointer-events-none" />

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 relative z-10 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-mono font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>GUARANTEED 24/7 AIRPORT SERVICE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-sora text-white tracking-tight">
              Your Reliable Ride<br /> Starts <span className="text-brand-yellow">Here.</span>
            </h2>

            <p className="text-base sm:text-lg text-brand-muted max-w-xl mx-auto leading-relaxed">
              Book your fixed-fare UK airport transfer in less than 60 seconds. Zero surge pricing, free flight radar sync, and 60 minutes free waiting time.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => {
                  const wizard = document.getElementById("booking-wizard");
                  wizard?.scrollIntoView({ behavior: "smooth" });
                }}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Book Transfer Now
              </Button>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center gap-2 font-semibold px-7 py-3.5 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all min-h-[48px] text-base"
              >
                <Phone className="w-4 h-4 text-brand-yellow" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
