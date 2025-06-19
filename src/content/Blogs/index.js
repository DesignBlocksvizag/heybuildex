// BlogPage.tsx
import React from "react";
import { Container, Grid, Typography, Card, CardMedia, CardContent, Button } from "@mui/material";
import { Article } from "@mui/icons-material";

const blogPosts = [
  {
    id: 1,
    title: "Choosing the Right TMT Bars for Your Construction",
    description:
      "TMT bars form the backbone of any structure. Learn how to choose the right grade and brand for your needs.",
    image: "/images/tmt-bars.jpg",
  },
  {
    id: 2,
    title: "Top Cement Brands Compared: Ultratech vs Maha vs Ramco",
    description:
      "A detailed comparison of leading cement brands to help you decide the best fit for your project.",
    image: "/images/cement-comparison.jpg",
  },
  {
    id: 3,
    title: "Roofing Sheets: Which Type Is Best for Indian Weather?",
    description:
      "Explore various types of roofing sheets and how to choose one for your location and budget.",
    image: "/images/roofing-sheets.jpg",
  },
];

export default function BlogPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom textAlign="center" fontWeight="bold">
        <Article sx={{ mr: 1 }} />
        Hey Buildex Blog
      </Typography>
      <Typography variant="subtitle1" textAlign="center" color="text.secondary" mb={4}>
        Insights, tips & updates on steel, cement, RMC, roofing sheets and more.
      </Typography>

      <Grid container spacing={4}>
        {blogPosts.map((post) => (
          <Grid size={{xs:12,sm:6,md:4}} key={post.id}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia
                component="img"
                image={post.image}
                alt={post.title}
                height="200"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.description}
                </Typography>
              </CardContent>
              <Button size="small" sx={{ m: 2 }} variant="outlined">
                Read More
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
