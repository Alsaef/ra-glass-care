"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X, MapPin } from "lucide-react";
import { getWhatsAppUrl, getTelUrl } from "@/lib/contact-links";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Plans & Pricing", href: "#pricing" },
    { name: "Why Us", href: "#why-us" },
    { name: "Instant Quote", href: "#quote-builder" },
    { name: "Service Area", href: "#service-area" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B0F17]/90 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-2xl shadow-black/40"
          : "bg-[#0B0F17]/60 backdrop-blur-sm border-b border-white/10 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Title */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-amber-400/80 shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/branding/ra-glass-care-badge-round.png"
                alt="RA Glass Care NYC"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold tracking-wider text-lg sm:text-xl text-white font-serif uppercase">
                  RA <span className="text-amber-400">Glass Care</span>
                </span>
                <span className="inline-flex items-center text-[10px] font-semibold bg-sky-500/20 text-sky-300 border border-sky-400/30 px-1.5 py-0.5 rounded">
                  NYC
                </span>
              </div>
              <span className="text-[11px] text-slate-400 tracking-wide font-medium hidden sm:block">
                Astoria Storefront & Commercial Cleaning
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-amber-300 transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-amber-400 after:to-sky-400 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Pills */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Phone Button */}
            <a
              href={getTelUrl()}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-amber-400/50 transition-all duration-200 shadow-sm"
              title="Call RA Glass Care"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>(929) 501-1116</span>
            </a>

            {/* WhatsApp CTA Pill */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-lg shadow-emerald-900/30 border border-emerald-400/40 transition-all duration-200 hover:scale-[1.02]"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <MessageCircle className="w-4 h-4 text-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center justify-center w-9 h-9 rounded-full bg-emerald-600 text-white shadow-md border border-emerald-400/40"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-800/60 border border-slate-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F17]/95 backdrop-blur-xl border-b border-amber-500/20 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/40"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Get Free Quote on WhatsApp</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={getTelUrl()}
                className="py-2.5 px-2.5 sm:px-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 font-semibold text-[11px] sm:text-xs flex items-center justify-center gap-1.5 sm:gap-2 hover:border-amber-400 whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>(929) 501-1116</span>
              </a>
              <a
                href={getTelUrl(true)}
                className="py-2.5 px-2.5 sm:px-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 font-semibold text-[11px] sm:text-xs flex items-center justify-center gap-1.5 sm:gap-2 hover:border-sky-400 whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>(646) 555-7810</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Astoria, Queens & NYC Metro</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
