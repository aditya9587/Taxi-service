"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { CheckCircle2, Smartphone, Radio, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function AppTeaserSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-20 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-brand-card via-brand-dark to-brand-card border border-brand-border rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle Glow backdrop */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/5 blur-3xl rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Copy */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <Badge variant="yellow" size="md">
                MOBILE EXPRESS BOOKING
              </Badge>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sora text-white tracking-tight">
                An app built for people who move fast.
              </h2>

              <p className="text-base text-brand-muted max-w-lg leading-relaxed">
                Track your driver live on interactive London maps, receive automated airport terminal meeting instructions, and manage business receipts effortlessly.
              </p>

              <ul className="space-y-4 pt-2">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center text-brand-yellow shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Real-Time Flight Radar Tracking</h4>
                    <p className="text-xs text-brand-muted">Automated sync with UK airport radar adjusts pickup if delayed.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center text-brand-yellow shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">100% Upfront Fixed Prices</h4>
                    <p className="text-xs text-brand-muted">Zero surge pricing during heavy rain, rush hour, or tube strikes.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center text-brand-yellow shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Direct Chauffeur Messaging & GPS</h4>
                    <p className="text-xs text-brand-muted">View vehicle license plate, driver profile, and live location.</p>
                  </div>
                </li>
              </ul>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button leftIcon={<Smartphone className="w-4 h-4" />}>
                  App Store (iOS)
                </Button>
                <Button variant="outline" leftIcon={<Zap className="w-4 h-4" />}>
                  Google Play
                </Button>
              </div>
            </motion.div>

            {/* Right Phone Mockup Visual */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-64 sm:w-72 h-[480px] rounded-[40px] overflow-hidden border-4 border-brand-border bg-black shadow-2xl shadow-brand-yellow/10 group hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/app-mockup.jpg"
                  alt="AeroCab London Mobile Booking App Screen"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
