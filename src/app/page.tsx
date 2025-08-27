import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import AboutSection from "@/components/landing/AboutSection";
import CatalogSection from "@/components/landing/CatalogSection";
import ContactSection from "@/components/landing/ContactSection";
import HeroSection from "@/components/landing/HeroSection";

export default async function Home() {
  return (
    <div className="w-full min-h-screen">
       <Navbar/>
       <HeroSection />
       <AboutSection />
       <CatalogSection/>
       <ContactSection/>
       <Footer/>
    </div>
  );
}
