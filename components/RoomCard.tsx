"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Image from "next/image";

interface RoomCardProps {
  room: typeof import("@/data/rooms").ROOMS_DATA[number];
  onBook: (name: string) => void;
}

export function RoomCard({ room, onBook }: RoomCardProps) {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-xl shadow-stone-200/50 flex flex-col"
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentImg * 100}%)` }}
        >
          {room.images.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              fill
              alt={room.name}
              className="w-full h-full object-cover shrink-0"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ))}
        </div>
        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() =>
              setCurrentImg(
                (prev) => (prev - 1 + room.images.length) % room.images.length
              )
            }
            className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() =>
              setCurrentImg((prev) => (prev + 1) % room.images.length)
            }
            className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-stone-800">{room.name}</h3>
          <span className="text-emerald-900 font-bold">${room.price}</span>
        </div>
        <p className="text-stone-500 text-sm mb-4">{room.description}</p>
        <button
          onClick={() => onBook(room.name)}
          className="w-full py-3 bg-emerald-900 text-white rounded-xl font-medium hover:bg-emerald-800 transition-colors"
        >
          Book Now
        </button>
      </div>
    </motion.div>
  );
}
