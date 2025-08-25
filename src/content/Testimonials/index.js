"use client"
import Slider from "react-slick";
import { Box, Container, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    text: "HeyBuildEX has played a key role in the success of our construction projects. Their steel quality is top-notch — unmatched in strength, durability, and precision.",
    author: "Mr. Anil Reddy, Chief Engineer, Green Engineering Solutions",
  },
  {
    text: "We’ve partnered with many steel suppliers, but HeyBuildEX truly stands out for their consistency and dependability. Their customer service is exceptional.",
    author: "Kiran Kumar, CEO, Skyline Construction",
  },
  {
    text: "We appreciate HeyBuildEX for their focus on innovation and sustainable steel solutions. Their eco-friendly approach aligns seamlessly with our company’s values.",
    author: "P. Chowdary, Operations Director, Heavy Industries Inc",
  },
  {
    text: "HeyBuildEX provided outstanding service that helped me complete my project ahead of schedule. Truly impressive support!",
    author: "Mr. Acharya (Justdial Client)",
  },
  {
    text: "A great company to work with. They deliver quality TMT bars on the exact date and time we request. Pricing is competitive and budget-friendly. I highly recommend them to others in the infrastructure and real estate sectors.",
    author: "Mr. Sarath Kumar, PRECA Solutions India Pvt. Ltd.",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  arrows: true,
};

export default function TestimonialSlider() {
  return (
    <Box sx={{  py: 6, px: 2,   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url('https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/client-bg.jpg?updatedAt=1756113786603')`,
         backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      "& .slick-prev:before, & .slick-next:before": {
          color: "#fff!important",
        },
        "& .slick-dots li button:before": {
          color: "#fff!important",
          fontSize: "7px",
          opacity: 0.75,
        },
        "& .slick-dots li.slick-active button:before": {
          color: "#fff!important",
          opacity: 1,
        },}}>
      <Container maxWidth="md">
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign="center"
        mb={4}
        color="#fff"
        fontFamily="Poppins"
      >
        What Our Clients Say?
      </Typography>

      <Slider {...sliderSettings}>
        {testimonials.map((testimonial, index) => (
          <Box key={index} sx={{ px: 2 }}>
            <Typography
              variant="body1"
              fontSize={18}
              fontStyle="italic"
              fontFamily="Poppins"
              textAlign="center"
              sx={{ color: "#fff" }}
            >
              “{testimonial.text}”
            </Typography>
            <Typography
              variant="subtitle2"
              textAlign="center"
              mt={2}
              fontSize={14}
              fontFamily="Poppins"
              fontWeight="medium"
              sx={{ color: "#fff " }}
            >
              — {testimonial.author}
            </Typography>
          </Box>
        ))}
      </Slider>
      </Container>
    </Box>
  );
}
