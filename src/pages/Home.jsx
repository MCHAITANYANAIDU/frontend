// import React, { useState } from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   CardMedia,
//   Container,
//   FormControl,
//   Grid,
//   InputLabel,
//   ListItem,
//   ListItemIcon,
//   MenuItem,
//   Select,
//   TextField,
//   Typography,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import HeroImage from "../assets/hero-image-1.png";

// function Home() {
//   const [loanAmount, setLoanAmount] = useState(50000);
//   const [interestRate, setInterestRate] = useState(10);
//   const [loanTenure, setLoanTenure] = useState(12);
//   const [emi, setEmi] = useState(0);

//   const calculateEmi = () => {
//     const r = interestRate / 12 / 100;
//     const emiVal = (loanAmount * r * Math.pow(1 + r, loanTenure)) / (Math.pow(1 + r, loanTenure) - 1);
//     setEmi(emiVal.toFixed(2));
//   };

//   return (
//     <Box sx={{ fontFamily: "'Roboto', sans-serif", backgroundColor: "#f4f7fb" }}>
//       {/* Scrolling Banner */}
//       <Box sx={{ backgroundColor: "#F9B233", overflow: "hidden", whiteSpace: "nowrap" }}>
//         <Typography
//           component="div"
//           sx={{
//             display: "inline-block",
//             animation: "scrollText 15s linear infinite",
//             px: 2,
//             fontWeight: 600,
//             color: "#002D62",
//           }}
//         >
//           🚀 Instant Loans Available • 💳 Check Credit Score Instantly • 🏠 Low Interest Home Loans •
//         </Typography>
//         <style>
//           {`
//             @keyframes scrollText {
//               0% { transform: translateX(100%); }
//               100% { transform: translateX(-100%); }
//             }
//           `}
//         </style>
//       </Box>

//       {/* Carousel Section */}
//       <Box sx={{ width: "100%", maxWidth: "100%", backgroundColor: "#fff" }}>
//         <Carousel autoPlay infiniteLoop showThumbs={false}>
//           <div>
//             <img src="https://source.unsplash.com/1200x400/?finance,1" alt="Slide 1" />
//             <p className="legend">Fast & Secure Loans</p>
//           </div>
//           <div>
//             <img src="https://source.unsplash.com/1200x400/?banking,2" alt="Slide 2" />
//             <p className="legend">Trusted by Millions</p>
//           </div>
//           <div>
//             <img src="https://source.unsplash.com/1200x400/?money,3" alt="Slide 3" />
//             <p className="legend">Affordable Interest Rates</p>
//           </div>
//         </Carousel>
//       </Box>

