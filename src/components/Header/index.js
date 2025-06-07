"use client";
import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Link,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call"; 

const navItems = [
  { name: "HOME", link: "/" },
  { name: "ABOUT US", link: "/about-us" },
  { name: "STEEL", link: "/steel" },
  { name: "CEMENT", link: "/cement" },
  { name: "RMC", link: "/rmc" },
  { name: "INFRA RENTALS", link: "/infra-rentals" },
  { name: "SAFETY", link: "/safety" },
  { name: "BLOG", link: "/blog" },
  { name: "CONTACT", link: "/contact" },
];

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={1}
        sx={{ position: "relative" }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ display: "block", py: 2 }}>
            {/* Logo and Email */}
          

<Box
  sx={{
    display: "flex",
    justifyContent: { xs: "center", sm: "space-between" },
    alignItems: "center",
    gap: 2,
  }}
>
  <Box>
    <Box
      component="img"
      src="/buildex_logo1.png"
      alt="Buildex Logo"
      sx={{ height: 60 }}
    />
  </Box>

  <Box
    sx={{
      display: { xs: "none", sm: "flex" },
      alignItems: "center",
      gap: 3,
      flexDirection: "row",
      textAlign: "center",
    }}
  >
    {/* Email Info */}
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <EmailIcon sx={{ color: "#029441", fontSize: 30 }} />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            fontFamily: "Poppins, sans-serif",
            color: "#333",
          }}
        >
          Email us now
        </Typography>
        <Link
          href="mailto:support@heybuildex.com"
          underline="hover"
          sx={{
            fontWeight: 400,
            fontFamily: "Poppins, sans-serif",
            color: "#029441",
          }}
        >
          support@heybuildex.com
        </Link>
      </Box>
    </Box>

    {/* Phone Info */}
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <CallIcon sx={{ color: "#029441", fontSize: 30 }} />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            fontFamily: "Poppins, sans-serif",
            color: "#333",
          }}
        >
          Call us now
        </Typography>
        <Link
          href="tel:+919876543210"
          underline="hover"
          sx={{
            fontWeight: 400,
            fontFamily: "Poppins, sans-serif",
            color: "#029441",
          }}
        >
          +91 98765 43210
        </Link>
      </Box>
    </Box>
  </Box>
</Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  position: "absolute",
                  zIndex: 100,
                  top: "84px",
                  display: { xs: "none", md: "block" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    backgroundColor: "#01933e",
                    py: 1,
                    borderRadius: 1,
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                    "&:hover": {
                      backgroundColor: "#017a2c",
                    },
                  }}
                >
                  {navItems.map((item) => (
                    <Button
                      key={item.name}
                      color="inherit"
                      sx={{
                        fontWeight: 500,
                        fontFamily: "Poppins, sans-serif",
                        color: "#fff",
                      }}
                      href={item.link}
                      component={Link}
                    >
                      {item.name}
                    </Button>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Mobile Menu */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <IconButton
                onClick={handleDrawerToggle}
                edge="end"
                color="inherit"
                sx={{
                  display: { xs: "block", md: "none" },
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <Box component={"img"} src={"/menu.png"} height={"35px"} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>

        {/* Mobile Nav */}
      </AppBar>

      {/* Drawer for Mobile Nav */}
      <Drawer anchor="right" open={open} onClose={handleDrawerToggle}>
        <Box sx={{ width: 250, p: 2 }}>
            <Box>
              <Box 
              component={"img"}
              src={"/buildex_logo.png"}
              alt="Buildex Logo"
              sx={{ height: 60, marginBottom: 2 }}
              />

            </Box>
            <List>
            {navItems.map((item) => (
              <ListItem key={item.name} component={Link} href={item.link}>
                <ListItemText primary={item.name}  sx={{fontFamily:"Poppins",color:"#000"}}/>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
