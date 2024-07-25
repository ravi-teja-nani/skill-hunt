import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography } from '@mui/material';
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    login();
    navigate("/projects");
    // navigate("/signup")
    event.preventDefault();
    // Handle login logic here
    console.log({
      username,
      password,
    });
  };

  const isFormValid = () => {
    return username.trim() !== '' && password.trim() !== '';
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Log in to hunt
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={!isFormValid()}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
