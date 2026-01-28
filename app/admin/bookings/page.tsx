import { prisma } from "@/lib/prisma";
import { format } from "date-fns";

export default async function AdminBookings() {
  const bookings = await prisma.booking.findMany({
    include: { room: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-stone-50 p-8 md:p-12">
      <h1 className="text-4xl font-light text-stone-800 mb-12">
        Booking Requests
      </h1>

      <div className="space-y-8">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white p-8 rounded-3xl shadow-lg border border-stone-100"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-emerald-900">
                  {booking.room.name}
                </h3>
                <p className="text-stone-600 mt-1">
                  {format(new Date(booking.checkIn), "MMM dd, yyyy")} –{" "}
                  {format(new Date(booking.checkOut), "MMM dd, yyyy")}
                </p>
              </div>

              <span
                className={cn(
                  "px-4 py-1 rounded-full text-sm font-medium",
                  booking.status === "PENDING" && "bg-amber-100 text-amber-800",
                  booking.status === "CONFIRMED" &&
                    "bg-emerald-100 text-emerald-800",
                  booking.status === "REJECTED" && "bg-red-100 text-red-800",
                  booking.status === "CANCELLED" && "bg-gray-100 text-gray-800"
                )}
              >
                {booking.status}
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-sm text-stone-500">Guest</p>
                <p className="font-medium">{booking.name}</p>
                <p className="text-sm">
                  {booking.email} • {booking.phone}
                </p>
              </div>
              <div>
                <p className="text-sm text-stone-500">Message</p>
                <p className="text-stone-700">{booking.message || "—"}</p>
              </div>
            </div>

            {booking.status === "PENDING" && (
              <div className="flex gap-4">
                <form action={`/api/bookings/${booking.id}`} method="PATCH">
                  <input type="hidden" name="status" value="CONFIRMED" />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-emerald-900 text-white rounded-xl hover:bg-emerald-800 transition-all"
                  >
                    Confirm Booking
                  </button>
                </form>

                <form action={`/api/bookings/${booking.id}`} method="PATCH">
                  <input type="hidden" name="status" value="REJECTED" />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all"
                  >
                    Reject
                  </button>
                </form>
              </div>
            )}
          </div>
        ))}

        {bookings.length === 0 && (
          <p className="text-center text-stone-500 py-12">No bookings yet.</p>
        )}
      </div>
    </div>
  );
}
