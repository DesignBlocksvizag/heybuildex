import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Divider,
} from '@mui/material';

const QuotationPrintPage = () => {
  return (
    <Box sx={{ p: 4, bgcolor: '#fff', width: '210mm', minHeight: '297mm', m: 'auto' }}>
      {/* Header */}
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box>
            {/* Replace with actual image path */}
            <img src="/logo.png" alt="Logo" width={120} />
            <Typography variant="body2" mt={1}>
              <strong>GST NO:</strong> 37AALCK2949N1ZR
            </Typography>
            <Typography variant="body2">
              #31-27-65, Vinayaka Veedhi, Opposite Annapurna Theatre, Kurmannapalem,<br />
              Visakhapatnam, Andhra Pradesh - 530046
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={4} textAlign="center">
          <Typography variant="h5" fontWeight="bold">
            QUOTATION
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Box textAlign="right">
            <Typography variant="body2"><strong>Quotation No:</strong> ______</Typography>
            <Typography variant="body2"><strong>Date:</strong> ______</Typography>
            <Typography variant="body2"><strong>CLIENT:</strong> ______</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider sx={{ my: 2 }} />

      {/* Table */}
      <Paper variant="outlined" sx={{ mt: 2 }}>
        <Table size="small">
          <TableHead sx={{ bgcolor: '#f5f5f5' }}>
            <TableRow>
              <TableCell><strong>S.No</strong></TableCell>
              <TableCell><strong>Item Description</strong></TableCell>
              <TableCell><strong>Make</strong></TableCell>
              <TableCell><strong>Qty (in MT)</strong></TableCell>
              <TableCell><strong>Basic/MT Price</strong></TableCell>
              <TableCell><strong>Price (Inc 18% GST)</strong></TableCell>
              <TableCell><strong>Total Amount</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Sample Row */}
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Sample Item</TableCell>
              <TableCell>TATA</TableCell>
              <TableCell>5.00</TableCell>
              <TableCell>₹50,000</TableCell>
              <TableCell>₹59,000</TableCell>
              <TableCell>₹2,95,000</TableCell>
            </TableRow>
            {/* Add dynamic rows here */}
          </TableBody>
        </Table>
      </Paper>

      {/* Footer Section */}
      <Grid container spacing={2} mt={3}>
        {/* Left Box - Bank & Contact */}
        <Grid item xs={6}>
          <Paper variant="outlined" sx={{ p: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">Bank Details</Typography>
            <Typography variant="body2">Kalight Global Pvt Ltd</Typography>
            <Typography variant="body2">A/c No: 777705224559</Typography>
            <Typography variant="body2">Bank: ICICI</Typography>
            <Typography variant="body2">Branch: Gajuwaka</Typography>
            <Typography variant="body2">IFSC: ICIC0001108</Typography>

            <Box mt={2}>
              <Typography variant="subtitle1" fontWeight="bold">Contact Us</Typography>
              <Typography variant="body2">Name: R. Rohith</Typography>
              <Typography variant="body2">Designation: Sales Team Lead</Typography>
              <Typography variant="body2">Phone: 9281446109</Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Right Box - Terms & Conditions */}
        <Grid item xs={6}>
          <Paper variant="outlined" sx={{ p: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">Terms and Conditions</Typography>
            <Typography variant="body2">• Prices are ex-stock point and inclusive of taxes; transportation charges are additional.</Typography>
            <Typography variant="body2">• Payment terms shall be as mutually agreed upon.</Typography>
            <Typography variant="body2">• Quotation is valid for 1 working day from the date of issue.</Typography>
            <Typography variant="body2">• Materials will be dispatched within 3 working days. Unloading at the site is the responsibility of the customer.</Typography>
            <Typography variant="body2">• A weighbridge tolerance of ±0.5% will be considered acceptable.</Typography>
            <Typography variant="body2">• A quantity variation of ±5% against the Purchase Order is permissible.</Typography>
            <Typography variant="body2">• Any balance amount will be refunded within 4 to 7 working days.</Typography>
            <Typography variant="body2">• Test certificates will be provided for premium brands only.</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default QuotationPrintPage;
