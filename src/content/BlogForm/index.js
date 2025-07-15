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
    image: editStatus ? Yup.mixed().notRequired() : Yup.mixed().required("Image is required"),
  });

  const initialValues = {
    heading: editStatus ? editData.heading : "",
    description: editStatus ? editData.description : "",
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
                  multiline
                  rows={4}
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

  const API_BASE = "https://acharyachessacademy.com";

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/blog-api/read.php`,{
        method : "GET"
      });
      const data = await res.json();
      setBlogs(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const handleCreateOrUpdate = async (values) => {
    const formData = new FormData();
    formData.append("heading", values.heading);
    formData.append("description", values.description);
    if (values.image) formData.append("image", values.image);

    const url = editStatus
      ? `${API_BASE}/blog-api/update.php`
      : `${API_BASE}/blog-api/create.php`;
    if (editStatus) formData.append("id", editData.id);

    try {
      const res = await fetch(url, { method: "POST", body: formData });
      const result = await res.json();
      setSnackbar({
        open: true,
        message:
          result.status === "success"
            ? editStatus
              ? "Blog updated!"
              : "Blog created!"
            : "Error: " + result.message,
        severity: result.status === "success" ? "success" : "error",
      });
      fetchBlogs();
    } catch (err) {
      console.error(err);
      setSnackbar({ open: true, message: "Request failed", severity: "error" });
    }
  };

  const handleDelete = async () => {
    try {
      const form = new FormData();
      form.append("id", deleteId);
      const res = await fetch(`${API_BASE}/blog-api/delete.php`, {
        method: "POST",
        body: form,
      });
      const result = await res.json();
      setSnackbar({ open: true, message: "Deleted!", severity: "success" });
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
                  <TableRow key={blog.id}>
                    <TableCell>
                      {blog.image && (
                        <img
                          src={`${API_BASE}/blog-api/${blog.image}`}
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
                            setDeleteId(blog.id);
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
