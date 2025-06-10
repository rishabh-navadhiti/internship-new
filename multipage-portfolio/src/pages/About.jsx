import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

const About = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <Box
      id="about"
      sx={{
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: theme.headingColor,
            mb: 6,
          }}
        >
          About Me
        </Typography>

        <Card
          sx={{
            height: "100%",
            background: theme.headerBackground,
            color: theme.headerColor,
            "&:hover": {
              transform: "translateY(-10px)",
              boxShadow: "0 20px 40px rgba(102, 126, 234, 0.4)",
            },
            transition: "all 0.3s ease",
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom fontWeight="bold">
              My Journey
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, mt: 2 }}>
              Graduated in 2024, with a BTech Degree in Electronics and
              communication Engineering, and a passion for full-stack
              development. I love solving complex problems and creating
              user-friendly applications.
            </Typography>
            <Typography variant="body1">
              I've worked on various projects including web applications, mobile
              apps, and low level hardware and IoT. I'm always eager to learn
              new technologies and skills.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default About;
