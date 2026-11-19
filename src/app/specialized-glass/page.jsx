"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Store,
  Building2,
  Sparkles,
  CalendarCheck,
  Check,
  MessageCircle,
  Mail,
  X,
  Eye,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { getWhatsAppLink, getGmailLink } from "../../utils/contactHelpers";

export default function SpecializedGlassPage() {
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);

  const services = [
    {
      id: "storefront-window-cleaning",
      title: "Storefront Window Cleaning",
      tagline: "Interior & exterior storefront glass, entrance doors, and display windows",
      description:
        "Complete inside and outside streak-free wash for street-facing display windows, glass entrance doors, and overhead transom glass.",
      icon: Store,
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      features: [
        "Inside & outside dual-sided cleaning",
        "High-touch entrance door handles wiped",
        "Perimeter rubber seals & frame wipe-down",
        "100% streak-free squeegee finish",
      ],
    },
    {
      id: "commercial-glass-care",
      title: "Commercial Glass Care",
      tagline: "Multi-panel commercial facades and retail glass fronts",
      description:
        "Specialized care for wide commercial storefronts, corporate lobbies, retail showrooms, and multi-bay commercial facades across NYC.",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      features: [
        "Floor-to-ceiling glass panel wash",
        "Lint-free microfiber detailing",
        "Exterior smog and road dust film removal",
        "Flexible morning scheduling before business hours",
      ],
    },
    {
      id: "inside-outside-streak-free-detailing",
      title: "Inside & Outside Streak-Free Detailing",
      tagline: "Spotless finish removing dust, smudges, and weather buildup",
      description:
        "Comprehensive detailing targeting stubborn hard-water spots, interior customer fingerprints, tape residues, and sill grime.",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80",
      features: [
        "Deep scrub with eco-safe glass solutions",
        "Complete window sill and track dust extraction",
        "Removes grease, fingerprints, and rain streaks",
        "Crystal transparency enhancing store lighting",
      ],
    },
    {
      id: "weekly-biweekly-maintenance-plans",
      title: "Weekly & Bi-Weekly Maintenance Plans",
      tagline: "Scheduled recurring glass care to keep your business inviting year-round",
      description:
        "Set-and-forget routine window care. We show up reliably on your chosen weekday morning before opening so your storefront never looks dull.",
      icon: CalendarCheck,
      image: "https://images.unsplash.com/photo-1582037928769-181f2644ecb7?auto=format&fit=crop&w=800&q=80",
      features: [
        "Priority morning reservation before store opening",
        "Special discounted member pricing on every visit",
        "No binding contracts — pause or skip anytime",
        "Consistent neighborhood cleaner you can trust",
      ],
    },
  ];

  const galleryItems = [
    {
      title: "Spotless Cafe & Bakery Storefront",
      category: "Storefront Window Cleaning",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Commercial Retail Facade & Transoms",
      category: "Commercial Glass Care",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Interior Partitions & Entrance Glass",
      category: "Inside & Outside Detailing",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Astoria Local Business Glass Shine",
      category: "Recurring Maintenance",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#0F172A] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 pt-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Commercial &amp; Retail Glass Care</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Specialized Glass Cleaning Services
          </h1>

          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            From single-door boutiques to multi-panel commercial facades across Astoria, Queens &amp; NYC. Dedicated dual-sided cleaning with guaranteed streak-free clarity.
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-amber-300">
            <MapPin className="w-3.5 h-3.5" />
            <span>Serving Astoria, Long Island City, Sunnyside &amp; NYC Metro</span>
          </div>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            const whatsAppLink = getWhatsAppLink(service.title);
            const gmailLink = getGmailLink(service.title);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col rounded-3xl overflow-hidden glass-panel border border-slate-800 hover:border-amber-400/60 bg-[#131B2E] transition-all duration-300 hover:shadow-2xl hover:shadow-black/60"
              >
                {/* Image Banner */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131B2E] via-[#131B2E]/40 to-transparent" />
                  
                  {/* Floating Icon */}
                  <div className="absolute top-4 left-4 p-3 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-amber-400 shadow-lg">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider block">
                      Professional Service
                    </span>
                    <h2 className="text-xl font-bold text-white tracking-tight">
                      {service.title}
                    </h2>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-medium text-amber-300/90 mb-3">
                      {service.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-2.5 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 2 Buttons: WhatsApp and Gmail */}
                  <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-2.5">
                    <a
                      href={whatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/30 transition-all hover:scale-[1.02]"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Book via WhatsApp</span>
                    </a>

                    <a
                      href={gmailLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-amber-400/40 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-amber-400" />
                      <span>Inquire via Gmail</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Work Photo Gallery with Click-to-Zoom Lightbox */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
              Visual Proof of Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Our Work Gallery
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-2">
              Browse spotless commercial storefronts cleaned with our streak-free squeegee method. Click any photo to inspect in full zoom.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => setSelectedGalleryImage(item)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-amber-400/60 shadow-lg bg-slate-900"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-3 rounded-full bg-slate-950/80 text-amber-400 border border-amber-400/40 backdrop-blur-sm">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wide block">
                    {item.category}
                  </span>
                  <p className="text-xs font-bold text-white line-clamp-1">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedGalleryImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedGalleryImage(null)}
          >
            <div
              className="relative max-w-3xl w-full rounded-3xl overflow-hidden glass-panel-gold border-2 border-amber-400/50 bg-[#131B2E] p-4 sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedGalleryImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white border border-white/20 z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-4 border border-white/10">
                <Image
                  src={selectedGalleryImage.image}
                  alt={selectedGalleryImage.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover"
                  unoptimized
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-sky-400 uppercase">
                    {selectedGalleryImage.category}
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {selectedGalleryImage.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    Cleaned using RA Glass Care streak-free inside &amp; outside procedure.
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={getWhatsAppLink(selectedGalleryImage.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs flex items-center gap-2 shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Book Similar on WhatsApp</span>
                  </a>

                  <a
                    href={getGmailLink(selectedGalleryImage.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center gap-1.5 border border-slate-700"
                  >
                    <Mail className="w-4 h-4 text-amber-400" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Navigation CTA Banner */}
        <div className="rounded-3xl glass-panel-gold border-2 border-amber-400/40 bg-[#162035] p-8 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Want to See Exact Storefront Rates?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            We provide transparent per-visit panel pricing with no hidden charges. Check out our simple tier breakdown.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-950/40"
            >
              <span>View Panel-Based Pricing ($20–$50)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 font-semibold text-sm transition-colors"
            >
              <span>Build Custom Inquiry</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
