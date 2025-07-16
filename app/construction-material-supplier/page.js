"use client";
import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Container,
  TextField,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Snackbar,
  Alert,
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ClientSlides from "@/src/Landing/components/Slider";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import TestimonialSlider from "@/src/Landing/components/Testimonials";
import Footer from "@/src/Landing/components/Footer";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import FaqSection from "@/src/Landing/components/Faq";
const benefits = [
  "Direct-from-Manufacturer Rates",
  "Delivery in 24–48 Hours",
  "Transparent Weighment & Billing",
  "Support for Bulk & Retail Orders",
  "Trusted by Infra Contractors and Builders across Andhra Pradesh, Telangana, Tamil Nadu, and Odisha.",
];

export default function ConstructionPage() {
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      phone: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const now = new Date().toLocaleString(); // adds date and time
      const data = {
        name: values.name,
        phone: values.phone,
        steelType: "",
        material: "",
        message: values.message,
      };

      try {
        const response = await fetch("https://heybuildex.com/submit-lead.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        const result = await response.json(); // assuming it returns JSON

        if (response.ok) {
          resetForm();
          router.push("/thank-you");
        } else {
          // Handle Kylas API error format
          if (result?.details) {
            const parsedDetails = JSON.parse(result.details);
            setErrorMessage(parsedDetails.message || "Something went wrong.");
          } else {
            setErrorMessage("Submission failed. Please try again.");
          }
          setOpenSnackbar(true);
        }
      } catch (error) {
        console.error("Error:", error);
        setErrorMessage("Network or server error. Please try again.");
        setOpenSnackbar(true);
      } finally {
        setLoading(false);
      }
    },
  });
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        pt: "12px",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            component={"img"}
            src={"/buildex_logo1.png"}
            height={"80px"}
            width={"200px"}
            alt="HeyBuildEx"
          />
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
          Construction Materials & Infra Equipment Rentals Online
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
        <Box
          sx={{
            px: 3,
            py: 5,
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/steel-bg.jpg')",
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
          <Box
            sx={{
              p: 4,
              background: "#f5f5f5",
              textAlign: "center",
              borderRadius: 2,
              boxShadow: 3,
              maxWidth: 500,
              flexShrink: 0,
              mx: "auto",
            }}
            id="quote"
          >
            {/* Header */}
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

            {/* Subheading */}
            <Typography
              variant="body1"
              mb={3}
              sx={{ fontFamily: "Poppins", color: "#000" }}
            >
              Fill in your details to get today’s best price
            </Typography>

            {/* Form Fields */}
            <Box
              component="form"
              display="flex"
              flexDirection="column"
              gap={2}
              mb={3}
            >
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                size="small"
                required
                sx={{
                  fontFamily: "Poppins",
                  "& .MuiInputLabel-root": {
                    fontFamily: "Poppins",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#1c953f",
                  },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#1c953f",
                    },
                  },
                }}
              />
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                size="small"
                required
                sx={{
                  fontFamily: "Poppins",
                  "& .MuiInputLabel-root": {
                    fontFamily: "Poppins",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#1c953f",
                  },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#1c953f",
                    },
                  },
                }}
              />
              <TextField
                label="Material Required"
                variant="outlined"
                fullWidth
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                size="small"
                sx={{
                  fontFamily: "Poppins",
                  "& .MuiInputLabel-root": {
                    fontFamily: "Poppins",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#1c953f",
                  },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#1c953f",
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{ fontWeight: "bold", fontFamily: "Poppins",background:"#1c953f" }}
                type="submit"
                onClick={formik.handleSubmit}
              >
                {`Get Today’s Best Price`}
              </Button>
            </Box>
          </Box>
          {/* Left text section */}
         <Box sx={{ color: "#fff", maxWidth: 500 }}>
  <Typography
    variant="h5"
    fontWeight="bold"
    gutterBottom
    sx={{ fontFamily: "Poppins" }}
  >
    Buy Construction Materials at Lowest Prices
  </Typography>
  <Typography variant="body1" sx={{ fontFamily: "Poppins", mb: 1 }}>
    Construction Steel & Structural Steel 
  </Typography>
<Box sx={{pl:3}}>
  <Typography variant="body1" sx={{ fontFamily: "Poppins", mb: 1 }}>
    ✅ Branded TMT Bars
  </Typography>
  <Typography variant="body1" sx={{ fontFamily: "Poppins", mb: 1 }}>
    ✅ 24–48 Hrs Delivery
  </Typography>
  <Typography variant="body1" sx={{ fontFamily: "Poppins", mb: 1 }}>
    ✅ Transparent Pricing
  </Typography>
  <Typography variant="body1" sx={{ fontFamily: "Poppins", mb: 2 }}>
    ✅ Trusted by 150+ Top Builders
  </Typography>
  <Typography variant="body1" sx={{ fontFamily: "Poppins", fontWeight: 500 }}>
    🎯 Still planning? Let us help you get the right quote.
  </Typography>
  </Box>
</Box>

          {/* Right box section */}
          
        </Box>
        <Box
          sx={{
            background: "linear-gradient(90deg, #1c953f 0%, #465a65 100%)",
            py: 2,
            px: 2,
            mt: 2,
            borderRadius: 2,
          }}
        >
          <Grid container spacing={4} alignItems="center">
            {/* Left Side: Text Content */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  color: "#fff",
                  mb: 3,
                }}
              >
                Trust & Benefits
              </Typography>

              <List sx={{pl:2}}>
                {benefits.map((text, index) => (
                  <ListItem key={index} disableGutters>
                    <ListItemIcon sx={{ minWidth: 0, pr: "10px" }}>
                      <CheckCircleIcon sx={{ color: "#fff" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      slotProps={{
                        primary: {
                          sx: {
                            fontFamily: "Inter",
                            color: "#fff",
                            fontSize: "1rem",
                          },
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>

            {/* Right Side: Image Placeholder */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box
                sx={{
                  width: "100%",
                  height: { xs: 320, md: 350 },
                  backgroundColor: "transparent",
                  borderRadius: 2,
                  backgroundImage: 'url("/trust.png")', // replace with your image
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{mt:3}}>
        </Box>
        <ClientSlides />
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
              <Typography
                fontFamily="Poppins"
                fontWeight={600}
                align="center"
                fontSize={16}
              >
                Budget-Friendly Solutions
              </Typography>
              <Typography
                fontFamily="Poppins"
                fontWeight={400}
                fontSize={13}
                align="center"
              >
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
              <Typography
                fontFamily="Poppins"
                fontWeight={600}
                align="center"
                fontSize={16}
              >
                Ideal for All Projects
              </Typography>
              <Typography
                fontFamily="Poppins"
                fontWeight={400}
                fontSize={13}
                align="center"
              >
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
              <Typography
                fontFamily="Poppins"
                fontWeight={600}
                align="center"
                fontSize={16}
              >
                Fast, On-Time Delivery
              </Typography>
              <Typography
                fontFamily="Poppins"
                fontWeight={400}
                fontSize={13}
                align="center"
              >
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
              <Typography
                fontFamily="Poppins"
                fontWeight={600}
                align="center"
                fontSize={16}
              >
                24/7 Expert Support
              </Typography>
              <Typography
                fontFamily="Poppins"
                fontWeight={400}
                fontSize={13}
                align="center"
              >
                Guidance whenever you need it.
              </Typography>
            </Stack>
          </Stack>
        </Box>
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
          <TestimonialSlider />
        </Box>
        {/* <QuotationForm /> */}

        <Box
          sx={{
            background: "linear-gradient(90deg, #1c953f 0%, #465a65  100%)",
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
          {/* WhatsApp CTA */}
          <Typography
            variant="body2"
            mt={2}
            sx={{ fontFamily: "Poppins", color: "#fff" }}
          >
            Or contact us directly on WhatsApp:
          </Typography>

          <a
            href="https://wa.me/919281446109?text=Hi%2C%20I'm%20interested%20in%20your%20construction%20materials.%20Please%20share%20the%20latest%20pricing%20and%20details."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
  variant="outlined"
  size="large"
  startIcon={<WhatsAppIcon />}
  sx={{
    color: "#fff",
    borderColor: "#fff",
    fontWeight: "bold",
    fontFamily: "Poppins",
    px: 4,
    py: 1.5,
    mt:1,
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.1)",
      borderColor: "#fff",
    },
  }}
>
  WHATSAPP
</Button>
          </a>
        </Box>
        <FaqSection />
      </Container>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        sx={{ position: "fixed", top: 20, right: 20, zIndex: 1300 }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={errorMessage ? "error" : "success"}
          sx={{ width: "100%", fontFamily: "Poppins" }}
        >
          {errorMessage || "Your message has been sent successfully!"}
        </Alert>
      </Snackbar>

      <Footer />
    </Box>
  );
}
