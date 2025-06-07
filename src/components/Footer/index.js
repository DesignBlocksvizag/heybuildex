import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/low-angle-view-building-ceiling.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
        py: 6,
      }}
    >
      <Container>
        <Grid container spacing={4} justifyContent={"space-between"}>
          {/* Company Info */}
          <Grid
            size={{ xs: 12, md: 4 }}
            textAlign={{ xs: "center", md: "left" }}
          >
            <Typography variant="h6" fontWeight="bold" fontFamily="Poppins">
              HeyBuildEX
            </Typography>
            <Typography
              variant="body2"
              sx={{ mt: 1, fontFamily: "Poppins", opacity: 0.9 }}
            >
              Premium Structural & Construction Steel Solutions — Delivered On
              Time, Every Time.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid
            size={{ xs: 12, md: 4 }}
            textAlign={{ xs: "center", md: "center" }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              fontFamily="Poppins"
              sx={{ mb: 1 }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              {["Home", "About Us", "Products", "Contact Us", "Careers"].map(
                (link, i) => (
                  <Link
                    key={i}
                    href={`/${link.replace(/\s+/g, "").toLowerCase()}`}
                    underline="hover"
                    color="inherit"
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "0.95rem",
                      opacity: 0.9,
                      "&:hover": { color: "#1c953f" },
                    }}
                  >
                    {link}
                  </Link>
                )
              )}
            </Box>
          </Grid>

          {/* Social Links */}
          <Grid
            size={{ xs: 12, md: 4 }}
            textAlign={{ xs: "center", md: "right" }}
          >
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

        {/* Copyright */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography
            variant="body2"
            sx={{ fontFamily: "Poppins", opacity: 0.7 }}
          >
            © {new Date().getFullYear()} HeyBuildEX. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
