import React from 'react';
import { Box, Typography, Card,CardContent,Stack,IconButton,Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

const ThankYouPage = () => {
  return (<>
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        bgcolor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
        overflow: 'hidden',
      }}
    >
      {/* Top-Left Triangle */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 0,
          height: 0,
          borderLeft: '120px solid #ebb40d',
          borderBottom: '120px solid transparent',
        }}
      />

      {/* Bottom-Right Triangle */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: 0,
          height: 0,
          borderRight: '120px solid #01ba81',
          borderTop: '120px solid transparent',
        }}
      />

      {/* Centered Content */}
      <Box sx={{ textAlign: 'center', zIndex: 1, maxWidth: 600 }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 'bold', mb: 2, color: '#01ba81',fontFamily:"Poppins",fontSize:{xs:"25px",md:"30px"}}}
        >
          Thank you!
        </Typography>

        <Typography sx={{ mb: 2,fontFamily:"Poppins",color:"#000"}}>
          {`We've successfully received your quotation request.
Our team is reviewing your requirements and will reach out to you with the best possible quote tailored to your needs`}
        </Typography>
           <Card
          sx={{
            mb: 3,
            boxShadow: 3,
            borderRadius: 2,
            px: 2,
            py: 3,
          }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ mb: 1,fontFamily:"Poppins" }}>
              Connect With Us
            </Typography>
            <Stack direction="row" justifyContent="center" spacing={2}>
              <IconButton component="a"
                href="https://www.facebook.com/heybuildex/"
                target="_blank"
                rel="noopener" sx={{ color: '#3b5998' }}>
                <FacebookIcon />
              </IconButton>
              <IconButton     component="a"
                href="https://x.com/heybuildex"
                target="_blank"
                rel="noopener"
                 sx={{ color: '#333' }}>
                <XIcon />
              </IconButton>
              <IconButton   component="a"
                href="https://www.instagram.com/heybuildex/"
                target="_blank"
                rel="noopener" sx={{ color: '#E1306C' }}>
                <InstagramIcon />
              </IconButton>
              <IconButton   component="a"
                href="https://www.linkedin.com/company/heybuildex/"
                target="_blank"
                rel="noopener" sx={{ color: '#0077b5' }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.youtube.com/@Heybuildex"
                target="_blank"
                rel="noopener"
                  sx={{ color: "#FF0000" }}
              >
                <YouTubeIcon />
              </IconButton>
            </Stack>
          </CardContent>
        </Card>

        {/* Visit Website Button */}
        <Button
          variant="contained"
          href="https://heybuildex.com"
          sx={{
            bgcolor: '#ebb40d',
            color: '#000',
            px: 4,
            py: 1.5,
            fontFamily:"Poppins",
            fontWeight: 'bold',
            '&:hover': {
              bgcolor: '#d19b00',
            },
          }}
        >
          Visit Website
        </Button>
      </Box>
    </Box>
  </>);
};

export default ThankYouPage;
