"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <header className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover"
          alt="Villa Rica Resort"
        />
        <div className="absolute inset-0 bg-linear-to-b from-stone-900/40 via-transparent to-stone-50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white/90 uppercase tracking-[0.4em] text-sm mb-4"
        >
          The Art of Tropical Living
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-5xl md:text-8xl font-light text-white mb-8 tracking-tighter"
        >
          Villa Rica <span className="font-serif italic">Resort</span>
        </motion.h1>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full hover:bg-white hover:text-emerald-900 transition-all font-medium"
        >
          Explore the Sanctuary
        </motion.button>
      </div>
    </header>
  );
}
