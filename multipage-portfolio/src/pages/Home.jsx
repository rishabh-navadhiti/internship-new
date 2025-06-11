import { Box, Typography, Button, Container, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "./../assets/Rishabh Resume mar.pdf";
    link.download = "Rishabh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box>
      <Container sx={{ textAlign: "center", py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Avatar
            src="/image/gojo_dp.jpg"
            sx={{ width: 150, height: 150, margin: "0 auto" }}
          />
          <Typography variant="h3" sx={{ mt: 3, color: theme.headingColor }}>
            Hi, I'm Rishabh
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: theme.bodyColor }}>
            Fresher Software Developer
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={downloadResume}
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
            Download Resume
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home;
