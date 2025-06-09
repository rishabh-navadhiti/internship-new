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

// const projectData = await fetch('')

const projectData = [
  {
    id: 1,
    title: "Task Manager App",
    description:
      "A simple task manager built with Express backend and Firebase database. Allows users to add, update, and delete tasks.",
    image: "https://www.chanty.com/blog/wp-content/uploads/2020/12/nTask.png",
  },
  {
    id: 2,
    title: "Inventory Management System",
    description:
      "A product inventory management app using Express and Firebase with plain HTML, CSS, and JavaScript for the frontend.",
    image:
      "https://res.cloudinary.com/daog6scxm/image/upload/v1687525689/cms/inventory-management-app/Inventory_Management_App_4_llpjir.webp",
  },
  {
    id: 3,
    title: "User Authentication API",
    description:
      "REST API for login and registration using Express and Firebase, secured with JWT and bcrypt password hashing.",
    image:
      "https://cdn.sanity.io/images/3jwyzebk/production/c098fa07deca1062e013d92cabba4ba7ec7e7f19-1584x988.png",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A single-page portfolio application built with React and Material UI to showcase projects and contact information.",
    image:
      "https://uploads.sitepoint.com/wp-content/uploads/2019/04/155530806117.jpg",
  },
];

const Projects = () => {
  return (
    <Box
      sx={{
        py: 8,
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          textAlign="center"
          gutterBottom
          fontWeight="bold"
        >
          My Projects
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
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
            padding: {xs: '2', sm:4},
            margin: "0 auto",
            gap: 8,
          }}
        >
          {projectData.map((project) => (
            <Grid
              
              key={project.id}
              sx={{ display: "flex" }}
            >
              <Card
                sx={{
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
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
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
                  <Button component={Link} to={`/projects/${project.id}`}>
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
