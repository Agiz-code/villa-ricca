import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { RoomsSection } from "@/components/RoomsSection";
import { SpaSection } from "@/components/SpaSection";
import { BookingForm } from "@/components/BookingForm";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BookingForm />
      <IntroSection />
      <RoomsSection />
      <SpaSection />
    </>
  );
}
