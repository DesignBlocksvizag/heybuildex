import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import HeroContent from "@/src/content/HeroSection";
import OurProducts from "@/src/content/OurProducts";
import ClientSlides from "@/src/content/Sliders/Brands";
import ProjectSlides from "@/src/content/Sliders/Projects";
import SectorsWeServe from "@/src/content/Sliders/SectorsWeServe";
import TestimonialSlider from "@/src/content/Testimonials";
import WelcomeSection from "@/src/content/WelcomeSection";
export default function Home() {
  return (
    <>
      <Header />
      <HeroContent />
      <WelcomeSection />
      <OurProducts />
      <ClientSlides />
      <ProjectSlides />
      <SectorsWeServe />
      <TestimonialSlider />
      <Footer />
    </>
  );
}
