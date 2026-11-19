"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { getWhatsAppUrl, getEmailMailtoUrl, getTelUrl } from "@/lib/contact-links";

export default function CallToActionBanner() {
  return (
    <section className="py-20 bg-[#0B0F17] relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-amber-500/15 via-sky-500/15 to-amber-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden glass-panel-gold p-8 sm:p-14 text-center border-2 border-amber-400/40 shadow-2xl bg-gradient-to-b from-[#162137] to-[#0E1524]"
        >
          {/* Subtle Shimmer highlight */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

          {/* Floating Small Brand Logo */}
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-400 mx-auto mb-6 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
            <Image
              src="/branding/ra-glass-care-badge-round.png"
              alt="RA Glass Care NYC"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Make Your Business Shine!</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto">
            Ready to Give Your Storefront the Crystal-Clear Glass It Deserves?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Join local Astoria & Queens businesses who trust RA Glass Care for reliable, inside & outside weekly and bi-weekly window cleaning.
          </p>

          {/* Dual CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl(undefined, {
                customMessage: "Hello Rudro! I'd like to book storefront window cleaning for my business in NYC.",
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto relative group overflow-hidden inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-xl shadow-emerald-950/50 transition-all hover:scale-[1.03]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Get Instant Quote on WhatsApp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={getEmailMailtoUrl("Storefront Window Cleaning Quote")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-semibold text-base text-slate-100 bg-slate-900/90 hover:bg-slate-800 border border-amber-400/30 hover:border-amber-400 transition-colors"
            >
              <Mail className="w-5 h-5 text-amber-400" />
              <span>Request Quote via Email</span>
            </a>
          </div>

          {/* Phone call pill */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Streak-Free Guarantee</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <span>Direct Phone:</span>
              <a
                href={getTelUrl()}
                className="font-bold text-amber-300 hover:text-white underline decoration-amber-400/40"
              >
                (929) 501-1116
              </a>
            </div>
            <span>•</span>
            <span>No Locked Contracts</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
