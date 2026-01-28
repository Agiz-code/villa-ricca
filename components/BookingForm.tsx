"use client";

import { useState, useEffect, useRef } from "react";
import { DayPicker, type DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format, isBefore, addDays } from "date-fns";
import { CalendarIcon, X, AlertCircle, Loader2 } from "lucide-react";
import { ROOMS_DATA } from "@/data/rooms";
import { cn } from "@/lib/utils";

export function BookingForm() {
  const [formData, setFormData] = useState({
    roomName: ROOMS_DATA[0].name,
    checkIn: "",
    checkOut: "",
    guests: 2,
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error" | "unavailable"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [unavailableDates, setUnavailableDates] = useState<Date[]>([]);
  const [loadingAvailability, setLoadingAvailability] = useState(false);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const datePickerRef = useRef<HTMLDivElement>(null);

  const selectedRoom = ROOMS_DATA.find((r) => r.name === formData.roomName);
  const roomId = selectedRoom?.id;

  // Close picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target as Node)
      ) {
        setShowDatePicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch unavailable dates when room changes
  useEffect(() => {
    if (!roomId) return;

    const fetchAvailability = async () => {
      setLoadingAvailability(true);
      try {
        const today = new Date();
        const fetches = [];

        // Fetch next 3 months
        for (let i = 0; i < 3; i++) {
          const target = addDays(today, i * 30);
          const year = target.getFullYear();
          const month = target.getMonth() + 1;
          fetches.push(
            fetch(
              `/api/availability/${roomId}?year=${year}&month=${month}`
            ).then((r) => (r.ok ? r.json() : null))
          );
        }

        const results = await Promise.all(fetches);
        const allDates = results
          .filter(Boolean)
          .flatMap(
            (r) => r?.unavailable?.map((d: string) => new Date(d)) ?? []
          );

        setUnavailableDates(allDates);
      } catch (err) {
        console.error("Failed to load availability");
      } finally {
        setLoadingAvailability(false);
      }
    };

    fetchAvailability();
  }, [roomId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setTimeout(() => setStatus("idle"), 6000);
        setFormData((prev) => ({
          ...prev,
          name: "",
          email: "",
          phone: "",
          message: "",
        }));
      } else {
        setErrorMessage(data.error || "Something went wrong.");
        if (res.status === 409) setStatus("unavailable");
        else setStatus("error");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  const handleRangeSelect = (range: DateRange | undefined) => {
    if (!range) return;

    const checkIn = range.from;
    const checkOut = range.to;

    if (checkIn) {
      setFormData((prev) => ({
        ...prev,
        checkIn: format(checkIn, "yyyy-MM-dd"),
      }));
    }

    if (checkOut) {
      setFormData((prev) => ({
        ...prev,
        checkOut: format(checkOut, "yyyy-MM-dd"),
      }));
      setShowDatePicker(false); // Auto close when both dates selected
    }
  };

  const modifiersStyles = {
    unavailable: {
      color: "#ef4444",
      textDecoration: "line-through",
      backgroundColor: "rgba(239, 68, 68, 0.08)",
    },
    selected: {
      backgroundColor: "#064e3b",
      color: "white",
    },
    today: {
      fontWeight: "bold",
      border: "2px solid #10b981",
    },
    range_middle: {
      backgroundColor: "rgba(16, 185, 129, 0.1)",
    },
    range_start: {
      backgroundColor: "#064e3b",
      color: "white",
    },
    range_end: {
      backgroundColor: "#064e3b",
      color: "white",
    },
  };

  const displayDateRange = () => {
    if (!formData.checkIn && !formData.checkOut) return "Select dates";
    if (formData.checkIn && !formData.checkOut)
      return format(new Date(formData.checkIn), "MMM dd, yyyy") + " → ?";
    if (formData.checkIn && formData.checkOut) {
      return `${format(new Date(formData.checkIn), "MMM dd")} - ${format(
        new Date(formData.checkOut),
        "MMM dd, yyyy"
      )}`;
    }
    return "";
  };

  return (
    <section className="relative -mt-20 z-10 max-w-5xl mx-auto px-6">
      <div className="bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-2xl border border-stone-100">
        <h3 className="text-3xl md:text-4xl font-light text-center mb-10 text-stone-800">
          Reserve Your Sanctuary
        </h3>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Room Selection */}
          <div>
            <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">
              Select Suite
            </label>
            <select
              value={formData.roomName}
              onChange={(e) =>
                setFormData({ ...formData, roomName: e.target.value })
              }
              className="w-full px-5 py-4 bg-stone-50/70 border border-stone-200 rounded-2xl text-stone-800 focus:ring-2 focus:ring-emerald-700/30 outline-none transition-all"
            >
              {ROOMS_DATA.map((r) => (
                <option key={r.id} value={r.name}>
                  {r.name} — ${r.price}/night
                </option>
              ))}
            </select>
          </div>

          {/* Unified Date Range Picker */}
          <div className="relative" ref={datePickerRef}>
            <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">
              Stay Dates
            </label>
            <div
              onClick={() => setShowDatePicker(true)}
              className={cn(
                "w-full px-5 py-4 bg-stone-50/70 border border-stone-200 rounded-2xl flex items-center justify-between cursor-pointer transition-all",
                showDatePicker && "ring-2 ring-emerald-700/30"
              )}
            >
              <span
                className={
                  formData.checkIn || formData.checkOut
                    ? "text-stone-800"
                    : "text-stone-400"
                }
              >
                {displayDateRange()}
              </span>
              <CalendarIcon className="text-emerald-700" size={20} />
            </div>

            {showDatePicker && (
              <div className="absolute z-50 mt-2 w-full md:w-auto bg-white rounded-2xl shadow-2xl border border-stone-200 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium text-stone-800">
                    Select Your Stay
                  </h4>
                  <button
                    type="button"
                    onClick={() => setShowDatePicker(false)}
                    className="text-stone-500 hover:text-stone-800 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {loadingAvailability ? (
                  <div className="flex items-center justify-center py-12">
                    <Loader2
                      className="animate-spin text-emerald-700"
                      size={32}
                    />
                    <span className="ml-3 text-stone-600">
                      Loading availability...
                    </span>
                  </div>
                ) : (
                  <DayPicker
                    mode="range"
                    selected={{
                      from: formData.checkIn
                        ? new Date(formData.checkIn)
                        : undefined,
                      to: formData.checkOut
                        ? new Date(formData.checkOut)
                        : undefined,
                    }}
                    onSelect={(range) => handleRangeSelect(range as DateRange)}
                    disabled={[{ before: new Date() }, ...unavailableDates]}
                    modifiers={{
                      unavailable: unavailableDates,
                      today: new Date(),
                    }}
                    modifiersStyles={modifiersStyles}
                    numberOfMonths={2}
                    pagedNavigation
                    classNames={{
                      day: "p-2 text-center rounded-full hover:bg-emerald-50 transition-colors",
                      day_selected:
                        "bg-emerald-900 text-white hover:bg-emerald-900",
                      day_disabled: "opacity-40 cursor-not-allowed",
                      day_today: "font-bold border-2 border-emerald-600",
                      range_start: "bg-emerald-900 text-white rounded-l-full",
                      range_end: "bg-emerald-900 text-white rounded-r-full",
                      range_middle: "bg-emerald-50 text-emerald-900",
                    }}
                  />
                )}
              </div>
            )}
          </div>

          {/* Guests, Name, Email, Phone, Message */}
          {/* ... keep your existing fields here ... */}

          <div>
            <button
              type="submit"
              disabled={status === "loading"}
              className={cn(
                "w-full py-4 rounded-xl text-white font-bold transition-all shadow-lg",
                status === "loading"
                  ? "bg-stone-400 cursor-wait"
                  : "bg-emerald-900 hover:bg-emerald-800"
              )}
            >
              {status === "loading"
                ? "Checking availability..."
                : status === "success"
                ? "Request Sent – Thank You!"
                : status === "unavailable"
                ? "Selected Dates Not Available"
                : "Submit Booking Request"}
            </button>

            {errorMessage && (
              <div className="flex items-center justify-center gap-2 mt-4 text-amber-700 font-medium">
                <AlertCircle size={18} />
                <span>{errorMessage}</span>
              </div>
            )}

            {status === "success" && (
              <p className="text-center text-emerald-700 mt-4 font-medium">
                Your request has been sent. We will contact you shortly to
                confirm.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
