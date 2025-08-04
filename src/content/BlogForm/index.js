"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
  Snackbar,
  Skeleton,
  Tooltip,
  Button,
  IconButton,
  Dialog,
  Card,
  CardContent,
  Typography,
  TextField,
  Container,
  Alert,
} from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { Delete, Edit } from "@mui/icons-material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import DeleteDialog from "@/src/components/DeleteDialog";
const heading = {
  fontFamily : "Poppins"
}
function getBase64(file) {
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.onload = () => res(reader.result);
    reader.onerror = err => rej(err);
    reader.readAsDataURL(file);
  });
}
const BlogFormDialog = ({
  open,
  handleClose,
  handleSubmit,
  editStatus,
  editData,
}) => {
  const validationSchema = Yup.object({
    heading: Yup.string().required("Heading is required"),
    description: Yup.string().required("Description is required"),
    slug : Yup.string().required("Slug is Required"),
    image: editStatus ? Yup.mixed().notRequired() : Yup.mixed().required("Image is required"),
  });

  const initialValues = {
    heading: editStatus ? editData.heading : "",
    description: editStatus ? editData.description : "",
    slug : editStatus ? editData.slug : "",
    image: null,
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <Card sx={{ py: 3 }}>
        <CardContent>
          <Typography variant="h5" align="center" mb={2} sx={{color:"#029441",fontFamily:"Poppins"}}>
            {editStatus ? "Edit Blog" : "Add Blog"}
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              handleSubmit(values);
              resetForm();
              handleClose();
            }}
          >
            {({ errors, touched, handleChange, setFieldValue,values }) => (
              <Form>
                <TextField
                  fullWidth
                  label="Heading"
                  name="heading"
                  margin="normal"
                  value={values.heading}
                  onChange={handleChange}
                  error={touched.heading && Boolean(errors.heading)}
                  helperText={touched.heading && errors.heading}
                />
                 <TextField
                  fullWidth
                  label="Slug"
                  name="slug"
                  margin="normal"
                  value={values.slug}
                  onChange={handleChange}
                  error={touched.slug && Boolean(errors.slug)}
                  helperText={touched.slug && errors.slug}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={8}
                  label="Description"
                  name="description"
                  margin="normal"
                  value={values.description}
                  onChange={handleChange}
                  error={touched.description && Boolean(errors.description)}
                  helperText={touched.description && errors.description}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setFieldValue("image", e.currentTarget.files[0])
                  }
                />
                {errors.image && (
                  <Typography color="error">{errors.image}</Typography>
                )}
                <Box mt={2} display="flex" justifyContent="space-between">
                  <Button
                    onClick={handleClose}
                    variant="outlined"
                    color="error"
                    sx={{fontFamily:"Poppins"}}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" variant="contained" color="primary"    sx={{fontFamily:"Poppins"}}>
                    {editStatus ? "Update" : "Create"}
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Dialog>
  );
};

export default function BlogTable() {
  const [blogs, setBlogs] = useState([]);
  const [open, setOpen] = useState(false);
  const [editStatus, setEditStatus] = useState(false);
  const [editData, setEditData] = useState(null);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info",
  });
  const [loading, setLoading] = useState(false);

 const API_BASE = "/api/blogs"; // Next.js API route

useEffect(() => {
  fetchBlogs();
}, []);

const fetchBlogs = async () => {
  setLoading(true);
  try {
    const res = await fetch(API_BASE, { method: "GET" });
    const data = await res.json();
    setBlogs(data.blogs); // Use .blogs based on your API response structure
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};

// Convert image file → Base64 string
function getBase64(file) {
  return new Promise((resolve, reject) => {
    if (!file) return resolve(null);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const handleCreateOrUpdate = async (values) => {
  try {
    // Convert image to Base64 if exists
    const base64Image = values.image ? await getBase64(values.image) : null;

    // Build request body
    const payload = {
      heading: values.heading,
      description: values.description,
      slug : values.slug,
      imageBase64: base64Image, // Always send as Base64
    };

    // Choose URL
    const url = editStatus
      ? `${API_BASE}?id=${editData._id}` // PUT for update
      : API_BASE;                       // POST for create

    // Send JSON request
    const res = await fetch(url, {
      method: editStatus ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });


     if (res.ok) {
    setSnackbar({
      open: true,
      message: editStatus ? "Blog updated!" : "Blog created!",
      severity: "success",
    });
  }

    fetchBlogs();
  } catch (err) {
        const errorData = await res.json(); // optional
    setSnackbar({
      open: true,
      message: errorData.message || "Something went wrong",
      severity: "error",
    });
  }
};


const handleDelete = async () => {
  try {
    const res = await fetch(`${API_BASE}?id=${deleteId}`, {
      method: "DELETE",
    });
    const result = await res.json();
    if(result.ok){
         setSnackbar({ open: true, message: "Deleted!", severity: "success" });
    }
    fetchBlogs();
  } catch (err) {
    setSnackbar({ open: true, message: "Delete failed", severity: "error" });
  } finally {
    setDeleteDialog(false);
    setDeleteId(null);
  }
};

  return (
    <Container maxWidth="lg" sx={{ mt: 2 }}>
      <Box display="flex" justifyContent="end" mb={2}>
        <Button
          startIcon={<AddCircleRoundedIcon />}
          variant="contained"
          sx={{
            background:"#029441",
            fontFamily:"Poppins"
            
          }}
          onClick={() => setOpen(true)}
        >
          Add Blog
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={heading}>Image</TableCell>
              <TableCell sx={heading}>Heading</TableCell>
              <TableCell sx={heading}>Description</TableCell>
              <TableCell align="center" sx={heading}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <Skeleton variant="rectangular" width={100} height={60} />
                    </TableCell>
                    <TableCell>
                      <Skeleton />
                    </TableCell>
                    <TableCell>
                      <Skeleton />
                    </TableCell>
                    <TableCell>
                      <Skeleton variant="circular" width={40} height={40} />
                    </TableCell>
                  </TableRow>
                ))
              : blogs.map((blog) => (
                  <TableRow key={blog._id}>
                    <TableCell>
                      {blog.image && (
                        <img
                          src={`${process.env.NEXT_PUBLIC_API_BASE}` + blog.image}
                          alt=""
                          width={100}
                        />
                      )}
                    </TableCell>
                    <TableCell>{blog.heading}</TableCell>
                    <TableCell>{blog.description}</TableCell>
                    <TableCell align="center">
                      <Tooltip title="Edit">
                        <IconButton
                          onClick={() => {
                            setEditStatus(true);
                            setEditData(blog);
                            setOpen(true);
                          }}
                        >
                          <Edit />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton
                          onClick={() => {
                            setDeleteId(blog._id);
                            setDeleteDialog(true);
                          }}
                          color="error"
                        >
                          <Delete />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>

      <BlogFormDialog
        open={open}
        editStatus={editStatus}
        editData={editData}
        handleClose={() => {
          setOpen(false);
          setEditStatus(false);
          setEditData(null);
        }}
        handleSubmit={handleCreateOrUpdate}
      />

      <DeleteDialog
        openConfirmDelete={deleteDialog}
        dialogtext="Blog"
        closeConfirmDelete={() => setDeleteDialog(false)}
        handleDeleteCompleted={handleDelete}
      />

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        sx={{fontFamily:"Poppins"}}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
      >
        <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
      </Snackbar>
    </Container>
  );
}
