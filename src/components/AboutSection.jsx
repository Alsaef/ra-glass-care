"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  Phone,
  Mail,
  MessageCircle,
  ExternalLink,
  X,
  Layers,
  Sparkles,
  Clock,
  Eye,
  ArrowRight,
} from "lucide-react";
import { getWhatsAppLink, getGmailLink, getPhoneLink, BRAND_INFO } from "../utils/contactHelpers";

export default function AboutSection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderMove = (e) => {
    const container = e.currentTarget.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const offset = clientX - container.left;
    const percentage = Math.max(0, Math.min(100, (offset / container.width) * 100));
    setSliderPosition(percentage);
  };

  const brandPromises = [
    {
      title: "A Clean Storefront Makes a Great First Impression",
      description: "When pedestrians walk past your shop on 30th Ave or Broadway, crystal-clear glass invites them in immediately.",
      icon: Award,
    },
    {
      title: "Inside & Outside Cleaning",
      description: "We don't do half-hearted quick wipes. We clean both the exterior street grime and interior fingerprints.",
      icon: Layers,
    },
    {
      title: "Streak-Free, Spotless Finish",
      description: "Purified water wash and professional brass squeegees ensure optical transparency without haze or water drips.",
      icon: Sparkles,
    },
    {
      title: "Reliable & On-Time Service",
      description: "We show up punctually during early morning slots before store doors open, respecting your operating hours.",
      icon: Clock,
    },
  ];

  const brandAssets = [
    {
      src: "/branding/ra-glass-care-founder.jpg",
      title: "Founder Card & Official Seal",
      subtitle: "Rudro — Founder, RA Glass Care",
    },
    {
      src: "/branding/ra-glass-care-stationery.jpg",
      title: "Storefront Collateral & Pricing Guide",
      subtitle: "Official Queens & NYC Rate Sheet",
    },
    {
      src: "/branding/ra-glass-care-flyer.jpg",
      title: "Storefront Squeegee Poster & Flyer",
      subtitle: "Local Business Marketing Collateral",
    },
    {
      src: "/branding/ra-glass-care-badge-round.png",
      title: "Metallic Gold & Cyan 3D Plaque",
      subtitle: "RA Glass Care Signature Emblem",
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0F172A] relative overflow-hidden border-t border-slate-800">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Founder Letter & Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Founder Photo & Plaque Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-panel-gold p-4 shadow-2xl border-2 border-amber-400/40 bg-[#141C2E]">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group">
                <Image
                  src="/branding/ra-glass-care-founder.jpg"
                  alt="Rudro, Founder of RA Glass Care"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-amber-400/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white text-base font-extrabold">{BRAND_INFO.founder}</h4>
                      <p className="text-xs text-amber-400 font-semibold">Founder, {BRAND_INFO.name}</p>
                    </div>
                    <span className="text-[10px] font-bold text-sky-400 bg-sky-950 px-2.5 py-1 rounded-full border border-sky-400/30">
                      Astoria, Queens
                    </span>
                  </div>
                </div>
              </div>

              {/* Founder Direct Action Buttons */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] sm:text-xs">
                <a
                  href={getPhoneLink()}
                  className="p-2.5 sm:p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-amber-400/50 text-slate-200 font-semibold flex items-center justify-center gap-1.5 sm:gap-2 transition-colors whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Call (929) 501-1116</span>
                </a>

                <a
                  href={getWhatsAppLink("General Founder Inquiry")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 border border-emerald-400/40 text-white font-bold flex items-center justify-center gap-1.5 sm:gap-2 transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>WhatsApp Rudro</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Founder's Story & Brand Promises */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 w-fit">
              <Award className="w-3.5 h-3.5" />
              <span>About RA Glass Care</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              &ldquo;When people walk down your block, they judge your store in three seconds.&rdquo;
            </h2>

            <div className="mt-5 space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                In a bustling city like New York, your glass is your business&apos;s handshake. When pedestrians stroll down 30th Ave, Broadway, or Steinway Street, smudged windows, water spots, and street soot tell them your shop isn&apos;t well maintained.
              </p>
              <p>
                Founded by <strong className="text-white font-semibold">Rudro</strong> in Astoria, Queens, <strong className="text-white font-semibold">RA Glass Care</strong> provides local storefront owners with five-star, luxury-grade glass cleaning at straightforward rates.
              </p>
            </div>

            {/* 4 Core Brand Promises */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-slate-800">
              {brandPromises.map((promise, idx) => {
                const Icon = promise.icon;
                return (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon className="w-4 h-4 text-amber-400 shrink-0" />
                      <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                        {promise.title}
                      </h4>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-400 leading-normal">
                      {promise.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Founder Signoff */}
            <div className="mt-7 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <p className="text-base font-bold text-white font-serif italic">— Rudro</p>
                <p className="text-xs text-amber-400">Founder &amp; Lead Technician, RA Glass Care</p>
                <p className="text-xs text-slate-400">Astoria, Queens, New York City</p>
              </div>

              <a
                href={getGmailLink("General Inquiry")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-amber-400 transition-colors underline underline-offset-4"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>raglasscare@gmail.com</span>
              </a>
            </div>
          </motion.div>

        </div>

        {/* Before & After Interactive Showcase */}
        <div className="rounded-3xl glass-panel-gold p-6 sm:p-10 border border-amber-400/30 shadow-2xl mb-20 bg-[#121A2D]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-400/15 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-3">
                <Eye className="w-3.5 h-3.5" />
                <span>Visual Transformation</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                See What Clean Glass Does for Your Store&apos;s Curb Appeal
              </h3>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                NYC sidewalks subject storefronts to vehicle exhaust, rain splatters, sticky fingerprints, and dust film. Our two-sided cleaning restores sparkling crystal transparency that invites shoppers inside.
              </p>

              <div className="mt-6 space-y-2.5">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-400 flex items-center justify-center shrink-0">
                    ✕
                  </div>
                  <span><strong className="text-white">Before:</strong> Smudged glass, rain spots, and street smog</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <span><strong className="text-white">After RA Care:</strong> Spotless, streak-free clarity &amp; bright natural light</span>
                </div>
              </div>

              <div className="mt-7 pt-6 border-t border-white/10">
                <a
                  href={getWhatsAppLink("Storefront Transformation")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-lg shadow-amber-950/40"
                >
                  <MessageCircle className="w-4 h-4 text-slate-950" />
                  <span>Book Your Transformation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="text-center sm:text-right text-xs text-slate-400 mb-2">
                Drag slider or swipe to compare
              </div>

              <div
                className="relative h-72 sm:h-96 rounded-2xl overflow-hidden cursor-ew-resize select-none border-2 border-white/15 shadow-2xl touch-none"
                onMouseMove={handleSliderMove}
                onTouchMove={handleSliderMove}
              >
                {/* Clean "After" Image */}
                <Image
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
                  alt="Spotless clean storefront glass after RA Glass Care"
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover pointer-events-none"
                  unoptimized
                />
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 px-2.5 sm:px-3 py-1 rounded-full bg-emerald-950/90 border border-emerald-400/50 text-emerald-300 text-[10px] sm:text-xs font-bold shadow-lg">
                  AFTER: Spotless ✨
                </div>

                {/* "Before" Image Container */}
                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
                      alt="Dirty smudged storefront before window cleaning"
                      fill
                      sizes="(max-width: 1024px) 100vw, 700px"
                      className="object-cover brightness-75 contrast-90 filter blur-[1px]"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-amber-900/20 backdrop-filter" />
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 px-2.5 sm:px-3 py-1 rounded-full bg-slate-950/90 border border-slate-700 text-slate-300 text-[10px] sm:text-xs font-bold shadow-lg whitespace-nowrap">
                      BEFORE: City Smog 🌧️
                    </div>
                  </div>
                </div>

                {/* Divider Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-amber-400 z-20 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-xs shadow-xl border-2 border-slate-950">
                    ↔
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Brand Collateral Gallery */}
        <div className="pt-10 border-t border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Verified Brand Identity
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Official RA Glass Care Materials
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Official circular stickers, visiting cards, and flyers used across Astoria storefronts. Click to view.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {brandAssets.map((asset, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => setSelectedImage(asset.src)}
                className="group relative rounded-2xl overflow-hidden glass-panel border border-slate-800 hover:border-amber-400/50 cursor-pointer aspect-square transition-all duration-300 hover:scale-[1.03]"
              >
                <Image
                  src={asset.src}
                  alt={asset.title}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-xs font-bold text-white leading-tight">
                    {asset.title}
                  </p>
                  <p className="text-[10px] text-amber-400 mt-0.5">
                    {asset.subtitle}
                  </p>
                </div>

                <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-slate-950/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-3xl w-full max-h-[85vh] rounded-2xl overflow-hidden border border-amber-400/40 shadow-2xl bg-slate-950 p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-900/90 text-white flex items-center justify-center hover:bg-amber-400 hover:text-slate-950 transition-colors shadow-lg"
                aria-label="Close"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={selectedImage}
                  alt="Enlarged RA Glass Care Brand Asset"
                  fill
                  sizes="(max-width: 1024px) 95vw, 800px"
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
