"use client"
import {
  Box,
  Typography,
  Button,
  Stack,
  Container,
} from "@mui/material";
import QuotationForm from "@/src/Landing/components/Form";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ClientSlides from "@/src/Landing/components/Slider";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import ProjectSlides from "@/src/Landing/components/Projects";
import TestimonialSlider from "@/src/Landing/components/Testimonials";
import Footer from "@/src/Landing/components/Footer";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


export default function ConstructionPage() {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        pt: "12px",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box component={"img"} src={"/buildex_logo1.png"} height={"80px"} />
        </Box>
        <Typography
          variant="h5"
          sx={{
            pt: 1,
            fontWeight: 700,
            textAlign: "center",
            color: "#465a65",
            fontFamily: "Poppins",
          }}
        >
          Construction material Supplier and Infra Equipment Rentals
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: "center",
            mb: 1,
            color: "#000",
            fontWeight: 500,
            fontFamily: "Poppins",
            py: 1,
          }}
        >
          On-Time Delivery | Budget-Friendly | Expert Support
        </Typography>
        {/* <Box
          sx={{
            p: 2,
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/steel-1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ fontFamily: "Poppins", color: "#fff" }}
          >
            Top Quality TMT Bars for All Your Construction Needs
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: 500, mb: 2, fontFamily: "Poppins" }}
          >
            Strong. Durable. Reliable.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              mb: 2,
              fontFamily: "Poppins",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 0.5,
              fontWeight: 600,
            }}
          >
            <ConstructionIcon sx={{ color: "#fff" }} />
            Get Direct Factory Prices | Bulk Orders Available | Fast Delivery
          </Typography>

          <Stack spacing={1.5} alignItems="center" mb={2}>
            <Typography
              sx={{
                fontFamily: "Poppins",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontWeight: 600,
              }}
            >
              <CheckCircleIcon color="white"  />
              Fe500 / Fe500D / Fe550 / Fe550D Grades
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontWeight: 600,
              }}
            >
              <CheckCircleIcon color="white"  />
              ISI Certified & Trusted Brands
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontWeight: 600,
              }}
            >
              <CheckCircleIcon color="white"  />
              Best Prices for Builders, Contractors, & Retailers
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontWeight: 600,
              }}
            >
              <CheckCircleIcon color="white"  />
              Available in All Sizes (8mm to 32mm)
            </Typography>
          </Stack>

          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 600,
              borderRadius: "8px",
              boxShadow: 2,
              background: "linear-gradient(90deg, #465a65 0%, #1c953f 100%)",
              backgroundSize: "200% 100%",
              backgroundPosition: "0% 50%",
              fontFamily: "Poppins",
              animation: "moveGradient 3s ease infinite",
              color: "#fff",
              textTransform: "none",
              "@keyframes moveGradient": {
                "0%": { backgroundPosition: "0% 50%" },
                "50%": { backgroundPosition: "100% 50%" },
                "100%": { backgroundPosition: "0% 50%" },
              },
            }}
            href="#quote"
          >
            Get a Free Quote Now
          </Button>
            <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#25D366",
        color: "#fff",
        fontWeight: 600,
        fontFamily: "Poppins",
        px: 3,
        "&:hover": { backgroundColor: "#1ebd5a" },
      }}
      href="https://wa.me/9281446109" // Replace with your WhatsApp number
      target="_blank"
    >
      WhatsApp
    </Button>
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#fff",
     ,fontSize:"20px"   color: "#fff",
        fontWeight: 600,
        fontFamily: "Poppins",
        px: 3,
        "&:hover": { backgroundColor: "#155fa0" },
      }}
      href="tel:9281446109" // Replace with your phone number
    >
      Call Now
    </Button>
    </Stack>
        </Box> */}
        <Box
  sx={{
    px: 3,
    py:5,
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/steel-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
    alignItems: "center",
    gap: 4,
  }}
>
  {/* Left text section */}
 <Box sx={{ color: "#fff", maxWidth: 500 }}>
  <Typography
    variant="h5"
    fontWeight="bold"
    gutterBottom
    sx={{ fontFamily: "Poppins" }}
  >
    Build Strong with Our Construction & Structural Steel – On Time, Every Time
  </Typography>

  <Box display="flex" alignItems="center" mb={1}>
  <ArrowRightAltIcon sx={{ color: "#fff", mr: 1,fontSize:"20px" }} />
  <Typography variant="body1" sx={{ fontFamily: "Poppins" }}>
    ISO-Certified Quality Steel
  </Typography>
