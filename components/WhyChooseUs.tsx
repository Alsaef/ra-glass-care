"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Layers,
  Sparkles,
  CalendarCheck,
  Clock,
  ShieldCheck,
  CheckCircle,
  Eye,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { VALUE_PROPS } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/contact-links";

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  CalendarCheck: <CalendarCheck className="w-6 h-6" />,
  Clock: <Clock className="w-6 h-6" />,
};

export default function WhyChooseUs() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const container = e.currentTarget.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const offset = clientX - container.left;
    const percentage = Math.max(0, Math.min(100, (offset / container.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <section id="why-us" className="py-24 bg-[#0F172A] relative overflow-hidden border-t border-slate-800">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The RA Glass Care Standard</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Why Astoria & NYC Store Owners Choose Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed"
          >
            Storefront window cleaning requires more than a spray bottle and paper towels. We bring professional-grade equipment, punctuality, and pride to every panel.
          </motion.p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {VALUE_PROPS.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-3xl glass-panel border border-slate-800 bg-[#121A2D]/80 hover:bg-[#152038] hover:border-amber-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-black/50 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400/20 to-sky-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {iconMap[prop.iconName]}
                </div>
                <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">
                  {prop.subtitle}
                </span>
                <h3 className="text-lg font-bold text-white mt-1 mb-3 group-hover:text-amber-300 transition-colors">
                  {prop.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {prop.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Guaranteed Result</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Before & After Comparison Showcase */}
        <div className="rounded-3xl glass-panel-gold p-6 sm:p-10 border border-amber-400/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Description */}
            <div className="lg:col-span-5 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-400/15 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-3">
                <Eye className="w-3.5 h-3.5" />
                <span>Visual Transformation</span>
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                See What Clean Glass Does for Your Store&apos;s Curb Appeal
              </h3>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                NYC sidewalks subject storefronts to vehicle exhaust, rain splatters, sticky fingerprints, and dust film. Our two-sided cleaning restores sparkling crystal transparency that invites shoppers inside.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-400 flex items-center justify-center shrink-0">
                    ✕
                  </div>
                  <span><strong className="text-white">Before:</strong> Smudged glass, water spots, dull facade, dark interior</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <span><strong className="text-white">After RA Care:</strong> High-luster crystal transparency, welcoming natural light</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href={getWhatsAppUrl(undefined, {
                    customMessage: "Hi Rudro! I saw the before & after transformation and would love to get my storefront cleaned.",
                  })}
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

            {/* Right Interactive Slider */}
            <div className="lg:col-span-7">
              <div className="text-center sm:text-right text-xs text-slate-400 mb-2">
                Drag slider or click left/right to compare
              </div>

              <div
                className="relative h-72 sm:h-96 rounded-2xl overflow-hidden cursor-ew-resize select-none border-2 border-white/15 shadow-2xl touch-none"
                onMouseMove={handleSliderMove}
                onTouchMove={handleSliderMove}
              >
                {/* Clean "After" Image (Full background) */}
                <Image
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
                  alt="Spotless clean storefront glass after RA Glass Care"
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover pointer-events-none"
                  unoptimized
                />
                
                {/* "After" Badge Top Right */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 px-2.5 sm:px-3 py-1 rounded-full bg-emerald-950/90 border border-emerald-400/50 text-emerald-300 text-[10px] sm:text-xs font-bold shadow-lg">
                  AFTER: Spotless ✨
                </div>

                {/* "Before" Image Container (Clipped by slider position) */}
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
                    {/* Hazy street smog overlay */}
                    <div className="absolute inset-0 bg-amber-900/20 backdrop-filter" />
                    
                    {/* "Before" Badge Top Left */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 px-2.5 sm:px-3 py-1 rounded-full bg-slate-950/90 border border-slate-700 text-slate-300 text-[10px] sm:text-xs font-bold shadow-lg whitespace-nowrap">
                      BEFORE: City Smog 🌧️
                    </div>
                  </div>
                </div>

                {/* Vertical Divider Line with handle */}
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

      </div>
    </section>
  );
}
