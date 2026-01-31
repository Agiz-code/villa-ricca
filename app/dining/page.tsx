"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function DiningPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-32 pb-24 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-20">
        <span className="text-emerald-900 font-bold text-xs uppercase tracking-widest">
          Culinary Arts
        </span>
        <h1 className="text-5xl md:text-7xl font-light text-stone-800 mt-4">
          The Glass House
        </h1>
        <p className="text-stone-500 mt-6 max-w-2xl mx-auto text-lg">
          Hyper-local ingredients meet avant-garde techniques in a setting that
          breathes with the forest.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="rounded-3xl overflow-hidden aspect-4/5 relative">
          <Image
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800"
            alt="The Glass House Dining"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </div>

        <div className="space-y-8">
          <h2 className="text-4xl font-light text-stone-800">
            Seasonal Tastes
          </h2>
          <div className="space-y-6">
            {[
              {
                name: "Sea-Mist Scallops",
                price: "$42",
                desc: "Hand-dived, served with botanical espuma and wild samphire.",
              },
              {
                name: "Aged Highland Beef",
                price: "$68",
                desc: "45-day dry aged, smoked with local cedar bark.",
              },
              {
                name: "Forest Floor Truffle",
                price: "$24",
                desc: "Dark chocolate, pine nut praline, and moss-infused cream.",
              },
            ].map((item) => (
              <div key={item.name} className="pb-6 border-b border-stone-200">
                <div className="flex justify-between font-semibold text-stone-800 text-xl">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </div>
                <p className="text-stone-500 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
          <button className="bg-emerald-900 text-white px-8 py-4 rounded-full font-medium hover:bg-emerald-800 transition-all">
            Reserve a Table
          </button>
        </div>
      </div>
    </motion.div>
  );
}
