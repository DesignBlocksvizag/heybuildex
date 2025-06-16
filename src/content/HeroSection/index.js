"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import { Box, Typography, Button, Stack } from "@mui/material";
import ExploreIcon from "@mui/icons-material/Explore";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";

// Slider images and content
const slides = [
  {
    image: "/slides/bnr-1.jpg",
    title: "Reliable Construction Materials & Equipment Rentals",
    text: "Delivering top-grade structural steel and infrastructure equipment — always on time, always within budget, with expert support at every step.",
    link: "/steel/tmt-bars",
  },
  {
    image: "/slides/bnr-2.jpg",
    title: "ISO-Certified Quality, Built to Last",
    text: "Our structural steel meets ISO standards for strength, durability, and consistency — ensuring your projects stand strong for years to come.",
    link: "/steel/tmt-bars",
  },
  {
    image: "/slides/bnr-3.jpg",
    title: "Transparent. Affordable. Expert-Backed.",
    text: "Enjoy 100% weighment transparency, competitive pricing, and guidance from experienced professionals — all tailored to your project’s needs.",
    link: "/steel/tmt-bars",
  },
];


export default function HeroContent() {
  const [activeSlide, setActiveSlide] = useState(0);
  const router = useRouter();

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true,
    beforeChange: (_, next) => setActiveSlide(next),
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "450px", md: "500px" },
        overflow: "hidden",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "500px",
            }}
          >
            {/* Overlay */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 1,
              }}
            />

            {/* Animated Content */}
            <Box
              key={activeSlide === index ? `slide-${index}` : undefined}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 2,
                textAlign: "center",
                animation: activeSlide === index ? "slideUp 1s ease-out" : "none",
                pb: {xs:1,md:0},
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  mb: 1,
                  fontSize: { xs: "25px", md: "30px" },
                }}
              >
                {slide.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: { xs: "14px", md: "17px" },
                  mb: 2,
                }}
              >
                {slide.text}
              </Typography>

              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                flexWrap="wrap"
              >
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<ExploreIcon />}
                  onClick={() => router.push(slide.link)}
                  sx={{
            backgroundColor: '#FFD700',
            color: '#600F11',
            borderRadius: '20px',
            px: 5,
            py: 1.5,
            fontFamily: 'Poppins',
            '&:hover': { backgroundColor: '#FFC107' },
          }}
                  
                >
                  Explore
                </Button>
                {/* {index === 1 && (
                  <Button
                    variant="outlined"
                    color="inherit"
                    endIcon={<ArrowForwardIosIcon />}
                    onClick={() => router.push("/services")}
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      color: "#fff",
                      borderColor: "#fff",
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.1)",
                      },
                    }}
                  >
                    More
                  </Button>
                )} */}
              </Stack>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
