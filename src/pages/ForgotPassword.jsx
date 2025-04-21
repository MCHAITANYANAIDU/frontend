// import { useState } from 'react';
// import { TextField, Button, Container, Typography, Box } from '@mui/material';
// import { toast } from 'react-toastify';
// import axios from 'axios';

// function ForgotPassword() {
//   const [email, setEmail] = useState('');

//   const handleSendOtp = async (e) => {
//     e.preventDefault();

//     if (!email) {
//       toast.error("Please enter your registered email");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `http://localhost:8732/api/users/forgot-password`,
//         null, // No body
//         { params: { email } } // Email sent as query param
//       );
//       toast.success(response.data);
//     } catch (error) {
//       console.error("OTP Error:", error);
//       toast.error(error.response?.data || "Failed to send OTP");
//     }
//   };

//   return (
//     <Box sx={{ py: 8 }}>
//       <Container maxWidth="sm">
//         <Typography variant="h4" align="center" gutterBottom>
//           Forgot Password
//         </Typography>
//         <form onSubmit={handleSendOtp}>
//           <TextField
//             label="Registered Email"
//             type="email"
//             fullWidth
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             margin="normal"
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             fullWidth
//             sx={{ mt: 2 }}
//           >
//             Send OTP
//           </Button>
//         </form>
//       </Container>
//     </Box>
//   );
// }

// export default ForgotPassword;


import { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your registered email");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:8732/api/users/forgot-password`,
        null, // No body
        { params: { email } } // Email sent as query param
      );
      toast.success(response.data);

      // Redirect to OTP verification page with email
      navigate('/verify-otp', { state: { email } });

    } catch (error) {
      console.error("OTP Error:", error);
      toast.error(error.response?.data || "Failed to send OTP");
    }
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          Forgot Password
        </Typography>
        <form onSubmit={handleSendOtp}>
          <TextField
            label="Registered Email"
            type="email"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Send OTP
          </Button>
        </form>
      </Container>
    </Box>
  );
}

export default ForgotPassword;
