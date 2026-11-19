"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppLink, BRAND_INFO } from "../utils/contactHelpers";

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Tooltip on hover / expanded state */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="mr-3 hidden sm:flex items-center gap-2 py-2 px-3.5 rounded-xl bg-slate-950/95 backdrop-blur-md border border-emerald-400/40 text-white text-xs font-semibold shadow-2xl shadow-black pointer-events-none whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Chat on WhatsApp: {BRAND_INFO.primaryPhone}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white shadow-2xl shadow-emerald-950/80 border-2 border-emerald-300/40 focus:outline-none"
        aria-label="Chat with RA Glass Care on WhatsApp"
      >
        {/* Pulsating Halo */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 group-hover:opacity-40" />
        
        {/* Shimmer sweep */}
        <span className="absolute inset-0 rounded-full overflow-hidden">
          <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </span>

        <MessageCircle className="w-7 h-7 relative z-10 text-white fill-white/20" />
      </motion.a>
    </div>
  );
}
