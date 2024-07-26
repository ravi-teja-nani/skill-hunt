import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify';
import { apiBaseUrl } from '../../lib/config';


const SignupPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate()

  const handleSignup = (event) => {
    event.preventDefault();
    toast.success('User registered successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    navigate("/login")
    // axios.post(apiBaseUrl + "/api/users/new", {
    //   id: null,
    //   firstName,
    //   lastName,
    //   email,
    //   username: userName,
    //   password,
    //   role,
    // })
    // .then(() => {
    //   toast.success('User registered successfully!', {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     });
    //   navigate("/login")
    // }).catch(() => {
    //   toast.error('Sorry, right now we are not able to process the request', {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     });
    // })

  };

  const isFormValid = () => {
    return (
      firstName.trim() !== '' &&
      lastName.trim() !== '' &&
      email.trim() !== '' &&
      password.trim() !== '' &&
      confirmPassword.trim() !== '' &&
      role.trim() !== '' &&
      !passwordError
    );
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setPasswordError(newPassword !== confirmPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);
    setPasswordError(password !== newConfirmPassword);
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
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSignup} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="given-name"
            autoFocus
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            autoComplete="username"
            value={userName}
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
            autoComplete="new-password"
            value={password}
            onChange={handlePasswordChange}
            error={passwordError}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            error={passwordError}
            helperText={passwordError ? 'Passwords do not match' : ''}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            select
            id="role"
            label="Role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <MenuItem value="admin">HR</MenuItem>
            <MenuItem value="admin">Manager</MenuItem>
            <MenuItem value="user">Employer</MenuItem>
          </TextField>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={!isFormValid()}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignupPage;