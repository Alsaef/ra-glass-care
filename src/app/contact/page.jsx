"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  Building,
  Layers,
  ArrowRight,
  ShieldCheck,
  Tag,
} from "lucide-react";
import {
  getWhatsAppLink,
  getGmailLink,
  getPhoneLink,
  BRAND_INFO,
} from "../../utils/contactHelpers";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    businessName: "",
    address: "",
    serviceType: "Storefront Window Cleaning",
    panelCount: "4–6 Panels ($35)",
    preferredTime: "Early Morning (Before store opens)",
    notes: "",
  });

  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Compile structured message for WhatsApp
  const compiledWhatsAppMessage = `Hello Rudro / RA Glass Care,
I would like to request window cleaning for my business:
• Business Name: ${formData.businessName || "Not specified"}
• Address/Location: ${formData.address || "Astoria, Queens, NYC"}
• Service: ${formData.serviceType}
• Storefront Size: ${formData.panelCount}
• Preferred Time: ${formData.preferredTime}
${formData.notes ? `• Additional Notes: ${formData.notes}` : ""}
Please let me know your earliest available slot!`;

  const dynamicWhatsAppUrl = getWhatsAppLink(null, compiledWhatsAppMessage);

  const dynamicGmailUrl = getGmailLink(formData.serviceType, {
    businessName: formData.businessName,
    location: formData.address || "Astoria, Queens, NYC",
    time: `${formData.panelCount} | ${formData.preferredTime}`,
    notes: formData.notes,
  });

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(BRAND_INFO.primaryPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <div className="pt-28 pb-20 bg-[#0B0F17] relative overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] bg-gradient-to-bl from-amber-500/10 via-sky-500/5 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 pt-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Fast Local Dispatch</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact RA Glass Care
          </h1>

          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            Reach out directly to Rudro. Choose WhatsApp for instant dispatch scheduling, Google Gmail for written estimates, or direct phone call.
          </p>
        </div>

        {/* 4 Direct Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          
          {/* Card 1: WhatsApp */}
          <div className="rounded-3xl p-6 glass-panel border border-emerald-500/30 bg-[#0F1E1E]/60 flex flex-col justify-between hover:border-emerald-400/60 transition-all duration-300 shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                Instant Chat
              </span>
              <h2 className="text-lg font-bold text-white mt-1">WhatsApp Us</h2>
              <p className="text-xs text-slate-300 mt-1">
                Fastest response time. Send a storefront photo for an instant quote.
              </p>
              <p className="text-sm font-semibold text-emerald-300 mt-3 font-mono">
                {BRAND_INFO.primaryPhone}
              </p>
            </div>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Open WhatsApp</span>
            </a>
          </div>

          {/* Card 2: Google Gmail */}
          <div className="rounded-3xl p-6 glass-panel border border-amber-500/30 bg-[#1E1B15]/60 flex flex-col justify-between hover:border-amber-400/60 transition-all duration-300 shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                Google Gmail
              </span>
              <h2 className="text-lg font-bold text-white mt-1">Send Email</h2>
              <p className="text-xs text-slate-300 mt-1">
                Opens Google Gmail compose in a new tab with pre-filled details.
              </p>
              <p className="text-xs font-semibold text-amber-300 mt-3 break-all font-mono">
                {BRAND_INFO.email}
              </p>
            </div>
            <a
              href={getGmailLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Compose on Gmail</span>
            </a>
          </div>

          {/* Card 3: Direct Phone Call */}
          <div className="rounded-3xl p-6 glass-panel border border-sky-500/30 bg-[#111A2E]/60 flex flex-col justify-between hover:border-sky-400/60 transition-all duration-300 shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400">
                Call or Text
              </span>
              <h2 className="text-lg font-bold text-white mt-1">Direct Phone</h2>
              <p className="text-xs text-slate-300 mt-1">
                Speak directly with Rudro for scheduling and urgent cleanings.
              </p>
              <div className="mt-3 space-y-0.5">
                <p className="text-sm font-semibold text-sky-300 font-mono">
                  {BRAND_INFO.primaryPhone}
                </p>
                <p className="text-xs text-slate-400 font-mono">
                  Alt: {BRAND_INFO.secondaryPhone}
                </p>
              </div>
            </div>
            <div className="mt-5 flex gap-2">
              <a
                href={getPhoneLink()}
                className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-sky-400/40 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>Call</span>
              </a>
              <button
                onClick={handleCopyPhone}
                className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 text-xs font-medium transition-colors"
                title="Copy phone number"
              >
                {copiedPhone ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          {/* Card 4: Service Area */}
          <div className="rounded-3xl p-6 glass-panel border border-slate-700 bg-[#131B2E]/60 flex flex-col justify-between hover:border-slate-600 transition-all duration-300 shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                Local Presence
              </span>
              <h2 className="text-lg font-bold text-white mt-1">Service Area</h2>
              <p className="text-xs text-slate-300 mt-1">
                Astoria, Long Island City, Sunnyside, Woodside, and across Queens &amp; NYC.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-slate-300">
                  Astoria
                </span>
                <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-slate-300">
                  LIC
                </span>
                <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-slate-300">
                  Queens
                </span>
                <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-slate-300">
                  NYC
                </span>
              </div>
            </div>
            <div className="mt-5 py-2.5 px-3 rounded-xl bg-white/[0.04] border border-white/10 text-center">
              <span className="text-[11px] text-slate-300 font-medium">
                Punctual early morning visits
              </span>
            </div>
          </div>

        </div>

        {/* Interactive Custom Message Builder */}
        <div className="rounded-3xl glass-panel-gold border-2 border-amber-400/40 bg-[#131C2E] p-6 sm:p-10 shadow-2xl mb-16">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="inline-block text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              Interactive Custom Inquiry
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Customize Your Window Cleaning Inquiry
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-2">
              Select your storefront details below. Clicking either button generates a pre-formatted message directly into WhatsApp or Google Gmail — no manual typing required!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            
            {/* Field: Business Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Business Name
              </label>
              <div className="relative">
                <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="e.g. Astoria Artisan Cafe &amp; Bakery"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 focus:border-amber-400 text-white text-sm outline-none transition-colors"
                />
              </div>
            </div>

            {/* Field: Location / Cross Streets */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Location / Cross Streets
              </label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="e.g. 30th Ave &amp; Steinway St, Astoria"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 focus:border-amber-400 text-white text-sm outline-none transition-colors"
                />
              </div>
            </div>

            {/* Field: Service Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Service Type
              </label>
              <div className="relative">
                <Layers className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 focus:border-amber-400 text-white text-sm outline-none transition-colors appearance-none"
                >
                  <option value="Storefront Window Cleaning">Storefront Window Cleaning (Standard)</option>
                  <option value="Commercial Glass Care">Commercial Glass Care (Multi-bay)</option>
                  <option value="Inside & Outside Streak-Free Detailing">Inside &amp; Outside Deep Detailing</option>
                  <option value="Weekly & Bi-Weekly Maintenance Plan">Weekly &amp; Bi-Weekly Maintenance Plan</option>
                  <option value="Introductory 20% Off Offer">Introductory 20% Off First Cleaning</option>
                </select>
              </div>
            </div>

            {/* Field: Storefront Size / Panels */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Estimated Glass Panels
              </label>
              <div className="relative">
                <Sparkles className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <select
                  name="panelCount"
                  value={formData.panelCount}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 focus:border-amber-400 text-white text-sm outline-none transition-colors appearance-none"
                >
                  <option value="1–3 Panels ($20)">1–3 Panels ($20 / visit)</option>
                  <option value="4–6 Panels ($35)">4–6 Panels ($35 / visit — Most Popular)</option>
                  <option value="7–10 Panels ($50)">7–10 Panels ($50 / visit)</option>
                  <option value="10+ Panels (Custom Quote)">10+ Panels (Custom Commercial Quote)</option>
                </select>
              </div>
            </div>

            {/* Field: Preferred Time */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Preferred Cleaning Schedule
              </label>
              <div className="relative">
                <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 focus:border-amber-400 text-white text-sm outline-none transition-colors appearance-none"
                >
                  <option value="Early Morning (Before store opens)">Early Morning (Before store opens)</option>
                  <option value="Morning (8:00 AM – 10:00 AM)">Morning (8:00 AM – 10:00 AM)</option>
                  <option value="Mid-day (11:00 AM – 2:00 PM)">Mid-day (11:00 AM – 2:00 PM)</option>
                  <option value="Weekly Recurring Route">Weekly Recurring Route</option>
                  <option value="Bi-Weekly Recurring Route">Bi-Weekly Recurring Route</option>
                </select>
              </div>
            </div>

            {/* Field: Special Notes */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Special Requests / Transoms / Stickers
              </label>
              <input
                type="text"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="e.g. Has adhesive tape residue on entrance door"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 focus:border-amber-400 text-white text-sm outline-none transition-colors"
              />
            </div>

          </div>

          {/* Action Trigger Buttons: WhatsApp and Gmail */}
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-white/10">
            {/* WhatsApp Trigger */}
            <a
              href={dynamicWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-950/50 border border-emerald-400/40 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              <span>Send Pre-Filled WhatsApp</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>

            {/* Gmail Trigger */}
            <a
              href={dynamicGmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-amber-950/40 transition-all hover:scale-[1.02]"
            >
              <Mail className="w-5 h-5 shrink-0" />
              <span>Send Pre-Filled Gmail</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
          </div>

          {/* Reassurance text */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Zero commitments or locked contracts
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              Same-day direct response from Rudro
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              100% Streak-Free Guarantee
            </span>
          </div>

        </div>

        {/* Quick Links To Other Pages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          <Link
            href="/pricing"
            className="p-5 rounded-2xl glass-panel border border-slate-800 hover:border-amber-400/50 bg-[#111827]/80 flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                <Tag className="w-5 h-5" />
              </div>
              <div>
                <p className="text-white text-sm font-bold">Check Panel Rates</p>
                <p className="text-xs text-slate-400">View $20, $35 &amp; $50 storefront tiers</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            href="/specialized-glass"
            className="p-5 rounded-2xl glass-panel border border-slate-800 hover:border-sky-400/50 bg-[#111827]/80 flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <p className="text-white text-sm font-bold">Specialized Glass Care</p>
                <p className="text-xs text-slate-400">Commercial facades &amp; work gallery</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-400 group-hover:translate-x-1 transition-all" />
          </Link>
        </div>

      </div>
    </div>
  );
}
