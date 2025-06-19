"use client";
import React from "react";
import { Box, Typography } from "@mui/material";

const ProjectSlides = () => {
  const images = [
    { src: "/imagesclients/indian-navy.png", alt: "indian-navy" },
    { src: "/imagesclients/vizag-port.png", alt: "vizag-port" },
    { src: "/imagesclients/vo-port.jpg", alt: "vo-port" },
    { src: "/imagesclients/kp-port.png", alt: "kp-port" },
    { src: "/imagesclients/jsw-port.png", alt: "jsw-port" },
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
          Trusted by Leading Projects
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
                width: { xs: "120px", sm: "150px" },
                height: { xs: "100px", sm: "100px" },
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

export default ProjectSlides;
