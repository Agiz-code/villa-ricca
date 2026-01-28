// "use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { ROOMS_DATA, Room } from "@/data/rooms";
import { Star, Users, Wifi, Wind } from "lucide-react";
import { BookingSection } from "@/components/BookingSection";

interface PageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return ROOMS_DATA.map((room) => ({
    id: room.id,
  }));
}

export default function RoomDetailPage({ params }: PageProps) {
  const room: Room | undefined = ROOMS_DATA.find((r) => r.id === params.id);

  if (!room) {
    notFound();
  }

  return (
    <>
      {/* Hero Gallery */}
      <section className="relative h-screen min-h-[600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="relative h-full">
            <Image
              src={room.images[0]}
              alt={room.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-4 p-4 bg-stone-50">
            {room.images.slice(1, 5).map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl">
                <Image
                  src={img}
                  alt={`${room.name} - ${i + 2}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Overlay Title */}
        <div className="absolute bottom-0 left-0 right-0 p-10 bg-linear-to-t from-black/70 to-transparent text-white">
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter">
            {room.name}
          </h1>
          <p className="text-xl mt-2 opacity-90">{room.view}</p>
        </div>
      </section>

      {/* Details & Booking */}
      <section className="max-w-7xl mx-auto px-6 py-20 -mt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Description & Amenities */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <p className="text-2xl text-stone-600 leading-relaxed max-w-3xl">
                {room.description}
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-light text-stone-800 mb-6">
                Room Highlights
              </h3>
              <ul className="space-y-4">
                {room.details.map((detail, i) => (
                  <li key={i} className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-emerald-900 rounded-full mt-2 shrink-0" />
                    <span className="text-stone-600 text-lg">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-light text-stone-800 mb-6">
                Amenities
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {room.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center space-x-3 text-stone-600"
                  >
                    {amenity.includes("Wifi") && <Wifi size={20} />}
                    {amenity.includes("AC") && <Wind size={20} />}
                    {amenity.includes("Bed") && <Users size={20} />}
                    {amenity.includes("Pool") ||
                    amenity.includes("Jacuzzi") ||
                    amenity.includes("Butler") ? (
                      <Star size={20} className="text-emerald-900" />
                    ) : null}
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Pricing Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-2xl p-8 sticky top-24">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-4xl font-bold text-emerald-900">
                    ${room.price}
                  </span>
                  <span className="text-stone-400 uppercase tracking-wider ml-2">
                    / night
                  </span>
                </div>
                <div className="flex items-center text-emerald-900">
                  <Star size={20} className="fill-current" />
                  <span className="ml-1 font-semibold">{room.rating}</span>
                </div>
              </div>

              <div className="space-y-4 text-stone-600 mb-8">
                <div className="flex justify-between">
                  <span>Size</span>
                  <span className="font-medium">{room.size}</span>
                </div>
                <div className="flex justify-between">
                  <span>Capacity</span>
                  <span className="font-medium">{room.capacity} Guests</span>
                </div>
                <div className="flex justify-between">
                  <span>View</span>
                  <span className="font-medium">{room.view}</span>
                </div>
              </div>

              {/* Reusable Booking Widget */}
              <BookingSection />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
