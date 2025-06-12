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
        backdropFilter: "blur(0.5px)",
        color: "#FFFF00",
      }}>
      <QuotationForm />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: { xs: 300, md: 400 },
          borderRadius: 0,
          overflow: "hidden",
          boxShadow: 3,
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d486243.7356626784!2d83.366858!3d17.802072!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395be6ba722ee5%3A0xe22729ca67d6df43!2sHeyBuildEX%20%E2%80%93%20Construction%20Materials%20and%20Equipment%20Rentals!5e0!3m2!1sen!2sus!4v1749546808171!5m2!1sen!2sus"
          title="Google Map"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>
      <Footer />
    </>
  );
}
