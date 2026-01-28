"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WellnessPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-32 pb-24 px-6 max-w-7xl mx-auto"
    >
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 space-y-8">
          <span className="text-emerald-900 font-bold text-xs uppercase tracking-widest">
            Rejuvenation
          </span>
          <h1 className="text-5xl md:text-7xl font-light text-stone-800">
            Botanical <br />
            <span className="italic font-serif">Spa & Yoga</span>
          </h1>
          <p className="text-stone-500 text-lg leading-relaxed">
            Escape the digital noise. Our wellness philosophy centers on
            &apos;Earthing&apos;—connecting your rhythm with the natural world
            through mineral-rich rituals and silent meditation.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-6">
            <div className="p-6 bg-white rounded-2xl border border-stone-100 shadow-sm">
              <h4 className="font-bold text-emerald-900 mb-2 text-xl">
                Private Yoga
              </h4>
              <p className="text-sm text-stone-400">
                Sun-salutations overlooking the bay.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-stone-100 shadow-sm">
              <h4 className="font-bold text-emerald-900 mb-2 text-xl">
                Mineral Spa
              </h4>
              <p className="text-sm text-stone-400">
                Volcanic stone and thermal water therapy.
              </p>
            </div>
          </div>
        </div>

        {/* Image container must be relative for fill */}
        <div className="order-1 lg:order-2 rounded-3xl overflow-hidden aspect-square relative">
          <Image
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800"
            alt="Botanical Spa"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </div>
      </div>
    </motion.div>
  );
}
