import { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { email, otp } = location.state || {};

  const handleReset = async () => {
    try {
      const res = await axios.post(
        `http://localhost:8732/api/users/reset-password?email=${email}&otp=${otp}&newPassword=${newPassword}`
      );
      toast.success(res.data);
      navigate('/login');
    } catch (err) {
      toast.error(err.response?.data || 'Reset failed');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>Reset Password</Typography>
      <TextField
        fullWidth
        label="New Password"
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" fullWidth onClick={handleReset}>
        Reset Password
      </Button>
    </Container>
  );
};

export default ResetPassword;
