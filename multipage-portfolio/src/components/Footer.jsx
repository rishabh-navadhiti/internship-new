import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";


const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Box
      sx={{
        py: 3,
        textAlign: "center",
        background: theme.headerBackground,
        color: theme.headerColor,
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
