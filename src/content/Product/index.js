"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Tabs,
  Tab,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Container,
  Button,
} from "@mui/material";
import ProductTabs from "@/src/components/TabsPanel";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import QuotationForm from "@/src/components/Form";

const steelCategories = {
  "Construction Steel": ["TMT Bars", "Binding Wire"],
  "Structural Steel": [
    "MS Channel",
    "MS Plate",
    "MS Angle",
    "MS Flat",
    "I Beam",
    "MS Round rod",
    "MS Round pipe",
    "MS Square pipe",
    "MS Rectangle pipe",
    "MS Chequered plate",
    "Roofing sheet",
  ],
};

const images = [
  { src: "/clients/vizag_steel.png", alt: "Vizag Steel" },
  { src: "/clients/sail.png", alt: "Sail" },
  { src: "/clients/tata.png", alt: "Tata" },
  { src: "/clients/jsw.png", alt: "jsw" },
  { src: "/clients/jindal-1.png", alt: "jindal" },
  { src: "/clients/radha.png", alt: "radha" },
  { src: "/clients/mangal.png", alt: "mangal" },
  { src: "/clients/simhadri.png", alt: "simhadri" },
];

export default function ProductPage() {
  return (
    <Box sx={{ backgroundColor: "#ffffff", pb: 8 }}>
        <Box
  sx={{
    position: "relative",
    py: { xs: 10, md: 12 ,lg:14},
    width: "100%",
    backgroundImage: `url('/tmt-bars.jpg')`, // <-- Update with your image path
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Black blurred overlay */}
  <Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.6)",
      backdropFilter: "blur(0.5px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Typography
      variant="h3"
      sx={{
        color: "#FFFF00",
        fontWeight: "bold",
        fontFamily: "Poppins",
        textAlign: "center",
        fontSize: { xs: "28px", md: "32px" },
      }}
    >
      TMT Bars
    </Typography>
  </Box>
  </Box>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {/* Left Section – Product Info */}
          <Grid size={{ xs: 12, md: 9 }}>
            <Paper elevation={3} sx={{ borderRadius: 2, p: 2 }}>
              {/* <Typography
                variant="h4"
                gutterBottom
                sx={{
                  color: "#01933e",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "bold",
                }}
              >
                TMT Bars
              </Typography> */}

              <Box
                component="img"
                src="/tmt-bars.jpg"
                alt="TMT Bars"
                sx={{
                  width: "100%",
                  height: "300px",
                  borderRadius: 2,
                  objectFit: "cover",
                  mb: 2,
                }}
              />

              <Typography
                variant="body1"
                sx={{ fontSize: 14, color: "#333", fontFamily: "Inter", mb: 3 }}
              >
                At HeyBuildex, we are proud to be one of the leading suppliers
                of TMT (Thermo-Mechanically Treated) bars in India, catering to
                both premium and secondary brands. We understand the importance
                of quality and durability in construction, which is why we bring
                you the finest TMT bars from trusted manufacturers that meet
                industry standards and project specifications.
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: "#000",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                }}
              >
                Brands Available
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
              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    fontFamily: "Poppins",
                    color: "#000",
                  }}
                >
                  Sizes Available
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {["8mm", "10mm", "12mm", "16mm", "20mm"].map((size) => (
                    <Box
                      key={size}
                      sx={{
                        px: 2,
                        py: 0.8,
                        borderRadius: "999px",
                        backgroundColor: "#e0f2f1",
                        color: "#00695c",
                        fontWeight: 500,
                        fontFamily: "Inter",
                        fontSize: 14,
                        cursor: "pointer",
                        transition: "0.3s",
                        "&:hover": {
                          backgroundColor: "#b2dfdb",
                          transform: "scale(1.05)",
                        },
                      }}
                    >
                      {size}
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  color="success"
                  size="medium"
                  startIcon={<WhatsAppIcon />}
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                    display: "flex",
                    justifyContent: "center",
                    maxWidth: "300px",
                  }}
                  href="https://wa.me/919281446109?text=Hi%2C%20I'm%20interested%20in%20your%20construction%20materials.%20Please%20share%20the%20latest%20pricing%20and%20details."
                  target="_blank"
                >
                  Get Best Price on WhatsApp
                </Button>
              </Box>

              <ProductTabs />
              <QuotationForm />
            </Paper>

            {/* Optionally: Show product list here */}
          </Grid>

          {/* Right Section – Categories Card */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Paper elevation={3} sx={{ borderRadius: 2, p: 2 }}>
              <List dense>
                {Object.entries(steelCategories).map(([category, items]) => (
                  <Box key={category} sx={{ mb: 2 }}>
                    {/* Category Heading */}
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: "bold",
                        color: "#1976D2",
                        fontFamily: "Poppins",
                        mb: 1,
                        fontSize: 14,
                      }}
                    >
                      {category}
                    </Typography>

                    {/* Category Items */}
                    {items.map((item, idx) => (
                      <ListItem
                        key={item}
                        disablePadding
                        sx={{
                          borderRadius: 1,
                          transition: "0.3s",
                          "&:hover": {
                            backgroundColor: "#e0f2f1",
                            transform: "translateX(4px)",
                          },
                        }}
                      >
                        <ListItemButton>
                          <ListItemText
                            primary={item}
                            primaryTypographyProps={{
                              sx: {
                                fontSize: 12,
                                fontFamily: "Inter",
                                fontWeight: 500,
                                color: "#333",
                              },
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </Box>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