</Box>

<Box display="flex" alignItems="center" mb={1}>
  <ArrowRightAltIcon sx={{ color: "#fff", mr: 1,fontSize:"20px" }} />
  <Typography variant="body1" sx={{ fontFamily: "Poppins" }}>
    Tailored Solutions for Your Project
  </Typography>
</Box>

<Box display="flex" alignItems="center" mb={1}>
  <ArrowRightAltIcon sx={{ color: "#fff", mr: 1,fontSize:"20px" }} />
  <Typography variant="body1" sx={{ fontFamily: "Poppins" }}>
    100% Weighment Transparency
  </Typography>
</Box>
  <Typography
    variant="body1"
    sx={{ fontFamily: "Poppins", mb: 1 }}
  >
    • Quality Steel • Best Price • Quick Delivery • Expert Support
  </Typography>
</Box>


  {/* Right box section */}
  <Box
    sx={{
      p: 4,
      background: "#f5f5f5",
      textAlign: "center",
      borderRadius: 2,
      boxShadow: 3,
      maxWidth: 500,
      flexShrink: 0,
    }}
  >
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      mb={2}
    >
      <LocalOfferIcon sx={{ color: "#1c953f", fontSize: 25, mr: 1 }} />
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ fontFamily: "Poppins", color: "#333" }}
      >
        Get a Free Quote
      </Typography>
    </Box>

    <Typography
      variant="body1"
      mb={2}
      sx={{ fontFamily: "Poppins", color: "#000" }}
    >
        Get today’s best price on WhatsApp. Just click the button below and send us a message!
    </Typography>

   <a
  href="https://wa.me/919281446109?text=Hi%2C%20I'm%20interested%20in%20your%20construction%20materials.%20Please%20share%20the%20latest%20pricing%20and%20details."
  target="_blank"
  rel="noopener noreferrer"
>
  <Box
    component={"img"}
    src="/whatsapp.png" // Replace with your image path
    alt="WhatsApp"
    sx={{ width: {xs:170,md:200}, height: {xs:70,md:80}, cursor: "pointer",objectFit:"contain",mixBlendMode:"multiply" }}
  />
</a>

  </Box>
</Box>

        <ClientSlides />
        <ProjectSlides />
        <Box
          sx={{
            background: "linear-gradient(90deg, #465a65 0%, #1c953f 100%)",
            color: "#fff",
            py: { xs: 6, md: 8 },
            px: { xs: 2, md: 6 },
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              mb: 4,
              fontFamily: "Poppins",
            }}
          >
            Why Choose Us?
          </Typography>

          <Stack
  direction={{ xs: "column", md: "row" }}
  spacing={4}
  justifyContent="center"
  alignItems="center"
>
   <Stack
    direction="column"
    spacing={1.5}
    alignItems="center"
    maxWidth={250}
  >
   <CurrencyRupeeIcon sx={{ fontSize: 40, color: "#fff" }} />
    <Typography fontFamily="Poppins" fontWeight={600} align="center" fontSize={16}>
      Budget-Friendly Solutions
    </Typography>
    <Typography fontFamily="Poppins" fontWeight={400} fontSize={13} align="center">
      Quality steel that fits your project and your budget.
    </Typography>
  </Stack>

  <Stack
    direction="column"
    spacing={1.5}
    alignItems="center"
    maxWidth={250}
  >
    <ApartmentIcon sx={{ fontSize: 40, color: "#fff" }} />
    <Typography fontFamily="Poppins" fontWeight={600} align="center" fontSize={16}>
      Ideal for All Projects
    </Typography>
    <Typography fontFamily="Poppins" fontWeight={400} fontSize={13} align="center">
      Residential, Commercial & Industrial.
    </Typography>
  </Stack>

  <Stack
    direction="column"
    spacing={1.5}
    alignItems="center"
    maxWidth={250}
  >
    <LocalShippingIcon sx={{ fontSize: 40, color: "#fff" }} />
    <Typography fontFamily="Poppins" fontWeight={600} align="center" fontSize={16}>
      Fast, On-Time Delivery
    </Typography>
    <Typography fontFamily="Poppins" fontWeight={400} fontSize={13} align="center">
      We respect your project timelines.
    </Typography>
  </Stack>

  <Stack
    direction="column"
    spacing={1.5}
    alignItems="center"
    maxWidth={250}
  >
    <PhoneInTalkIcon sx={{ fontSize: 40, color: "#fff" }} />
    <Typography fontFamily="Poppins" fontWeight={600} align="center" fontSize={16}>
      24/7 Expert Support
    </Typography>
    <Typography fontFamily="Poppins" fontWeight={400} fontSize={13} align="center">
      Guidance whenever you need it.
    </Typography>
  </Stack>
