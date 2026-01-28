// app/api/bookings/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendBookingEmail } from "@/lib/email"; // ← assumes you renamed in email.ts
import { format, isBefore } from "date-fns";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Validate input dates
    const checkIn = new Date(body.checkIn);
    const checkOut = new Date(body.checkOut);
    const now = new Date();

    if (
      isNaN(checkIn.getTime()) ||
      isNaN(checkOut.getTime()) ||
      checkIn >= checkOut
    ) {
      return NextResponse.json(
        { error: "Invalid date range. Check-in must be before check-out." },
        { status: 400 }
      );
    }

    if (isBefore(checkIn, now)) {
      return NextResponse.json(
        { error: "Check-in date cannot be in the past." },
        { status: 400 }
      );
    }

    // 2. Find the room
    const room = await prisma.room.findUnique({
      where: { name: body.roomName },
    });

    if (!room) {
      return NextResponse.json(
        { error: "Selected room not found" },
        { status: 404 }
      );
    }

    // 3. Check overlapping bookings
    const overlapping = await prisma.booking.findFirst({
      where: {
        roomId: room.id,
        OR: [
          { checkIn: { lte: checkOut }, checkOut: { gte: checkIn } },
          { checkIn: { gte: checkIn }, checkOut: { lte: checkOut } },
        ],
      },
    });

    if (overlapping) {
      return NextResponse.json(
        {
          error: "Selected dates are not available for this room",
          details: "These dates overlap with an existing booking",
        },
        { status: 409 }
      );
    }

    // 4. Create pending booking
    const booking = await prisma.booking.create({
      data: {
        roomId: room.id,
        checkIn,
        checkOut,
        guests: Number(body.guests),
        name: body.name.trim(),
        email: body.email.trim(),
        phone: body.phone.trim(),
        message: body.message?.trim() || null,
        status: "PENDING",
      },
      include: {
        room: { select: { name: true, price: true } },
      },
    });

    // 5. Notify admin
    if (process.env.ADMIN_EMAIL) {
      await sendBookingEmail({
        id: booking.id,
        room: { name: booking.room.name },
        checkIn: format(checkIn, "MMM dd, yyyy"),
        checkOut: format(checkOut, "MMM dd, yyyy"),
        guests: booking.guests,
        name: booking.name,
        email: booking.email,
        status: booking.status,
      });
    }

    // 6. Success
    return NextResponse.json(
      {
        success: true,
        message:
          "Booking request received successfully. We will review and confirm shortly.",
        bookingId: booking.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[BOOKING_POST_ERROR]", error);
    return NextResponse.json(
      { error: "Failed to process booking request. Please try again later." },
      { status: 500 }
    );
  }
}