//       {/* Hero Section */}
//       <Container sx={{ py: 8 }}>
//         <Grid container spacing={4} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <Typography variant="h2" sx={{ color: "#002D62" }} gutterBottom>
//               Trusted Financial Solutions
//             </Typography>
//             <Typography variant="h5" sx={{ color: "#444" }} paragraph>
//               Simplifying your investment, loan, and financial journey with Sundaram Finance.
//             </Typography>
//             <Box sx={{ mt: 3 }}>
//               <Button
//                 variant="contained"
//                 sx={{ backgroundColor: "#F9B233", color: "#002D62", mr: 2 }}
//                 component={Link}
//                 to="/credit-score"
//               >
//                 Check Credit Score
//               </Button>
//               <Button variant="outlined" sx={{ color: "#002D62", borderColor: "#002D62" }} component={Link} to="/register">
//                 Get Started
//               </Button>
//             </Box>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Card sx={{ boxShadow: 3 }}>
//               <CardMedia component="img" image={HeroImage} alt="Hero" />
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* EMI Calculator */}
//       <Box sx={{ py: 8, backgroundColor: "#ffffff" }}>
//         <Container>
//           <Typography variant="h3" align="center" sx={{ color: "#002D62", mb: 4 }}>
//             EMI Calculator
//           </Typography>
//           <Grid container justifyContent="center">
//             <Grid item xs={12} md={6}>
//               <Card>
//                 <CardContent>
//                   <TextField
//                     label="Loan Amount"
//                     type="number"
//                     fullWidth
//                     sx={{ mb: 2 }}
//                     value={loanAmount}
//                     onChange={(e) => setLoanAmount(Number(e.target.value))}
//                   />
//                   <FormControl fullWidth sx={{ mb: 2 }}>
//                     <InputLabel>Interest Rate</InputLabel>
//                     <Select value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))}>
//                       {[5, 6, 7, 8, 9, 10, 11, 12].map((rate) => (
//                         <MenuItem key={rate} value={rate}>
//                           {rate}%
//                         </MenuItem>
//                       ))}
//                     </Select>
//                   </FormControl>
//                   <TextField
//                     label="Loan Tenure (Months)"
//                     type="number"
//                     fullWidth
//                     sx={{ mb: 2 }}
//                     value={loanTenure}
//                     onChange={(e) => setLoanTenure(Number(e.target.value))}
//                   />
//                   <Button fullWidth variant="contained" onClick={calculateEmi} sx={{ backgroundColor: "#F9B233", color: "#002D62" }}>
//                     Calculate EMI
//                   </Button>
//                   {emi > 0 && (
//                     <Typography variant="h6" sx={{ mt: 2, color: "#002D62" }}>
//                       Your Estimated EMI: ₹{emi}
//                     </Typography>
//                   )}
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* FAQs */}
//       <Box sx={{ py: 8, backgroundColor: "#ffffff" }}>
//         <Container>
//           <Typography variant="h3" align="center" sx={{ color: "#002D62", mb: 4 }}>
//             Frequently Asked Questions
//           </Typography>
//           <Grid container spacing={4}>
//             {[{
//               title: "What is the interest rate?",
//               desc: "Our loans are offered at a competitive 10.5% per annum, fixed for the entire tenure.",
//             }, {
//               title: "What is the loan tenure?",
//               desc: "You can choose from 12 to 60 months based on your convenience.",
//             }, {
//               title: "Is there a processing fee?",
//               desc: "Yes, a one-time non-refundable processing fee of 1% of the loan amount is applicable.",
//             }].map((faq, idx) => (
//               <Grid item xs={12} md={6} key={idx}>
//                 <Accordion>
//                   <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                     <Typography variant="h6">{faq.title}</Typography>
//                   </AccordionSummary>
//                   <AccordionDetails>
//                     <Typography>{faq.desc}</Typography>
//                   </AccordionDetails>
//                 </Accordion>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* Testimonials */}
//       <Box sx={{ py: 8, backgroundColor: "#f4f7fb" }}>
//         <Container>
//           <Typography variant="h3" align="center" sx={{ color: "#002D62", mb: 4 }}>
//             What Our Customers Say
//           </Typography>
//           <Grid container spacing={4}>
//             {[{
//               name: "Rahul Sharma",
//               feedback: "Very fast loan disbursal and great customer service. Highly recommend!",
//             }, {
//               name: "Priya Desai",
//               feedback: "Simple application process and low interest rates. Loved the experience!",
//             }].map((testimonial, index) => (
//               <Grid item xs={12} md={6} key={index}>
//                 <Card sx={{ p: 2 }}>
//                   <Typography variant="h6">{testimonial.name}</Typography>
//                   <Typography variant="body1" sx={{ mt: 1 }}>
//                     {testimonial.feedback}
//                   </Typography>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>
//     </Box>
//   );
// }

// export default Home;


// import React, { useState, useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   CardMedia,
//   Container,
//   FormControl,
//   Grid,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
//   Typography,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import StarIcon from "@mui/icons-material/Star";
// import InfoIcon from "@mui/icons-material/Info";
// import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
// import HeroImage from "../assets/hero-image-1.png";

