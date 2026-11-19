"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppUrl, getEmailMailtoUrl, getTelUrl } from "@/lib/contact-links";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#080C14] border-t border-slate-800 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400 shadow-md">
                <Image
                  src="/branding/ra-glass-care-badge-round.png"
                  alt="RA Glass Care NYC"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-white tracking-wider">
                  RA <span className="text-amber-400">GLASS CARE</span>
                </h3>
                <p className="text-xs text-sky-400 font-medium">
                  Storefront & Commercial Window Cleaning
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Professional inside and outside storefront window cleaning for local businesses across Astoria, Queens, and New York City. Sparkling, streak-free clarity that makes your business shine!
            </p>

            <div className="pt-2">
              <p className="text-xs text-slate-400">
                Founded by <strong className="text-white">Rudro</strong> • Astoria, Queens, NY
              </p>
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-amber-300 transition-colors">
                  Plans & Pricing
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-300 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#quote-builder" className="hover:text-amber-300 transition-colors">
                  Instant Quote Builder
                </a>
              </li>
              <li>
                <a href="#service-area" className="hover:text-amber-300 transition-colors">
                  Service Area
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-300 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Key Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>Storefront Windows</li>
              <li>Commercial Partitions</li>
              <li>Inside & Outside Deep Wash</li>
              <li>Post-Construction Scraping</li>
              <li>Weekly Maintenance</li>
              <li>Display & Mirror Detailing</li>
            </ul>
          </div>

          {/* Contact Direct (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={getTelUrl()}
                  className="flex items-center gap-2.5 text-slate-200 hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Primary: <strong>{BUSINESS_INFO.phonePrimaryFormatted}</strong></span>
                </a>
              </li>
              <li>
                <a
                  href={getTelUrl(true)}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-sky-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Secondary: {BUSINESS_INFO.phoneSecondary}</span>
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>WhatsApp: Instant Quote</span>
                </a>
              </li>
              <li>
                <a
                  href={getEmailMailtoUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="truncate">{BUSINESS_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400 pt-1">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Astoria, Queens, New York City (NYC)</span>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Mon–Sat: 7am–7pm (Early morning routes available)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p className="text-center sm:text-left">© {currentYear} RA Glass Care. All rights reserved. Commercial &amp; Storefront Window Cleaning.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-3 gap-y-1 text-slate-300">
            <span>Astoria, Queens, NY</span>
            <span className="hidden xs:inline">•</span>
            <span>Streak-Free Guarantee</span>
            <span className="hidden xs:inline">•</span>
            <span>Founder: Rudro</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
