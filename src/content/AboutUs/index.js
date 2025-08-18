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
          backgroundImage: `url('/about-us.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
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
   <Box sx={{ backgroundColor: "#fff" }}>
  <Container maxWidth="lg" sx={{ py: 10 }}>
    {/* Welcome Section */}
    <Box textAlign="center" mb={6}>
      <Typography
        variant="h6"
        sx={{
          color: "#029441",
          fontWeight: 600,
          fontFamily: "Poppins",
          letterSpacing: 1.5,
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
          mb: 2,
        }}
      >
        HeyBuild
        <Box component="span" sx={{ color: "#01933e" }}>EX</Box>
      </Typography>
      <Typography
        sx={{
          fontSize: 15,
          color: "#555",
          maxWidth: 700,
          mx: "auto",
          lineHeight: 1.7,
          fontFamily: "Inter",
        }}
      >
        Your trusted partner for all things construction. Whether you're
        building a dream home, commercial complex, or major infrastructure,
        we make your journey efficient and cost-effective.
      </Typography>
    </Box>

    <Typography
    variant="h5"
    sx={{
      fontWeight: 700,
      color: "#01933e",
      mb: 3,
      mt: 8,
      fontFamily: "Poppins",
      textAlign: "center",
    }}
  >
    What is <Typography variant="span" sx={{ color:"#01933e" }}>HeyBuildEX</Typography>
  </Typography>
    <Grid container spacing={6} alignItems="center">
      <Grid size={{xs:12,md:6}}>
        <Box
          component="img"
          src="/about-us-hero.jpg"
          alt="HeyBuildEX"
          sx={{
            width: "100%",
            maxHeight:"300px",
            objectFit:"contain",
            borderRadius: 3,
          }}
        />
      </Grid>
      <Grid size={{xs:12,md:6}}>
        <Typography sx={bodyTextStyle}>
          HeyBuildEX is your one-stop online platform connecting builders,
          contractors, and developers with high-quality construction materials
          and rental equipment.  
          <br /><br />
          From cement, steel, and infra equipment to heavy machinery rentals,
          we’ve got everything you need to build smarter and faster.
        </Typography>
      </Grid>
    </Grid>

    {/* Why Choose Us */}
    <SectionHeading title="Why Choose Us" />
    <Grid container spacing={4}>
      {[
        { title: "Variety & Quality", desc: "Best brands & materials in one place.", icon: "🏗️" },
        { title: "Convenience", desc: "Compare, order & manage online easily.", icon: "⚡" },
        { title: "Competitive Prices", desc: "Unbeatable rates for maximum value.", icon: "💰" },
        { title: "Timely Delivery", desc: "Stay on schedule & on budget.", icon: "⏱️" },
      ].map((item, i) => (
        <Grid size={{xs:12,sm:6,md:3}} key={i}>
          <Box
            sx={{
              p: 3,
              textAlign: "center",
              borderRadius: 3,
              backgroundColor: "#f8f9fa",
              transition: "all 0.3s ease",
              "&:hover": { boxShadow: "0 8px 20px rgba(0,0,0,0.08)" },
            }}
          >
            <Typography sx={{ fontSize: 30 }}>{item.icon}</Typography>
            <Typography variant="h6" sx={{ mt: 1, fontWeight: 700,color:"#555",fontWeight:500,fontFamily:"Poppins" }}>
              {item.title}
            </Typography>
            <Typography sx={{ color: "#555", fontSize: 14,fontFamily:"Inter"}}>
              {item.desc}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>

    {/* Founders */}
    <SectionHeading title="Who is Behind HeyBuildEX" />
    <Grid container spacing={4} justifyContent="center">
      {[
        { name: "Chaitanya Varma", role: "Co-Founder & CEO", img: "/chaitanya.jpg" },
        { name: "Srinivas Satapathi", role: "Co-Founder & COO", img: "/srinivas.png" },
      ].map((person, i) => (
        <Grid  size={{xs:12,sm:6,md:4}} key={i}>
          <Box
            sx={{
              textAlign: "center",
              p: 2,
              borderRadius: 3,
              transition: "0.3s",
              "&:hover": { boxShadow: "0 8px 25px rgba(0,0,0,0.1)" },
            }}
          >
            <Box
              component="img"
              src={person.img}
              alt={person.name}
              sx={{
                width: 180,
                height: 180,
                objectFit: "cover",
                borderRadius: "50%",
                objectPosition:"top",
                mb: 2,
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              }}
            />
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#1976D2",fontSize:14,fontFamily:"Poppins" }}>
              {person.name}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold", color: "#555",fontFamily:"Inter"}}>
              {person.role}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>

    {/* Mission */}
    <SectionHeading title="Our Mission" />
    <Typography
      sx={{
        ...bodyTextStyle,
        textAlign: "center",
        maxWidth: 800,
        mx: "auto",
      }}
    >
      To simplify construction by providing a transparent, efficient, and
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
      color: "#01933e",
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
