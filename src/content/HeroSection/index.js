"use client"
import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SimpleSlider = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    { src: '/slides/bnr-1.jpg', alt: 'Slide 1' },
    { src: '/slides/bnr-2.jpg', alt: 'Slide 2' },
    { src: '/slides/bnr-3.jpg', alt: 'Slide 3' },
  ]
  return (
    <Box sx={{ overflow: "hidden", lineHeight: "0px", background: "#F0F4F8" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} sx={{ maxWidth: '100%', width: '100%', height: 'auto' }}>
            <img
              src={image.src}
              alt={image.alt}
              width={"100%"}
              height={"400px"}
              style={{ objectFit: "cover" }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
