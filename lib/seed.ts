import { PrismaClient } from "@prisma/client";
import { ROOMS_DATA } from "../data/rooms";
const prisma = new PrismaClient();

async function main() {
  // Clear existing data (careful in production!)
  await prisma.booking.deleteMany();
  await prisma.room.deleteMany();

  // Seed rooms from your existing mock data
  for (const roomData of ROOMS_DATA) {
    await prisma.room.create({
      data: {
        id: roomData.id,
        name: roomData.name,
        price: roomData.price,
        capacity: roomData.capacity,
        description: roomData.description,
        images: roomData.images,
        amenities: roomData.amenities,
      },
    });
  }

  console.log("Database seeded with rooms");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
