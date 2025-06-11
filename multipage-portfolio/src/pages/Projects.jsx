import {
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext, useEffect, useState } from "react";
// const projectData = await fetch('')


const Projects = () => {

  const [projectData , setProjectData] = useState([]);

  useEffect(() => {
    fetch('/data/projectData.json')
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setProjectData(data)
    })
  }, [])
  const { theme } = useContext(ThemeContext);

  return (
    <Box
      sx={{
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          textAlign="center"
          gutterBottom
          fontWeight="bold"
          sx={{ color: theme.headingColor }}
        >
          My Projects
        </Typography>
        <Typography
          variant="subtitle1"
          color={theme.bodyColor}
          textAlign="center"
          mb={6}
        >
          Here are some of the projects I've worked on recently.
        </Typography>

        <Grid
          container
          spacing={4}
          sx={{
            justifyContent: "center",
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
            },
            maxWidth: "1000px",
            padding: { xs: "2", sm: 4 },
            margin: "0 auto",
            gap: 8,
          }}
        >
          {projectData.map((project) => (
            <Grid key={project.id} sx={{ display: "flex" }}>
              <Card
                sx={{
                  backgroundColor: theme.cardBackgroundColor,
                  px: 2,
                  py: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "100%",
                  height: "100%",
                  boxShadow: 3,
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{ height: 200, objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    noWrap
                    color={theme.headingColor}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.bodyColor}
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2, justifyContent: "flex-start" }}>
                  {/* <Button component={Link} to={`/projects/${project.id}`}>
                    View Details
                  </Button> */}
                  <Button
                    component={Link}
                    to={`/projects/${project.id}`}
                    sx={{
                      color: theme.defaultButtonColor,
                      fontWeight: 600,
                      textTransform: "none",
                      borderRadius: 2,
                      py: 1,
                      px: 2,
                      "&:hover": {
                        backgroundColor: theme.defaultButtonHoverBg,
                        color: theme.defaultButtonHoverColor,
                        transform: "translateY(-1px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
