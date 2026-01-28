export async function sendGuestStatusEmail(booking: any) {
  const statusText = {
    CONFIRMED: "Your booking has been confirmed!",
    REJECTED: "Unfortunately, your booking request could not be accepted.",
    CANCELLED: "Your booking has been cancelled.",
  }[booking.status];

  const mailOptions = {
    from: process.env.SMTP_USER,
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
      <p>Thank you for choosing Villa Rica Resort. We look forward to welcoming you!</p>
      <hr>
      <small>If you have any questions, reply to this email.</small>
    `,
  };

  await transporter.sendMail(mailOptions);
}
