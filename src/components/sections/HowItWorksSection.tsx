"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { MapPin, Car, ClipboardCheck, Sparkles } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "@/lib/data";
import { Card } from "@/components/ui/Card";

const stepIconMap: Record<string, React.ReactNode> = {
  MapPin: <MapPin className="w-5 h-5 text-brand-yellow" />,
  Car: <Car className="w-5 h-5 text-brand-yellow" />,
  ClipboardCheck: <ClipboardCheck className="w-5 h-5 text-brand-yellow" />,
  Sparkles: <Sparkles className="w-5 h-5 text-brand-yellow" />,
};

export function HowItWorksSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-24 bg-brand-dark border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-yellow">
            EFFORTLESS BOOKING PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sora text-white tracking-tight">
            Your ride in four simple steps.
          </h2>
          <p className="text-sm text-brand-muted">
            From touchdown to terminal exit, experience stress-free executive travel across Greater London.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_IT_WORKS_STEPS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-brand-border p-6 flex flex-col justify-between relative group hover:border-brand-yellow/50">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center">
                      {stepIconMap[item.icon]}
                    </div>
                    <span className="w-8 h-8 rounded-full bg-brand-yellow text-brand-dark font-bold font-sora text-sm flex items-center justify-center shadow-lg shadow-brand-yellow/20">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-sora text-white group-hover:text-brand-yellow transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-brand-muted leading-relaxed">{item.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
