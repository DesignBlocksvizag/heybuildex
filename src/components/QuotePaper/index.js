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

const QuotationPrint = ({ items, loadingCharges }) => {
  const grandTotal = () => {
    const totalItems = items.reduce((acc, item) => acc + parseFloat(item.totalAmount), 0);
    return (totalItems + parseFloat(loadingCharges || 0)).toFixed(2);
  };
  return (
    <Box sx={{ p: 4, bgcolor: '#fff', width: '210mm', minHeight: '297mm', m: 'auto' }}>
      {/* Header */}
      <Grid container spacing={2}>
        <Grid  size={{xs:4}}>
          <Box>
            {/* Replace with actual image path */}
            <img src="/quote-logo.png" alt="Logo" width={120} />
            <Typography variant="body2" mt={1} sx={{color: '#555', fontFamily:"Poppins", fontSize: '0.9rem'}}>
              <strong>GST NO:</strong> 37AALCK2949N1ZR
            </Typography>
            <Typography variant="body2" sx={{color: '#555',fontFamily:"Poppins", fontSize: '0.9rem'}}>
              #31-27-65, Vinayaka Veedhi, Opposite Annapurna Theatre, Kurmannapalem,<br />
              Visakhapatnam, Andhra Pradesh - 530046
            </Typography>
          </Box>
        </Grid>

        <Grid  size={{xs:4}} textAlign="center">
          <Typography variant="h5" fontWeight="bold" sx={{ fontFamily: 'Poppins', color: '#333' }}>
            QUOTATION
          </Typography>
        </Grid>

        <Grid  size={{xs:4}}>
          <Box textAlign="right">
            <Typography variant="body2" sx={{color: '#555',fontFamily:"Poppins", fontSize: '0.9rem'}}><strong>Quotation No:</strong> ______</Typography>
            <Typography variant="body2" sx={{color: '#555',fontFamily:"Poppins", fontSize: '0.9rem'}}><strong>Date:</strong> ______</Typography>
            <Typography variant="body2" sx={{color: '#555',fontFamily:"Poppins", fontSize: '0.9rem'}}><strong>CLIENT:</strong> ______</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider sx={{ my: 2 }} />

      {/* Table */}
      <Paper variant="outlined" sx={{ mt: 2 }}>
        <Table size="small">
          <TableHead sx={{ bgcolor: '#f5f5f5' }}>
            <TableRow sx={{ textAlign: 'center' }}>
              <TableCell sx={{ fontFamily: 'Poppins' }}><strong>S.No</strong></TableCell>
              <TableCell sx={{ fontFamily: 'Poppins' }}><strong>Item Description</strong></TableCell>
              <TableCell sx={{ fontFamily: 'Poppins' }}><strong>Make</strong></TableCell>
              <TableCell sx={{ fontFamily: 'Poppins' }}><strong>Qty (in MT)</strong></TableCell>
              <TableCell sx={{ fontFamily: 'Poppins' }}><strong>Basic/MT Price</strong></TableCell>
              <TableCell sx={{ fontFamily: 'Poppins' }}><strong>Price (Inc 18% GST)</strong></TableCell>
              <TableCell sx={{ fontFamily: 'Poppins' }}><strong>Total Amount</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={index}>
                <TableCell sx={{ fontFamily: 'Poppins' }}>{index + 1}</TableCell>
                <TableCell sx={{ fontFamily: 'Poppins' }}>{item.description}</TableCell>
                <TableCell sx={{ fontFamily: 'Poppins' }}>{item.make}</TableCell>
                <TableCell sx={{ fontFamily: 'Poppins' }}>{item.qty}</TableCell>
                <TableCell sx={{ fontFamily: 'Poppins' }}>{item.basicPrice}</TableCell>
              <TableCell sx={{ fontFamily: 'Poppins' }}>{item.priceIncGST}</TableCell>
              <TableCell sx={{ fontFamily: 'Poppins' }}>{item.totalAmount}</TableCell>
            </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={6} align="right" sx={{ fontFamily: 'Poppins' }}><strong>Loading Charges</strong></TableCell>
              <TableCell colSpan={7} sx={{ fontFamily: 'Poppins' }}>{parseFloat(loadingCharges || 0).toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={6} align="right" sx={{ fontFamily: 'Poppins' }}><strong>Grand Total</strong></TableCell>
              <TableCell colSpan={7} sx={{ fontFamily: 'Poppins' }}>{grandTotal()}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>

      {/* Footer Section */}
      <Grid container spacing={2} mt={3}>
        {/* Left Box - Bank & Contact */}
        <Grid  size={{xs:6}}>
          <Paper variant="outlined" sx={{ p: 2, height:"100%" }}>
            <Typography variant="subtitle1" fontWeight="bold" sx={{fontFamily:"Poppins", color: '#333'}}>Bank Details</Typography>
            <Typography variant="body2" sx={{color: '#555',fontFamily:"Poppins", fontSize: '0.9rem'}}>Kalight Global Pvt Ltd</Typography>
            <Typography variant="body2" sx={{color: '#555',fontFamily:"Poppins", fontSize: '0.9rem'}}>A/c No: 777705224559</Typography>
            <Typography variant="body2" sx={{color: '#555',fontFamily:"Poppins", fontSize: '0.9rem'}}>Bank: ICICI</Typography>
            <Typography variant="body2" sx={{color: '#555',fontFamily:"Poppins", fontSize: '0.9rem'}}>Branch: Gajuwaka</Typography>
            <Typography variant="body2" sx={{color: '#555',fontFamily:"Poppins", fontSize: '0.9rem'}}>IFSC: ICIC0001108</Typography>

            <Box mt={2}>
              <Typography variant="subtitle1" fontWeight="bold" sx={{fontFamily:"Poppins", color: '#333'}}>Contact Us</Typography>
              <Typography variant="body2" sx={{color: '#555',fontFamily:"Poppins", fontSize: '0.9rem'}}>Name: R. Rohith</Typography>
              <Typography variant="body2" sx={{color: '#555',fontFamily:"Poppins", fontSize: '0.9rem'}}>Designation: Sales Team Lead</Typography>
              <Typography variant="body2" sx={{color: '#555',fontFamily:"Poppins", fontSize: '0.9rem'}}>Phone: 9281446109</Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Right Box - Terms & Conditions */}
        <Grid  size={{xs:6}}>
          <Paper variant="outlined" sx={{ p: 2 ,height:"100%"}}>
            <Typography variant="subtitle1" fontWeight="bold" sx={{fontFamily:"Poppins", color: '#333'}}>Terms and Conditions</Typography>
            <Typography variant="body2" sx={{color: '#555',fontFamily:"Poppins", fontSize: '0.9rem'}}>• Prices are ex-stock point and inclusive of taxes; transportation charges are additional.</Typography>
            <Typography variant="body2" sx={{color: '#555',fontFamily:"Poppins", fontSize: '0.9rem'}}>• Payment terms shall be as mutually agreed upon.</Typography>
            <Typography variant="body2" sx={{color: '#555',fontFamily:"Poppins", fontSize: '0.9rem'}}>• Quotation is valid for 1 working day from the date of issue.</Typography>
            <Typography variant="body2" sx={{color: '#555',fontFamily:"Poppins", fontSize: '0.9rem'}}>• Materials will be dispatched within 3 working days. Unloading at the site is the responsibility of the customer.</Typography>
            <Typography variant="body2" sx={{color: '#555',fontFamily:"Poppins", fontSize: '0.9rem'}}>• A weighbridge tolerance of ±0.5% will be considered acceptable.</Typography>
            <Typography variant="body2" sx={{color: '#555',fontFamily:"Poppins", fontSize: '0.9rem'}}>• A quantity variation of ±5% against the Purchase Order is permissible.</Typography>
            <Typography variant="body2" sx={{color: '#555',fontFamily:"Poppins", fontSize: '0.9rem'}}>• Any balance amount will be refunded within 4 to 7 working days.</Typography>
            <Typography variant="body2" sx={{color: '#555',fontFamily:"Poppins", fontSize: '0.9rem'}}>• Test certificates will be provided for premium brands only.</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default QuotationPrint;
