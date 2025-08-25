"use client";
import React, { useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const Clients = () => {
    const images = [
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/kims.png?updatedAt=1756115886005", alt: "Kims" },
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/aurobindo.png?updatedAt=1756115878307", alt: "aurobindo" },
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/pavilion.png?updatedAt=1756115886709", alt: "pavilion" },
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/vpr.png?updatedAt=1756115903261", alt: "vpr" },
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/mama-home.png?updatedAt=1756115886205", alt: "mama-home" },
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/sri-chakra.png?updatedAt=1756115900897", alt: "sri-chakra" },
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/pv.png?updatedAt=1756115892200", alt: "pv" },
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/vaishno.png?updatedAt=1756115901222", alt: "vaishno" },
         { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/ashoka.jpg?updatedAt=1756115878251", alt: "ashoka" },
                    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/mip.jpg?updatedAt=1756115886491", alt: "mip" },
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
