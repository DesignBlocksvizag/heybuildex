"use client";
import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqSection = () => {
  const faqs = [
    {
      question: "What is the minimum order?",
      answer:
        "At HeyBuildex, there’s no strict minimum order quantity—whether you're building a home or managing a large-scale project, we cater to all requirements. However, the Minimum Order Quantity may vary based on the type of material and supplier terms. Please contact us for details related to your specific order.",
    },
    {
      question: "How soon can I get delivery?",
      answer:
        "We ensure fast and reliable delivery within 24 to 48 hours, depending on the product type and location. Our team coordinates with verified logistics partners to ensure your materials arrive safely and on time.",
    },
    {
      question: "Do you deliver to rural areas?",
      answer:
        "Yes! We deliver to both urban and rural locations across Andhra Pradesh, Telangana, and nearby regions. Share your pin code, and we’ll confirm service availability and schedule your delivery.",
    },
    {
      question: "Can I order multiple materials?",
      answer:
        "Absolutely. HeyBuildex is your one-stop construction material procurement partner. You can order a mix of materials—TMT bars, cement, structural steel, RMC, and more—in a single order. Our platform is optimized for both bulk and mixed-material purchases.",
    },
    {
      question: "How do I make payments?",
      answer: (
        <Box component="ul" sx={{ pl: 2, mb: 0 }}>
          <li>UPI / QR Code</li>
          <li>Online bank transfers (NEFT / RTGS / IMPS)</li>
          <li>Debit/Credit cards</li>
          <li>Cash on delivery (available in select cases)</li>
          <Box component="p" sx={{ mt: 1 }}>
            For corporate and project orders, we also provide custom invoicing
            and payment terms. Our team is here to assist you at every step for
            a seamless transaction experience.
          </Box>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", px: 2, pt: 4 }}>
      <Typography
        variant="h5"
        gutterBottom
        align="center"
        sx={{ fontWeight: "bold", color: "#000", fontFamily: "Poppins",mb:2 }}
      >
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          sx={{
            mb: 2,
            borderRadius: 2,
            boxShadow: 1,
            bgcolor: "#f9f9f9",
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 2 }}>
            <Typography
              sx={{ fontWeight: 600, fontFamily: "Poppins", fontSize: "1rem" }}
            >
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 3, py: 2 }}>
            <Typography
              component="div"
              sx={{ fontFamily: "Inter", fontSize: "0.95rem", color: "#444" }}
            >
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FaqSection;
