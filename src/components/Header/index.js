"use client";
import React, { useState } from "react";
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
  Paper,
  Popper,
  ListItemButton,
  Fade,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

const navItems = [
  { name: "HOME", link: "/", dropDown: false },
  { name: "ABOUT US", link: "/about-us", dropDown: false },
  {
    name: "STEEL",
    link: "/steel",
    dropDown: true,
    subMenu: [
      {
        category: "Construction Steel",
        items: [
          { name: "TMT Bars", link: "/steel/tmt-bars" },
          { name: "Binding Wire", link: "/steel/binding-wire" },
        ],
      },
      {
        category: "Structural Steel",
        items: [
          { name: "MS Channel", link: "/steel/ms-channel" },
          { name: "MS Plate", link: "/steel/ms-plate" },
          { name: "MS Angle", link: "/steel/ms-angle" },
          { name: "MS Flat", link: "/steel/ms-flat" },
          { name: "I Beam", link: "/steel/i-beam" },
          { name: "MS Round rod", link: "/steel/ms-round-rod" },
          { name: "MS Round pipe", link: "/steel/ms-round-pipe" },
          { name: "MS Square pipe", link: "/steel/ms-square-pipe" },
          { name: "MS Rectangle pipe", link: "/steel/ms-rectangle-pipe" },
          { name: "MS Chequered plate", link: "/steel/ms-chequered-plate" },
          { name: "Roofing sheet", link: "/steel/roofing-sheet" },
        ],
      },
    ],
  },
  {
    name: "CEMENT",
    link: "/cement",
    dropDown: true,
    subMenu: [
      {
        category: "Cement Brands",
        items: [
          { name: "ULTRATECH CEMENT", link: "/cement/ultratech-cement" },
          { name: "MAHA CEMENT", link: "/cement/maha-cement" },
          { name: "Ramco CEMENT", link: "/cement/ramco-cement" },
          { name: "SAGAR CEMENT", link: "/cement/sagar-cement" },
        ],
      },
    ],
  },
  { name: "RMC", link: "/rmc", dropDown: false },
  { name: "INFRA RENTALS", link: "/infra-rentals", dropDown: false },
  { name: "SAFETY", link: "/safety", dropDown: false },
  { name: "BLOG", link: "/blog", dropDown: false },
  { name: "CONTACT", link: "/contact", dropDown: false },
];


const Header = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({
  STEEL: false,
});


  const toggleMobileDropdown = (name) => {
  setMobileDropdownOpen((prev) => ({
    ...prev,
    [name]: !prev[name],
  }));
};


const handleMouseEnter = (event, category) => {
  clearTimeout(hoverTimeout);
  setAnchorEl(event.currentTarget);
  setHoveredCategory(category);
};

