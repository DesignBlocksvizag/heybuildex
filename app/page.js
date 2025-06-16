import React from "react";
import { Box } from "@mui/material";
import Footer from "@/src/components/Footer";
import QuotationForm from "@/src/components/Form";
import Header from "@/src/components/Header";
import HeroContent from "@/src/content/HeroSection";
import OurProducts from "@/src/content/OurProducts";
import ClientSlides from "@/src/content/Sliders/Brands";
import ProjectSlides from "@/src/content/Sliders/Projects";
import SectorsWeServe from "@/src/content/Sliders/SectorsWeServe";
import TestimonialSlider from "@/src/content/Testimonials";
import WelcomeSection from "@/src/content/WelcomeSection";
import Clients from "@/src/content/Sliders/Clients";
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
      <Clients />
      <TestimonialSlider />
      <Box sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/quote-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(0.3px)",
        color: "#FFFF00",
      }}>
      <QuotationForm />
      </Box>
      <Footer />
    </>
  );
}
