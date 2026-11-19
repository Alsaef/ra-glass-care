"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  Phone,
  Mail,
  MessageCircle,
  ExternalLink,
  X,
} from "lucide-react";
import { getWhatsAppUrl, getEmailMailtoUrl, getTelUrl } from "@/lib/contact-links";

export default function FounderBrandStory() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
      title: "Storefront Squeegee Poster & Direct Mail",
      subtitle: "Local Business Marketing Collateral",
    },
    {
      src: "/branding/ra-glass-care-badge.jpg",
      title: "Metallic Gold & Cyan 3D Plaque",
      subtitle: "RA Glass Care Signature Emblem",
    },
  ];

  return (
    <section className="py-24 bg-[#0B0F17] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Founder Letter & Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Founder Photo & Badge Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-panel-gold p-4 shadow-2xl border-2 border-amber-400/40 bg-[#141C2E]">
              
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group">
                <Image
                  src="/branding/ra-glass-care-founder.jpg"
                  alt="Rudro, Founder of RA Glass Care"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-amber-400/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white text-base font-extrabold">Rudro</h4>
                      <p className="text-xs text-amber-400 font-semibold">Founder, RA Glass Care</p>
                    </div>
                    <span className="text-[10px] font-bold text-sky-400 bg-sky-950 px-2.5 py-1 rounded-full border border-sky-400/30">
                      Astoria, NYC
                    </span>
                  </div>
                </div>
              </div>

              {/* Founder Contact Pills */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] sm:text-xs">
                <a
                  href={getTelUrl()}
                  className="p-2.5 sm:p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-amber-400/50 text-slate-200 font-semibold flex items-center justify-center gap-1.5 sm:gap-2 transition-colors whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>(929) 501-1116</span>
                </a>

                <a
                  href={getWhatsAppUrl(undefined, {
                    customMessage: "Hello Rudro! I'm interested in discussing storefront window cleaning for my business.",
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 border border-emerald-400/40 text-white font-bold flex items-center justify-center gap-1.5 sm:gap-2 transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>WhatsApp Rudro</span>
                </a>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Founder's Commitment to NYC Small Businesses */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 w-fit">
              <Award className="w-3.5 h-3.5" />
              <span>Direct Founder Guarantee</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              &ldquo;When people walk down your block, they judge your store in three seconds.&rdquo;
            </h2>

            <div className="mt-6 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                In a bustling city like New York, your glass is your business&apos;s handshake. When pedestrians stroll down 30th Ave, Broadway, or Steinway Street, smudged windows, water spots, and street soot tell them your shop isn&apos;t well maintained.
              </p>
              <p>
                I founded <strong className="text-white">RA Glass Care</strong> with one clear mission: to give Astoria and Queens small business owners five-star, luxury-grade glass cleaning at honest, transparent rates. No long phone trees, no subcontractors, and no sloppy quick wipes.
              </p>
              <p>
                When you partner with us, you get punctuality, professional squeegee craftsmanship, and a clean storefront that naturally invites foot traffic in.
              </p>
            </div>

            {/* Founder Signoff Card */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-base font-bold text-white font-serif italic">
                  — Rudro
                </p>
                <p className="text-xs text-amber-400">Founder & Lead Technician, RA Glass Care</p>
                <p className="text-xs text-slate-400">Astoria, Queens, New York City</p>
              </div>

              <a
                href={getEmailMailtoUrl("General Inquiry", {
                  notes: "Reaching out to Rudro regarding storefront window cleaning service.",
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-amber-400 transition-colors underline underline-offset-4"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>raglasscare@gmail.com</span>
              </a>
            </div>
          </motion.div>

        </div>

        {/* Brand Collateral Gallery Showcase */}
        <div className="pt-12 border-t border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Verified Brand Identity & Collateral
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Official RA Glass Care Materials
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Look out for our official circular stickers and service flyers across Astoria storefronts. Click any material to enlarge.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {brandAssets.map((asset, index) => (
              <motion.div
                key={asset.src}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => setSelectedImage(asset.src)}
                className="group relative rounded-2xl overflow-hidden glass-panel border border-slate-800 hover:border-amber-400/50 cursor-pointer aspect-square transition-all duration-300 hover:scale-[1.03]"
              >
                <Image
                  src={asset.src}
                  alt={asset.title}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-xs font-bold text-white leading-tight">
                    {asset.title}
                  </p>
                  <p className="text-[10px] text-amber-400 mt-0.5">
                    {asset.subtitle}
                  </p>
                </div>

                <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-slate-950/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-3xl w-full max-h-[85vh] rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-400/40 shadow-2xl bg-slate-950 p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-900/90 text-white flex items-center justify-center hover:bg-amber-400 hover:text-slate-950 transition-colors shadow-lg"
                aria-label="Close"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={selectedImage}
                  alt="Enlarged RA Glass Care Brand Asset"
                  fill
                  sizes="(max-width: 1024px) 95vw, 800px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
