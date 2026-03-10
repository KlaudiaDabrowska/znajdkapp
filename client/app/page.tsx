import { FoundSection } from "@/components/FoundSection";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FoundSection />
    </>
  );
}
