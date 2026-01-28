import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // Future: validate dates, check availability via Prisma, create booking
  const body = await request.json();
  console.log("Booking request:", body);

  return NextResponse.json({ message: "Booking endpoint ready" });
}
