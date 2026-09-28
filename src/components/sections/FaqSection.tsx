"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ChevronDown, HelpCircle, PhoneCall } from "lucide-react";
import { FAQS, COMPANY_INFO } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function FaqSection() {
  const reduceMotion = useReducedMotion();
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-brand-dark border-t border-brand-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-yellow">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sora text-white tracking-tight">
            Got questions? We have answers.
          </h2>
          <p className="text-sm text-brand-muted max-w-lg mx-auto">
            Everything you need to know about airport pickups, flight tracking delays, and vehicle capacities.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqId === faq.id;
            const headingId = `faq-heading-${faq.id}`;
            const panelId = `faq-panel-${faq.id}`;

            return (
              <motion.div
                key={faq.id}
                initial={reduceMotion ? false : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden transition-colors hover:border-brand-border/80">
                  <h3>
                    <button
                      id={headingId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-sora font-semibold text-base text-white hover:text-brand-yellow focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow min-h-[44px]"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-brand-yellow shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={headingId}
                      className="px-5 pb-6 pt-1 text-sm text-brand-muted leading-relaxed border-t border-brand-border/50 animate-in fade-in duration-200"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dispatch Support Teaser */}
        <div className="mt-12 p-6 rounded-2xl bg-brand-card/50 border border-brand-border text-center space-y-3">
          <p className="text-xs text-brand-muted">Still have questions about a special airport transfer?</p>
          <div className="flex justify-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-yellow hover:underline"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Speak to Dispatch: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
