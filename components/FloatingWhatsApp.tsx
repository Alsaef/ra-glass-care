"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/contact-links";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsAppUrl = getWhatsAppUrl(undefined, {
    customMessage: "Hello RA Glass Care! I'm reaching out from your website for a quick storefront window cleaning quote.",
  });

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-end gap-3 select-none">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="relative hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-slate-900/95 backdrop-blur-md text-white text-xs font-semibold border border-emerald-500/40 shadow-xl shadow-black/50 animate-bounce duration-1000">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
          <span>Chat with us — Instant Quote</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/70 border-2 border-emerald-300/40 hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Chat with RA Glass Care on WhatsApp"
      >
        {/* Pulsing Ring */}
        <span className="absolute inset-0 rounded-full border-2 border-emerald-400/60 animate-ping pointer-events-none" />

        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white drop-shadow-md" />

        {/* Online Status Dot */}
        <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-emerald-400 border-2 border-slate-950" />
      </a>
    </div>
  );
}
