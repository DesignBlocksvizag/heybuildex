"use client";
import React, { useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const ClientSlides = () => {
  const images = [
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/vizag_steel.png?updatedAt=1756115900492", alt: "Vizag Steel" },
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/sail.png?updatedAt=1756115894420", alt: "Sail" },
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/tata.png?updatedAt=1756115901168", alt: "Tata" },
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/jsw.png?updatedAt=1756115884849", alt: "jsw" },
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/jindal-1.png?updatedAt=1756115878543", alt: "jindal" },
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/radha.png?updatedAt=1756115892233", alt: "radha" },
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/mangal.png?updatedAt=1756115886578", alt: "mangal" },
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/simhadri.png?updatedAt=1756115900656", alt: "simhadri" },
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/ultratech-cement.png?updatedAt=1756115901161", alt: "ultratech" },
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/maha-cement.png?updatedAt=1756115886032", alt: "maha" },
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/ramco-cement.jpeg?updatedAt=1756115892192", alt: "ramco" },
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/sagar-cement.svg?updatedAt=1756115892924", alt: "sagar" },
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
