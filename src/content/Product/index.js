"use client";
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Container,
  Button,
  Breadcrumbs,
  Link
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ProductTabs from "@/src/components/TabsPanel";
import QuotationForm from "@/src/components/Form";
import { navItems } from "@/src/components/Header";
import { useRouter } from "next/navigation";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// const brandImages = [
//   { src: "/clients/vizag_steel.png", alt: "Vizag Steel" },
//   { src: "/clients/sail.png", alt: "Sail" },
//   { src: "/clients/tata.png", alt: "Tata" },
//   { src: "/clients/jsw.png", alt: "JSW" },
//   { src: "/clients/jindal-1.png", alt: "Jindal" },
//   { src: "/clients/radha.png", alt: "Radha" },
//   { src: "/clients/mangal.png", alt: "Mangal" },
//   { src: "/clients/simhadri.png", alt: "Simhadri" },
// ];

export default function SteelProductPage({ product ,brands,breadcrumbs}) {
  const router = useRouter();
  const {
    name,
    description,
    sizes,
    overview,
    features,
    faqs,
    brandImages,
    image = "/default.jpg",
  } = product;

  return (
    <Box sx={{ backgroundColor: "#ffffff", pb: 8 }}>
      {/* Header Banner */}
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
      flexDirection: "column", // To stack breadcrumbs and title vertically
    }}
  >

    {/* Title */}
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
      {name}
    </Typography>
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      sx={{ color: "#fff", mt: 2 ,"& .MuiBreadcrumbs-ol":{
        justifyContent:"center"
      }}}
    >
      <Link underline="hover" color="inherit" href="/">
        Home
      </Link>
      {product.category !== "Cement" && breadcrumbs !== false && <Typography  color="inherit">{"Steel"}</Typography>}
     {breadcrumbs && (<Typography  color="inherit">{product.category}</Typography>)}
      <Typography color="#FFFF00">{name}</Typography>
    </Breadcrumbs>
  </Box>
</Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={2}>
          {/* Left Section */}
          <Grid size={{ xs: 12, md: 9 }}>
            <Paper elevation={3} sx={{ borderRadius: 2, p: 2 }}>
              <Grid container  spacing={2}>
                <Grid  size={{xs:12,md:6}}>
              <Box
                component="img"
                src={image}
                alt={name}
                sx={{
                  width: "100%",
                  height: "300px",
                  borderRadius: 2,
                  objectFit: "cover",
                  mb: 1,
                }}
              />
              </Grid>
              <Grid size={{xs:12,md:6}}>
              {description?.map((line, idx) => (
                <Typography
                  key={idx}
                  variant="body1"
                  sx={{
                    fontSize: 14,
                    color: "#333",
                    fontFamily: "Inter",
                    mb: "4px",
                  }}
                >
                  {line}
                </Typography>
              ))}
              </Grid>
              </Grid>

             {brands && (<><Typography
                variant="h6"
                sx={{
                  color: "#000",
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  mt: 3,
                  mb: 1,
                }}
              >
                Brands Available
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2,justifyContent:"center",alignItems:"center" }}>
                {brandImages.map((img, index) => (
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
              </Box></>)}

              {sizes?.length > 0 && (
                <Box sx={{ mt: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      fontFamily: "Poppins",
                      color: "#000",
                    }}
                  >
                    Product Variants
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {sizes.map((size) => (
                      <Box
                        key={size}
                        sx={{
                          px: 2,
                          py: 0.8,
                          borderRadius: "999px",
                          backgroundColor: "#e0f2f1",
                          color: "#00695c",
                          fontWeight: 500,
                          fontFamily: "Inter",
                          fontSize: 14,
                        }}
                      >
                        {size}
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}

              <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  color="success"
                  size="medium"
                  startIcon={<WhatsAppIcon />}
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                    display: "flex",
                    justifyContent: "center",
                    maxWidth: "300px",
                  }}
                  href="https://wa.me/919281446109?text=Hi%2C%20I'm%20interested%20in%20your%20construction%20materials.%20Please%20share%20the%20latest%20pricing%20and%20details."
                  target="_blank"
                >
                  Get Best Price on WhatsApp
                </Button>
              </Box>

              <ProductTabs
                tabData={[
                  {
                    label: "Description",
                    content: [overview], // Wrap string as array
                  },
                  {
                    label: "Features",
                    content: features, // Already an array of strings
                  },
                  {
                    label: "FAQs",
                    content: faqs, // Array of objects with question & answer
                  },
                ]}
              />
              <QuotationForm />
            </Paper>
          </Grid>

          {/* Right Section */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Paper elevation={3} sx={{ borderRadius: 2, p: 2 }}>
              <List dense>
                {navItems.map((navItem) => {
                  if (navItem.dropDown === true) {
                    return (
                      <Box key={navItem.name} sx={{ mb: 2 }}>
                        {navItem.subMenu.map((item, index) => (
                          <React.Fragment key={`${item.category}-${index}`}>
                            <Typography
                              variant="subtitle1"
                              sx={{
                                fontWeight: "bold",
                                color: "#1976D2",
                                fontFamily: "Poppins",
                                mb: 1,
                                fontSize: 14,
                              }}
                            >
                              {item.category}
                            </Typography>
                            {item.items.map((subItem) => (
                              <ListItem
                                key={subItem.name}
                                disablePadding
                                sx={{
                                  borderRadius: 1,
                                  transition: "0.3s",
                                  "&:hover": {
                                    backgroundColor: "#e0f2f1",
                                    transform: "translateX(4px)",
                                  },
                                }}
                              >
                                <ListItemButton onClick={()=>{
                                  router.push(subItem.link)
                                }}>
                                  <ListItemText
                                    primary={subItem.name}
                                    slotProps={{
                                      primary: {
                                        sx: {
                                          fontSize: 13,
                                          fontFamily: "Inter",
                                          fontWeight: 500,
                                          color: "#333",
                                        },
                                      },
                                    }}
                                  />
                                </ListItemButton>
                              </ListItem>
                            ))}
                          </React.Fragment>
                        ))}
                      </Box>
                    );
                  }
                })}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
