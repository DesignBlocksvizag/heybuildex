"use client";
import React, { useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const Clients = () => {
    const images = [
    { src: "/clients/kims.png", alt: "Kims" },
    { src: "/clients/aurobindo.png", alt: "aurobindo" },
    { src: "/clients/pavilion.png", alt: "pavilion" },
    { src: "/clients/vpr.png", alt: "vpr" },
    { src: "/clients/mama-home.png", alt: "mama-home" },
    { src: "/clients/sri-chakra.png", alt: "sri-chakra" },
    { src: "/clients/pv.png", alt: "pv" },
    { src: "/clients/vaishno.png", alt: "vaishno" },
       { src: "/clients/bhogapuram.jpg", alt: "bhogapuram" },
        { src: "/clients/gopalpur-ports.jpg", alt: "gopalpur-ports" },
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
            Our Clients:
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

export default Clients;
