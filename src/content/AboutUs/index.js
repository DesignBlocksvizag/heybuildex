import { Box, Typography, Container, Grid, Button } from "@mui/material";

const AboutUs = () => {
  return (<>
      <Box
  sx={{
    position: "relative",
    py: { xs: 10, md: 12 ,lg:14},
    width: "100%",
    backgroundImage: `url('/about-us-bg.jpg')`, // <-- Update with your image path
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Black blurred overlay */}
  <Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.6)",
      backdropFilter: "blur(0.5px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
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
      About Us
    </Typography>
  </Box>
  </Box>
    <Box sx={{ backgroundColor: "#ffffff", py: 6 }}>
      <Container maxWidth="lg">
        {/* Welcome Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "#029441",
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
            mb: 1,
          }}
        >
          WELCOME TO
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            color: "#0D47A1",
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
            mb: 4,
          }}
        >
          Hey BuildEX
        </Typography>

        {/* Section 1: Introduction */}
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="body1"
              sx={{ fontSize: 15,fontWeight:400, color: "#333", fontFamily: "Inter" }}
            >
              Your trusted partner for all things construction. Whether you're
              working on a dream home, commercial building, or large
              infrastructure project, we’re here to make your construction
              journey easier, more efficient, and cost-effective.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            {/* Replace with actual image */}
            <Box
              component="img"
              src="/tmt-bars.jpg"
              alt="Construction"
              sx={{ width: "100%", borderRadius: 0,height:180,objectFit:"cover"}}
            />
          </Grid>
        </Grid>

        {/* Section 2: What is HeyBuildEX */}
        <Box sx={{ mt: 6 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#0D47A1",
              mb: 2,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            WHAT IS Hey BuildEX
          </Typography>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              {/* Replace with actual image */}
              <Box
                component="img"
                src="/construction-industry-image.jpg"
                alt="Equipment"
                sx={{ width: "100%", borderRadius: 2 }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="body1"
                sx={{ fontSize: 15,fontWeight:400, color: "#333", fontFamily: "Inter" }}
              >
                HeyBuildex is a one-stop online platform that connects builders,
                contractors, and developers with high-quality construction
                materials and rental equipment.
                <br />
                <br />
                We offer a wide range of products—cement, steel, infra
                equipment, and more—all available for purchase or rental.
                <br />
                <br />
                In addition to materials, we provide rental services for heavy
                machinery such as piling rigs, transit mixers, and concrete
                batching plants.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Section 3: Why Choose Us */}
        <Box sx={{ mt: 6 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#0D47A1",
              mb: 2,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            WHY CHOOSE US
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: 15,fontWeight:400, color: "#333", mb: 3, fontFamily: "Inter" }}
          >
            Variety & Quality: We bring you the best brands and materials for
            your project in one place. <br />
            Convenience: Compare products, check prices, and place orders
            online—no hassle. <br />
            Competitive Prices: We offer unbeatable rates, ensuring the best
            value for your investment. <br />
            Timely Delivery: We deliver on time, helping you stay on schedule
            and on budget.
          </Typography>
        </Box>

        {/* Section 4: Who is Behind */}
        <Box sx={{ mt: 6 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#0D47A1",
              mb: 2,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            WHO IS BEHIND Hey BuildEX
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: 15,fontWeight:400, color: "#333", mb: 4, fontFamily: "Inter" }}
          >
            Founded by experienced professionals in construction, procurement,
            and technology, our team is committed to simplifying your building
            process.
          </Typography>
          <Grid container spacing={1} justifyContent={"center"} alignItems={"center"}>
            <Grid size={{ xs: 6, md: 4 }} >
              <Box
                component="img"
                src="/chaitanya.jpg"
                alt="S. Chaitanya Varma"
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  mb: 1,
                  maxHeight:300,
                  objectFit: "contain",
                }}
              />
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  color: "#0D47A1",
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "center",
                }}
              >
                S. CHAITANYA VARMA
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#555", fontFamily: "Inter", textAlign: "center",fontWeight:"bold" }}
              >
                Co-Founder & CEO
              </Typography>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }} >
              <Box
                component="img"
                src="/srinivas.png"
                alt="Srinivas Satapathi"
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  mb: 1,
                  maxHeight:300,
                  objectFit: "contain",
                }}
              />
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  color: "#0D47A1",
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "center",
                }}
              >
                SRINIVAS SATAPATHI
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#555", fontFamily: "Inter", textAlign: "center",fontWeight:"bold" }}
              >
                Co-Founder & COO
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Mission */}
        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#0D47A1",
              mb: 2,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            OUR MISSION
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: 15,fontWeight:400,
              color: "#333",
              mb: 3,
              maxWidth: 800,
              mx: "auto",
              fontFamily: "Inter",
            }}
          >
            To simplify construction by offering a transparent, efficient, and
            cost-effective platform for materials and machinery—helping you save
            time, reduce costs, and build successfully.
          </Typography>
        </Box>
      </Container>
    </Box></>
  );
};

export default AboutUs;
