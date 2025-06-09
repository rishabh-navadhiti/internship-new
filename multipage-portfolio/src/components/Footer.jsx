import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        py: 3,
        textAlign: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Designed and Built with React and Material UI
      </Typography>
      <Typography variant="body1">
        © 2025 Rishabh. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
