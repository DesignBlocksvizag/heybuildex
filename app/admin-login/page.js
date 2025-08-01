'use client';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (localStorage.getItem('loggedIn') === 'true') {
      router.push('/quotation-admin');
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin@heybuildex.com' && password === 'admin@111') {
      localStorage.setItem('loggedIn', 'true');
      router.push('/quotation-admin');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',background:"#fff" }}>
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
        {/* Top Logo */}
        <Box sx={{ mb: 3 }}>
          <img
            src="/buildex_logo.png" // ✅ Replace with your actual logo path
            alt="Logo"
            style={{ height: 60 }} // adjust size as needed
          />
        </Box>

        <Typography variant="h5" gutterBottom sx={{ fontFamily: "Poppins, sans-serif" }}>
          Admin Login
        </Typography>

        <Box component="form" onSubmit={handleLogin}>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
             size='small'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            size='small'
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && (
            <Typography color="error" variant="body2" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, borderRadius: "30px",
              background: "linear-gradient(to right, #465a65 0%, #1c953f 100%)",
              color: "#fff",
              textTransform: "none",
              fontFamily: "Poppins",
              width:"150px",
              cursor:"pointer",
              "&:hover": {
                background:
                  "linear-gradient(to right, #1c953f 0%, #465a65 100%)",
              }, }}
              onClick={handleLogin}

          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
    </Box>
  );
}
