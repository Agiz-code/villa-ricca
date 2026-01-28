import { format } from "date-fns";
import { transporter } from "@/lib/nodemailer";

const STATUS_MESSAGES = {
  CONFIRMED: "Your booking has been confirmed! 🎉",
  REJECTED:
    "Unfortunately, your booking request could not be accepted at this time.",
  CANCELLED: "Your booking has been cancelled.",
} as const;

type BookingStatus = keyof typeof STATUS_MESSAGES;

export async function sendGuestStatusEmail(booking: {
  status: BookingStatus;
  email: string;
  name: string;
  room: { name: string };
  checkIn: string | Date;
  checkOut: string | Date;
  guests: number;
}) {
  const statusText =
    STATUS_MESSAGES[booking.status] ?? "Your booking status has been updated.";

  const mailOptions = {
    from: `"Villa Rica Resort" <${process.env.SMTP_USER}>`,
    to: booking.email,
    subject: `Villa Rica Resort - Booking Update (${booking.room.name})`,
    html: `
      <h2>${statusText}</h2>
      <p>Dear ${booking.name},</p>
      <p><strong>Room:</strong> ${booking.room.name}</p>
      <p><strong>Dates:</strong> ${format(
        new Date(booking.checkIn),
        "MMM dd, yyyy"
      )} – ${format(new Date(booking.checkOut), "MMM dd, yyyy")}</p>
      <p><strong>Guests:</strong> ${booking.guests}</p>
      <br>
      <p>Thank you for choosing Villa Rica Resort ${
        booking.status === "CONFIRMED"
          ? "— we look forward to welcoming you!"
          : "."
      }</p>
      <hr style="border:none;border-top:1px solid #eee">
      <small style="color:#666">If you have any questions, simply reply to this email.</small>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (err) {
    console.error("Email sending failed:", err);
    return false;
  }
}
