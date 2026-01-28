"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RoomCard } from "@/components/RoomCard";
import { BookingOverlay } from "@/components/BookingOverlay";
import { ROOMS_DATA } from "@/data/rooms";

export default function SuitesPage() {
  const [bookingConfirmed, setBookingConfirmed] = useState<string | null>(null);

  const handleBook = (roomName: string) => {
    setBookingConfirmed(roomName);
  };

  return (
    <>
      <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl font-light text-stone-800">Our Sanctuary</h1>
          <p className="text-stone-500 mt-4">
            Selection of suites designed to disappear into nature.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {ROOMS_DATA.map((room) => (
            <RoomCard key={room.id} room={room} onBook={handleBook} />
          ))}
        </div>
      </section>

      <BookingOverlay
        roomName={bookingConfirmed}
        onClose={() => setBookingConfirmed(null)}
      />
    </>
  );
}
