"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ShieldCheck, Clock, Award, Star, ArrowRight, Sparkles } from "lucide-react";
import { BookingWizard } from "@/components/booking/BookingWizard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const ROTATING_TEXTS = [
  "The City",
  "Heathrow (LHR)",
  "Gatwick (LGW)",
  "Canary Wharf",
  "Mayfair & Soho",
  "Stansted & Luton",
];

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % ROTATING_TEXTS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [reduceMotion]);

  return (
    <section className="relative min-h-[100dvh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Photography & Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-taxi.jpg"
          alt="London Taxi Transfer Executive Vehicle"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25 dark:opacity-25 filter brightness-90 dark:brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2">
              <Badge variant="yellow" size="md" className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-brand-yellow" />
                TfL LICENSED OPERATOR
              </Badge>
              <div className="flex items-center gap-1 text-xs text-brand-muted">
                <Star className="w-3.5 h-3.5 fill-brand-yellow text-brand-yellow" />
                <span className="font-bold text-white">4.9/5</span> (3,400+ Reviews)
              </div>
            </div>

            {/* Kinetic Dynamic Animated Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-sora tracking-tight text-white leading-[1.15]">
              Ride Smarter<br className="hidden sm:inline" /> Across{" "}
              <span className="relative inline-block min-w-[200px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={textIndex}
                    initial={reduceMotion ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 15, rotateX: -45 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={reduceMotion ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: -15, rotateX: 45 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="inline-block text-brand-yellow underline decoration-brand-yellow/40 underline-offset-8"
                  >
                    {ROTATING_TEXTS[textIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-brand-muted max-w-xl leading-relaxed"
            >
              Premium airport taxi transfers from Heathrow, Gatwick, Stansted, Luton & London City. Fixed upfront prices, 24/7 flight delay tracking, and free terminal meet & greet.
            </motion.p>

            {/* Quick Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-2 text-xs text-brand-muted bg-brand-card/60 p-2.5 rounded-lg border border-brand-border"
              >
                <ShieldCheck className="w-4 h-4 text-brand-yellow shrink-0" />
                <span>100% Fixed Fare</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-2 text-xs text-brand-muted bg-brand-card/60 p-2.5 rounded-lg border border-brand-border"
              >
                <Clock className="w-4 h-4 text-brand-yellow shrink-0" />
                <span>60 Mins Free Waiting</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-2 text-xs text-brand-muted bg-brand-card/60 p-2.5 rounded-lg border border-brand-border"
              >
                <Award className="w-4 h-4 text-brand-yellow shrink-0" />
                <span>Flight Sync Auto-Adjust</span>
              </motion.div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                size="lg"
                onClick={() => {
                  const el = document.getElementById("booking-wizard");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Book a Transfer
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const el = document.getElementById("fleet");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Fleet
              </Button>
            </div>
          </motion.div>

          {/* Right Floating Booking Wizard */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <BookingWizard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
