"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function TestimonialsSection() {
  const reduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (reduceMotion || isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reduceMotion, isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentReview = TESTIMONIALS[currentIndex];

  return (
    <section id="reviews" className="py-24 bg-brand-dark border-t border-brand-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-yellow">
              VERIFIED PASSENGER REVIEWS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sora text-white tracking-tight">
              Riders who never go back.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-brand-muted">
              <div className="flex text-brand-yellow">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
                ))}
              </div>
              <span className="text-white font-bold">4.9 / 5.0</span>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous review"
                className="w-10 h-10 rounded-lg border border-brand-border bg-brand-card text-white hover:border-brand-yellow hover:text-brand-yellow transition-colors flex items-center justify-center min-h-[44px] min-w-[44px] cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next review"
                className="w-10 h-10 rounded-lg border border-brand-border bg-brand-card text-white hover:border-brand-yellow hover:text-brand-yellow transition-colors flex items-center justify-center min-h-[44px] min-w-[44px] cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative min-h-[280px]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview.id}
              initial={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            >
              <Card className="bg-brand-card/90 border-brand-border p-8 sm:p-12 rounded-2xl shadow-xl relative">
                <Quote className="w-12 h-12 text-brand-yellow/10 absolute top-6 right-6 pointer-events-none" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  {/* Avatar Photo */}
                  <div className="md:col-span-3 flex justify-center md:justify-start">
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-brand-yellow/40 shadow-lg shrink-0">
                      <Image
                        src={currentReview.avatarUrl}
                        alt={currentReview.authorName}
                        fill
                        sizes="128px"
                        className="object-cover object-center"
                      />
                    </div>
                  </div>

                  {/* Review Text & Author Details */}
                  <div className="md:col-span-9 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex text-brand-yellow gap-1">
                        {[...Array(currentReview.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
                        ))}
                      </div>
                      {currentReview.verified && (
                        <Badge variant="yellow" size="sm">
                          Verified Passenger
                        </Badge>
                      )}
                    </div>

                    <blockquote className="text-base sm:text-xl text-white font-sora leading-relaxed italic">
                      &ldquo;{currentReview.comment}&rdquo;
                    </blockquote>

                    <div className="pt-4 border-t border-brand-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h4 className="text-base font-bold font-sora text-white">
                          {currentReview.authorName}
                        </h4>
                        <span className="text-xs text-brand-muted">{currentReview.authorRole}</span>
                      </div>
                      <div className="text-xs font-mono text-brand-yellow bg-brand-dark/80 px-3 py-1.5 rounded-lg border border-brand-border">
                        {currentReview.route}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {TESTIMONIALS.map((review, i) => (
              <button
                key={review.id}
                type="button"
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "w-8 bg-brand-yellow" : "w-2.5 bg-brand-border hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
