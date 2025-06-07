import { Box, Grid, Typography, Button, Container } from "@mui/material";

export default function WelcomeSection() {
  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, md: 10 },
        backgroundColor: "#f5f5f5",
      }}
    >
      <Container maxWidth="lg">
      <Grid container spacing={4} alignItems="center">
        {/* Text Section */}
        <Grid size={{xs: 12, md: 6}}>
          <Typography color="primary" gutterBottom sx={{fontFamily:"Poppins", fontWeight: "bold",color:"#01933e"}} variant="h6">
            WELCOME TO
          </Typography>
          <Typography variant="h4" fontWeight="bold" gutterBottom sx={{fontFamily:"Poppins",color:"#333"}}>
            Hey Build <Typography variant="span" sx={{color:"#01933e"}}>EX</Typography>
          </Typography>
          <Typography variant="body1" sx={{mb: 2, fontFamily:"Inter", color:"#333"}}>
            Hey Buildex is your go-to online source for high-quality steel and
            construction materials. We offer a wide range of durable products,
            from structural steel to fabrication steel and fasteners, all at
            competitive prices.
          </Typography>
          <Typography variant="body1" sx={{fontFamily:"Inter", color:"#333"}}>
            With easy navigation and prompt delivery, Hey Buildex makes it
            simple to find everything you need, allowing you to focus on
            building your vision.
          </Typography>
           <Button
            type="submit"
            variant="contained"
            color="warning"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              mt:3,
              fontWeight: 600,
              fontSize: "1.1rem",
              borderRadius: "30px",
              background: "linear-gradient(to right, #465a65 0%, #1c953f 100%)",
              color: "#fff",
              textTransform: "none",
              fontFamily: "Poppins",
              "&:hover": {
                background:
                  "linear-gradient(to right, #1c953f 0%, #465a65 100%)",
              },
            }}
          >
            Explore Products
          </Button>

        </Grid>

        {/* Image Section */}
        <Grid size={{xs: 12, md: 6}}>
          <Box
            component="img"
            src="/large-steel-factory-warehouse.jpg" // Replace with your actual image path
            alt="Hey Buildex"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 1,
              border: "6px double #01933e",
              boxShadow: 3,
            }}
          />
        </Grid>
      </Grid>
      </Container>
    </Box>
  );
}
