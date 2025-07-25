"use client";
import React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArticleIcon from "@mui/icons-material/Article";
import Link from "next/link";
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

const drawerWidth = 240;

export const metadata = {
  title: "Blogs Admin - HeyBuildex",
};

const navItems = [
  {
    label: "Blogs",
    href: "/blogs-admin",
    icon: <ArticleIcon sx={{ color: "#029441" }} />,
  },
   {
    label: "Quotation",
    href: "/quotation-admin",
    icon: <RequestQuoteIcon sx={{ color: "#029441" }} />,
  },
];

export default function BlogsAdminLayout({ children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
  <Box
    onClick={handleDrawerToggle}
    sx={{
      textAlign: "center",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
  >
    <Box>
      <Toolbar sx={{ justifyContent: "center" }}>
        <Box
          component="img"
          src="/buildex_logo.png"
          alt="Buildex Logo"
          sx={{ height: 60, mb: 2 }}
        />
      </Toolbar>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            component={Link}
            href={item.href}
            sx={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <ListItemIcon sx={{ minWidth: 32 }}>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>

    {/* Logout at Bottom */}
    <Box sx={{ p: 2 }}>
      <Divider sx={{ mb: 1 }} />
      <ListItem
        
        onClick={() => {
          localStorage.removeItem("loggedIn");
          window.location.href = "/admin-login";
        }}
       
          
            sx={{
              
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
        <ListItemText primary="Logout" slotProps={{
          primary:{
            sx:{
              fontFamily: "Poppins",
              fontSize: "14px",
              fontWeight: 600,
              color: "#fff",
              textAlign: "center",
              textTransform: "none",
            }
          }
        }} />
      </ListItem>
    </Box>
  </Box>
);


  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* AppBar for mobile */}
      <AppBar
        position="fixed"
        sx={{
          display: { md: "none" },
          backgroundColor: "#fff",
          color: "#000",
          boxShadow: "none",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Blogs Admin
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better performance on mobile
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Drawer for desktop */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        open
      >
        {drawer}
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          mt: { xs: 7, md: 0 }, // space for mobile AppBar
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
