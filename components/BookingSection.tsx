"use client";

import { useState } from "react";
import { CalendarIcon } from "lucide-react";

export function BookingSection() {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomType: "Emerald Garden Suite",
  });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hi Villa Rica! I'd like to book the ${
      formData.roomType
    } for ${formData.guests} guest${formData.guests > 1 ? "s" : ""} from ${
      formData.checkIn
    } to ${formData.checkOut}.`;

    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative -mt-20 z-10 max-w-5xl mx-auto px-6">
      <div className="bg-white p-8 rounded-3xl shadow-2xl shadow-emerald-900/10 border border-stone-100">
        <form
          onSubmit={handleBooking}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end"
        >
          {/* Check In */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-stone-400 uppercase tracking-widest">
              Check In
            </label>
            <div className="relative">
              <CalendarIcon
                className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-900"
                size={18}
              />
              <input
                type="date"
                required
                value={formData.checkIn}
                onChange={(e) =>
                  setFormData({ ...formData, checkIn: e.target.value })
                }
                className="w-full pl-10 pr-4 py-3 bg-stone-50 border-none rounded-xl focus:ring-2 focus:ring-emerald-900/20 text-stone-700 outline-none"
              />
            </div>
          </div>

          {/* Check Out */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-stone-400 uppercase tracking-widest">
              Check Out
            </label>
            <div className="relative">
              <CalendarIcon
                className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-900"
                size={18}
              />
              <input
                type="date"
                required
                value={formData.checkOut}
                onChange={(e) =>
                  setFormData({ ...formData, checkOut: e.target.value })
                }
                className="w-full pl-10 pr-4 py-3 bg-stone-50 border-none rounded-xl focus:ring-2 focus:ring-emerald-900/20 text-stone-700 outline-none"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-stone-400 uppercase tracking-widest">
              Guests
            </label>
            <select
              value={formData.guests}
              onChange={(e) =>
                setFormData({ ...formData, guests: Number(e.target.value) })
              }
              className="w-full px-4 py-3 bg-stone-50 border-none rounded-xl focus:ring-2 focus:ring-emerald-900/20 text-stone-700 outline-none appearance-none"
            >
              {[1, 2, 3, 4].map((n) => (
                <option key={n} value={n}>
                  {n} Adult{n > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-emerald-900 text-white rounded-xl font-bold hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-900/20"
          >
            Check Rates
          </button>
        </form>
      </div>
    </section>
  );
}
