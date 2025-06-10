import { Card, CardContent, Typography, Box, IconButton, Grid, TextField, Button } from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";



const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Box>
        
        <Box id="contact" sx={{ py: 12, px: {xs: 10, sm: 12, md: '20vw'}}} >
            <Typography variant="h4" gutterBottom sx={{color: theme.headingColor}}>
              Contact Me
            </Typography>
            <Grid container spacing={3}>
              <Grid item  size={{ xs: 12, md: 6 }}>
                <TextField label="Name" fullWidth variant="outlined" />
              </Grid>
              <Grid item size={{ xs: 12, md: 6 }}>
                <TextField label="Email" fullWidth variant="outlined" />
              </Grid>
              <Grid item size={{ xs: 12, md: 12 }}>
                <TextField
                  label="Message"
                  fullWidth
                  variant="outlined"
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item size={{ xs: 12, md: 4 }}>
                <Button variant="contained" color="primary">
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Box>


        {/* contact form */}
          <Card
          sx={{
            height: "100%",
            "&:hover": {
              transform: "translateY(-10px)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            },
            transition: "all 0.3s ease",
            mx: 'auto',
            py: 4,
            px: 8,
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
              Contact Information
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Email sx={{ mr: 2, color: "#1976d2" }} />
              <Typography>rishabh4883@gmail.com</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Phone sx={{ mr: 2, color: "#1976d2" }} />
              <Typography>+91 78996 54883</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <LocationOn sx={{ mr: 2, color: "#1976d2" }} />
              <Typography>Bangalore, India</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
              <IconButton
                sx={{
                  background: "linear-gradient(45deg, #333, #666)",
                  color: "white",
                  "&:hover": { transform: "scale(1.2)" },
                }}
                onClick={() => (location.href = "https://github.com/rish4883")}
              >
                <GitHub />
              </IconButton>
              <IconButton
                sx={{
                  background: "linear-gradient(45deg, #0077b5, #00a0dc)",
                  color: "white",
                  "&:hover": { transform: "scale(1.2)" },
                }}
                onClick={() =>
                  (location.href =
                    "https://www.linkedin.com/in/rishabh-sharma-6532b0240/")
                }
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
    </Box>
  );
};

export default Contact;
