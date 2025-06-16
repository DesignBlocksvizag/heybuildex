"use client";
import React from "react";
import { Box, Typography, Grid, Paper, Container, Link } from "@mui/material";
import { LocationOn, Email, Phone } from "@mui/icons-material";
import QuotationForm from "@/src/components/Form";

const contactInfo = [
  {
    icon: <Phone sx={{ fontSize: 40, color: "#01933e" }} />,
    title: "Call Us",
    detail: "+91 92814 46109",
  },
  {
    icon: <Email sx={{ fontSize: 40, color: "#01933e" }} />,
    title: "Email",
    detail: "support@heybuildex.com",
  },
  {
    icon: <LocationOn sx={{ fontSize: 40, color: "#01933e" }} />,
    title: "Our Location",
    detail: "2nd Floor, D.No.2-151/3/1, Plot No.719A, near Gandhi Statue, Midhilapuri Vuda Colony, Madhurawada, Visakhapatnam, Andhra Pradesh 530041, India",
  },
];

export default function ContactPage() {
  return (
    <Box sx={{ bgcolor: "#ffffff" }}>
      <Box
        sx={{
          position: "relative",
          py: { xs: 10, md: 12, lg: 14 },
          width: "100%",
          backgroundImage: `url('/contact-us-bg.jpg')`, // <-- Update with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
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
            Contact Us
          </Typography>
        </Box>
      </Box>
      <Container maxWidth={"lg"} sx={{ pt: 6 }}>
        <Grid container spacing={3}>
          {contactInfo.map((item, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: "center",
                  borderRadius: 2,
                  height: "100%",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Box mb={1}>{item.icon}</Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontFamily: "Poppins", fontWeight: 500 }}
                >
                  {item.title}
                </Typography>
                <Typography
                  component={Link}
                  sx={{
                    color: "text.secondary",
                    fontFamily: "Inter",
                    textDecoration: "none",
                  }}
                  href={
                    item.title === "Call Us"
                      ? `tel:${item.detail}`
                      : item.title === "Email"
                      ? `mailto:${item.detail}`
                      : "#"
                  }
                >
                  {item.detail}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <QuotationForm />
      </Container>
      <Box
        sx={{
          width: "100%",
          height: { xs: 300, md: 400 },
          borderRadius: 0,
          overflow: "hidden",
          boxShadow: 3,
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d486243.7356626784!2d83.366858!3d17.802072!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395be6ba722ee5%3A0xe22729ca67d6df43!2sHeyBuildEX%20%E2%80%93%20Construction%20Materials%20and%20Equipment%20Rentals!5e0!3m2!1sen!2sus!4v1749546808171!5m2!1sen!2sus"
          title="Google Map"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>
    </Box>
  );
}
