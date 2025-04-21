import { useState } from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VerifyOtp = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleVerify = async () => {
    try {
      const res = await axios.post(`http://localhost:8732/api/users/verify-otp?email=${email}&otp=${otp}`);
      toast.success('OTP verified. Please reset your password.');
      navigate('/reset-password', { state: { email, otp } });
    } catch (err) {
      toast.error(err.response?.data || 'OTP verification failed');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>Verify OTP</Typography>
      <TextField
        fullWidth
        label="Registered Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" fullWidth onClick={handleVerify}>
        Verify OTP
      </Button>
    </Container>
  );
};

export default VerifyOtp;