</Stack>
        </Box>
        {/* <Box
          sx={{
            overflow: "hidden",
            py: 6,
            background: "linear-gradient(90deg, #1c953f 0%, #465a65 100%)",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            sx={{ color: "#fff", fontFamily: "Poppins", mb: 3 }}
          >
            Brands We Supply:
          </Typography>

          <Box
            sx={{
              display: "flex",
              width: "200%",
              animation: "scroll 5s linear infinite",
              "@keyframes scroll": {
                "0%": { transform: "translateX(0)" },
                "100%": { transform: "translateX(-50%)" },
              },
            }}
          >
            {[...Array(2)].map((_, loopIndex) => (
              <Box key={loopIndex} sx={{ display: "flex", gap: 6, px: 4 }}>
                {[
                  { name: "Tata Tiscon", logo: "/logos/tata-tiscon.png" },
                  { name: "JSW Neosteel", logo: "/logos/jsw-neosteel.png" },
                  { name: "Vizag Steel", logo: "/logos/vizag-steel.png" },
                  { name: "Shyam Steel", logo: "/logos/shyam-steel.png" },
                  { name: "Kamdhenu", logo: "/logos/kamdhenu.png" },
                ].map((brand, i) => (
                  <Box
                    key={i}
                    sx={{
                      minWidth: 150,
                      textAlign: "center",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      borderRadius: 2,
                      boxShadow: 1,
                      px: 2,
                      py: 2,
                    }}
                  >
                    <Box
                      sx={{
                        height: 60,
                        mb: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        style={{
                          maxHeight: "100%",
                          maxWidth: "100%",
                          objectFit: "contain",
                          filter: "brightness(0) invert(1)",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: 500,
                        color: "#fff",
                      }}
                    >
                      {brand.name}
                    </Typography>
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box> */}

        <Box
          sx={{
            py: { xs: 6, md: 8 },
            px: { xs: 3, md: 6 },
            textAlign: "center",
            backgroundColor: "#f4f6f8",
            borderRadius: "12px",
            my: 2,
          }}
        >
          {/* <Stack
            spacing={3}
            alignItems="center"
            justifyContent="center"
            direction={{ xs: "column", md: "row" }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <VerifiedIcon sx={{ color: "#1c953f", fontSize: 40 }} />
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ fontFamily: "Poppins", color: "#465a65" }}
              >
                🎯 Trusted by 1000+ Builders & Contractors
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <TrendingUpIcon sx={{ color: "#1c953f", fontSize: 40 }} />
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ fontFamily: "Poppins", color: "#465a65" }}
              >
                📈 {`Boost Your Project's Durability with Our Premium Steel`}
              </Typography>
            </Stack>
          </Stack> */}
          <TestimonialSlider />
        </Box>
        <QuotationForm />

        <Box
          sx={{
            background: "linear-gradient(90deg, #465a65 0%, #1c953f 100%)",
            color: "#fff",
            py: { xs: 6, md: 8 },
            px: { xs: 3, md: 6 },
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: 3,
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ fontFamily: "Poppins", mb: 2 }}
          >
            👉 Act Fast! Prices Fluctuate Daily – Lock in the Best Rate Now!
          </Typography>

          <Stack
            spacing={2}
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            alignItems="center"
            mt={3}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<LocalOfferIcon />}
              sx={{
                backgroundColor: "#fff",
                color: "#1c953f",
                fontWeight: "bold",
                fontFamily: "Poppins",
                px: 4,
                py: 1.5,
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "#e0f7ea",
                },
              }}
              href="#quote"
            >
              GET A FREE QUOTE
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<PhoneInTalkIcon />}
              sx={{
                color: "#fff",
                borderColor: "#fff",
                fontWeight: "bold",
                fontFamily: "Poppins",
                px: 4,
                py: 1.5,
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderColor: "#fff",
                },
              }}
              href="tel:9281446109"
            >
              CALL NOW
            </Button>
          </Stack>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
