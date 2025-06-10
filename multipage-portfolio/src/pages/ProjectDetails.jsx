import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Breadcrumbs,
  Box,
  Container,
  Typography,
  Chip,
  Stack,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import NotFound from "./NotFound";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ProjectDetails = () => {
  const { theme } = useContext(ThemeContext);

  const { projectId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/projectData.json")
      .then((res) => res.json())
      .then((projects) => {
        setData(projects[projectId - 1]);
      });
  }, [projectId]);

  if (!data) return <NotFound />;

  return (
    <Box
      sx={{
        py: 8,
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small"/>}
          aria-label="breadcrumb"
          sx={{ mb: 4, color: theme.bodyColor }}
        >
          <Link to="/" style={{ textDecoration: "none", color: theme.bodyColor }}>
            Home
          </Link>
          <Link
            to="/projects"
            style={{ textDecoration: "none", color: theme.bodyColor }}
          >
            Projects
          </Link>
          <Typography color={theme.bodyColor}>{data.title}</Typography>
        </Breadcrumbs>

        <Card sx={{ boxShadow: 3, py: 4, px: 5, borderRadius: 3 }}>
          <CardMedia
            component="img"
            height="240"
            image={data.image}
            alt={data.title}
          />
          <CardContent>
            <Typography
              variant="h3"
              fontWeight="700"
              sx={{
                py: 3,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 2,
              }}
            >
              {data.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                fontSize: "1.1rem",
                lineHeight: 1.5,
                color: "text.secondary",
              }}
            >
              {data.description}
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ mb: 1, fontSize: "1.2rem", color: "text.primary" }}
            >
              Overview:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: 3,
                fontSize: "1.1rem",
                lineHeight: 1.5,
                color: "text.secondary",
              }}
            >
              {data.details}
            </Typography>

            {data.skills?.length > 0 && (
              <Stack
                direction="row"
                spacing={1}
                sx={{ mb: 3, flexWrap: "wrap" }}
              >
                {data.skills.map((skill, index) => (
                  <Chip key={index} label={skill} />
                ))}
              </Stack>
            )}

            {data.features?.length > 0 && (
              <>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                  Features:
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    "& li": {
                      position: "relative",
                      paddingLeft: "2rem",
                      marginBottom: "0.75rem",
                      fontSize: "1rem",
                      lineHeight: 1.6,
                      "&::before": {
                        content: '"✓"',
                        position: "absolute",
                        left: 0,
                        color: "#4caf50",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                      },
                    },
                  }}
                >
                  {data.features.map((feature, index) => (
                    <li key={index}>
                      <Typography variant="body1">{feature}</Typography>
                    </li>
                  ))}
                </Box>
              </>
            )}

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: 4 }}
            >
              {data.github && (
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<GitHubIcon />}
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    background: theme.buttonBackground,
                    color: theme.buttonColor,
                    borderRadius: 3,
                    py: 1.5,
                    px: 3,
                    fontWeight: 600,
                    fontSize: "1rem",
                    textTransform: "none",
                    boxShadow: theme.buttonShadow,
                    "&:hover": {
                      background: theme.buttonHoverBackground,
                      transform: "translateY(-2px)",
                      boxShadow: theme.buttonHoverShadow,
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  View Source Code
                </Button>
              )}
              <Button
                variant="outlined"
                size="large"
                startIcon={<LaunchIcon />}
                href="#"
                disabled
                sx={{
                  borderRadius: 3,
                  py: 1.5,
                  px: 3,
                  fontWeight: 600,
                  fontSize: "1rem",
                  textTransform: "none",
                  borderColor: "#667eea",
                  color: "#667eea",
                  borderWidth: 2,
                  "&:hover": {
                    borderWidth: 2,
                    backgroundColor: "rgba(102, 126, 234, 0.1)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 15px rgba(102, 126, 234, 0.2)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Live Demo
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default ProjectDetails;
