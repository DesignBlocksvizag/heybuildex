"use client"
import React,{useState,useRef,useEffect} from 'react';
import { Grid, Box, Typography, Paper, Container } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PublicIcon from '@mui/icons-material/Public';
import CountUp from "react-countup";
  const stats = [
    {
      label: 'No. of Clients Served',
      value: 65,
      icon: <GroupsIcon sx={{ fontSize: 50, color: '#029441' }} />,
    },
    {
      label: 'No. of Pincodes Delivered',
      value: 128,
      icon: <LocalShippingIcon sx={{ fontSize: 50, color: '#029441' }} />,
    },
    {
      label: 'No. of States',
      value: 6,
      icon: <PublicIcon sx={{ fontSize: 50, color: '#029441' }} />,
    },
  ];
const StatsSection = () => {
     const [inView, setInView] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <Box
      sx={{
        py:4,
        backgroundColor: '#ffffff',
        fontFamily: 'Poppins',
        textAlign: 'center',
      }}
    >
        <Container maxWidth="lg">
              <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          color: '#333',
          mb: 5,
          fontFamily: 'Poppins',
        }}
      >
        Our Reach Across India
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {stats.map((stat, index) => (
          <Grid size={{xs:12,sm:6,md:4}} key={index}>
            <Paper
              elevation={4}
                ref={index === 0 ? countRef : null}
              sx={{
                py: 5,
                px: 3,
                border: '2px solid #029441',
                backgroundColor: '#ffffff',
                borderRadius: 4,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                },
              }}
            >
              {stat.icon}
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  color: '#333',
                  mt: 2,
                  fontFamily: 'Poppins',
                }}
              >
                {index === 2 ? 0 : ''}
                {inView ? <CountUp end={stat.value} duration={2} /> : 0 }
                 {index < 2 && <Box component="span" sx={{ fontWeight: 'bold', ml: 0.5 }}>
                  +</Box>}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: '#4f4f4f',
                  mt: 1,
                  fontSize: '1.1rem',
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      </Container>
    </Box>
  );
};

export default StatsSection;
