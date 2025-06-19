import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <Box sx={{     backgroundImage:
      "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/footer-bg-land.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",color: "#fff", py: 6, mt: 8 }}>
      <Container>
        <Grid container spacing={4} justifyContent={"space-between"}>
          <Grid size={{xs:12,md:6}} textAlign={"center"}>
            <Typography variant="h6" fontWeight="bold" fontFamily="Poppins">
              HeyBuildEX
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, fontFamily: "Poppins" }}>
              Premium Structural & Construction Steel Solutions — Delivered On
              Time, Every Time.
            </Typography>
          </Grid>

          <Grid size={{xs:12,md:6}} textAlign={"center"}>
            <Typography
              variant="h6"
              fontWeight="bold"
              fontFamily="Poppins"
              sx={{ mb: 1 }}
            >
              Follow Us
            </Typography>
            <Box>
              <IconButton
                component="a"
                href="https://www.facebook.com/heybuildex/"
                target="_blank"
                rel="noopener"
                sx={{ color: "#fff" }}
              >
                <FacebookIcon />
              </IconButton>

              <IconButton
                component="a"
                href="https://www.instagram.com/heybuildex/"
                target="_blank"
                rel="noopener"
                sx={{ color: "#fff" }}
              >
                <InstagramIcon />
              </IconButton>

              <IconButton
                component="a"
                href="https://x.com/heybuildex"
                target="_blank"
                rel="noopener"
                sx={{ color: "#fff" }}
              >
                <XIcon />
              </IconButton>

              <IconButton
                component="a"
                href="https://www.linkedin.com/company/heybuildex/"
                target="_blank"
                rel="noopener"
                sx={{ color: "#fff" }}
              >
                <LinkedInIcon />
              </IconButton>

              <IconButton
                component="a"
                href="https://www.youtube.com/@Heybuildex"
                target="_blank"
                rel="noopener"
                sx={{ color: "#fff" }}
              >
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="body2" sx={{ fontFamily: "Poppins" }}>
            © {new Date().getFullYear()} HeyBuildEX. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
