"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, MessageCircle, Mail, Tag, ArrowRight } from "lucide-react";
import { getWhatsAppUrl, getEmailMailtoUrl } from "@/lib/contact-links";

export default function IntroOfferBanner() {
  const offerWhatsAppUrl = getWhatsAppUrl(undefined, {
    customMessage: "Hi RA Glass Care! I'd like to claim the 20% Introductory Offer for my storefront.",
  });

  const offerEmailUrl = getEmailMailtoUrl("20% Off Introductory Special", {
    notes: "I would like to claim the 20% First-Time Local Business Special for my storefront.",
  });

  return (
    <section className="relative z-20 py-8 px-4 sm:px-6 lg:px-8 -mt-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#172033] via-[#1E293B] to-[#131C2E] border-2 border-amber-400/40 shadow-[0_10px_40px_rgba(212,175,55,0.15)]"
        >
          {/* Shimmer Ambient Background */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

          {/* Shimmer highlight strip */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/5 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left Content */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 max-w-2xl">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/30 shrink-0">
                <Tag className="w-7 h-7 text-slate-950" />
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Exclusive Astoria & Queens Offer</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  First-Time Local Business Special:{" "}
                  <span className="text-amber-400 underline decoration-amber-400/40 underline-offset-4">
                    Save 20%
                  </span>{" "}
                  on Your First Clean!
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Experience the difference sparkling, crystal-clear glass makes for your foot traffic. Mention this offer via WhatsApp or Email to lock in 20% off your first service.
                </p>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
              <a
                href={offerWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto relative group overflow-hidden inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 shadow-xl shadow-amber-900/30 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 text-slate-950" />
                <span>Claim 20% on WhatsApp</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={offerEmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-amber-400/50 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>Claim via Email</span>
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
