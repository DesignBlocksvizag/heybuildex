"use client";
import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Skeleton,
} from "@mui/material";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { useRouter } from "next/navigation";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("https://acharyachessacademy.com/blog-api/read.php")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch blogs:", err);
        setLoading(false);
      });
  }, []);
  const handleViewBlog = (blogData) => {
    sessionStorage.setItem("blogData", JSON.stringify(blogData));
    router.push("/blog");
  };
  return (
    <>
      <Header />
      <Box sx={{ background: "#ffffff" }}>
        {/* Banner Section */}
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
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "#FFFF00",
                fontWeight: "bold",
                fontFamily: "Poppins",
                textAlign: "center",
                fontSize: { xs: "28px", md: "32px" },
              }}
            >
              Blogs
            </Typography>
          </Box>
        </Box>

        {/* Blog Cards Section */}
        <Container maxWidth="md" sx={{ py: 6 }}>
          <Grid container spacing={4}>
            {loading
              ? Array.from(new Array(3)).map((_, index) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                    <Skeleton
                      variant="rectangular"
                      height={200}
                      sx={{ borderRadius: 2, mb: 2 }}
                    />
                    <Skeleton width="100%" height={30} />
                    <Skeleton width="100%" height={60} />
                    <Skeleton width={100} height={40} />
                  </Grid>
                ))
              : blogs.map((blog, index) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                    <Box>
                      <Box
                        component="img"
                        src={"https://acharyachessacademy.com/blog-api/" + blog.image}
                        alt={blog.title}
                        sx={{
                          width: "100%",
                          maxHeight: "300px",
                          borderRadius: 2,
                          mb: 2,
                        }}
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: 600,
                          color: "#000",
                          mb: 1,
                        }}
                      >
                        {blog.heading}
                      </Typography>
                      {/* <Typography
                        sx={{
                          fontFamily: "Inter, sans-serif",
                          color: "#000",
                          mb: 2,
                        }}
                      >
                        {blog.description}
                      </Typography> */}
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
                          onClick={() => handleViewBlog(blog)}
                        >
                          View Blog
                        </Button>
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
