"use client";
import React, { useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const ClientSlides = () => {
  const images = [
    { src: "/clients/vizag_steel.png", alt: "Vizag Steel" },
    { src: "/clients/sail.png", alt: "Sail" },
    { src: "/clients/tata.png", alt: "Tata" },
    { src: "/clients/jsw.png", alt: "jsw" },
    { src: "/clients/jindal-1.png", alt: "jindal" },
    { src: "/clients/radha.png", alt: "radha" },
    { src: "/clients/mangal.png", alt: "mangal" },
    { src: "/clients/simhadri.png", alt: "simhadri" },
    { src: "/clients/ultratech-cement.png", alt: "ultratech" },
    { src: "/clients/maha-cement.png", alt: "maha" },
    { src: "/clients/ramco-cement.jpeg", alt: "ramco" },
    { src: "/clients/sagar-cement.svg", alt: "sagar" },
  ];

  const marqueeRef = useRef(null);

  useEffect(() => {
    // Start the animation after 3 seconds to show all logos first
    const timer = setTimeout(() => {
      if (marqueeRef.current) {
        marqueeRef.current.style.animationPlayState = "running";
      }
    }, 2000); // Adjust the delay to fit your needs (3 seconds here)

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <Box sx={{ py: "40px", backgroundColor: "#fff" }}>
      <Box sx={{ maxWidth: "1200px", margin: "0 auto", padding: "0 15px" }}>
        <Box textAlign={"center"}>
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            sx={{ color: "#000", fontFamily: "Poppins", mb: 3 }}
          >
            Brands We Supply:
          </Typography>
        </Box>
        <Box sx={{ overflow: "hidden", whiteSpace: "nowrap" }}>
          <Box
            ref={marqueeRef}
            sx={{
              display: "inline-block",
              animation: "marquee 20s linear infinite",
              animationPlayState: "paused", // Start paused
            }}
            onMouseEnter={() => {
              if (marqueeRef.current) {
                marqueeRef.current.style.animationPlayState = "paused";
              }
            }}
            onMouseLeave={() => {
              if (marqueeRef.current) {
                marqueeRef.current.style.animationPlayState = "running";
              }
            }}
          >
            {images.map((bank, index) => (
              <Box
                key={`company-slider-item-${index}`}
                sx={{
                  margin: "0 15px",
                  display: "inline-block",
                  background: "#fff",
                }}
              >
                <Box
                  component="img"
                  src={bank.src}
                  alt={bank.alt}
                  sx={{
                    width: "150px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
              </Box>
            ))}
            {images.map((bank, index) => (
              <Box
                key={`company-slider-item-duplicate-${index}`}
                sx={{
                  margin: "0 15px",
                  display: "inline-block",
                  background: "#fff",
                }}
              >
                <Box
                  component="img"
                  src={bank.src}
                  alt={bank.alt}
                  sx={{
                    width: "150px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ClientSlides;
