import { RoomCard } from "@/components/ui/RoomCard";
import { ROOMS_DATA } from "@/data/rooms";
import Link from "next/link";

export function RoomsSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <span className="text-emerald-900 font-bold text-xs uppercase tracking-widest">
            Accommodation
          </span>
          <h2 className="text-4xl font-light text-stone-800 mt-2">
            Suites & Private Villas
          </h2>
        </div>
        <Link
          href="/rooms"
          className="text-stone-700 border-b border-stone-300 pb-1 hover:text-emerald-900 hover:border-emerald-900 transition-all uppercase text-xs font-bold tracking-widest"
        >
          View All Rooms
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {ROOMS_DATA.map((room) => (
          <Link key={room.id} href={`/rooms/${room.id}`} className="block">
            <div className="transform transition-transform hover:-translate-y-3 duration-500">
              <RoomCard room={room} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
