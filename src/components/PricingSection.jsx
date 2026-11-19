"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  MessageCircle,
  Mail,
  CheckCircle2,
  Tag,
  ArrowRight,
} from "lucide-react";
import { getWhatsAppLink, getGmailLink } from "../utils/contactHelpers";

export default function PricingSection() {
  const [scheduleType, setScheduleType] = useState("recurring");

  const pricingTiers = [
    {
      id: "tier-1-3",
      title: "1–3 Storefront Panels",
      price: "$20",
      period: "/ Visit",
      popular: false,
      description: "Ideal for boutique cafes, bakery walk-ups, coffee shops, and compact storefront entrances.",
      features: [
        "Inside & outside dual-sided glass cleaning",
        "Entrance door glass & handles polished",
        "Bottom sill & ledge wipe-down",
        "100% streak-free squeegee finish",
      ],
    },
    {
      id: "tier-4-6",
      title: "4–6 Panels",
      price: "$35",
      period: "/ Visit",
      popular: true,
      description: "Our most requested package. Perfectly sized for standard retail stores, restaurants, and salons.",
      features: [
        "Inside & outside cleaning up to 6 panels",
        "Double entrance doors & side lites",
        "Overhead transom glass cleaned",
        "Frame & track detail wipe",
        "Priority morning reservation",
      ],
    },
    {
      id: "tier-7-10",
      title: "7–10 Panels",
      price: "$50",
      period: "/ Visit",
      popular: false,
      description: "Designed for expansive glass facades, wrap-around corner shops, and multi-window commercial venues.",
      features: [
        "Inside & outside cleaning for 7 to 10 panels",
        "Multiple entrance doors & emergency exits",
        "Exterior awning glass & transom panels",
        "Deep hard-water spot scrub & frame wipe",
        "Consolidated monthly invoicing available",
      ],
    },
    {
      id: "tier-10-plus",
      title: "10+ Panels",
      price: "Custom Quote",
      period: "",
      popular: false,
      description: "Tailored commercial contracts for corporate offices, banks, multi-location franchises, and plazas.",
      features: [
        "Unlimited storefront panels & partitions",
        "Custom daily, weekly, or bi-weekly cadence",
        "Dedicated supervisor & account manager",
        "Full commercial liability documentation",
        "Bulk multi-storefront discount rates",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#0B0F17] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-amber-500/10 via-sky-500/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Exact Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Rates</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Simple, Panel-Based Storefront Pricing
          </h2>

          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            Straightforward pricing based on the number of glass panels on your storefront. Both inside and outside cleaning included on every visit.
          </p>

          {/* Schedule Preference Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-inner">
            <button
              onClick={() => setScheduleType("recurring")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                scheduleType === "recurring"
                  ? "bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md shadow-amber-900/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>Weekly &amp; Bi-Weekly Plans Available</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-950/40 text-slate-900 font-extrabold uppercase">
                Best Value
              </span>
            </button>

            <button
              onClick={() => setScheduleType("one-time")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                scheduleType === "one-time"
                  ? "bg-slate-800 text-white shadow-md border border-slate-700"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              One-Time Clean
            </button>
          </div>
        </div>

        {/* Introductory Offer Highlight Banner: Save 20% */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-7 mb-14 bg-gradient-to-r from-[#172033] via-[#1E293B] to-[#131C2E] border-2 border-amber-400/40 shadow-xl"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-md shrink-0">
                <Tag className="w-6 h-6 text-slate-950" />
              </div>
              <div>
                <span className="inline-block text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
                  Limited-Time Local Special
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Introductory Offer — Save 20% on Your First Service!
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-1">
                  New local businesses in Astoria &amp; Queens receive 20% off their first storefront cleaning.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full lg:w-auto shrink-0">
              <a
                href={getWhatsAppLink("20% Off Introductory Special")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-950/30"
              >
                <MessageCircle className="w-4 h-4 text-slate-950" />
                <span>Claim 20% on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={getGmailLink("20% Off Introductory Special")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-3 rounded-xl font-semibold text-xs text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 transition-colors flex items-center justify-center gap-1.5"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>Inquire via Gmail</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* 4 Pricing Tiers Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-16">
          {pricingTiers.map((tier, index) => {
            const whatsAppLink = getWhatsAppLink(tier.title);
            const gmailLink = getGmailLink(tier.title, {
              time: scheduleType === "recurring" ? "Weekly / Bi-Weekly Route" : "One-Time Clean",
            });

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative flex flex-col justify-between rounded-3xl p-6 transition-all duration-300 hover:scale-[1.02] ${
                  tier.popular
                    ? "glass-panel-gold border-2 border-amber-400/90 shadow-2xl shadow-amber-500/15 bg-gradient-to-b from-[#18233C] to-[#0F172A]"
                    : "glass-panel border border-slate-800 bg-[#111827]/85 hover:border-slate-700"
                }`}
              >
                {/* Popular Ribbon */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg shadow-amber-900/40 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  {/* Tier Header */}
                  <div className="pb-5 border-b border-white/10">
                    <h3 className="text-xl font-bold text-white mt-1">
                      {tier.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 min-h-[34px]">
                      {tier.description}
                    </p>

                    {/* Price display */}
                    <div className="mt-5 flex items-baseline gap-1.5">
                      <span className="text-4xl font-extrabold text-white tracking-tight">
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span className="text-xs text-slate-400 font-medium">
                          {tier.period}
                        </span>
                      )}
                    </div>

                    {scheduleType === "recurring" && tier.price !== "Custom Quote" && (
                      <p className="text-[11px] text-emerald-400 font-medium mt-1 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Recurring route discount applied</span>
                      </p>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <div className="py-5 space-y-3">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      What&apos;s Included:
                    </p>
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            tier.popular
                              ? "bg-amber-400/20 text-amber-300 border border-amber-400/40"
                              : "bg-sky-400/15 text-sky-300 border border-sky-400/30"
                          }`}
                        >
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2 Buttons: Book via WhatsApp & Inquire via Gmail */}
                <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                  <a
                    href={whatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-lg transition-all ${
                      tier.popular
                        ? "bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-amber-950/40"
                        : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-950/30"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Book via WhatsApp</span>
                  </a>

                  <a
                    href={gmailLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-center text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-slate-600 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-amber-400" />
                    <span>Inquire via Gmail</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Reassurance Feature Grid */}
        <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl glass-panel border border-slate-700/80 max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Every RA Glass Care Visit Always Includes
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Standard operating excellence for all Astoria, Queens &amp; NYC clients
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/5">
              <span className="text-amber-400 font-bold text-xs sm:text-sm block mb-1">Dual-Sided Cleaning</span>
              <p className="text-[11px] sm:text-xs text-slate-400 leading-snug">Exterior city grime + interior touch-points</p>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/5">
              <span className="text-sky-400 font-bold text-xs sm:text-sm block mb-1">Pure Squeegee Finish</span>
              <p className="text-[11px] sm:text-xs text-slate-400 leading-snug">Zero streak residue, haze, or water drips</p>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/5">
              <span className="text-amber-400 font-bold text-xs sm:text-sm block mb-1">Frames &amp; Sills Wiped</span>
              <p className="text-[11px] sm:text-xs text-slate-400 leading-snug">Detailed rubber gasket and ledge dust extraction</p>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/5">
              <span className="text-sky-400 font-bold text-xs sm:text-sm block mb-1">Flexible Schedule</span>
              <p className="text-[11px] sm:text-xs text-slate-400 leading-snug">Weekly &amp; bi-weekly plans available</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
