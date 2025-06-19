"use client";
import {
  Box,
  Typography,
  TextField,
  Grid,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  LinearProgress,
  Alert,
  Snackbar,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

export default function QuotationForm() {
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      steelType: "",
      material: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      phone: Yup.string().required("Required"),
      steelType: Yup.string().required("Required"),
      material: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const now = new Date().toLocaleString(); // adds date and time
        const data = {
        name: values.name,
        phone: values.phone,
        steelType: values.steelType,
        material: values.material,
        message: values.message,
      };

      try {
  const response = await fetch(
    "https://heybuildex.com/submit-lead.php",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json(); // assuming it returns JSON

  if (response.ok) {
    setOpenSnackbar(true);
    setErrorMessage(""); // clear errors
    resetForm();
    router.push("/thank-you");
  } else {
    // Handle Kylas API error format
    if (result?.details) {
      const parsedDetails = JSON.parse(result.details);
      setErrorMessage(parsedDetails.message || "Something went wrong.");
    } else {
      setErrorMessage("Submission failed. Please try again.");
    }
    setOpenSnackbar(true);
  }
} catch (error) {
  console.error("Error:", error);
  setErrorMessage("Network or server error. Please try again.");
  setOpenSnackbar(true);
} finally {
  setLoading(false);
}

    },
  });
  const getSubProducts = (product) => {
    switch (product) {
      case "Construction Steel":
        return ["TMT Bars", "Binding Wire"];
      case "Structural Steel":
        return [
          "MS Channel",
          "MS Plate",
          "MS Angle",
          "MS Flat",
          "I Beam",
          "MS Round rod",
          "MS Roung pipe",
          "MS Square pipe",
          "MS Rectangle pipe",
          "MS Chequered plate",
          "Roofing sheet",
        ];
      default:
        return [];
    }
  };

  const subProducts = getSubProducts(formik.values.steelType);

  return (
    <Box
      sx={{
        maxWidth: "900px",
        mx: "auto",
        my: 6,
        px: { xs: 2, md: 4 },
        py: 4,
        bgcolor: "#fff",
      }}
      id="quote"
    >
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          textAlign: "center",
          fontWeight: 700,
          fontFamily: "Poppins",
          color: "#333",
        }}
      >
        Request a Free Quotation
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              sx={{
                fontFamily: "Poppins",
                "& .MuiInputLabel-root": {
                  fontFamily: "Poppins",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#1c953f", // Focused label color
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#1c953f", // Outline color on focus
                  },
                },
              }}
              label="Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              sx={{
                fontFamily: "Poppins",
                "& .MuiInputLabel-root": {
                  fontFamily: "Poppins",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#1c953f", // Focused label color
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#1c953f", // Outline color on focus
                  },
                },
              }}
              label="Phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <FormControl fullWidth sx={{ fontFamily: "Poppins" }}>
              <InputLabel sx={{ fontFamily: "Poppins", color: "#1c953f" }}>
                Steel Type
              </InputLabel>
              <Select
                name="steelType"
                value={formik.values.steelType}
                onChange={(e) => {
                  if (formik.values?.material) {
                    formik.values.material = "";
                  }
                  formik.handleChange(e);
                }}
                label="Steel Type"
                sx={{
                  fontFamily: "Poppins",
                  "& .MuiInputLabel-root": {
                    fontFamily: "Poppins",
                    color: "#1c953f",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ccc",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#1c953f",
                  },
                }}
                error={
                  formik.touched.steelType && Boolean(formik.errors.steelType)
                }
              >
                <MenuItem value="Construction Steel" sx={{ fontFamily: "Poppins" }}>
                  Construction Steel
                </MenuItem>
                <MenuItem
                  value="Structural Steel"
                  sx={{ fontFamily: "Poppins" }}
                >
                  Structural Steel
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {formik.values.steelType && (
            <Grid size={{ xs: 12 }}>
              <FormControl fullWidth sx={{ fontFamily: "Poppins" }}>
                <InputLabel sx={{ fontFamily: "Poppins", color: "#1c953f" }}>
                  Material
                </InputLabel>
                <Select
                  name="material"
                  value={formik.values.material}
                  onChange={formik.handleChange}
                  label="Material"
                  sx={{
                    fontFamily: "Poppins",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ccc",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#1c953f",
                    },
                  }}
                  error={
                    formik.touched.material && Boolean(formik.errors.material)
                  }
                >
                  {subProducts.map((item) => (
                    <MenuItem
                      key={item}
                      value={item}
                      sx={{ fontFamily: "Poppins" }}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          )}

          {/* Message Field */}
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
              sx={{
                fontFamily: "Poppins",
                "& .MuiInputLabel-root": {
                  fontFamily: "Poppins",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#1c953f",
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#1c953f",
                  },
                },
              }}
            />
          </Grid>
        </Grid>
        {loading && <LinearProgress sx={{ background: "#1c953f", mt: 1 }} />}

        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button
            type="submit"
            variant="contained"
            color="warning"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
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
            Submit Request
          </Button>
        </Box>
      </form>
      <Snackbar
  open={openSnackbar}
  autoHideDuration={6000}
  onClose={() => setOpenSnackbar(false)}
  sx={{ position: "fixed", top: 20, right: 20, zIndex: 1300 }}
>
  <Alert
    onClose={() => setOpenSnackbar(false)}
    severity={errorMessage ? "error" : "success"}
    sx={{ width: "100%", fontFamily: "Poppins" }}
  >
    {errorMessage || "Your message has been sent successfully!"}
  </Alert>
</Snackbar>

    </Box>
  );
}
