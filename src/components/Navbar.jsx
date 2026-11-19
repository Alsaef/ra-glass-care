"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Menu, X, Sparkles } from "lucide-react";
import { getWhatsAppLink, getPhoneLink } from "../utils/contactHelpers";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Exact 5 Navigation Items and Routes
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Specialized Glass", href: "/specialized-glass" },
    { name: "Simple, Panel-Based Storefront Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B0F17]/95 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-2xl shadow-black/50"
          : "bg-[#0B0F17]/80 backdrop-blur-sm border-b border-white/10 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo + RA GLASS CARE */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-amber-400 shadow-[0_0_15px_rgba(212,175,55,0.35)] transition-transform duration-300 group-hover:scale-105 bg-slate-950 shrink-0">
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
                  RA <span className="text-amber-400">GLASS CARE</span>
                </span>
                <span className="inline-flex items-center text-[10px] font-semibold bg-sky-500/20 text-sky-300 border border-sky-400/30 px-1.5 py-0.5 rounded">
                  NYC
                </span>
              </div>
              <span className="text-[11px] text-slate-400 tracking-wide font-medium hidden sm:block">
                Astoria Storefront &amp; Commercial Cleaning
              </span>
            </div>
          </Link>

          {/* Center Navigation Items (Exact 5 Labels with Active Highlighting) */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs lg:text-sm transition-all duration-200 relative py-1 ${
                    isActive
                      ? "text-amber-400 font-bold"
                      : "text-slate-300 font-medium hover:text-amber-400"
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all ${
                    isActive
                      ? "after:w-full after:bg-gradient-to-r after:from-amber-400 after:to-sky-400"
                      : "after:w-0 after:bg-gradient-to-r after:from-amber-400 after:to-sky-400 hover:after:w-full"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons: WhatsApp & Call Now */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getPhoneLink()}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 hover:border-amber-400/50 transition-all duration-200 shadow-sm"
              title="Call RA Glass Care"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Now</span>
            </a>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-lg shadow-emerald-950/40 border border-emerald-400/40 transition-all duration-200 hover:scale-[1.02]"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <MessageCircle className="w-4 h-4 text-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center justify-center w-9 h-9 rounded-full bg-emerald-600 text-white shadow-md border border-emerald-400/40"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0B0F17]/98 backdrop-blur-xl border-b border-amber-500/20 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 text-sm rounded-xl transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-amber-400/15 text-amber-300 font-bold border border-amber-400/30"
                      : "text-slate-200 font-medium hover:text-amber-400 hover:bg-slate-800/60"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <Sparkles className="w-3.5 h-3.5 text-amber-400" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us (+1 929-501-1116)</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={getPhoneLink()}
                className="py-2.5 px-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-1.5 hover:border-amber-400 whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call (929) 501-1116</span>
              </a>
              <a
                href={getPhoneLink(true)}
                className="py-2.5 px-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-1.5 hover:border-sky-400 whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>(646) 555-7810</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
