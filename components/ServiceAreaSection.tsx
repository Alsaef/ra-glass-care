"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Clock, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { SERVICE_AREAS } from "@/lib/data";
import { getWhatsAppUrl, getTelUrl } from "@/lib/contact-links";

export default function ServiceAreaSection() {
  return (
    <section id="service-area" className="py-24 bg-[#0F172A] relative overflow-hidden border-t border-slate-800">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

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
            <MapPin className="w-3.5 h-3.5" />
            <span>Local NYC Route Coverage</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Proudly Serving Astoria, Queens & NYC Neighborhoods
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed"
          >
            Because we are locally based in Astoria, we can easily accommodate early morning pre-opening window cleanings and rapid same-day touch-ups without NYC bridge or tunnel delays.
          </motion.p>
        </div>

        {/* Neighborhood Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SERVICE_AREAS.map((area, index) => (
            <motion.div
              key={area.neighborhood}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                area.highlight
                  ? "glass-panel-gold border-2 border-amber-400/50 bg-[#162136] shadow-xl shadow-amber-950/20"
                  : "glass-panel border border-slate-800 bg-[#111827]/80 hover:border-slate-700"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider bg-sky-950/60 px-2.5 py-1 rounded-full border border-sky-400/30">
                    {area.borough}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {area.neighborhood}
                </h3>
                <p className="text-xs text-amber-400/90 font-medium mb-4">
                  {area.status}
                </p>

                <div className="pt-3 border-t border-slate-800">
                  <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                    Key Commercial Corridors:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {area.hotspots}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Morning routes available</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Local Fast Dispatch Banner */}
        <div className="rounded-2xl sm:rounded-3xl glass-panel p-5 sm:p-8 border border-white/10 max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6">
          <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 text-left">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/40 mt-0.5 sm:mt-0">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Located right outside our core route?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                We frequently service commercial accounts throughout Queens, Manhattan, and North Brooklyn. Send your address to confirm.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={getWhatsAppUrl(undefined, {
                customMessage: "Hi Rudro! My business is located at [Street Address, Neighborhood]. Do you service this area?",
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Check on WhatsApp</span>
            </a>

            <a
              href={getTelUrl()}
              className="hidden sm:inline-flex px-4 py-3 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 border border-slate-700 hover:border-amber-400/40 transition-colors items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>(929) 501-1116</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
