"use client"; // required because RoomCard is client + Framer Motion

import Link from "next/link";
import { RoomCard } from "@/components/ui/RoomCard";
import { ROOMS_DATA } from "@/data/rooms";
import { ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function RoomsListingPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-stone-50"
    >
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent z-10" />
          <Image
            src="https://images.unsplash.com/photo-1578683015141-0b1656cfa6d5?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Suites"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-6xl md:text-8xl font-light text-white tracking-tighter">
            Suites & Villas
          </h1>
          <p className="text-xl text-white/80 mt-4 max-w-2xl">
            Discover our curated collection of private sanctuaries, each
            designed to offer an unparalleled experience of tropical luxury.
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {ROOMS_DATA.map((room) => (
            <Link
              key={room.id}
              href={`/rooms/${room.id}`}
              className="block group relative"
            >
              <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                {/* Interactive RoomCard */}
                <RoomCard room={room} />

                {/* Overlay Price & Rating */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-white/80 px-4 py-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-emerald-900 font-bold">
                    ${room.price}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-emerald-900" />
                    <span className="text-stone-800 font-medium text-sm">
                      {room.rating}
                    </span>
                  </div>
                </div>

                {/* View Details Arrow */}
                <div className="flex justify-end mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-emerald-900 font-semibold text-sm uppercase tracking-widest flex items-center">
                    View Details
                    <ChevronRight
                      size={16}
                      className="ml-1 translate-x-0 group-hover:translate-x-2 transition-transform"
                    />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Optional: More rooms message */}
        {ROOMS_DATA.length < 6 && (
          <div className="text-center mt-20">
            <p className="text-stone-500 italic text-lg">
              More exclusive residences coming soon...
            </p>
          </div>
        )}
      </section>
    </motion.div>
  );
}
