import { Box, Typography, Grid } from "@mui/material";

const ProjectSlides = () => {
  const images = [
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/indian-navy.png?updatedAt=1756115878534", alt: "indian-navy" },
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/vizag-port.png?updatedAt=1756115900932", alt: "vizag-port" },
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/vo-port.png?updatedAt=1756115901536", alt: "vo-port" },
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/ks-port.png?updatedAt=1756115886108", alt: "ks-port" },
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/jsw-port.png?updatedAt=1756115884828", alt: "jsw-port" },
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/bhogapuram.jpg?updatedAt=1756115878459", alt: "bhogapuram" },
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/gopalpur-ports.jpg?updatedAt=1756115878402", alt: "gopalpur-ports" },
    { src: "https://ik.imagekit.io/lfg7c6i9h/heybuildex%20website/clients/nhai.png?updatedAt=1756115886226", alt: "nhai" },
  ];

  return (
    <Box sx={{ py: "40px", backgroundColor: "#fff" }}>
      <Box sx={{ maxWidth: "1000px", margin: "0 auto", padding: "0 15px" }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign="center"
          sx={{ color: "#000", fontFamily: "Poppins", mb: 3 }}
        >
          Trusted by Leading Projects
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
          }}
        >
          {images.map((img, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "120px", sm: "150px" },
                height: { xs: "80px", sm: "100px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fff",
                boxShadow: 1,
                borderRadius: 2,
                p: 1,
              }}
            >
              <Box
                component="img"
                src={img.src}
                alt={img.alt}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectSlides;
