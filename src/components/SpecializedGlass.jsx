"use client";

import React, { useState } from "react";
import Image from "next/image";
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
} from "lucide-react";
import { getWhatsAppLink, getGmailLink } from "../utils/contactHelpers";

export default function SpecializedGlass() {
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
    <section
      id="specialized-glass"
      className="py-24 bg-[#0F172A] relative overflow-hidden border-t border-b border-slate-800"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Specialized Glass Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Specialized Glass Care for Every NYC Storefront
          </h2>

          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            From single-door boutiques to multi-panel commercial facades, we deliver professional inside and outside cleaning tailored to your schedule.
          </p>
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
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131B2E] via-[#131B2E]/40 to-transparent" />

                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-amber-400/40 text-amber-400 flex items-center justify-center shadow-lg">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-amber-400/90 tracking-wide mt-1 mb-3">
                      {service.tagline}
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2.5 mb-6 pt-3 border-t border-slate-800">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <div className="w-4 h-4 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 2 Instant Auto-Filled Buttons (WhatsApp & Gmail) */}
                  <div className="grid grid-cols-2 gap-2.5 pt-2">
                    <a
                      href={whatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 border border-emerald-400/40 shadow-md shadow-emerald-950/40 transition-all hover:scale-[1.02] text-center"
                    >
                      <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">WhatsApp</span>
                    </a>

                    <a
                      href={gmailLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-amber-400/40 transition-all text-center"
                    >
                      <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">Gmail</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Our Work Gallery Sub-Grid */}
        <div className="pt-10 border-t border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Visual Transparency
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Our Work Gallery
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Clean glass storefront photos across Astoria &amp; Queens. Click any photo to preview.
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
                onClick={() => setSelectedGalleryImage(item.image)}
                className="group relative rounded-2xl overflow-hidden glass-panel border border-slate-800 hover:border-amber-400/50 cursor-pointer aspect-[4/3] transition-all duration-300 hover:scale-[1.03]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-xs font-bold text-white leading-tight">
                    {item.title}
                  </p>
                  <p className="text-[10px] text-amber-400 mt-0.5">
                    {item.category}
                  </p>
                </div>

                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-slate-950/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3.5 h-3.5 text-amber-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gallery Image Modal */}
        {selectedGalleryImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4"
            onClick={() => setSelectedGalleryImage(null)}
          >
            <div
              className="relative max-w-3xl w-full max-h-[85vh] rounded-2xl overflow-hidden border border-amber-400/40 shadow-2xl bg-slate-950 p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedGalleryImage(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-900/90 text-white flex items-center justify-center hover:bg-amber-400 hover:text-slate-950 transition-colors shadow-lg"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={selectedGalleryImage}
                  alt="Spotless Storefront Window Work"
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
