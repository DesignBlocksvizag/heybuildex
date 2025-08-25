"use client";
import React from "react";
import { Box, Typography } from "@mui/material";

const SectorsWeServe = () => {
  const images = [
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/roads.png?updatedAt=1756115892833", alt: "roads" },
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/railways.png?updatedAt=1756115892772", alt: "railways" },
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/airports.png?updatedAt=1756115878241", alt: "airports" },
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/airports.png?updatedAt=1756115878241", alt: "real-estate" },
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/industries.jpg?updatedAt=1756115878258", alt: "industries" },
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/ports.png?updatedAt=1756115890454", alt: "ports" },
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
