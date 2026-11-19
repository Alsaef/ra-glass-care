"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  MessageCircle,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { PRICING_PLANS } from "@/lib/data";
import { getWhatsAppUrl, getEmailMailtoUrl } from "@/lib/contact-links";

export default function PricingSection() {
  const [billingFrequency, setBillingFrequency] = useState<"standard" | "recurring">("recurring");

  return (
    <section id="pricing" className="py-24 bg-[#0B0F17] relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-amber-500/10 via-sky-500/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Storefront Rates</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Simple, Panel-Based Storefront Pricing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed"
          >
            No hidden fees, no mystery quotes. You pay straightforward rates based on the number of glass panels your storefront has. Inside and outside cleaning included.
          </motion.p>

          {/* Plan Schedule Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-inner">
            <button
              onClick={() => setBillingFrequency("recurring")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                billingFrequency === "recurring"
                  ? "bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md shadow-amber-900/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>Weekly & Bi-Weekly Plans</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-950/40 text-slate-900 font-extrabold uppercase">
                Best Value
              </span>
            </button>

            <button
              onClick={() => setBillingFrequency("standard")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                billingFrequency === "standard"
                  ? "bg-slate-800 text-white shadow-md border border-slate-700"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              One-Time Clean
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_PLANS.map((plan, index) => {
            const planWhatsAppUrl = getWhatsAppUrl(`${plan.name} (${plan.panels})`);
            const planEmailUrl = getEmailMailtoUrl(`${plan.name} (${plan.panels})`, {
              panels: plan.panels,
              schedule: billingFrequency === "recurring" ? "Weekly / Bi-Weekly" : "One-Time",
            });

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative flex flex-col justify-between rounded-3xl p-6 transition-all duration-300 hover:scale-[1.02] ${
                  plan.popular
                    ? "glass-panel-gold border-2 border-amber-400/90 shadow-2xl shadow-amber-500/15 bg-gradient-to-b from-[#18233C] to-[#0F172A]"
                    : "glass-panel border border-slate-800 bg-[#111827]/80 hover:border-slate-700 hover:bg-[#141E33]"
                }`}
              >
                {/* Popular Ribbon */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg shadow-amber-900/40 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  {/* Plan Header */}
                  <div className="pb-5 border-b border-white/10">
                    <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                      {plan.panels}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 min-h-[34px]">
                      {plan.description}
                    </p>

                    {/* Price Tag */}
                    <div className="mt-5 flex items-baseline gap-1.5">
                      <span className="text-4xl font-extrabold text-white tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        / {plan.period}
                      </span>
                    </div>

                    {billingFrequency === "recurring" && plan.price !== "Custom" && (
                      <p className="text-[11px] text-emerald-400 font-medium mt-1 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Consistent morning slot reserved</span>
                      </p>
                    )}
                  </div>

                  {/* Feature List */}
                  <div className="py-5 space-y-3">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      What&apos;s Included:
                    </p>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            plan.popular
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

                {/* CTAs */}
                <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                  <a
                    href={planWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-lg transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-amber-950/40"
                        : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-950/30"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Select Plan on WhatsApp</span>
                  </a>

                  <a
                    href={planEmailUrl}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-center text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-slate-600 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-amber-400" />
                    <span>Email for Custom Quote</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* What's Always Included Box */}
        <div className="mt-16 p-5 sm:p-8 rounded-2xl sm:rounded-3xl glass-panel border border-slate-700/80 max-w-5xl mx-auto">
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
              <p className="text-[11px] sm:text-xs text-slate-400 leading-snug">No locked contracts, pause or skip whenever</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