// function Home() {
//   const [loanAmount, setLoanAmount] = useState(50000);
//   const [interestRate, setInterestRate] = useState(10);
//   const [loanTenure, setLoanTenure] = useState(12);
//   const [emi, setEmi] = useState(0);

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   const calculateEmi = () => {
//     const r = interestRate / 12 / 100;
//     const emiVal =
//       (loanAmount * r * Math.pow(1 + r, loanTenure)) /
//       (Math.pow(1 + r, loanTenure) - 1);
//     setEmi(emiVal.toFixed(2));
//   };

//   return (
//     <Box sx={{ fontFamily: "'Roboto', sans-serif", backgroundColor: "#f4f7fb" }}>
//       {/* Scrolling Banner */}
//       <Box sx={{ backgroundColor: "#F9B233", overflow: "hidden", whiteSpace: "nowrap" }}>
//         <Typography
//           component="div"
//           sx={{
//             display: "inline-block",
//             animation: "scrollText 15s linear infinite",
//             px: 2,
//             fontWeight: 600,
//             color: "#002D62",
//           }}
//         >
//           🚀 Instant Loans • 💳 Credit Score • 🏠 Low Interest Professional Loans • 🧾 Flexible Repayment Options •
//         </Typography>
//         <style>
//           {`
//             @keyframes scrollText {
//               0% { transform: translateX(100%); }
//               100% { transform: translateX(-100%); }
//             }
//           `}
//         </style>
//       </Box>

//       {/* Carousel Section */}
//       <Box sx={{ width: "100%", backgroundColor: "#fff" }}>
//         <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
//           {[
//             {
//               img: "https://5.imimg.com/data5/XL/QR/MY-9831908/unsecured-personal-loan-for-professional.jpg",
//               caption: "Professional Loan Solutions",
//             },
//             {
//               img: "https://www.gripinvest.in/newui/_next/image?url=https%3A%2F%2Fimg.gripinvest.in%2FHow_To_Set_S_M_A_R_T_Financial_Goals_5b7cc15531.jpg&w=1920&q=75",
//               caption: "Smart Financial Planning",
//             },
//             {
//               img: "https://media.licdn.com/dms/image/v2/D4D12AQFZsBpOUTDVfg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1714404049931?e=1750896000&v=beta&t=JogAYYiv_zzdvHdkezOu25CIOaYfDGINFkK4Jh1DMWY",
//               caption: "Secure Your Business Growth",
//             },
//           ].map((slide, index) => (
//             <div key={index} style={{ position: "relative" }}>
//               <img
//                 src={slide.img}
//                 alt={slide.caption}
//                 style={{ height: "400px", objectFit: "cover", width: "100%" }}
//               />
//               <Box
//                 sx={{
//                   position: "absolute",
//                   bottom: 20,
//                   left: 20,
//                   display: "flex",
//                   flexDirection: "column",
//                   gap: 1,
//                   zIndex: 2,
//                 }}
//               >
//                 <Button
//                   variant="contained"
//                   component={Link}
//                   to="/check-eligibility"
//                   sx={{
//                     backgroundColor: "#002D62",
//                     color: "#fff",
//                     ":hover": { backgroundColor: "#001B40" },
//                   }}
//                 >
//                   Check Eligibility
//                 </Button>
//                 <Button
//                   variant="outlined"
//                   component={Link}
//                   to="/apply"
//                   sx={{
//                     color: "#002D62",
//                     borderColor: "#002D62",
//                     backgroundColor: "#fff",
//                     ":hover": { backgroundColor: "#f0f0f0" },
//                   }}
//                 >
//                   Apply Now
//                 </Button>
//               </Box>
//             </div>
//           ))}
//         </Carousel>
//       </Box>

//       {/* Hero Section */}
//       <Container sx={{ py: 8 }}>
//         <Grid container spacing={4} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <Typography variant="h2" sx={{ color: "#002D62" }} gutterBottom>
//               Trusted Financial Solutions
//             </Typography>
//             <Typography variant="h5" sx={{ color: "#444" }} paragraph>
//               Simplifying your investment, loan, and financial journey with Sundaram Finance.
//             </Typography>
//             <Box sx={{ mt: 3 }}>
//               <Button
//                 variant="contained"
//                 sx={{ backgroundColor: "#F9B233", color: "#002D62", mr: 2 }}
//                 component={Link}
//                 to="/credit-score"
//               >
//                 Check Credit Score
//               </Button>
//               <Button
//                 variant="outlined"
//                 sx={{ color: "#002D62", borderColor: "#002D62" }}
//                 component={Link}
//                 to="/register"
//               >
//                 Get Started
//               </Button>
//             </Box>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Card sx={{ boxShadow: 3 }}>
//               <CardMedia component="img" image={HeroImage} alt="Hero" />
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* EMI Calculator */}
//       <Box sx={{ py: 8, backgroundColor: "#ffffff" }}>
//         <Container>
//           <Typography variant="h3" align="center" sx={{ color: "#002D62", mb: 4 }} data-aos="fade-up">
//             EMI Calculator
//           </Typography>
//           <Grid container justifyContent="center">
//             <Grid item xs={12} md={6} data-aos="fade-up">
//               <Card>
//                 <CardContent>
//                   <TextField
//                     label="Loan Amount"
//                     type="number"
//                     fullWidth
//                     sx={{ mb: 2 }}
//                     value={loanAmount}
//                     onChange={(e) => setLoanAmount(Number(e.target.value))}
//                   />
//                   <FormControl fullWidth sx={{ mb: 2 }}>
//                     <InputLabel>Interest Rate</InputLabel>
//                     <Select
//                       value={interestRate}
//                       onChange={(e) => setInterestRate(Number(e.target.value))}
//                     >
//                       {[5, 6, 7, 8, 9, 10, 11, 12].map((rate) => (
//                         <MenuItem key={rate} value={rate}>
//                           {rate}%
//                         </MenuItem>
//                       ))}
//                     </Select>
//                   </FormControl>
//                   <TextField
//                     label="Loan Tenure (Months)"
//                     type="number"
//                     fullWidth
//                     sx={{ mb: 2 }}
//                     value={loanTenure}
//                     onChange={(e) => setLoanTenure(Number(e.target.value))}
//                   />
//                   <Button
//                     fullWidth
//                     variant="contained"
//                     onClick={calculateEmi}
//                     sx={{ backgroundColor: "#F9B233", color: "#002D62" }}
//                   >
//                     Calculate EMI
//                   </Button>
//                   {emi > 0 && (
//                     <Typography variant="h6" sx={{ mt: 2, color: "#002D62" }}>
//                       Your Estimated EMI: ₹{emi}
//                     </Typography>
//                   )}
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* FAQs Section */}
//       <Box sx={{ py: 8 }}>
//         <Container>
//           <Typography variant="h3" align="center" sx={{ color: "#002D62", mb: 4 }}>
//             Frequently Asked Questions
//           </Typography>
//           <Grid container spacing={4}>
//             {[
//               {
//                 icon: <InfoIcon color="primary" />,
//                 title: "What is the interest rate?",
//                 desc: "Our loans are offered at a competitive 10.5% per annum, fixed for the entire tenure.",
//               },
//               {
//                 icon: <CheckCircleIcon color="success" />,
//                 title: "Loan tenure options?",
//                 desc: "Choose between 12 to 60 months for flexible repayments.",
//               },
//               {
//                 icon: <ThumbUpAltIcon color="secondary" />,
//                 title: "Processing fees?",
//                 desc: "Yes, 1% of the loan amount as a one-time processing fee.",
//               },
//               {
//                 icon: <StarIcon color="warning" />,
//                 title: "Eligibility Criteria?",
//                 desc: "You need to be a citizen with a minimum monthly income of ₹30,000.",
//               },
//             ].map((faq, idx) => (
//               <Grid item xs={12} sm={6} md={3} key={idx} data-aos="zoom-in">
//                 <Card
//                   sx={{
//                     p: 2,
//                     transition: "transform 0.3s",
//                     "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
//                   }}
//                 >
//                   <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//                     {faq.icon}&nbsp;<Typography variant="h6">{faq.title}</Typography>
//                   </Box>
//                   <Typography>{faq.desc}</Typography>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* Testimonials Section */}
//       <Box sx={{ py: 8, backgroundColor: "#f4f7fb" }}>
//         <Container>
//           <Typography variant="h3" align="center" sx={{ color: "#002D62", mb: 4 }}>
//             What Our Customers Say
//           </Typography>
//           <Grid container spacing={4}>
//             {[
//               {
//                 name: "Rahul Sharma",
//                 feedback: "Very fast loan disbursal and great customer service. Highly recommend!",
//               },
//               {
//                 name: "Priya Desai",
//                 feedback: "Simple application process and low interest rates. Loved the experience!",
//               },
//               {
//                 name: "Arjun Rao",
//                 feedback: "Professional and transparent—best loan service I’ve used.",
//               },
//               {
//                 name: "Sanya Verma",
//                 feedback: "Efficient and easy process. I got my loan approved in just 2 days.",
//               },
//             ].map((testimonial, index) => (
//               <Grid item xs={12} sm={6} md={3} key={index} data-aos="fade-up">
//                 <Card
//                   sx={{
//                     p: 3,
//                     borderLeft: "5px solid #F9B233",
//                     transition: "transform 0.3s",
//                     "&:hover": { transform: "scale(1.03)", boxShadow: 6 },
//                   }}
//                 >
//                   <Typography variant="h6" sx={{ mb: 1 }}>
//                     {testimonial.name}
//                   </Typography>
//                   <Typography variant="body2">{testimonial.feedback}</Typography>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>
//     </Box>
//   );
// }

