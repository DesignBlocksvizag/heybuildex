"use client";
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Dialog
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import QuotationPrint from '@/src/components/QuotePaper';

const ItemForm = () => {
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [loadingCharges, setLoadingCharges] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };


  const formik = useFormik({
    initialValues: {
      description: '',
      make: '',
      qty: '',
      basicPrice: ''
    },
    validationSchema: Yup.object({
      description: Yup.string().required('Required'),
      make: Yup.string().required('Required'),
      qty: Yup.number().required('Required').positive('Must be > 0'),
      basicPrice: Yup.number().required('Required').positive('Must be > 0')
    }),
    onSubmit: (values, { resetForm }) => {
      const basicPrice = parseFloat(values.basicPrice);
      const qty = parseFloat(values.qty);
      const gstPrice = basicPrice * 1.18;
      const total = gstPrice * qty;

      const newItem = {
        ...values,
        priceIncGST: gstPrice.toFixed(2),
        totalAmount: total.toFixed(2)
      };

      if (editIndex !== null) {
        const updatedItems = [...items];
        updatedItems[editIndex] = newItem;
        setItems(updatedItems);
        setEditIndex(null);
      } else {
        setItems([...items, newItem]);
      }

      resetForm();
    }
  });
  const handlePreviewQuote = () => {
    if (items.length === 0) {
      alert('Please add at least one item to preview the quote.');
      return;
    }
    setOpenDialog(true);
  }

  const handleEdit = (index) => {
    const item = items[index];
    formik.setValues({
      description: item.description,
      make: item.make,
      qty: item.qty,
      basicPrice: item.basicPrice
    });
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = [...items];
    updated.splice(index, 1);
    setItems(updated);
    if (editIndex === index) {
      formik.resetForm();
      setEditIndex(null);
    }
  };

  const grandTotal = () => {
    const total = items.reduce((sum, item) => sum + parseFloat(item.totalAmount), 0);
    return (total + parseFloat(loadingCharges || 0)).toFixed(2);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, fontFamily: 'Poppins' }}>
      <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Poppins' }}>
        Add Item Details
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid size={{xs:12,md:6}}>
            <TextField
              fullWidth
              label="Item Description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
              sx={{ fontFamily: 'Poppins' }}
            />
          </Grid>
          <Grid size={{xs:12,md:6}}>
            <TextField
              fullWidth
              label="Make"
              name="make"
              value={formik.values.make}
              onChange={formik.handleChange}
              error={formik.touched.make && Boolean(formik.errors.make)}
              helperText={formik.touched.make && formik.errors.make}
              sx={{ fontFamily: 'Poppins' }}
            />
          </Grid>
          <Grid size={{xs:12,md:6}}>
            <TextField
              fullWidth
              label="Qty (in MT)"
              name="qty"
              type="number"
              value={formik.values.qty}
              onChange={formik.handleChange}
              error={formik.touched.qty && Boolean(formik.errors.qty)}
              helperText={formik.touched.qty && formik.errors.qty}
              sx={{ fontFamily: 'Poppins' }}
            />
          </Grid>
          <Grid size={{xs:12,md:6}}>
            <TextField
              fullWidth
              label="Basic/MT Price"
              name="basicPrice"
              type="number"
              value={formik.values.basicPrice}
              onChange={formik.handleChange}
              error={formik.touched.basicPrice && Boolean(formik.errors.basicPrice)}
              helperText={formik.touched.basicPrice && formik.errors.basicPrice}
              sx={{ fontFamily: 'Poppins' }}
            />
          </Grid>
          <Grid size={{xs:12}}>
            <Box textAlign="right">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ fontFamily: 'Poppins' }}
              >
                {editIndex !== null ? 'Update Item' : 'Add Item'}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>

      {/* Loading Charges Input */}
      <Box mt={3}>
        <TextField
          label="Overall Loading Charges"
          type="number"
          value={loadingCharges}
          onChange={(e) => setLoadingCharges(e.target.value)}
          sx={{ fontFamily: 'Poppins', width: '100%' }}
        />
      </Box>
       <Box textAlign="right">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ fontFamily: 'Poppins',my:2 }}
                onClick={handlePreviewQuote}
              >
               PreView Quote
              </Button>
            </Box>
      

      {/* Table Display */}
      {items.length > 0 && (
        <>
          <Typography variant="h6" mt={4} sx={{ fontFamily: 'Poppins' }}>
            Item Summary
          </Typography>
          <Table sx={{ mt: 2 }}>
            <TableHead>
              <TableRow>
                <TableCell>S.No</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Make</TableCell>
                <TableCell>Qty</TableCell>
                <TableCell>Basic Price</TableCell>
                <TableCell>Price (Inc GST)</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.make}</TableCell>
                  <TableCell>{item.qty}</TableCell>
                  <TableCell>{item.basicPrice}</TableCell>
                  <TableCell>{item.priceIncGST}</TableCell>
                  <TableCell>{item.totalAmount}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEdit(index)}><Edit /></IconButton>
                    <IconButton onClick={() => handleDelete(index)}><Delete /></IconButton>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={6} align="right"><strong>Loading Charges</strong></TableCell>
                <TableCell colSpan={2}>{parseFloat(loadingCharges || 0).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={6} align="right"><strong>Grand Total</strong></TableCell>
                <TableCell colSpan={2}><strong>{grandTotal()}</strong></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </>
      )}
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="md">
        <QuotationPrint items={items} loadingCharges={loadingCharges} />
      </Dialog>
    </Paper>
  );
};

export default ItemForm;
