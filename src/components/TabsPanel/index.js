"use client"
import React from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";

// TabPanel Component
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`custom-tabpanel-${index}`}
      aria-labelledby={`custom-tab-${index}`}
      {...other}
      sx={{ pt: 2 }}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

// Main Component
export default function ProductTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ mt: 4 }}>
      {/* Tabs */}
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        textColor="primary"
        indicatorColor="primary"
        sx={{
          borderBottom: "1px solid #ccc",
          "& .MuiTab-root": {
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: 16,
            color: "#333",
            textTransform: "none",
          },
          "& .Mui-selected": {
            color: "#01933e",
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "#01933e",
            height: 3,
            borderRadius: 2,
          },
        }}
      >
        <Tab label="Overview" />
        <Tab label="Features" />
        <Tab label="FAQs" />
      </Tabs>

      {/* Tab Panels */}
      <TabPanel value={value} index={0}>
        <Typography variant="body2" sx={{ fontFamily: "Inter", color: "#444" }}>
          Our TMT bars are manufactured using state-of-the-art technology,
          offering excellent strength and ductility. They are ideal for
          residential, commercial, and industrial construction projects.
        </Typography>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <ul
          style={{ paddingLeft: "1.5rem", color: "#444", fontFamily: "Inter" }}
        >
          <li>High tensile strength</li>
          <li>Corrosion resistant</li>
          <li>Earthquake resistant</li>
          <li>Easy to weld and bend</li>
          <li>Certified by leading standards</li>
        </ul>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: 600, mb: 1, fontFamily: "Poppins" }}
        >
          Q: Are these TMT bars ISI certified?
        </Typography>
        <Typography
          variant="body2"
          sx={{ mb: 2, fontFamily: "Inter", color: "#444" }}
        >
          Yes, all our TMT bars come with ISI certification and meet national
          quality standards.
        </Typography>

        <Typography
          variant="subtitle2"
          sx={{ fontWeight: 600, mb: 1, fontFamily: "Poppins" }}
        >
          Q: Can I order in bulk for a construction site?
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: "Inter", color: "#444" }}>
          Absolutely! We provide bulk supplies with transportation and site
          delivery options.
        </Typography>
      </TabPanel>
    </Box>
  );
}
