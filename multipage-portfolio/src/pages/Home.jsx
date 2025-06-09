import { Box, Typography, Button, Container, Avatar } from "@mui/material";
import { motion } from "framer-motion";


const Home = () => {
    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = './../assets/Rishabh Resume mar.pdf'; 
        link.download = "Rishabh_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
    <Box>
      <Container sx={{ textAlign: "center", py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Avatar
            src="https://via.placeholder.com/150"
            sx={{ width: 150, height: 150, margin: "0 auto" }}
          />
          <Typography variant="h3" sx={{ mt: 3 }}>
            Hi, I'm Rishabh
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Fresher Software Developer
          </Typography>
          <Button variant="contained" onClick={downloadResume}>
            Download Resume
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home;
