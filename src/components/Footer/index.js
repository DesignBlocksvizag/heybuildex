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
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/footer-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent={"space-between"}>
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
              Simplifying Construction with End-to-End Material & Equipment Solutions.
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
              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "/about-us" },
                { name: "Products", link: "/steel/tmt-bars" },
                { name: "Contact Us", link: "/contact" },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.link}
                  underline="hover"
                  color="inherit"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "0.95rem",
                    opacity: 0.9,
                    "&:hover": { color: "#1c953f" },
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Social Links */}
          <Grid size={{ xs: 12, md: 4 }} textAlign={{ xs: "center" }}>
            {/* Contact Details */}
            <Typography variant="h6" fontWeight="bold" fontFamily="Poppins">
              Contact Us
            </Typography>
            <Box
              sx={{
                mt: 1,
                display: "flex",
                flexDirection: "column",
                gap: 1,
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <LocationOnIcon sx={{ mt: "2px" }} />
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "Poppins", opacity: 0.9 }}
                >
                  #31-27-65, 2nd Floor, Vijaya Complex,
                  <br />
                  Opposite Annapurna Theatre Kurmannapalem,
                  <br />
                  Visakhapatnam, Andhra Pradesh
                  <br />
                  Pin - 530046
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <PhoneIcon />
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "Poppins", opacity: 0.9 }}
                  component={"a"}
                  href="tel:+919281446109"
                >
                  +91 92814 46109
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <EmailIcon />
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "Poppins", opacity: 0.9 }}
                  component={"a"}
                  href="mailto:support@heybuildex.com"
                >
                  support@heybuildex.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign={"center"}>
          <Typography
            variant="h6"
            fontWeight="bold"
            fontFamily="Poppins"
            sx={{ mt: 1.5 }}
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
        </Box>

        {/* Copyright */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography
            variant="body2"
            sx={{ fontFamily: "Poppins", opacity: 0.7 }}
          >
            © {new Date().getFullYear()} Kalight Global Pvt. Ltd. All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
