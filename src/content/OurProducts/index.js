"use client";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";

const products = [
   {
    title: "TMT Bars",
    image: "tmt-bars.jpg",
  },
   {
    title: "Binding Wire",
    image: "binding-wire.jpg",
  },
  {
    title: "MS Channel",
    image: "ms-channel.jpg",
  },
  {
    title: "MS Plate",
    image: "ms-plate.jpg",
  },
    {
    title: "MS Angle",
    image: "ms-angles.jpg",
  },
  //  {
  //   title: "MS Flat",
  //   image: "ms-flat.jpg",
  // },
  {
    title: "I Beam",
    image: "i-beam.jpg",
  },
  //   {
  //   title: "MS Round Rod",
  //   image: "ms-round-rod.jpg",
  // },
  {
    title: "MS Square Pipe",
    image: "ms-square-pipe.jpg",
  },
  //  {
  //   title: "MS Rectangular Pipe",
  //   image: "ms-rectangular-pipe.jpg",
  // },
  // {
  //   title: "MS Chequered Plate",
  //   image: "ms-chequered-plate.jpg",
  // },
  {
    title: "Roofing Sheets",
    image: "roofing-sheets.jpg",
  },
    {
    title: "Cement",
    image: "cement.png",
  },
    {
    title: "RMC",
    image: "rmc.jpg",
  },
    {
    title: "Piling Ring",
    image: "infra-rentals.jpg",
  },
   {
    title: "Safety",
    image: "safety.jpg",
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
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default OurProducts;
