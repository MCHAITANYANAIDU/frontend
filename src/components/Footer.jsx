// import { Box, Typography, Container, Link } from "@mui/material";
// import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";

// function Footer() {
//   return (
//     <Box sx={{ bgcolor: "grey.900", color: "white", py: 4, mt: "auto" }}>
//       <Container>
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             flexWrap: "wrap",
//           }}
//         >
//           <Box>
//             <Typography variant="h6">Sundaram Finance</Typography>
//             <Typography variant="body2">
//               Leading with trust and reliability.
//             </Typography>
//           </Box>
//           <Box sx={{ textAlign: { xs: "center", md: "right" } }}>
//             <Typography variant="body2">
//               Contact: support@sundaramfinance.com
//             </Typography>
//             <Typography variant="body2">
//               © 2025 Sundaram Finance. All rights reserved.
//             </Typography>
//             <Box sx={{ mt: 2 }}>
//               <Link href="https://www.facebook.com" color="inherit" sx={{ mx: 1 }}>
//                 <Facebook />
//               </Link>
//               <Link href="https://www.twitter.com" color="inherit" sx={{ mx: 1 }}>
//                 <Twitter />
//               </Link>
//               <Link href="https://www.linkedin.com" color="inherit" sx={{ mx: 1 }}>
//                 <LinkedIn />
//               </Link>
//             </Box>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// }

// export default Footer;

// import { Box, Typography, Container, Link } from "@mui/material";
// import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";

// function Footer() {
//   return (
//     <Box sx={{ bgcolor: "grey.900", color: "white", py: 4, mt: "auto" }}>
//       <Container>
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             flexWrap: "wrap",
//           }}
//         >
//           <Box>
//             <Typography variant="h6">Sundaram Finance</Typography>
//             <Typography variant="body2">
//               Leading with trust and reliability.
//             </Typography>
//           </Box>
//           <Box sx={{ textAlign: { xs: "center", md: "right" } }}>
//             <Typography variant="body2">
//               Contact: support@sundaramfinance.com
//             </Typography>
//             <Typography variant="body2">
//               © 2025 Sundaram Finance. All rights reserved.
//             </Typography>
//             <Box sx={{ mt: 2 }}>
//               <Link href="https://www.facebook.com" color="inherit" sx={{ mx: 1 }}>
//                 <Facebook />
//               </Link>
//               <Link href="https://www.twitter.com" color="inherit" sx={{ mx: 1 }}>
//                 <Twitter />
//               </Link>
//               <Link href="https://www.linkedin.com" color="inherit" sx={{ mx: 1 }}>
//                 <LinkedIn />
//               </Link>
//             </Box>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// }

// export default Footer;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Typography, Container, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram, YouTube } from "@mui/icons-material";

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box
      data-aos="fade-up"
      sx={{
        bgcolor: "#1a1a1a",
        color: "white",
        py: 1,
        px: 2,
        borderTop: "3px solid #F9B233",
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 4,
          }}
        >
          {/* Brand Info */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Sundaram Finance
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              Leading with trust and reliability.
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              Contact: <Link href="mailto:support@sundaramfinance.com" color="inherit" underline="hover">support@sundaramfinance.com</Link>
            </Typography>
          </Box>

          {/* Social Icons */}
          <Box>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Follow us
            </Typography>
            <Box>
              {[ 
                { icon: <Facebook />, link: "https://www.facebook.com" },
                { icon: <Twitter />, link: "https://www.twitter.com" },
                { icon: <LinkedIn />, link: "https://www.linkedin.com" },
                { icon: <Instagram />, link: "https://www.instagram.com" },
                { icon: <YouTube />, link: "https://www.youtube.com" }
              ].map((social, index) => (
                <IconButton
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener"
                  sx={{
                    color: "white",
                    mx: 0.5,
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.2)",
                      color: "#F9B233",
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Footer Bottom Text */}
        <Box sx={{ textAlign: "center", pt: 3, opacity: 0.6 }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Sundaram Finance. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
