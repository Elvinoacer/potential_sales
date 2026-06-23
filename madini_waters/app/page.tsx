import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import DeliverySection from "@/components/DeliverySection";
import MineralSection from "@/components/MineralSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import SubscribeSection from "@/components/SubscribeSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <DeliverySection />
      <MineralSection />
      <TestimonialsSection />
      <BlogSection />
      <SubscribeSection />
      <Footer />
    </main>
  );
}
