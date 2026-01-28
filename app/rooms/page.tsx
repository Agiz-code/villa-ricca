// app/rooms/page.tsx
import RoomsListingPage from "@/components/RoomsListingPage"; // client component

export const metadata = {
  title: "All Suites & Villas | Villa Rica Resort",
  description: "Explore our collection of luxurious suites and private villas.",
};

// Server component — wraps the client page
export default function RoomsPage() {
  return <RoomsListingPage />;
}
