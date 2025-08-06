// app/not-found.js
"use client";

import { Box, Typography, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        p: 3,
      }}
    >
      <ErrorOutlineIcon
        sx={{
          fontSize: { xs: 100, sm: 150 },
          color: "#029441",
          mb: 2,
        }}
      />
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          color: "#029441",
          fontSize: { xs: "2.5rem", sm: "4rem" },
        }}
      >
        404
      </Typography>
      <Typography
        variant="h5"
        sx={{
          mt: 1,
          mb: 3,
          color: "#555",
          maxWidth: 500,
        }}
      >
        Oops! The page you are looking for doesn’t exist.
      </Typography>
      <Button
        variant="contained"
        sx={{
          bgcolor: "#029441",
          "&:hover": { bgcolor: "#027a36" },
          px: 4,
          py: 1.5,
          fontSize: "1rem",
          borderRadius: "30px",
        }}
        onClick={() => router.push("/")}
      >
        Go to Home
      </Button>
    </Box>
  );
}
