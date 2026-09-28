"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Plane, ShieldCheck, Clock, Compass, Building2, Radio, ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const iconMap: Record<string, React.ReactNode> = {
  Plane: <Plane className="w-6 h-6 text-brand-yellow" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-brand-yellow" />,
  Clock: <Clock className="w-6 h-6 text-brand-yellow" />,
  Compass: <Compass className="w-6 h-6 text-brand-yellow" />,
  Building2: <Building2 className="w-6 h-6 text-brand-yellow" />,
  Radio: <Radio className="w-6 h-6 text-brand-yellow" />,
};

export function ServicesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="py-24 bg-brand-dark border-t border-brand-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-yellow">
              OUR CORE SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sora text-white tracking-tight">
              Every kind of ride,<br className="hidden sm:inline" /> one premium service.
            </h2>
          </div>
          <p className="text-sm text-brand-muted max-w-md leading-relaxed">
            Tailored chauffeur transfers engineered around punctuality, comfort, and zero hidden costs for individuals, families, and corporate executives.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="h-full flex flex-col justify-between group cursor-pointer border-brand-border hover:border-brand-yellow/50">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {iconMap[service.icon]}
                    </div>
                    {service.badge && <Badge variant="yellow">{service.badge}</Badge>}
                  </div>

                  <h3 className="text-xl font-bold font-sora text-white group-hover:text-brand-yellow transition-colors flex items-center justify-between">
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-brand-yellow" />
                  </h3>

                  <p className="text-sm text-brand-muted leading-relaxed">{service.description}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-brand-border/60 text-xs font-mono text-brand-yellow flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                  <span>{service.highlight}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
