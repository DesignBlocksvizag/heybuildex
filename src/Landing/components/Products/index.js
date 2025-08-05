"use client";
import React from "react";
import { Box, Typography } from "@mui/material";

const LandingProductSlides = () => {
  const images = [
    { src: "/products/tmt.jpg", alt: "tmt" },
    { src: "/products/binding-wire.jpg", alt: "tmt" },
    { src: "/products/ms-angle.jpg", alt: "ms angle" },
    { src: "/products/ms-plates.jpg", alt: "ms plates" },
    { src: "/products/ms-flats.jpg", alt: "ms flats" },
    { src: "/products/ms-round-rod.jpg", alt: "ms round rod" },
    { src: "/products/ms-square-pipe.jpg", alt: "ms square pipe" },
    { src: "/products/i-beams.jpg", alt: "i beams" },
     { src: "/products/roofing-sheets.jpg", alt: "roofing sheets" },
  ];

  return (
    <Box sx={{ py: "40px", backgroundColor: "#fff" }}>
      <Box sx={{ maxWidth: "1200px", margin: "0 auto", padding: "0 15px" }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign="center"
          sx={{ color: "#000", fontFamily: "Poppins", mb: 3 }}
        >
          Explore Our Products
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
          }}
        >
          {images.map((img, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "150px", sm: "150px" },
                height: { xs: "150px", sm: "150px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fff",
                boxShadow: 1,
                borderRadius: 2,
                p: 0.5,
              }}
            >
              <Box
                component="img"
                src={img.src}
                alt={img.alt}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default LandingProductSlides;
