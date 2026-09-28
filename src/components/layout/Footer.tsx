import React from "react";
import { Car, Phone, Mail, MapPin, ShieldCheck, Clock } from "lucide-react";
import { COMPANY_INFO, NAV_ITEMS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-border pt-16 pb-12 text-brand-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-brand-border">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-brand-yellow flex items-center justify-center text-brand-dark">
                <Car className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xl font-bold font-sora text-white tracking-tight">
                AERO<span className="text-brand-yellow">CAB</span>
              </span>
            </div>
            <p className="text-sm text-brand-muted max-w-sm leading-relaxed">
              Official London airport taxi transfer operator licensed by Transport for London ({COMPANY_INFO.licenceNumber}). Fixed fares from all UK airports to any London destination 24/7/365.
            </p>
            <div className="space-y-2 text-xs text-brand-muted">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-yellow shrink-0" />
                <span>Dispatch Desk: {COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-yellow shrink-0" />
                <span>Email: {COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-yellow shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-yellow shrink-0" />
                <span>{COMPANY_INFO.operatingHours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-mono">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-brand-yellow transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* UK Airports Covered */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-mono">
              UK Airports
            </h3>
            <ul className="space-y-2.5 text-sm">
              {COMPANY_INFO.airportsList.map((airport) => (
                <li key={airport}>
                  <a href="#coverage-map" className="hover:text-brand-yellow transition-colors">
                    {airport}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular London Routes */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-mono">
              Popular Routes
            </h3>
            <ul className="space-y-2.5 text-sm">
              {COMPANY_INFO.popularRoutes.map((route) => (
                <li key={route}>
                  <a href="#fixed-fares" className="hover:text-brand-yellow transition-colors">
                    {route}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>© {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved. TfL Licensed Operator.</span>
          </div>

          <div className="flex items-center gap-4 text-brand-muted">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Cancellation Policy</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="bg-brand-card px-2.5 py-1 rounded border border-brand-border text-[10px] font-mono text-white">
              VISA
            </span>
            <span className="bg-brand-card px-2.5 py-1 rounded border border-brand-border text-[10px] font-mono text-white">
              MASTERCARD
            </span>
            <span className="bg-brand-card px-2.5 py-1 rounded border border-brand-border text-[10px] font-mono text-white">
              AMEX
            </span>
            <span className="bg-brand-card px-2.5 py-1 rounded border border-brand-border text-[10px] font-mono text-white">
              APPLE PAY
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
