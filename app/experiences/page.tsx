"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ExperiencesPage() {
  const experiences = [
    {
      title: "Midnight Bioluminescence",
      img: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=600",
      time: "4 Hours",
      tag: "Adventure",
    },
    {
      title: "Artisan Pottery Workshop",
      img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=600",
      time: "2 Hours",
      tag: "Culture",
    },
    {
      title: "Private Helicopter Tour",
      img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=600",
      time: "1 Hour",
      tag: "Luxury",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-32 pb-24 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h1 className="text-5xl font-light text-stone-800">
          Unforgettable Journeys
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {experiences.map((exp) => (
          <div
            key={exp.title}
            className="group relative rounded-3xl overflow-hidden aspect-[3/4] cursor-pointer"
          >
            {/* ✅ Image fix */}
            <Image
              src={exp.img}
              alt={exp.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(min-width: 768px) 33vw, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 p-8 text-white">
              <span className="text-white/60 text-xs uppercase tracking-widest">
                {exp.tag} — {exp.time}
              </span>
              <h3 className="text-2xl font-semibold mt-2">{exp.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
