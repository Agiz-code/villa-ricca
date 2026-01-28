import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { roomId: string } }
) {
  try {
    const { searchParams } = new URL(request.url);
    const year = searchParams.get("year");
    const month = searchParams.get("month");

    if (!year || !month) {
      return NextResponse.json(
        { error: "Year and month required" },
        { status: 400 }
      );
    }

    const startOfMonth = new Date(Number(year), Number(month) - 1, 1);
    const endOfMonth = new Date(Number(year), Number(month), 0);

    const bookings = await prisma.booking.findMany({
      where: {
        roomId: params.roomId,
        OR: [
          {
            checkIn: { lte: endOfMonth },
            checkOut: { gte: startOfMonth },
          },
        ],
      },
      select: {
        checkIn: true,
        checkOut: true,
      },
    });

    // Generate array of unavailable dates
    const unavailableDates: Date[] = [];

    bookings.forEach((booking: { checkIn: string | number | Date; checkOut: string | number | Date; }) => {
      const current = new Date(booking.checkIn);
      const end = new Date(booking.checkOut);

      while (current <= end) {
        unavailableDates.push(new Date(current));
        current.setDate(current.getDate() + 1);
      }
    });

    return NextResponse.json({ unavailable: unavailableDates });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch availability" },
      { status: 500 }
    );
  }
}
