"use client";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import Link from "next/link";

const products = [
  {
    title: "TMT Bars",
    image: "tmt-bars.jpg",
    link: "/steel/tmt-bars",
  },
  {
    title: "Binding Wire",
    image: "binding-wire.jpg",
    link: "/steel/binding-wire",
  },
  {
    title: "MS Channel",
    image: "ms-channel.jpg",
    link: "/steel/ms-channel",
  },
  {
    title: "MS Plate",
    image: "ms-plate.jpg",
    link: "/steel/ms-plate",
  },
  {
    title: "MS Angle",
    image: "ms-angles.jpg",
    link: "/steel/ms-angle",
  },
  {
    title: "I Beam",
    image: "i-beam.jpg",
    link: "/steel/ms-i-beam",
  },
  {
    title: "MS Square Pipe",
    image: "ms-square-pipe.jpg",
    link: "/steel/ms-square-pipe",
  },
  {
    title: "Roofing Sheets",
    image: "roofing-sheets.jpg",
    link: "/steel/roofing-sheet",
  },
  {
    title: "Cement",
    image: "cement.png",
    link: "/cement", // or redirect to a default cement page
  },
  {
    title: "RMC",
    image: "rmc.jpg",
    link: "/rmc",
  },
  {
    title: "Infra Equipment Rental",
    image: "infra-rental.jpg",
    link: "/infra-rentals",
  },
  {
    title: "Safety",
    image: "safety.jpg",
    link: "/safety",
  },
];

const OurProducts = () => {
  return (
    <Box
      sx={{
        px: 2,
        py: 8,
        background: "linear-gradient(90deg, #888888  0%, #6f9bb3  100%)",
      }}
    >
      {/* Heading */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            position: "relative",
            display: "inline-block",
            fontWeight: 700,
            fontFamily: "Poppins",
            color: "#ffffff",
            px: 2,
            mb: 1,
          }}
        >
          Our Products
        </Typography>
      </Box>

      {/* Product Grid */}
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <Grid container spacing={3} justifyContent={"center"} alignItems={"center"}>
          {products.map((product, index) => (
            <Grid key={index} size={{xs:12,sm:6,md:3}}>
                <Link
    href={product.link || "#"}
    style={{ textDecoration: "none" }}
    passHref
  >

              <Card
                sx={{
                  borderRadius: 0,
                  boxShadow: 3,
                  height: "100%",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: 1,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{py:"8px!important"}}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, fontFamily: "Poppins", color: "#1976D2" ,textAlign:"center"}}
                  >
                    {product.title}
                  </Typography>
                </CardContent>
              </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default OurProducts;