// export default Home;


import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import InfoIcon from "@mui/icons-material/Info";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import HeroImage from "../assets/hero-image-1.png";
import YouTubeIcon from "@mui/icons-material/YouTube"; // YouTube Icon import

function Home() {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [interestRate, setInterestRate] = useState(10);
  const [loanTenure, setLoanTenure] = useState(12);
  const [emi, setEmi] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const calculateEmi = () => {
    const r = interestRate / 12 / 100;
    const emiVal =
      (loanAmount * r * Math.pow(1 + r, loanTenure)) / (Math.pow(1 + r, loanTenure) - 1);
    setEmi(emiVal.toFixed(2));
  };

  return (
    <Box sx={{ fontFamily: "'Roboto', sans-serif", backgroundColor: "#f4f7fb" }}>
      {/* Scrolling Banner */}
      <Box sx={{ backgroundColor: "#F9B233", overflow: "hidden", whiteSpace: "nowrap" }}>
        <Typography
          component="div"
          sx={{
            display: "inline-block",
            animation: "scrollText 15s linear infinite",
            px: 2,
            fontWeight: 600,
            color: "#002D62",
          }}
        >
          🚀 Instant Loans • 💳 Credit Score • 🏠 Low Interest Professional Loans • 🧾 Flexible Repayment Options •
        </Typography>
        <style>
          {`
            @keyframes scrollText {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
          `}
        </style>
      </Box>

      {/* Carousel Section */}
      <Box sx={{ width: "100%", backgroundColor: "#fff" }}>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          {[{ img: "https://5.imimg.com/data5/XL/QR/MY-9831908/unsecured-personal-loan-for-professional.jpg", caption: "Professional Loan Solutions" },
            { img: "https://www.gripinvest.in/newui/_next/image?url=https%3A%2F%2Fimg.gripinvest.in%2FHow_To_Set_S_M_A_R_T_Financial_Goals_5b7cc15531.jpg&w=1920&q=75", caption: "Smart Financial Planning" },
            { img: "https://media.licdn.com/dms/image/v2/D4D12AQFZsBpOUTDVfg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1714404049931?e=1750896000&v=beta&t=JogAYYiv_zzdvHdkezOu25CIOaYfDGINFkK4Jh1DMWY", caption: "Secure Your Business Growth" },
          ].map((slide, index) => (
            <div key={index} style={{ position: "relative" }}>
              <img
                src={slide.img}
                alt={slide.caption}
                style={{ height: "400px", objectFit: "cover", width: "100%" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  zIndex: 2,
                }}
              >
                <Button
                  variant="contained"
                  component={Link}
                  to="/check-eligibility"
                  sx={{
                    backgroundColor: "#002D62",
                    color: "#fff",
                    ":hover": { backgroundColor: "#001B40" },
                  }}
                >
                  Check Eligibility
                </Button>
                <Button
                  variant="outlined"
                  component={Link}
                  to="/apply"
                  sx={{
                    color: "#002D62",
                    borderColor: "#002D62",
                    backgroundColor: "#fff",
                    ":hover": { backgroundColor: "#f0f0f0" },
                  }}
                >
                  Apply Now
                </Button>
              </Box>
            </div>
          ))}
        </Carousel>
      </Box>

      {/* Hero Section */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{ color: "#002D62" }} gutterBottom>
              Trusted Financial Solutions
            </Typography>
            <Typography variant="h5" sx={{ color: "#444" }} paragraph>
              Simplifying your investment, loan, and financial journey with Sundaram Finance.
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#F9B233", color: "#002D62", mr: 2 }}
                component={Link}
                to="/credit-score"
              >
                Check Credit Score
              </Button>
              <Button
                variant="outlined"
                sx={{ color: "#002D62", borderColor: "#002D62" }}
                component={Link}
                to="/register"
              >
                Get Started
              </Button>
            </Box>
            {/* YouTube Button */}
            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<YouTubeIcon />}
                onClick={() => window.open("https://www.youtube.com/watch?v=your_video_id", "_blank")}
              >
                Watch How to Apply
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: 3 }}>
              <CardMedia component="img" image={HeroImage} alt="Hero" />
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* EMI Calculator */}
      <Box sx={{ py: 8, backgroundColor: "#ffffff" }}>
        <Container>
          <Typography variant="h3" align="center" sx={{ color: "#002D62", mb: 4 }} data-aos="fade-up">
            EMI Calculator
          </Typography>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={6} data-aos="fade-up">
              <Card>
                <CardContent>
                  <TextField
                    label="Loan Amount"
                    type="number"
                    fullWidth
                    sx={{ mb: 2 }}
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                  />
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Interest Rate</InputLabel>
                    <Select
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                    >
                      {[5, 6, 7, 8, 9, 10, 11, 12].map((rate) => (
                        <MenuItem key={rate} value={rate}>
                          {rate}%
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <TextField
                    label="Loan Tenure (Months)"
                    type="number"
                    fullWidth
                    sx={{ mb: 2 }}
                    value={loanTenure}
                    onChange={(e) => setLoanTenure(Number(e.target.value))}
                  />
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={calculateEmi}
                    sx={{ backgroundColor: "#F9B233", color: "#002D62" }}
                  >
                    Calculate EMI
                  </Button>
                  {emi > 0 && (
                    <Typography variant="h6" sx={{ mt: 2, color: "#002D62" }}>
                      Your Estimated EMI: ₹{emi}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: 8 }}>
        <Container>
          <Typography variant="h3" align="center" sx={{ color: "#002D62", mb: 4 }}>
            What Our Clients Say
          </Typography>
          <Grid container spacing={4}>
            {[{
              name: "John Doe",
              title: "Freelancer",
              text: "The loan application process was easy, and the EMI options are great!",
              avatar: "https://via.placeholder.com/150"
            },
            {
              name: "Jane Smith",
              title: "Business Owner",
              text: "I received the loan approval within a day. Excellent service!",
              avatar: "https://via.placeholder.com/150"
            },
            {
              name: "Emily Johnson",
              title: "Teacher",
              text: "Customer support was very helpful, and the loan terms were transparent.",
              avatar: "https://via.placeholder.com/150"
            },
            {
              name: "Michael Brown",
              title: "Engineer",
              text: "Fast and reliable loan services. Very happy with the experience.",
              avatar: "https://via.placeholder.com/150"
            }
            ].map((testimonial, index) => (
              <Grid item xs={12} sm={6} md={3} key={index} data-aos="zoom-in">
                <Card
                  sx={{
                    p: 2,
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      style={{
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                        marginRight: "10px",
                      }}
                    />
                    <Typography variant="h6" sx={{ color: "#002D62" }}>
                      {testimonial.name}
                    </Typography>
                  </Box>
                  <Typography variant="subtitle2" sx={{ color: "#777" }}>
                    {testimonial.title}
                  </Typography>
                  <Typography sx={{ mt: 2 }}>{testimonial.text}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQs Section */}
      <Box sx={{ py: 8 }}>
        <Container>
          <Typography variant="h3" align="center" sx={{ color: "#002D62", mb: 4 }}>
            Frequently Asked Questions
          </Typography>
          <Grid container spacing={4}>
            {[{ icon: <InfoIcon color="primary" />, title: "What is the interest rate?", desc: "Our loans are offered at a competitive 10.5% per annum, fixed for the entire tenure." },
              { icon: <CheckCircleIcon color="success" />, title: "Loan tenure options?", desc: "Choose between 12 to 60 months for flexible repayments." },
              { icon: <ThumbUpAltIcon color="secondary" />, title: "Processing fees?", desc: "Yes, 1% of the loan amount as a one-time processing fee." },
              { icon: <StarIcon color="warning" />, title: "Eligibility Criteria?", desc: "You need to be a citizen with a minimum monthly income of ₹30,000." }
            ].map((faq, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx} data-aos="zoom-in">
                <Card
                  sx={{
                    p: 2,
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    {faq.icon}&nbsp;<Typography variant="h6">{faq.title}</Typography>
                  </Box>
                  <Typography>{faq.desc}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
