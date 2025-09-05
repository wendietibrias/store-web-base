import Footer from "@/components/global/Public/Footer";
import Navbar from "@/components/global/Public/Navbar";
import AboutSection from "@/app/(home)/components/AboutSection";
import CatalogSection from "@/app/(home)/components/CatalogSection";
import ContactSection from "@/app/(home)/components/ContactSection";
import HeroSection from "@/app/(home)/components/HeroSection";
import TestimonialSection from "@/app/(home)/components/TestimonialSection";

export default async function Home() {
  return (
    <div className="w-full min-h-screen">
       <Navbar isIndex={true}/>
       <HeroSection />
       <AboutSection />
       <CatalogSection/>
       <TestimonialSection/>
       <ContactSection/>
       <Footer/>
    </div>
  );
}
