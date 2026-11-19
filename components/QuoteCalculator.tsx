"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  MessageCircle,
  Mail,
  MapPin,
  Building,
  Calendar,
  Layers,
  ArrowRight,
} from "lucide-react";
import { getWhatsAppUrl, getEmailMailtoUrl } from "@/lib/contact-links";

export default function QuoteCalculator() {
  const [serviceType, setServiceType] = useState("Storefront Window Cleaning");
  const [panelCount, setPanelCount] = useState("4–6 Panels");
  const [frequency, setFrequency] = useState("Weekly");
  const [neighborhood, setNeighborhood] = useState("Astoria");
  const [businessName, setBusinessName] = useState("");
  const [notes, setNotes] = useState("");
  const [applyFirstTimeDiscount, setApplyFirstTimeDiscount] = useState(true);

  // Dynamic price calculation
  const calculateEstimate = () => {
    let basePrice = 35;
    if (panelCount === "1–3 Panels") basePrice = 20;
    else if (panelCount === "4–6 Panels") basePrice = 35;
    else if (panelCount === "7–10 Panels") basePrice = 50;
    else if (panelCount === "10+ Panels / Custom") return "Custom Commercial Quote";

    // Frequency discount factor
    let freqMultiplier = 1.0;
    if (frequency === "Weekly") freqMultiplier = 0.85; // 15% discount for weekly
    else if (frequency === "Bi-Weekly") freqMultiplier = 0.90; // 10% discount for bi-weekly

    let price = basePrice * freqMultiplier;

    if (applyFirstTimeDiscount) {
      price = price * 0.8; // 20% first time discount
    }

    return `$${Math.round(price)}`;
  };

  const estimatedPrice = calculateEstimate();

  // Generate WhatsApp text
  const generateWhatsAppMessage = () => {
    const lines = [
      `👋 Hello Rudro & RA Glass Care Team!`,
      `I used your Instant Quote Builder on your website and would like to book an appointment:`,
      ``,
      `🏢 Business: ${businessName.trim() || "[Not specified yet]"}`,
      `📍 Neighborhood: ${neighborhood}, NYC`,
      `🪟 Service: ${serviceType}`,
      `📐 Panel Count: ${panelCount}`,
      `📅 Frequency: ${frequency}`,
      applyFirstTimeDiscount ? `🏷️ Promo: Applying 20% First-Time Special` : null,
      notes.trim() ? `📝 Note: ${notes.trim()}` : null,
      `💰 Estimated Rate: ${estimatedPrice} / visit`,
      ``,
      `Please let me know your earliest available morning slot. Thanks!`,
    ].filter(Boolean);

    return lines.join("\n");
  };

  const whatsAppUrl = getWhatsAppUrl(undefined, {
    customMessage: generateWhatsAppMessage(),
  });

  const emailUrl = getEmailMailtoUrl(serviceType, {
    location: `${neighborhood}, NYC`,
    panels: panelCount,
    schedule: frequency,
    businessName: businessName.trim() || "My Business",
    notes: `${applyFirstTimeDiscount ? "[Claiming 20% First-Time Local Business Special]\n" : ""}${notes}`,
  });

  return (
    <section id="quote-builder" className="py-24 bg-[#0B0F17] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Quote Generator</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Build Your Storefront Quote in 30 Seconds
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base mt-3"
          >
            Select your panel size and schedule below. Click to instantly export into a pre-filled WhatsApp message or email — no waiting for an estimate.
          </motion.p>
        </div>

        {/* Builder Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl sm:rounded-3xl glass-panel-gold p-4 sm:p-8 lg:p-10 border border-amber-400/30 shadow-2xl bg-gradient-to-b from-[#141C2E] to-[#0D1322]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Left 8 Columns: Form Options */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              
              {/* 1. Service Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-amber-400" />
                  <span>1. Choose Service Type</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Storefront Window Cleaning",
                    "Commercial & Office Glass",
                    "Inside & Outside Deep Care",
                    "Post-Construction & Opening",
                    "Display & Mirror Detailing",
                  ].map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setServiceType(service)}
                      className={`text-left p-3 rounded-xl text-xs font-semibold transition-all border ${
                        serviceType === service
                          ? "bg-amber-400/20 border-amber-400 text-amber-200 shadow-md shadow-amber-950/30"
                          : "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Panel Count */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-sky-400" />
                  <span>2. Number of Glass Panels</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { label: "1–3 Panels", base: "$20" },
                    { label: "4–6 Panels", base: "$35 (Popular)" },
                    { label: "7–10 Panels", base: "$50" },
                    { label: "10+ Panels / Custom", base: "Custom" },
                  ].map((panel) => (
                    <button
                      key={panel.label}
                      type="button"
                      onClick={() => setPanelCount(panel.label)}
                      className={`p-3 rounded-xl text-center text-xs font-semibold transition-all border ${
                        panelCount === panel.label
                          ? "bg-sky-500/25 border-sky-400 text-sky-200 shadow-md shadow-sky-950/30 font-bold"
                          : "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900"
                      }`}
                    >
                      <div className="text-white font-bold">{panel.label.split(" ")[0]}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{panel.base}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Frequency */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>3. Cleaning Frequency</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { name: "Weekly", perk: "Save 15%" },
                    { name: "Bi-Weekly", perk: "Save 10%" },
                    { name: "Monthly", perk: "Standard" },
                    { name: "One-Time Clean", perk: "As Needed" },
                  ].map((item) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setFrequency(item.name)}
                      className={`p-2.5 rounded-xl text-center text-xs font-semibold transition-all border ${
                        frequency === item.name
                          ? "bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-md shadow-emerald-950/30"
                          : "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700"
                      }`}
                    >
                      <div className="font-bold">{item.name}</div>
                      <div className="text-[10px] text-emerald-400/90 font-medium">{item.perk}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Neighborhood */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>4. Your NYC Neighborhood</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    "Astoria",
                    "Long Island City (LIC)",
                    "Sunnyside / Woodside",
                    "Other Queens",
                    "Manhattan",
                    "Brooklyn",
                  ].map((hood) => (
                    <button
                      key={hood}
                      type="button"
                      onClick={() => setNeighborhood(hood)}
                      className={`p-2.5 rounded-xl text-center text-xs font-semibold transition-all border ${
                        neighborhood === hood
                          ? "bg-amber-400/20 border-amber-400 text-amber-300"
                          : "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700"
                      }`}
                    >
                      {hood}
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional Store Name & Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">
                    Store / Cafe / Business Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Astoria Espresso / Broadway Boutique"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">
                    Preferred Time / Notes (Optional)
                  </label>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Early morning before 8 AM"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* 20% First Time Discount Toggle */}
              <div
                onClick={() => setApplyFirstTimeDiscount(!applyFirstTimeDiscount)}
                className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${
                  applyFirstTimeDiscount
                    ? "bg-amber-400/10 border-amber-400/40 text-amber-300"
                    : "bg-slate-900/40 border-slate-800 text-slate-400"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold ${
                      applyFirstTimeDiscount ? "bg-amber-400 text-slate-950" : "border border-slate-600"
                    }`}
                  >
                    {applyFirstTimeDiscount ? "✓" : ""}
                  </div>
                  <span className="text-xs font-bold">
                    Apply 20% First-Time Local Business Special
                  </span>
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400">
                  Save 20%
                </span>
              </div>

            </div>

            {/* Right 5 Columns: Live Summary & Direct CTAs */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full p-6 rounded-2xl bg-slate-950/80 border border-white/10 shadow-xl space-y-6">
              
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Instant Estimate
                  </span>
                  <span className="text-[10px] font-bold text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-400/30">
                    Live Calculation
                  </span>
                </div>

                {/* Big Price Display */}
                <div className="my-4 sm:my-5 text-center p-3 sm:p-4 rounded-xl bg-gradient-to-br from-amber-400/10 via-transparent to-sky-400/10 border border-amber-400/20">
                  <span className="text-[11px] sm:text-xs text-slate-400 block mb-1">Estimated Rate:</span>
                  <div
                    className={`${
                      estimatedPrice.includes("Custom") ? "text-xl sm:text-2xl" : "text-3xl sm:text-5xl"
                    } font-black text-white tracking-tight leading-tight`}
                  >
                    {estimatedPrice}
                  </div>
                  <span className="text-[11px] sm:text-xs text-slate-400 font-medium block mt-1">
                    {panelCount.includes("Custom") ? "Tailored commercial proposal" : "per visit • inside & outside clean"}
                  </span>
                </div>

                {/* Summary Items */}
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Service:</span>
                    <span className="font-semibold text-white">{serviceType}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Panel Scope:</span>
                    <span className="font-semibold text-white">{panelCount}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Schedule:</span>
                    <span className="font-semibold text-white">{frequency}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Location:</span>
                    <span className="font-semibold text-white">{neighborhood}, NYC</span>
                  </div>
                </div>
              </div>

              {/* Ready to Send Buttons */}
              <div className="space-y-3 pt-3">
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-xl shadow-emerald-950/50 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                  <ArrowRight className="w-4 h-4 ml-auto" />
                </a>

                <a
                  href={emailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 hover:border-amber-400/40 flex items-center justify-center gap-2 transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>Send via Email</span>
                </a>

                <p className="text-[11px] text-center text-slate-400">
                  ⚡ Rudro replies directly via WhatsApp within minutes.
                </p>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
