"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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
  Store,
  Tag,
  Layers,
  Clock,
} from "lucide-react";
import {
  getWhatsAppLink,
  getGmailLink,
  getPhoneLink,
} from "../utils/contactHelpers";

export default function HomePage() {
  const trustHighlights = [
    {
      title: "Inside & Outside Cleaning",
      desc: "Complete dual-sided wash removes street smog and indoor fingerprints.",
      icon: Layers,
      color: "text-amber-400",
      bg: "bg-amber-400/10 border-amber-400/20",
    },
    {
      title: "Streak-Free, Spotless Finish",
      desc: "Professional squeegee techniques ensure 100% optical glass clarity.",
      icon: Sparkles,
      color: "text-sky-400",
      bg: "bg-sky-400/10 border-sky-400/20",
    },
    {
      title: "Weekly & Bi-Weekly Plans",
      desc: "Set-and-forget recurring care with priority early morning route slots.",
      icon: CalendarCheck,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10 border-emerald-400/20",
    },
    {
      title: "Reliable & On-Time Service",
      desc: "Punctual visits before store opening hours so business is never disrupted.",
      icon: Clock,
      color: "text-amber-300",
      bg: "bg-amber-300/10 border-amber-300/20",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-[#0B0F17]">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
        {/* Background Ambient Glow Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-amber-500/15 via-sky-500/10 to-transparent rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-16 right-10 w-80 h-80 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />
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
                <span>Serving Astoria, Queens &amp; NYC</span>
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
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-amber-400/30 hover:border-amber-400 shadow-lg shadow-black/40 transition-all duration-300 hover:scale-[1.02]"
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
                  <span className="font-bold text-white">5.0 Star Rated</span> • Trusted by Astoria &amp; Queens retail businesses
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
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

      {/* ================= TRUST HIGHLIGHTS STRIP ================= */}
      <section className="py-12 bg-[#0E1524] border-y border-slate-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${item.bg}`}>
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{item.title}</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FEATURED MULTI-PAGE OVERVIEW CARDS ================= */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 inline-block mb-3">
              Comprehensive Service
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Explore Our Dedicated Solutions
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3">
              Learn about our specialized glass techniques or check our transparent panel pricing plans designed for Queens &amp; NYC storefronts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-16">
            
            {/* Dedicated Card 1: Specialized Glass */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group flex flex-col justify-between rounded-3xl overflow-hidden glass-panel-gold border-2 border-amber-400/30 bg-[#141C2E] p-6 sm:p-8 hover:border-amber-400/80 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
                    <Store className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-sky-300 bg-sky-950/80 border border-sky-400/30 px-3 py-1 rounded-full">
                    Dedicated Page
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-white mb-2">
                  Specialized Glass Cleaning
                </h3>
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  Deep dual-sided washing for retail storefronts, commercial multi-bay facades, entrance doors, and transoms. Includes an interactive photo work gallery.
                </p>

                <div className="space-y-2.5 mb-8">
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Storefront Window Cleaning &amp; Entry Doors</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Commercial Multi-Panel Glass Care</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Inside &amp; Outside Streak-Free Detailing</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Weekly &amp; Bi-Weekly Recurring Routes</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/specialized-glass"
                  className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-950/40 transition-all hover:scale-[1.02]"
                >
                  <span>Explore Specialized Glass</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={getWhatsAppLink("Specialized Glass Inquiry")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* Dedicated Card 2: Simple, Panel-Based Storefront Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group flex flex-col justify-between rounded-3xl overflow-hidden glass-panel-gold border-2 border-amber-400/60 bg-[#162035] p-6 sm:p-8 hover:border-amber-400 transition-all duration-300 shadow-2xl shadow-amber-950/30"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
                    <Tag className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-amber-300 bg-amber-950/80 border border-amber-400/30 px-3 py-1 rounded-full">
                    Transparent Rates
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-white mb-2">
                  Simple, Panel-Based Pricing
                </h3>
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  Predictable rates with zero hidden fees. Count your storefront panels and know your cost upfront. Includes both inside and outside cleaning on every single visit.
                </p>

                {/* Micro Price Tiers preview */}
                <div className="grid grid-cols-2 gap-2.5 mb-8">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                    <p className="text-[11px] text-slate-400">1–3 Panels</p>
                    <p className="text-lg font-extrabold text-white">From $20</p>
                  </div>
                  <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/30">
                    <p className="text-[11px] text-amber-300 font-bold">4–6 Panels (Popular)</p>
                    <p className="text-lg font-extrabold text-amber-300">From $35</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                    <p className="text-[11px] text-slate-400">7–10 Panels</p>
                    <p className="text-lg font-extrabold text-white">From $50</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                    <p className="text-[11px] text-slate-400">10+ Panels</p>
                    <p className="text-lg font-extrabold text-sky-300">Custom</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/pricing"
                  className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-950/40 transition-all hover:scale-[1.02]"
                >
                  <span>View All Pricing &amp; Save 20%</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </Link>
                <a
                  href={getGmailLink("Pricing Inquiry")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>Inquire</span>
                </a>
              </div>
            </motion.div>

          </div>

          {/* ================= ABOUT / FOUNDER HIGHLIGHT TEASER ================= */}
          <div className="rounded-3xl glass-panel border border-slate-800 bg-[#111827]/70 p-6 sm:p-10 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-4 relative aspect-[4/3] rounded-2xl overflow-hidden border border-amber-400/30">
                <Image
                  src="/branding/ra-glass-care-founder.jpg"
                  alt="Rudro - Founder of RA Glass Care"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-slate-950/80 backdrop-blur-sm border border-white/10">
                  <p className="text-white text-xs font-bold">Rudro — Founder</p>
                  <p className="text-[10px] text-amber-400">Astoria Local Window Specialist</p>
                </div>
              </div>

              <div className="lg:col-span-8 flex flex-col items-start">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">
                  Meet The Founder
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  A Clean Storefront Makes a Great First Impression
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  “When pedestrians stroll past your storefront on 30th Avenue or Broadway, sparkling clean glass creates an immediate sense of trust and excellence. At RA Glass Care, we don’t cut corners — we give your business the shine it deserves.”
                </p>
                
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-amber-400/40 text-amber-300 font-bold text-xs sm:text-sm transition-all"
                  >
                    <span>Read Rudro&apos;s Story &amp; Quality Standards</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 font-semibold text-xs sm:text-sm transition-colors"
                  >
                    <span>Go to Contact Page</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* ================= FINAL CTA STRIP ================= */}
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-amber-500/15 via-[#18233C] to-sky-500/15 border-2 border-amber-400/40 text-center relative overflow-hidden">
            <div className="max-w-2xl mx-auto relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-400/30">
                Ready for Sparkling Glass?
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Let&apos;s Make Your Business Stand Out
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mb-8">
                Same-day response, free on-site estimate, and 100% streak-free guarantee. Available across Astoria, Queens &amp; NYC metro.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/40"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant WhatsApp Chat</span>
                </a>

                <a
                  href={getGmailLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-amber-400/40 text-slate-100 font-semibold text-sm flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>Send Google Gmail</span>
                </a>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-300 font-semibold text-sm flex items-center justify-center gap-1.5"
                >
                  <span>Custom Quote Builder</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
