"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Sparkles,
  ArrowUp,
} from "lucide-react";
import {
  getWhatsAppLink,
  getGmailLink,
  getPhoneLink,
  BRAND_INFO,
} from "../utils/contactHelpers";

export default function Footer() {
  const currentYear = 2026;

  // Exact 5 Navigation Items and Routes
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Specialized Glass", href: "/specialized-glass" },
    { name: "Simple, Panel-Based Storefront Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#070A0F] border-t border-slate-800 text-slate-400 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1: Brand & Founder Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400 shadow-[0_0_15px_rgba(212,175,55,0.3)] bg-slate-950 shrink-0">
                <Image
                  src="/branding/ra-glass-care-badge-round.png"
                  alt="RA Glass Care NYC"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-wider text-xl text-white font-serif uppercase">
                  RA <span className="text-amber-400">GLASS CARE</span>
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {BRAND_INFO.tagline}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-sm">
              Dedicated storefront and commercial window cleaning in Astoria, Queens, and across New York City. Crystal-clear glass, reliable recurring routes, and a spotless streak-free finish.
            </p>

            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3 w-full max-w-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-xs">
                <p className="text-white font-bold">Founded by Rudro</p>
                <p className="text-slate-400">Local Astoria, Queens Window Care Specialist</p>
              </div>
            </div>
          </div>

          {/* Column 2: Exact Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-300 hover:text-amber-400 transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Direct Contact & Service Coverage (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Get In Touch Direct
            </h4>
            
            <ul className="space-y-3 mb-6 text-xs sm:text-sm">
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>WhatsApp: <strong className="text-white font-mono">{BRAND_INFO.primaryPhone}</strong></span>
                </a>
              </li>
              <li>
                <a
                  href={getPhoneLink()}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-sky-400 transition-colors group"
                >
                  <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Phone: <strong className="text-white font-mono">{BRAND_INFO.primaryPhone}</strong></span>
                </a>
              </li>
              <li>
                <a
                  href={getGmailLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-slate-300 hover:text-amber-400 transition-colors group"
                >
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Gmail: <strong className="text-white font-mono">{BRAND_INFO.email}</strong></span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Astoria, Queens, New York City (NYC)</span>
              </li>
            </ul>

            <div className="pt-3 border-t border-slate-800">
              <p className="text-[11px] text-slate-400 font-medium mb-1.5">
                Service Neighborhoods:
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Astoria • Long Island City • Sunnyside • Woodside • Jackson Heights • Queens &amp; NYC Metro
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} <strong className="text-slate-300 font-semibold">RA Glass Care</strong>. Storefront &amp; Commercial Window Cleaning. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">
              Founder: <span className="text-amber-400 font-semibold">Rudro</span>
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
