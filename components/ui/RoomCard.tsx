"use client";

import { useState, useRef, JSX } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Users,
  Wifi,
  Wind,
} from "lucide-react";
import { Room } from "@/data/rooms";

interface RoomCardProps {
  room: Room;
}

export function RoomCard({ room }: RoomCardProps): JSX.Element {
  const [currentImg, setCurrentImg] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextImg = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImg((prev) => (prev + 1) % room.images.length);
  };

  const prevImg = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImg(
      (prev) => (prev - 1 + room.images.length) % room.images.length
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const delta = touchStartX.current - touchEndX.current;
    if (delta > 50) nextImg(); // swipe left → next
    else if (delta < -50) prevImg(); // swipe right → prev
  };

  return (
    <motion.div
      layout
      className="bg-white rounded-2xl overflow-hidden shadow-md cursor-pointer group"
      whileHover={{ scale: 1.02 }}
    >
      {/* Image carousel */}
      <div
        className="relative w-full aspect-4/3 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={room.images[currentImg]}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, 100vw"
          priority
        />

        {/* Desktop arrows */}
        {room.images.length > 1 && (
          <>
            <button
              onClick={prevImg}
              className="hidden md:flex absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/40 text-white rounded-full p-2"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImg}
              className="hidden md:flex absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/40 text-white rounded-full p-2"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Dot indicators */}
        {room.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
            {room.images.map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentImg ? "bg-emerald-900" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Room info */}
      <div className="p-6 space-y-2">
        <h3 className="text-xl font-semibold text-stone-800">{room.name}</h3>
        <p className="text-stone-500 text-sm">{room.description}</p>
        <div className="flex items-center space-x-2 text-emerald-900">
          <Star size={16} />
          <span className="text-sm font-medium">{room.rating}</span>
        </div>
        <span className="block text-emerald-900 font-bold mt-2">
          ${room.price}
        </span>
      </div>

      {/* Room amenities */}
      <div className="px-6 pb-6 flex gap-4 text-stone-500">
        {room.amenities.includes("Wifi") && <Wifi size={16} />}
        {room.amenities.includes("AC") && <Wind size={16} />}
        {room.amenities.includes("Users") && <Users size={16} />}
        {room.amenities.includes("Private Pool") && (
          <svg
            className="w-4 h-4 text-emerald-900"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M2 12h20v8H2z" />
          </svg>
        )}
      </div>
    </motion.div>
  );
}
