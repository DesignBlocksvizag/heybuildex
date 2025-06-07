"use client";
import React from "react";
import { Box, Typography } from "@mui/material";

const SectorsWeServe = () => {
  const images = [
    { src: "/clients/roads.png", alt: "roads" },
    { src: "/clients/railways.png", alt: "railways" },
    { src: "/clients/airports.png", alt: "airports" },
    { src: "/clients/real-estate.png", alt: "real-estate" },
    { src: "/clients/roads.png", alt: "roads" },
    { src: "/clients/ports.png", alt: "ports" },
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
          Sectors We Serve
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
                height: { xs: "80px", sm: "100px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fff",
                boxShadow: 1,
                borderRadius: 2,
                p: 1,
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

export default SectorsWeServe;
