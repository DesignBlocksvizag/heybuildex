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
    title: "MS Flat",
    description: "High-quality mild steel flats suitable for construction and fabrication.",
    image: "ms-flat.jpg",
  },
  {
    title: "MS Channel",
    description: "Durable MS channels used for structural applications.",
    image: "ms-channel.jpg",
  },
  {
    title: "MS Plate",
    description: "Thick mild steel plates ideal for heavy-duty usage.",
    image: "ms-plate.jpg",
  },
  {
    title: "I Beam",
    description: "Robust I Beams for industrial and structural use.",
    image: "i-beam.jpg",
  },
  {
    title: "MS Square Pipe",
    description: "Versatile MS square pipes for multiple applications.",
    image: "ms-square-pipe.jpg",
  },
  {
    title: "MS Plates",
    description: "Premium grade MS plates in various sizes and thicknesses.",
    image: "ms-plates.jpg",
  },
  {
    title: "MS Angles",
    description: "Precision-cut MS angles for framing and reinforcements.",
    image: "ms-angles.jpg",
  },
  {
    title: "MS Round Rod",
    description: "Solid MS round rods for construction and manufacturing.",
    image: "ms-round-rod.jpg",
  },
  {
    title: "MS Chequered Plate",
    description: "Anti-skid MS chequered plates used for flooring and industrial platforms.",
    image: "ms-chequered-plate.jpg",
  },
  {
    title: "Binding Wire",
    description: "Flexible binding wire for tying and construction needs.",
    image: "binding-wire.jpg",
  },
  {
    title: "MS Round Pipes",
    description: "Reliable MS round pipes for general-purpose piping and structure.",
    image: "ms-round-pipes.jpg",
  },
  {
    title: "Roofing Sheets",
    description: "Sturdy roofing sheets designed for all-weather protection.",
    image: "roofing-sheets.jpg",
  },
];

const OurProducts = () => {
  return (
    <Box
      sx={{
        px: 2,
        py: 8,
        background: "linear-gradient(90deg, #1c953f 0%, #465a65 100%)",
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
            color: "#fff",
            px: 2,
            mb: 1,
          }}
        >
          Our Products
        </Typography>
      </Box>

      {/* Product Grid */}
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <Grid container spacing={3}>
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
                    sx={{ fontWeight: 600, fontFamily: "Poppins", color: "#465a65" ,textAlign:"center"}}
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
