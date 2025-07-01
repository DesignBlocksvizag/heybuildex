"use client";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import { Box, Typography, Button, Container, Grid, Link } from "@mui/material";

const blogData = [
  {
    image: "/blog-3.jpg",
    title:
      "HeyBuildex: Your One-Stop Online Shop for Construction Materials and Equipment Rentals",
    description:
      "Are you planning a construction project and looking for a reliable supplier? HeyBuildex is your trusted online marketplace for construction materials, equipment rentals, and more—all in one place.",
    slug: "/blog/one-stop-online-shop-blog",
  },
  {
    image: "/blog-2.jpg",
    title:
      "How to Choose the Right Steel for Your Construction Project: A Comprehensive Guide",
    description:
      "Choosing the right steel affects your project’s cost, strength, and success. Learn how to select the best type, grade, and supplier for your specific construction needs.",
    slug: "/blog/right-steel-blog",
  },
  {
    image: "/blog-1.jpg",
    title:
      "Steel Structures: The Power of Structural Steel in Modern Construction",
    description:
      "Structural steel is the backbone of modern construction. Discover why it’s the top choice for builders and how it powers everything from homes to industrial complexes.",
    slug: "/blog/structural-steel-blog",
  },
];

const BlogList = () => {
  return (
    <>
      <Header />
      <Box sx={{ background: "#ffffff" }}>
        <Box
          sx={{
            position: "relative",
            py: { xs: 10, md: 12, lg: 14 },
            background: "url('/product-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backdropFilter: "blur(0.5px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column", // To stack breadcrumbs and title vertically
            }}
          >
            {/* Title */}
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
              {"Blogs"}
            </Typography>
          </Box>
        </Box>
        <Container maxWidth="md" sx={{ py: 6 }}>
          <Grid container spacing={4}>
            {blogData.map((blog, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Box>
                  {/* Blog Image */}
                  <Box
                    component="img"
                    src={blog.image}
                    alt={blog.title}
                    sx={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "300px",
                      borderRadius: 2,
                      mb: 2,
                    }}
                  />

                  {/* Blog Title */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 600,
                      color: "#000",
                      mb: 1,
                    }}
                  >
                    {blog.title}
                  </Typography>

                  {/* Blog Description */}
                  <Typography
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      color: "#000",
                      mb: 2,
                    }}
                  >
                    {blog.description}
                  </Typography>

                  {/* View Blog Button */}
                  <Link href={blog.slug}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#01933e",
                        fontFamily: "Inter, sans-serif",
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "#017d35",
                        },
                      }}
                    >
                      View Blog
                    </Button>
                  </Link>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default BlogList;
