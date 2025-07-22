"use client";
import { Box, Container, Typography,Divider } from "@mui/material";

const SteelStructuresBlog = ({blog}) => {
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
          src={"https://acharyachessacademy.com/blog-api/" + blog.image}
          alt={"Steel"}
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
        {blog.heading}
      </Typography>

      <Divider sx={{ mb: 3 }} />

            {/* HTML Blog Content */}
            <Box
                   sx={{
    fontFamily: "Inter",
    color: "#444",
    fontSize: 13,
    fontWeight: 400,
    "& h3": { fontFamily: "Poppins", fontSize: 18, fontWeight: 600, mb: 1 },
    "& h4": { fontFamily: "Poppins", fontSize: 16, fontWeight: 600, mt: 2, mb: 1 },
    "& ul": { pl: 2, mb: 2 },
    "& li": { mb: 0.5 },
    "& p": { mb: 1.5 },
  }}
              dangerouslySetInnerHTML={{ __html: blog.description }}
            />
      </Container>
    </Box>
  );
};

export default SteelStructuresBlog;
