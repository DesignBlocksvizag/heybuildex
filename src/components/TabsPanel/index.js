"use client";
import React from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";

function TabPanel({ children, value, index }) {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`custom-tabpanel-${index}`}
      aria-labelledby={`custom-tab-${index}`}
      sx={{ pt: 2 }}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

export default function ReusableTabs({ tabData}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue) => setValue(newValue);

  // Render logic for JSON content
  const renderContent = (content) => {
    if (!Array.isArray(content)) return null;

    if (typeof content[0] === "string") {
      // Array of plain strings
      return content.map((text, idx) => (
        <Typography key={idx} variant="body2" sx={{ mb: 1, fontFamily: "Inter", color: "#444",fontSize: 13,fontWeight:400 }}>
          {text}
        </Typography>
      ));
    }

    if (typeof content[0] === "object") {
      // Array of question-answer objects
      return content.map((item, idx) => (
        <Box key={idx} sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, fontFamily: "Poppins",fontSize: 13, color: "#333", mb: 0.5 }}>
            Q: {item.question}
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: "Inter", color: "#444",fontSize: 12,fontWeight:400 }}>
            {item.answer}
          </Typography>
        </Box>
      ));
    }

    return null;
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
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
        {tabData.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>

      {tabData.map((tab, index) => (
        <TabPanel key={index} value={value} index={index}>
          {renderContent(tab.content)}
        </TabPanel>
      ))}
    </Box>
  );
}
