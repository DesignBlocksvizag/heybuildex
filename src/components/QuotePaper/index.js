"use client";
import React, { useRef } from "react";
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
  Button,
} from "@mui/material";
import { useReactToPrint } from "react-to-print";

const QuotationPrint = ({
  items,
  loadingCharges, // Basic per MT loading charge
    transportationCharges,
  quotationNumber,
  clientName,
  quotationDate,
  contact,
  typeofMaterial
}) => {
  const printRef = useRef();

  const totalQuantity = items.reduce(
    (acc, item) => acc + parseFloat(item.qty || 0),
    0
  );

  const loadingPriceIncGST = parseFloat(loadingCharges || 0) * 1.18;
  const loadingTotalAmount = loadingPriceIncGST * totalQuantity;
    const piecesTotal = () => {
    const totalItems = items.reduce(
      (acc, item) => acc + parseFloat(item.pieces || 0),
      0
    );
    return totalItems;
  };

  const grandTotal = () => {
    const totalItems = items.reduce(
      (acc, item) => acc + parseFloat(item.totalAmount || 0),
      0
    );
    return (totalItems + loadingTotalAmount  + parseFloat(transportationCharges)).toFixed(2);
  };

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: `Quotation - ${quotationNumber}`,
    onAfterPrint: () => console.log("Print successful!"),
    removeAfterPrint: true,
    pageStyle: `
      @page {
        size: A4;
        margin-top: 0.2in;
      }
    `,
  });

  return (
    <Box>
      <Box textAlign="right" mb={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={handlePrint}
          sx={{ my: 1, mr: 1, fontFamily: "Poppins" }}
          size="small"
        >
          Print
        </Button>
      </Box>

      <Box
        ref={printRef}
        sx={{
          width: "210mm",
          minHeight: "297mm",
          bgcolor: "#fff",
          p: 2,
          boxSizing: "border-box",
          m: "auto",
        }}
      >
        {/* Header */}
        <Grid container spacing={2}>
          <Grid size={{ xs: 4 }}>
            <Box>
              <img src="/quote-logo.png" alt="Logo" width={120} />
              <Typography
                variant="body2"
                mt={1}
                sx={{
                  color: "#555",
                  fontFamily: "Poppins",
                  fontSize: "0.9rem",
                }}
              >
                <strong>GST NO:</strong> 37AALCK2949N1ZR
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#555",
                  fontFamily: "Poppins",
                  fontSize: "0.9rem",
                  mt:0.1
                }}
              >
                #31-27-65, Vinayaka Veedhi, Opposite Annapurna Theatre,
                Kurmannapalem,
                <br />
                Visakhapatnam, Andhra Pradesh - 530046
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 4 }} textAlign="center">
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ fontFamily: "Poppins", color: "#333" }}
            >
              QUOTATION
            </Typography>
          </Grid>

          <Grid size={{ xs: 4 }}>
            <Box textAlign="right">
              <Typography
                variant="body2"
                sx={{
                  color: "#555",
                  fontFamily: "Poppins",
                  fontSize: "0.9rem",
                  mt:0.1
                }}
              >
                <strong>Quotation No:</strong>
                {quotationNumber}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#555",
                  fontFamily: "Poppins",
                  fontSize: "0.9rem",
                  mt:0.1
                }}
              >
                <strong>Date:</strong> {new Date(quotationDate).toLocaleDateString("en-GB")}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#555",
                  fontFamily: "Poppins",
                  fontSize: "0.9rem",
                  mt:0.1
                }}
              >
                <strong>CLIENT:</strong> {clientName}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#555",
                  fontFamily: "Poppins",
                  fontSize: "0.9rem",
                  mt:0.1
                }}
              >
                <strong>Contact:</strong> {contact}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        {/* Table */}
        <Paper sx={{ mt: 2, boxShadow: "none !important" }}>
          <Table size="small">
            <TableHead sx={{ bgcolor: "#029441" }}>
              <TableRow sx={{ textAlign: "center" }}>
                <TableCell sx={{ fontFamily: "Poppins",color:"#fff" }}>
                  <strong>S.No</strong>
                </TableCell>
                <TableCell sx={{ fontFamily: "Poppins",color:"#fff" }}>
                  <strong>Item Description</strong>
                </TableCell>
                <TableCell sx={{ fontFamily: "Poppins",color:"#fff" }}>
                  <strong>Make</strong>
                </TableCell>
                {piecesTotal() > 0 && (
                  <TableCell sx={{ fontFamily: "Poppins",color:"#fff" }}>
                    <strong>Pieces</strong>
                  </TableCell>
                )}
                <TableCell sx={{ fontFamily: "Poppins",color:"#fff" }}>
                  <strong>Qty (in MT)</strong>
                </TableCell>
                <TableCell sx={{ fontFamily: "Poppins",color:"#fff" }}>
                  <strong>Basic/MT Price</strong>
                </TableCell>
                <TableCell sx={{ fontFamily: "Poppins",color:"#fff" }}>
                  <strong>Price (Inc 18% GST)</strong>
                </TableCell>
                <TableCell sx={{ fontFamily: "Poppins",color:"#fff" }}>
                  <strong>Total Amount</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ fontFamily: "Poppins" }}>
                    {index + 1}
                  </TableCell>
                  <TableCell sx={{ fontFamily: "Poppins" }}>
                    {item.description}
                  </TableCell>
                  <TableCell sx={{ fontFamily: "Poppins" }}>
                    {item.make}
                  </TableCell>
                   {piecesTotal() > 0 && (
                      <TableCell sx={{ fontFamily: "Poppins" }}>
                    {item.pieces > 0 ? item.pieces : 0}
                  </TableCell>
                  )}
                  <TableCell sx={{ fontFamily: "Poppins" }}>
                    {item.qty}
                  </TableCell>
                  <TableCell sx={{ fontFamily: "Poppins" }}>
                    {item.basicPrice}
                  </TableCell>
                  <TableCell sx={{ fontFamily: "Poppins" }}>
                    {item.priceIncGST}
                  </TableCell>
                  <TableCell sx={{ fontFamily: "Poppins" }}>
                    {item.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
              {loadingCharges > 0 && (
                <TableRow>
                  <TableCell sx={{ fontFamily: "Poppins" }}></TableCell>
                  <TableCell sx={{ fontFamily: "Poppins" }}>
                    Loading Charges
                  </TableCell>
                  {piecesTotal() > 0 && (
                    <TableCell sx={{ fontFamily: "Poppins" }}></TableCell>
                  )}
                  <TableCell sx={{ fontFamily: "Poppins" }}></TableCell>
                  <TableCell sx={{ fontFamily: "Poppins" }}>
                    {totalQuantity}
                  </TableCell>
                  <TableCell sx={{ fontFamily: "Poppins" }}>
                    {parseFloat(loadingCharges)}
                  </TableCell>
                  <TableCell sx={{ fontFamily: "Poppins" }}>
                    {loadingPriceIncGST.toFixed(2)}
                  </TableCell>
                  <TableCell sx={{ fontFamily: "Poppins" }}>
                    {loadingTotalAmount.toFixed(2)}
                  </TableCell>
                </TableRow>
              )}
                {typeofMaterial && (
                <TableRow>
                  <TableCell sx={{ fontFamily: "Poppins" }}></TableCell>
                  <TableCell sx={{ fontFamily: "Poppins" }}>
                    Type of Material
                  </TableCell>
                  <TableCell sx={{ fontFamily: "Poppins" }} colSpan={5}>
                    {typeofMaterial}
                  </TableCell>
                </TableRow>
              )}

            {transportationCharges > 0 && (<TableRow>
              <TableCell colSpan={piecesTotal() > 0 ? 7 : 6} align="right" sx={{ fontFamily: 'Poppins' }}><strong>Transportation Charges</strong></TableCell>
              <TableCell colSpan={piecesTotal() > 0 ? 8 : 7} sx={{ fontFamily: 'Poppins' }}>{parseFloat(transportationCharges || 0).toFixed(2)}</TableCell>
            </TableRow>)}
            <TableRow>
              <TableCell colSpan={piecesTotal() > 0 ? 7 : 6} align="right" sx={{ fontFamily: 'Poppins' }}><strong>Grand Total</strong></TableCell>
              <TableCell colSpan={piecesTotal() > 0 ? 8 : 7} sx={{ fontFamily: 'Poppins' }}>{grandTotal()}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>

      {/* Footer Section */}
    <Paper
  sx={{
    p: 0,
    border: '1px solid #ccc',
    boxShadow: 'none !important',
    mt: 3,
  }}
>
  {/* Top Section - Terms and Conditions */}
  <Box mb={2} sx={{p: 2}}>
    <Typography
      variant="subtitle1"
      fontWeight="bold"
      sx={{ fontFamily: 'Poppins', color: '#029441'}}
    >
      Terms and Conditions
    </Typography>
    {[
      'Prices are ex-stock point and inclusive of taxes; transportation charges are additional.',
      'Payment terms shall be as mutually agreed upon.',
      'Quotation is valid for 1 working day from the date of issue.',
      'Materials will be dispatched within 3 working days. Unloading at the site is the responsibility of the customer.',
      'A weighbridge tolerance of ±0.5% will be considered acceptable.',
      'A quantity variation of ±5% against the Purchase Order is permissible.',
      'Any balance amount will be refunded within 4 to 7 working days.',
      'Test certificates will be provided for premium brands only.',
    ].map((point, index) => (
      <Typography
        key={index}
        variant="body2"
        sx={{ color: '#555', fontFamily: 'Poppins', fontSize: '0.9rem' }}
      >
        • {point}
      </Typography>
    ))}
  </Box>

  {/* Horizontal line */}
  <Box sx={{ borderBottom: '1px solid #ccc'}} />

  {/* Bottom Section - Bank Details | Contact Us */}
  <Grid container>
    {/* Left - Bank Details */}
    <Grid
      size={{xs:6}}
      sx={{
        p:2,
        borderRight: { md: '1px solid #ccc' },
         '@media print': {
        borderRight: '1px solid #ccc', // force border in print
      },
        
      }}
    >
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        sx={{ fontFamily: 'Poppins', color: '#029441', mb: 1 }}
      >
        Bank Details
      </Typography>
      <Typography variant="body2" sx={{ color: '#555', fontFamily: 'Poppins', fontSize: '0.9rem' }}>
        Kalight Global Pvt Ltd
      </Typography>
      <Typography variant="body2" sx={{ color: '#555', fontFamily: 'Poppins', fontSize: '0.9rem' }}>
        A/c No: 777705224559
      </Typography>
      <Typography variant="body2" sx={{ color: '#555', fontFamily: 'Poppins', fontSize: '0.9rem' }}>
        Bank: ICICI
      </Typography>
      <Typography variant="body2" sx={{ color: '#555', fontFamily: 'Poppins', fontSize: '0.9rem' }}>
        Branch: Gajuwaka
      </Typography>
      <Typography variant="body2" sx={{ color: '#555', fontFamily: 'Poppins', fontSize: '0.9rem' }}>
        IFSC: ICIC0001108
      </Typography>
    </Grid>

    {/* Right - Contact Us */}
    <Grid size={{xs:6}} sx={{p:2}}>
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        sx={{ fontFamily: 'Poppins', color: '#029441', mb: 1 }}
      >
        Contact Us
      </Typography>
      <Typography variant="body2" sx={{ color: '#555', fontFamily: 'Poppins', fontSize: '0.9rem' }}>
        Name: R. Rohith
      </Typography>
      <Typography variant="body2" sx={{ color: '#555', fontFamily: 'Poppins', fontSize: '0.9rem' }}>
        Designation: Sales Team Lead
      </Typography>
      <Typography variant="body2" sx={{ color: '#555', fontFamily: 'Poppins', fontSize: '0.9rem' }}>
        Phone: 9281446109
      </Typography>
    </Grid>
  </Grid>
</Paper>



    </Box>
    
    </Box>
  );
};

export default QuotationPrint;
