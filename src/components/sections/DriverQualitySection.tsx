"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { DRIVER_STATS } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function DriverQualitySection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-24 bg-brand-dark border-t border-brand-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & Stats Grid */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-3">
              <Badge variant="yellow" size="md">
                CHAUFFEUR EXCELLENCE
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sora text-white tracking-tight">
                Professional drivers.<br /> Premium standards.
              </h2>
              <p className="text-sm text-brand-muted max-w-lg leading-relaxed">
                Every AeroCab chauffeur undergoes rigorous DBS criminal background checks, Transport for London (TfL) medical screening, and advanced customer service training.
              </p>
            </div>

            {/* 4 Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {DRIVER_STATS.map((stat) => (
                <div
                  key={stat.id}
                  className="bg-brand-card p-5 rounded-xl border border-brand-border hover:border-brand-yellow/40 transition-colors"
                >
                  <div className="text-3xl sm:text-4xl font-bold font-sora text-brand-yellow">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-white mt-1">{stat.label}</div>
                  <div className="text-xs text-brand-muted mt-0.5">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Driver Photo Showcase */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="relative w-full h-[450px] sm:h-[520px] rounded-2xl overflow-hidden border border-brand-border shadow-2xl group">
              <Image
                src="/images/driver.jpg"
                alt="Professional UK Chauffeur Taxi Driver"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-brand-card/90 backdrop-blur-md border border-brand-border">
                <div className="flex items-center justify-between text-xs font-mono text-white">
                  <span>DRIVER ID: #UK-9402</span>
                  <span className="text-brand-yellow font-bold">5.0 ★ EXCELLENCE</span>
                </div>
                <p className="text-xs text-brand-muted mt-1">
                  &ldquo;Welcome to London. Your luggage is loaded and your vehicle climate is set to 21°C.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
