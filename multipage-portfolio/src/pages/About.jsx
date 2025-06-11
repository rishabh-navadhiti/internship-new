import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
  LinearProgress,
} from "@mui/material";
import {
  Menu as MenuIcon,
  GitHub,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  Code,
  Web,
  Storage,
  CloudUpload,
  CloudQueue,
} from "@mui/icons-material";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

const About = () => {
  const skills = [
    { name: "JavaScript", level: 85, icon: <Code /> },
    { name: "React.js", level: 80, icon: <Web /> },
    { name: "Node.js", level: 75, icon: <CloudUpload /> },
    { name: "HTML/CSS", level: 90, icon: <Web /> },
    { name: "Firebase", level: 70, icon: <Storage /> },
    { name: "Git/GitHub", level: 80, icon: <GitHub /> },
    { name: "JavaScript", level: 85, icon: <Code /> },
    { name: "React.js", level: 80, icon: <Web /> },
  ];

  const { theme } = useContext(ThemeContext);
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
            <Box sx={{mb: 4}}>
              <Typography
                variant="h4"
                gutterBottom
                fontWeight="bold"
                textAlign="center"
              >
                My Journey
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, mt: 2 }}>
                Graduated in 2024, with a BTech Degree in Electronics and
                communication Engineering, and a passion for full-stack
                development. I love solving complex problems and creating
                user-friendly applications.
              </Typography>
              <Typography variant="body1">
                I've worked on various projects including web applications,
                mobile apps, and low level hardware and IoT. I'm always eager to
                learn new technologies and skills.
              </Typography>
            </Box>

            {/* Skilllss */}
            <Box>
              <Typography
                variant="h4"
                component="h2"
                textAlign="center"
                gutterBottom
                sx={{ fontWeight: "bold", mb: 6 }}
              >
                Technical Skills
              </Typography>
              
              <Box
  sx={{
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",              // 1 column on extra small screens
      sm: "repeat(2, 1fr)",   // 2 columns on small screens
      md: "repeat(3, 1fr)",   // 3 columns on medium screens
      lg: "repeat(4, 1fr)",   // 4 columns on large screens
    },
    gap: 4,
    px: { xs: 2, sm: 4 },
    py: 4,
  }}  
>
  {skills.map((skill) => (
    <Card
      key={skill.name}
      elevation={10}
      sx={{
        background: "rgba(255, 255, 255, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        color: "white",
        transition: "all 0.3s ease",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "&:hover": {
          transform: "translateY(-10px) scale(1.02)",
          background: "rgba(255, 255, 255, 0.15)",
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Box sx={{ mr: 2, color: "#61dafb" }}>{skill.icon}</Box>
          <Typography variant="h6" fontWeight="bold">
            {skill.name}
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <LinearProgress
            variant="determinate"
            value={skill.level}
            sx={{ height: 8, borderRadius: 5 }}
          />
        </Box>
        <Typography variant="body2" textAlign="right" mt={1}>
          {skill.level}%
        </Typography>
      </CardContent>
    </Card>
  ))}
</Box>




{/* 
              <Box sx={{ maxWidth: 1200, mx: "auto" }}>
  <Grid
    container
    spacing={4}
    justifyContent="center"
    sx={{ px: { xs: 2, sm: 4 }, py: 4 }}
  >
    {skills.map((skill) => (
      <Grid item xs={12} sm={6} md={3} key={skill.name}>
        <Card
          elevation={10}
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "white",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-10px) scale(1.02)",
              background: "rgba(255, 255, 255, 0.15)",
            },
          }}
        >
          <CardContent sx={{ flexGrow: 1, p: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box sx={{ mr: 2, color: "#61dafb" }}>{skill.icon}</Box>
              <Typography variant="h6" fontWeight="bold">
                {skill.name}
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1 }}>
              <LinearProgress
                variant="determinate"
                value={skill.level}
                sx={{ height: 8, borderRadius: 5 }}
              />
            </Box>

            <Typography variant="body2" textAlign="right" mt={1}>
              {skill.level}%
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box> */}

            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default About;