const handleMouseLeave = () => {
  const timeout = setTimeout(() => {
    setHoveredCategory(null);
    setAnchorEl(null);
  }, 150); // delay to allow moving to Popper
  setHoverTimeout(timeout);
};

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  // const handleMouseEnter = (event, category) => {
  //   setAnchorEl(event.currentTarget);
  //   setHoveredCategory(category);
  // };

  // const handleMouseLeave = () => {
  //   setAnchorEl(null);
  //   setHoveredCategory(null);
  // };

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
            {/* Logo and Contact */}
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
                      href="tel:+919281446109"
                      underline="hover"
                      sx={{
                        fontWeight: 400,
                        fontFamily: "Poppins, sans-serif",
                        color: "#029441",
                      }}
                    >
                      +91 92814 46109
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
                  display: { xs: "none", md: "flex" },
                  backgroundColor: "#01933e",
                  py: 1,
                  borderRadius: 1,
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  gap: 1,
                  px: 2,
                }}
              >
                {navItems.map((item) => {
                  if (item.dropDown === true && item.subMenu) {
                    return (
                      <Box
                        onMouseEnter={(e) => handleMouseEnter(e, item.name)}
                        onMouseLeave={handleMouseLeave}
                        key={item.name}
                        sx={{ position: "relative" }}
                      >
                        <Button
                          color="inherit"
                          component={Link}
                          sx={{
                            fontWeight: 500,
                            fontFamily: "Poppins, sans-serif",
                            color: "#fff",
                          }}
                        >
                          {item.name}
                          {hoveredCategory === item.name ? (
                            <ExpandLessIcon fontSize="medium" />
                          ) : (
                            <ExpandMoreIcon fontSize="medium" />
                          )}
                        </Button>
                        <Popper
                          open={hoveredCategory === item.name}
                          anchorEl={anchorEl}
                          placement="bottom-start"
                          transition
                          disablePortal
                          modifiers={[
                            { name: "offset", options: { offset: [0, 8] } },
                          ]}
                          sx={{
                            borderBottomLeftRadius: 1,
                            borderBottomRightRadius: 1,
                          }}
                        >
                          {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={200}>
                              <Paper
                                elevation={3}
                                sx={{
                                  display: "flex",
                                  borderRadius: 1,
                                  overflow: "hidden",
                                  p: 2,
                                  gap: 2,
                                }}
                              >
                                 {item.subMenu.map((group) => (
                  <Box key={group.category} sx={{ minWidth: 200 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 600,
                        fontFamily: "Poppins",
                        mb: 1,
                        color: "#029441",
                        fontSize: 14,
                      }}
                    >
                      {group.category}
                    </Typography>
                    <List dense>
                      {group.items.map((subItem) => (
                        <ListItemButton
                          key={subItem.name}
                          component={Link}
                          href={subItem.link}
                          sx={{
                            fontFamily: "Poppins",
                            fontSize: 12,
                            color: "#333",
                            "&:hover": { color: "#029441" },
                          }}
                        >
                          {subItem.name}
                        </ListItemButton>
                      ))}
                    </List>
                  </Box>
                ))}
                               
                              </Paper>
                            </Fade>
                          )}
                        </Popper>
                      </Box>
                    );
                  }
                  return (
                    <Button
                      key={item.name}
                      color="inherit"
                      href={item.link}
                      component={Link}
                      sx={{
                        fontWeight: 500,
                        fontFamily: "Poppins, sans-serif",
                        color: "#fff",
                      }}
                    >
                      {item.name}
                    </Button>
                  );
                })}
              </Box>
            </Box>

            {/* Mobile Menu Button */}
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
                  "&:hover": { backgroundColor: "transparent" },
                }}
              >
                <Box component="img" src="/menu.png" height="25px" />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer for Mobile Nav */}
      <Drawer anchor="right" open={open} onClose={handleDrawerToggle}>
        <Box sx={{ width: 250, p: 2 }}>
          <Box>
            <Box
              component="img"
              src="/buildex_logo.png"
              alt="Buildex Logo"
              sx={{ height: 60, mb: 2 }}
            />
          </Box>
          <List component="div" disablePadding>
  {navItems.map((item) => {
    if (item.dropDown && item.subMenu) {
      return (
        <Box key={item.name}>
          <ListItem onClick={() => toggleMobileDropdown(item.name)}>
            <ListItemText
              primary={item.name}
              sx={{
                ".MuiTypography-root": {
                  fontFamily: "Poppins",
                  color: "#333",
                  fontWeight: 520,
                },
              }}
            />
            {mobileDropdownOpen[item.name] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={mobileDropdownOpen[item.name]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.subMenu.map((group) => (
                <Box key={group.category} sx={{ pl: 2 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontFamily: "Poppins",
                      color: "#029441",
                      pt: 1,
                      fontSize: 14,
                      fontWeight: 600,
                    }}
                  >
                    {group.category}
                  </Typography>
                  {group.items.map((subItem) => (
                    <ListItemButton
                      key={subItem.name}
                      component={Link}
                      href={subItem.link}
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: 12,
                        color: "#333",
                        fontWeight: 520,
                        "&:hover": { color: "#029441" },
                      }}
                    >
                      {subItem.name}
                    </ListItemButton>
                  ))}
                </Box>
              ))}
            </List>
          </Collapse>
        </Box>
      );
    }

    // default item without dropdown
    return (
      <ListItem key={item.name} component={Link} href={item.link}>
        <ListItemText
          primary={item.name}
          sx={{
            ".MuiTypography-root": {
              fontFamily: "Poppins",
              color: "#333",
              fontWeight: 520,
            },
          }}
        />
      </ListItem>
    );
  })}
</List>

        </Box>
      </Drawer>
    </>
  );
};

export default Header;
