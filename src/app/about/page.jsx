"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  Phone,
  MessageCircle,
  X,
  Layers,
  Sparkles,
  Clock,
  Eye,
  ArrowRight,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import {
  getWhatsAppLink,
  getPhoneLink,
} from "../../utils/contactHelpers";

export default function AboutPage() {
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
      description:
        "When pedestrians walk past your shop on 30th Ave or Broadway, crystal-clear glass invites them in immediately.",
      icon: Award,
    },
    {
      title: "Inside & Outside Cleaning",
      description:
        "We don't do half-hearted quick wipes. We clean both the exterior street grime and interior fingerprints.",
      icon: Layers,
    },
    {
      title: "Streak-Free, Spotless Finish",
      description:
        "Purified water wash and professional brass squeegees ensure optical transparency without haze or water drips.",
      icon: Sparkles,
    },
    {
      title: "Reliable & On-Time Service",
      description:
        "We show up punctually during early morning slots before store doors open, respecting your operating hours.",
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
    <div className="pt-28 pb-20 bg-[#0F172A] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 pt-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Heritage &amp; Commitment</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About RA Glass Care
          </h1>

          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            Founded by Rudro in Astoria, Queens. Dedicated to making NYC storefronts and retail spaces shine with crystal-clear, streak-free glass.
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-sky-400">
            <MapPin className="w-3.5 h-3.5" />
            <span>Locally Owned &amp; Operated in Astoria, Queens, NY</span>
          </div>
        </div>

        {/* Founder Letter & Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Founder Photo & Plaque Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-panel-gold p-4 shadow-2xl border-2 border-amber-400/40 bg-[#141C2E]">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group">
                <Image
                  src="/branding/ra-glass-care-founder.jpg"
                  alt="Rudro - Founder of RA Glass Care"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent" />
                
                {/* Floating badge */}
                <div className="absolute top-4 right-4 w-16 h-16 rounded-full overflow-hidden border-2 border-amber-400 shadow-lg bg-slate-950">
                  <Image
                    src="/branding/ra-glass-care-badge-round.png"
                    alt="RA Glass Care Emblem"
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>

                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10">
                  <p className="text-white text-xs font-bold">Rudro</p>
                  <p className="text-[10px] text-amber-400">Founder &amp; Lead Cleaner, RA Glass Care</p>
                </div>
              </div>

              {/* Founder quote pill */}
              <div className="mt-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-300">
                <p className="italic">
                  “A sparkling clean storefront isn&apos;t a luxury — it is your business&apos;s strongest visual handshake with every passing customer.”
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Founder Letter & Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-400/20">
              <Award className="w-3.5 h-3.5" />
              <span>Founder Letter</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
              Dear Store Owner &amp; Business Manager,
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                As a local resident of Astoria, I walk past our vibrant retail avenues every day — from Steinway Street and 30th Avenue to Broadway and Ditmars. One thing became crystal clear to me: <strong className="text-white font-semibold">a clean storefront makes an incredible first impression</strong>.
              </p>
              <p>
                Far too often, busy business owners struggle with haze, stubborn tape residue, fingerprints, and rain grime because other services only give glass a hasty surface wipe. At RA Glass Care, we founded our company on a single, uncompromising principle: <span className="text-amber-300 font-semibold">thorough dual-sided inside &amp; outside cleaning with zero streaks</span>.
              </p>
              <p>
                Whether you operate a neighborhood cafe, bakery, boutique, beauty salon, or a multi-panel retail store, we offer punctual morning routes that keep your storefront sparkling before doors open — without locking you into binding contracts.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-white font-bold text-sm">Sincerely,</p>
                <p className="text-amber-400 font-serif font-extrabold text-lg">Rudro</p>
                <p className="text-slate-400 text-xs">Founder, RA Glass Care • Astoria, Queens, NYC</p>
              </div>

              <div className="flex gap-2">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs flex items-center gap-1.5 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat with Rudro</span>
                </a>
                <a
                  href={getPhoneLink()}
                  className="px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <span>Call</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 4 Core Standards & Brand Promises */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-2">
              Our 4 Pillars
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              The RA Glass Care Standard of Excellence
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-2">
              What sets our service apart on every commercial and storefront visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandPromises.map((promise, index) => {
              const Icon = promise.icon;
              return (
                <motion.div
                  key={promise.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 rounded-3xl glass-panel border border-slate-800 bg-[#131B2E] flex flex-col justify-between hover:border-amber-400/50 transition-all shadow-lg"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 leading-snug">
                      {promise.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {promise.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Guaranteed on every visit</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Interactive Before & After Glass Clarity Comparison Slider */}
        <div className="mb-20 rounded-3xl glass-panel-gold border-2 border-amber-400/40 bg-[#141D30] p-6 sm:p-10 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
              Clarity Transformation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              See the Streak-Free Difference
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-2">
              Drag the interactive slider to see how RA Glass Care removes road dust, weather film, and smudges to reveal crystal-clear transparency.
            </p>
          </div>

          <div
            className="relative aspect-[16/9] max-w-4xl mx-auto rounded-2xl overflow-hidden border-2 border-white/10 select-none cursor-ew-resize shadow-2xl"
            onMouseMove={handleSliderMove}
            onTouchMove={handleSliderMove}
          >
            {/* After Image (Full Background) */}
            <Image
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
              alt="After RA Glass Care Clean Window"
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-cover"
              unoptimized
            />
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-600/90 text-white font-extrabold text-xs tracking-wider uppercase backdrop-blur-sm shadow-md">
              After: Spotless Squeegee Finish
            </div>

            {/* Before Image (Clipped Left Layer with Grime Filter Simulation) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-full h-full min-w-[700px] sm:min-w-[900px]">
                <Image
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
                  alt="Before Cleaning Window"
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-cover filter contrast-75 brightness-75 blur-[1px]"
                  unoptimized
                />
                {/* Simulated Street Grime / Rain Haze Texture */}
                <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-[2px]" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/90 text-amber-300 font-extrabold text-xs tracking-wider uppercase backdrop-blur-sm border border-amber-400/40">
                  Before: Smog &amp; Rain Grime
                </div>
              </div>
            </div>

            {/* Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-amber-400 shadow-[0_0_15px_rgba(212,175,55,0.8)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-xs shadow-xl border-2 border-white">
                ↔
              </div>
            </div>
          </div>
        </div>

        {/* Official Brand Collateral Gallery */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-2">
              Authentic Brand Assets
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Official Collateral &amp; Brand Badges
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-2">
              Our official business cards, storefront posters, marketing flyers, and signature 3D seal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {brandAssets.map((asset, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => setSelectedImage(asset)}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-amber-400/60 shadow-lg bg-slate-900"
              >
                <Image
                  src={asset.src}
                  alt={asset.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-3 rounded-full bg-slate-950/80 text-amber-400 border border-amber-400/40 backdrop-blur-sm">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <p className="text-xs font-bold text-white line-clamp-1">{asset.title}</p>
                  <p className="text-[10px] text-slate-300">{asset.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal for Brand Assets */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-2xl w-full rounded-3xl overflow-hidden glass-panel-gold border-2 border-amber-400/50 bg-[#131B2E] p-4 sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white border border-white/20 z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-4 border border-white/10">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white">{selectedImage.title}</h3>
                  <p className="text-xs text-slate-400">{selectedImage.subtitle}</p>
                </div>
                <a
                  href={getWhatsAppLink("Brand Inquiry")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect with Rudro</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Service Coverage & CTA Strip */}
        <div className="rounded-3xl glass-panel-gold border-2 border-amber-400/40 bg-[#162035] p-8 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Proudly Serving Astoria, Queens &amp; NYC
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            We operate throughout Astoria, Long Island City, Sunnyside, Woodside, and across New York City. Contact us today to discuss a customized window care schedule.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-950/40"
            >
              <span>Contact Us &amp; Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 font-semibold text-sm transition-colors"
            >
              <span>Explore Pricing Plans</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
