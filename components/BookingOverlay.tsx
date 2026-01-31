"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarIcon } from "lucide-react";

interface BookingOverlayProps {
  roomName: string | null;
  onClose: () => void;
}

export function BookingOverlay({ roomName, onClose }: BookingOverlayProps) {
  // Open WhatsApp after the overlay appears. Keep the hook call unconditional
  // to comply with the Rules of Hooks; guard internally for `roomName`.
  useEffect(() => {
    if (!roomName) return;

    const text = `Hi Villa Rica! I would like to book the ${roomName}. Please let me know availability.`;
    const whatsappUrl = `https://wa.me/YOUR_WHATSAPP_NUMBER?text=${encodeURIComponent(
      text
    )}`;

    const timer = setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      onClose();
    }, 1500);

    return () => clearTimeout(timer);
  }, [roomName, onClose]);

  if (!roomName) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-100 flex items-center justify-center bg-stone-900/40 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white p-10 rounded-3xl text-center max-w-md shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-16 h-16 bg-emerald-100 text-emerald-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <CalendarIcon size={32} />
          </div>
          <h3 className="text-2xl font-bold text-stone-800 mb-2">
            Request Initiated
          </h3>
          <p className="text-stone-500 mb-6">
            We are redirecting you to our concierge on WhatsApp to finalize your
            stay in the <strong>{roomName}</strong>.
          </p>
          <div className="flex justify-center">
            <div className="w-8 h-8 border-4 border-emerald-900 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
