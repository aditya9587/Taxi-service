"use client";

import React, { useState, useEffect } from "react";
import { Car, Phone, Menu, X, Sun, Moon } from "lucide-react";
import { NAV_ITEMS, COMPANY_INFO } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/lib/theme/ThemeContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-dark/90 backdrop-blur-md border-b border-brand-border py-3 shadow-xl"
          : "bg-gradient-to-b from-brand-dark/90 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-brand-yellow rounded-lg p-1"
          aria-label={`${COMPANY_INFO.name} Homepage`}
        >
          <div className="w-10 h-10 rounded-lg bg-brand-yellow flex items-center justify-center text-brand-dark group-hover:scale-105 transition-transform shadow-lg shadow-brand-yellow/20">
            <Car className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <span className="text-xl font-bold font-sora text-white tracking-tight flex items-center gap-1">
              AERO<span className="text-brand-yellow">CAB</span>
            </span>
            <span className="block text-[10px] tracking-wider uppercase text-brand-muted font-mono">
              UK AIRPORT TRANSFERS
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-muted hover:text-brand-yellow transition-colors focus:outline-none focus:ring-2 focus:ring-brand-yellow rounded px-1 py-0.5"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2.5 rounded-lg border border-brand-border bg-brand-card text-brand-muted hover:text-brand-yellow transition-colors focus:outline-none focus:ring-2 focus:ring-brand-yellow min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-brand-yellow" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-2 text-xs font-semibold text-white/90 hover:text-brand-yellow transition-colors px-3 py-2 rounded-lg border border-brand-border bg-brand-card/50"
            aria-label={`Call dispatch at ${COMPANY_INFO.phone}`}
          >
            <Phone className="w-3.5 h-3.5 text-brand-yellow" />
            <span>24/7: {COMPANY_INFO.phone}</span>
          </a>

          <Button
            size="sm"
            onClick={() => {
              const element = document.getElementById("booking-wizard");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book Transfer
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="lg:hidden p-2.5 rounded-lg border border-brand-border bg-brand-card text-brand-muted hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-card/95 backdrop-blur-xl border-b border-brand-border px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base font-medium text-white hover:text-brand-yellow py-2 px-3 rounded-lg hover:bg-white/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-brand-border flex flex-col gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
              className="flex items-center justify-center gap-2 text-sm text-brand-muted hover:text-brand-yellow py-2.5 rounded-lg border border-brand-border bg-brand-dark"
            >
              <Phone className="w-4 h-4 text-brand-yellow" />
              <span>Call Dispatch: {COMPANY_INFO.phone}</span>
            </a>
            <Button
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                const element = document.getElementById("booking-wizard");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book Transfer Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
