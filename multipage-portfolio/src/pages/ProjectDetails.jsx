import { X } from "@mui/icons-material";
import { useState, useEffect, use } from "react";
import { useParams } from "react-router-dom";
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
  CardContent
} from "@mui/material";

import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import StarIcon from "@mui/icons-material/Star";

const ProjectDetails = () => {
  const projectId = useParams().projectId;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/projectData.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log(data[projectId]);
      });
  }, []);
  return (
    <Box
      sx={{
        
        py: 8,
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          sx={{ mb: 4 }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Home
          </Link>
          <Link
            to="/projects"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Projects
          </Link>
          <Typography color="text.primary">Task Manager App</Typography>
        </Breadcrumbs>

        <Card sx={{ boxShadow: 3 }}>
          <CardMedia
            component="img"
            height="240"
            image="https://via.placeholder.com/800x400?text=Task+Manager+App"
            alt="Task Manager Screenshot"
          />
          <CardContent>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Task Manager App
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              A simple yet effective task manager built using Express and
              Firebase. It allows users to manage their daily tasks by adding,
              updating, and deleting them. Ideal for individuals looking for a
              minimal productivity tool.
            </Typography>

            <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
              <Chip label="Express" color="primary" />
              <Chip label="Firebase" color="secondary" />
              <Chip label="REST API" />
              <Chip label="JavaScript" />
              <Chip label="Node.js" />
            </Stack>

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
                <li>User-friendly task list UI</li>
                <li>CRUD operations using Firebase</li>
                <li>Express backend with REST API</li>
                <li>Responsive and mobile-friendly design</li>
                <li>Real-time sync with Firestore</li>
              </Box>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: 4 }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<GitHubIcon />}
                href="https://github.com/your-username/task-manager-app"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  borderRadius: 3,
                  py: 1.5,
                  px: 3,
                  fontWeight: 600,
                  fontSize: "1rem",
                  textTransform: "none",
                  boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 20px rgba(102, 126, 234, 0.5)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                View Source Code
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<LaunchIcon />}
                href="https://your-demo-link.com"
                target="_blank"
                rel="noopener noreferrer"
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
