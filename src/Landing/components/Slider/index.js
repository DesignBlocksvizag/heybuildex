"use client";
import React, { useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const ClientSlides = () => {
  const images = [
    { src: "/imagesclients/vizag_steel.png", alt: "Vizag Steel" },
    { src: "/imagesclients/sail.png", alt: "Sail" },
    { src: "/imagesclients/tata.png", alt: "Tata" },
    { src: "/imagesclients/jsw.png", alt: "jindal" },
    { src: "/imagesclients/jindal-1.png", alt: "jindal" },
    { src: "/imagesclients/radha.png", alt: "jindal" },
    { src: "/imagesclients/mangal.png", alt: "jindal" },
    { src: "/imagesclients/simhadri.png", alt: "jindal" },
    // { src: "/imagesclients/ports.png", alt: "jindal" },
    //   { src: "/imagesclients/airports.png", alt: "jindal" },
    // { src: "/imagesclients/railways.png", alt: "jindal" },
    // { src: "/imagesclients/construction.png", alt: "jindal" },
    // { src: "/imagesclients/real-estate.png", alt: "jindal" },
    //      { src: "/imagesclients/roads.png", alt: "jindal" },
    // { src: "/imagesclients/indian-navy.png", alt: "jindal" },
    // { src: "/imagesclients/vizag-port.png", alt: "jindal" },
    // { src: "/imagesclients/vo-port.png", alt: "jindal" },
    //    { src: "/imagesclients/ks-port.png", alt: "jindal" },
    //      { src: "/imagesclients/jsw-port.png", alt: "jindal" },
    // { src: "/imagesclients/kims.png", alt: "jindal" },
    // { src: "/imagesclients/aurobindo.png", alt: "jindal" },
    // { src: "/imagesclients/pavilion.png", alt: "jindal" },
    //  { src: "/imagesclients/vpr.png", alt: "jindal" },
    //      { src: "/imagesclients/mama-home.png", alt: "jindal" },
    // { src: "/imagesclients/sri-chakra.png", alt: "jindal" },
    // { src: "/imagesclients/pv.png", alt: "jindal" },
    // { src: "/imagesclients/vaishno.png", alt: "jindal" },
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
