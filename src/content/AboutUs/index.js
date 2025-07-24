import { Box, Typography, Container, Grid } from "@mui/material";

const AboutUs = () => {
  return (
    <>
      {/* Hero Banner */}
      <Box
        sx={{
          position: "relative",
          py: { xs: 10, md: 14 },
          width: "100%",
          backgroundImage: `url('/about-us-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.65)",
            backdropFilter: "blur(1px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "#FFFF00",
              fontWeight: "bold",
              fontFamily: "Poppins",
              textAlign: "center",
              fontSize: { xs: "28px", md: "36px" },
            }}
          >
            About Us
          </Typography>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ backgroundColor: "#ffffff", py: 8 }}>
        <Container maxWidth="lg">
          {/* Welcome Title */}
          <Box textAlign="center" mb={5}>
            <Typography
              variant="h5"
              sx={{
                color: "#029441",
                fontWeight: 600,
                fontFamily: "Poppins",
                fontSize: { xs: 16, md: 18 },
              }}
            >
              WELCOME TO
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: "#465a65",
                fontFamily: "Poppins",
                fontSize: { xs: 28, md: 34 },
              }}
            >
              Hey Build
              <Box component="span" sx={{ color: "#01933e" }}>
                EX
              </Box>
            </Typography>
          </Box>

          {/* Introduction */}
          <Typography
            variant="body1"
            sx={{
              fontSize: 16,
              color: "#333",
              fontFamily: "Inter",
              mb: 6,
              textAlign: "center",
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.7,
              fontWeight:500
            }}
          >
            Your trusted partner for all things construction. Whether you're
            working on a dream home, commercial building, or large infrastructure
            project, we make your construction journey easier, more efficient,
            and cost-effective.
          </Typography>

          {/* What is HeyBuildEX */}
          <SectionHeading title="WHAT IS Hey BuildEX" />
          <Grid container spacing={4} alignItems="center">
            <Grid size={{xs:12,md:6}}>
              <Box
                component="img"
                src="/heybuildex.jpg"
                alt="Hey BuildEX"
                sx={{ width: "100%", borderRadius: 2 }}
              />
            </Grid>
            <Grid size={{xs:12,md:6}}>
              <Typography variant="body1" sx={bodyTextStyle}>
                HeyBuildex is a one-stop online platform that connects builders,
                contractors, and developers with high-quality construction
                materials and rental equipment.
                <br /><br />
                We offer a wide range of products—cement, steel, infra equipment,
                and more—all available for purchase or rental.
                <br /><br />
                In addition to materials, we provide rental services for heavy
                machinery such as piling rigs, transit mixers, and concrete
                batching plants.
              </Typography>
            </Grid>
          </Grid>

          {/* Why Choose Us */}
          <SectionHeading title="WHY CHOOSE US" />
          <Typography variant="body1" sx={bodyTextStyle}>
            <b>Variety & Quality:</b> We bring you the best brands and materials in one place. <br />
            <b>Convenience:</b> Compare products, check prices, and place orders online—no hassle. <br />
            <b>Competitive Prices:</b> We offer unbeatable rates, ensuring the best value for your investment. <br />
            <b>Timely Delivery:</b> We deliver on time, helping you stay on schedule and on budget.
          </Typography>

          {/* Who is Behind */}
          <SectionHeading title="WHO IS BEHIND Hey BuildEX" />
          <Typography variant="body1" sx={{ ...bodyTextStyle, mb: 4 }}>
            Founded by experienced professionals in construction, procurement, and technology, our team is committed to simplifying your building process.
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                name: "CHAITANYA VARMA",
                role: "Co-Founder & CEO",
                img: "/chaitanya.jpg",
              },
              {
                name: "SRINIVAS SATAPATHI",
                role: "Co-Founder & COO",
                img: "/srinivas.png",
              },
            ].map((person, i) => (
              <Grid size={{xs:12,sm:6,md:4}} key={i}>
                <Box
                  component="img"
                  src={person.img}
                  alt={person.name}
                  sx={{
                    width: "100%",
                    height: 280,
                    objectFit: "contain",
                    borderRadius: 2,
                    mb: 2,
                  }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: "#1976D2",
                    fontFamily: "Poppins",
                    textAlign: "center",
                  }}
                >
                  {person.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Inter",
                    color: "#555",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {person.role}
                </Typography>
              </Grid>
            ))}
          </Grid>

          {/* Mission */}
          <SectionHeading title="OUR MISSION" />
          <Typography
            variant="body1"
            sx={{
              ...bodyTextStyle,
              maxWidth: 800,
              mx: "auto",
              textAlign: "center",
            }}
          >
            To simplify construction by offering a transparent, efficient, and
            cost-effective platform for materials and machinery—helping you save
            time, reduce costs, and build successfully.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

const SectionHeading = ({ title }) => (
  <Typography
    variant="h5"
    sx={{
      fontWeight: 700,
      color: "#1976D2",
      mb: 3,
      mt: 8,
      fontFamily: "Poppins",
      textAlign: "center",
    }}
  >
    {title}
  </Typography>
);

const bodyTextStyle = {
  fontSize: 15,
  color: "#333",
  fontFamily: "Inter",
  lineHeight: 1.7,
     fontWeight:400
};

export default AboutUs;
