import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import AboutSection from "@/components/landing/AboutSection";
import CatalogSection from "@/components/landing/CatalogSection";
import ContactSection from "@/components/landing/ContactSection";
import HeroSection from "@/components/landing/HeroSection";
import TestimonialSection from "@/components/landing/TestimonialSection";

export default async function Home() {
  return (
    <div className="w-full min-h-screen">
       <Navbar/>
       <HeroSection />
       <AboutSection />
       <CatalogSection/>
       <TestimonialSection/>
       <ContactSection/>
       <Footer/>
    </div>
  );
}
