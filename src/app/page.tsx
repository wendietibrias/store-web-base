import Navbar from "@/components/global/Navbar";
import CatalogSection from "@/components/landing/CatalogSection";
import HeroSection from "@/components/landing/HeroSection";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
       <Navbar/>
       <HeroSection />
       <CatalogSection/>
    </div>
  );
}
