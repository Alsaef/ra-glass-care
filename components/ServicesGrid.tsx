"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Store,
  Building2,
  Sparkles,
  Hammer,
  CalendarClock,
  Maximize2,
  Check,
  MessageCircle,
  Mail,
  Clock,
  Shield,
} from "lucide-react";
import { SERVICES } from "@/lib/data";
import { getWhatsAppUrl, getEmailMailtoUrl } from "@/lib/contact-links";

const iconMap: Record<string, React.ReactNode> = {
  Store: <Store className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Hammer: <Hammer className="w-5 h-5" />,
  CalendarClock: <CalendarClock className="w-5 h-5" />,
  Maximize2: <Maximize2 className="w-5 h-5" />,
};

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-[#0F172A] relative overflow-hidden border-t border-b border-slate-800">
      {/* Background Decorative Rings */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Commercial & Storefront Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Specialized Glass Care for Every NYC Business Facade
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed"
          >
            We don&apos;t sell physical products or cookie-cutter solutions. We provide high-craftsmanship, reliable window cleaning tailored to your building&apos;s footprint, traffic level, and schedule.
          </motion.p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const serviceWhatsAppUrl = getWhatsAppUrl(service.title);
            const serviceEmailUrl = getEmailMailtoUrl(service.title);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex flex-col rounded-3xl overflow-hidden glass-panel border border-slate-700/80 hover:border-amber-400/60 bg-[#131B2E]/90 hover:bg-[#162138] transition-all duration-300 hover:shadow-2xl hover:shadow-black/60"
              >
                {/* Image Banner */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px)"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131B2E] via-[#131B2E]/40 to-transparent" />

                  {/* Icon Badge Top Left */}
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-amber-400/40 text-amber-400 flex items-center justify-center shadow-lg">
                    {iconMap[service.iconName] || <Sparkles className="w-5 h-5 text-amber-400" />}
                  </div>

                  {/* Frequency Tag Top Right */}
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-sky-400/30 text-sky-300 text-[11px] font-semibold flex items-center gap-1.5 shadow-md">
                    <Clock className="w-3 h-3 text-sky-400" />
                    <span>{service.frequencyRecommendation}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-amber-400/90 tracking-wide mt-1 mb-3">
                      {service.tagline}
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Checkpoints */}
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

                    {/* Popular For Pill */}
                    <div className="mb-6 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400">
                      <span className="text-slate-300 font-semibold">Best for: </span>
                      {service.popularFor}
                    </div>
                  </div>

                  {/* Dual Action Buttons (WhatsApp + Email) */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-2.5 pt-2">
                    <a
                      href={serviceWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 border border-emerald-400/40 shadow-md shadow-emerald-950/40 transition-all hover:scale-[1.02] text-center"
                    >
                      <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">
                        <span className="hidden xs:inline">Book on </span>WhatsApp
                      </span>
                    </a>

                    <a
                      href={serviceEmailUrl}
                      className="inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 hover:border-amber-400/40 transition-all text-center"
                    >
                      <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">
                        Email<span className="hidden xs:inline"> Inquiry</span>
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Assurance Note */}
        <div className="mt-14 p-5 rounded-2xl glass-panel-gold max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-amber-400 shrink-0" />
            <div className="text-xs sm:text-sm text-slate-300">
              <span className="font-bold text-white">Have a unique storefront setup or hard-to-reach transom?</span> Send us a quick photo on WhatsApp for a fast quote within 15 minutes.
            </div>
          </div>
          <a
            href={getWhatsAppUrl(undefined, {
              customMessage: "Hi Rudro, I have a photo of my storefront glass. Can I get a quick quote?",
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 text-center whitespace-nowrap transition-colors"
          >
            Send Photo on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
