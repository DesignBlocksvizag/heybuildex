"use client";
import { Box, Container, Typography,Link } from "@mui/material";

const SteelStructuresBlog = () => {
  return (
    <Box
      sx={{
        pb: 4,
        pt:{xs:4,md:6},
        mx: "auto",
        fontFamily: "Inter, sans-serif",
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="md">
      {/* Blog Image */}
      <Box sx={{ mb: 3 }}>
        <Box
          src="/blog-1.jpg" // Replace with your actual image
          alt="Steel Structures"
          component={"img"}
          style={{ width: "100%", height: "300px", objectFit: "contain" }}
        />
      </Box>

      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Poppins, sans-serif",
          color: "#333",
          fontWeight: 700,
          mb: 2,
        }}
      >
        Steel Structures: The Power of Structural Steel in Modern Construction
      </Typography>

      {/* Intro */}
      <Typography sx={{ color: "#333", fontFamily: "Inter" }}>
        Structural steel is the <strong>backbone of modern construction</strong>
        , playing a crucial role in everything from skyscrapers to residential
        homes. Its strength, versatility, and affordability make it the top
        choice for builders and fabricators worldwide.
      </Typography>

      {/* Section: What Is Structural Steel */}
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h5"
          sx={{ fontFamily: "Poppins, sans-serif", color: "#333", mb: 1 }}
        >
          What Is Structural Steel?
        </Typography>
        <Typography sx={{ color: "#333", fontFamily: "Inter" }}>
          Structural steel refers to specially engineered steel used to build
          load-bearing structures. With a high strength-to-weight ratio, it's
          ideal for constructing frameworks, bridges, equipment, and
          homes—delivering maximum strength without excess weight.
        </Typography>
      </Box>

      {/* Key Types */}
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h5"
          sx={{ fontFamily: "Poppins, sans-serif", color: "#333", mb: 2 }}
        >
          Key Types of Structural Steel and Their Uses
        </Typography>
        {[
          [
            "MS Channel",
            "U- or C-shaped steel used for frames and supports. Common in bridges, vehicles, and building frameworks.",
          ],
          [
            "MS Plate",
            "Flat sheets used in beams, columns, and foundations. Known for tensile strength and impact resistance.",
          ],
          [
            "MS Chequered Plate",
            "Patterned plates ideal for anti-slip surfaces like ramps, stairs, and industrial flooring.",
          ],
          [
            "MS Angle",
            "L-shaped sections used in corners and support frames. Cost-effective and strong.",
          ],
          [
            "MS Flat",
            "Flat bars used in structural supports and bracing systems. Corrosion-resistant and easy to fabricate.",
          ],
          [
            "MS Sheets",
            "Thin sheets used for roofing, ductwork, and panels—flexible and easy to handle.",
          ],
          [
            "I Beam",
            "Universal beams used for large-span structural support in bridges, buildings, and warehouses.",
          ],
          [
            "MS Round Rod",
            "Solid round bars used in reinforcement, machinery, and even furniture frames.",
          ],
          [
            "MS Round Pipe",
            "Cylindrical pipes used for plumbing frameworks and industrial piping systems.",
          ],
          [
            "MS Square Pipe",
            "Hollow, square-shaped pipes used for columns, gates, and modern architectural frameworks.",
          ],
          [
            "MS Rectangle Pipe",
            "Ideal for frames and supports where directional strength is needed.",
          ],
          [
            "Roofing Sheets",
            "Durable, weather-resistant steel sheets for commercial and residential roofs.",
          ],
        ].map(([title, desc]) => (
          <Box key={title} sx={{ mb: 2 }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                color: "#333",
              }}
            >
              {title}
            </Typography>
            <Typography sx={{ color: "#333", fontFamily: "Inter" }}>
              {desc}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Benefits */}
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h5"
          sx={{ fontFamily: "Poppins, sans-serif", color: "#333", mb: 2 }}
        >
          Benefits of Structural Steel in Construction
        </Typography>
        <ul style={{ paddingLeft: "20px", marginTop: 0, color: "#333" }}>
          {[
            "High Strength-to-Weight Ratio – Strong, but lightweight",
            "Durability – Resists corrosion, termites, and extreme weather",
            "Cost-Effective – Faster construction, lower labor costs",
            "Versatile – Easily shaped and fabricated",
            "Sustainable – 100% recyclable and reusable",
            "Safe – Fire- and earthquake-resistant",
          ].map((benefit) => (
            <li key={benefit} style={{ marginBottom: "10px" }}>
              <Typography>{benefit}</Typography>
            </li>
          ))}
        </ul>
      </Box>

      {/* Applications */}
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h5"
          sx={{ fontFamily: "Poppins, sans-serif", color: "#333", mb: 1 }}
        >
          Applications: From Industries to Homes
        </Typography>
        <Typography sx={{ color: "#333", fontFamily: "Inter" }}>
          <Link href="https://en.wikipedia.org/wiki/Structural_steel">MS Channels</Link> Structural steel is not just for skyscrapers and factories. It is equally important in home construction, providing strong frameworks, reliable roofing, and durable supports for modern homes. In industries, structural steel is used to build warehouses, manufacturing plants, bridges, towers, and machinery, ensuring that every structure stands the test of time.
        </Typography>
      </Box>

      {/* Highlight Box */}
      <Box
        sx={{
          backgroundColor: "#e8f5e9",
          p: 2,
          borderLeft: "5px solid #333",
          my: 4,
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontFamily: "Poppins, sans-serif", color: "#333", mb: 1 }}
        >
          Buy Structural Steel Online at Heybuildex
        </Typography>
        <Typography sx={{ color: "#333", fontFamily: "Inter" }}>
          <strong>Looking to buy high-quality structural steel?</strong> Visit{" "}
          <a href="/" style={{ color: "#333", textDecoration: "underline" }}>
            Heybuildex
          </a>{" "}
          for a wide selection of products at unbeatable prices. Whether you
          need MS Channels, Plates, I Beams, or Pipes, we’ve got you covered
          with fast delivery and expert support.
        </Typography>
      </Box>

      <Typography sx={{ color: "#333", fontFamily: "Inter" }}>
        Build your super steel structure with confidence—shop at{" "}
        <strong>Heybuildex</strong> today!
      </Typography>
      </Container>
    </Box>
  );
};

export default SteelStructuresBlog;
