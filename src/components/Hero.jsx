"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Mail,
  Phone,
  Sparkles,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  CalendarCheck,
  Star,
} from "lucide-react";
import { getWhatsAppLink, getGmailLink, getPhoneLink } from "../utils/contactHelpers";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-[#0B0F17]"
    >
      {/* Background Ambient Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/15 via-sky-500/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Authoritative Copy & Direct CTAs */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-amber-400/10 to-sky-500/15 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide mb-6 shadow-sm shadow-amber-500/10"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Astoria, Queens, New York City</span>
            </motion.div>

            {/* Exact Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] sm:leading-[1.12] mb-6 font-sans">
              Make Your Business Shine with{" "}
              <span className="relative inline-block">
                <span className="text-gradient-gold">RA Glass Care</span>
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-amber-400 to-sky-400 rounded-full opacity-80" />
              </span>
            </h1>

            {/* Exact Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Professional Storefront &amp; Commercial Window Cleaning. Inside &amp; outside cleaning with a{" "}
              <strong className="text-white font-semibold">streak-free, spotless finish</strong>.
            </p>

            {/* Micro Trust Bullets */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2.5 mb-8 w-full max-w-xl">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Inside &amp; Outside Cleaning</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Streak-Free Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Weekly &amp; Bi-Weekly Plans</span>
              </div>
            </div>

            {/* 3 Primary Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-8">
              {/* 1. WhatsApp Us */}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-xl shadow-emerald-950/50 border border-emerald-400/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <MessageCircle className="w-5 h-5 text-white shrink-0" />
                <span>WhatsApp Us</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
              </a>

              {/* 2. Send Gmail */}
              <a
                href={getGmailLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-amber-400/30 hover:border-amber-400 text-slate-100 shadow-lg shadow-black/40 transition-all duration-300 hover:scale-[1.02]"
              >
                <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Send Gmail</span>
              </a>

              {/* 3. Call (929) 501-1116 */}
              <a
                href={getPhoneLink()}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700 hover:border-sky-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Call (929) 501-1116</span>
              </a>
            </div>

            {/* Rating Pill */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
              <div className="flex -space-x-1.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full bg-slate-800 border border-amber-400/40 flex items-center justify-center"
                  >
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  </div>
                ))}
              </div>
              <div className="text-xs text-slate-300">
                <span className="font-bold text-white">5.0 Star Rated</span> • Trusted by Queens &amp; Astoria retail storefronts
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Showcase & Brand Plaque */}
          <motion.div
            className="lg:col-span-5 relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Outer Decorative Halo */}
            <div className="absolute inset-0 -m-6 rounded-3xl bg-gradient-to-tr from-amber-500/20 via-sky-500/10 to-transparent blur-2xl pointer-events-none" />

            {/* Central Showcase Card */}
            <div className="relative w-full max-w-md sm:max-w-lg rounded-3xl overflow-hidden glass-panel-gold p-4 sm:p-5 shadow-2xl bg-[#131B2E]">
              
              {/* Top Banner inside card */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-semibold text-white tracking-wide">
                    ASTORIA &amp; QUEENS SERVICE
                  </span>
                </div>
                <span className="text-amber-400 font-bold bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                  From $20 / Visit
                </span>
              </div>

              {/* Main Visual: Spotless Storefront Photography */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group">
                <Image
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
                  alt="Spotless Storefront Window Cleaning in NYC"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px)"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                  unoptimized
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/30 to-transparent" />

                {/* Overlaid Authentic Brand Plaque */}
                <div className="absolute top-4 right-4 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-amber-400 shadow-[0_0_25px_rgba(212,175,55,0.4)] bg-slate-950">
                  <Image
                    src="/branding/ra-glass-care-badge-round.png"
                    alt="RA Glass Care Official 3D Seal"
                    fill
                    sizes="(max-width: 640px) 96px, 112px"
                    className="object-cover"
                  />
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white text-xs font-bold">Storefront &amp; Commercial Glass</p>
                      <p className="text-[11px] text-slate-300">Streak-Free, Spotless Finish</p>
                    </div>
                    <span className="text-[10px] font-bold text-sky-400 bg-sky-950/80 border border-sky-400/30 px-2 py-0.5 rounded">
                      Astoria, NY
                    </span>
                  </div>
                </div>
              </div>

              {/* Feature Pills */}
              <div className="mt-4 grid grid-cols-3 gap-1.5 sm:gap-2">
                <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-center">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 mx-auto mb-1" />
                  <p className="text-[10px] sm:text-[11px] font-bold text-white">Insured</p>
                  <p className="text-[8px] sm:text-[9px] text-slate-400">NYC Local</p>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-center">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 mx-auto mb-1" />
                  <p className="text-[10px] sm:text-[11px] font-bold text-white">Streak-Free</p>
                  <p className="text-[8px] sm:text-[9px] text-slate-400">Spotless Finish</p>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-center">
                  <CalendarCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 mx-auto mb-1" />
                  <p className="text-[10px] sm:text-[11px] font-bold text-white">Flexible</p>
                  <p className="text-[8px] sm:text-[9px] text-slate-400">Weekly &amp; Bi-Weekly</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
