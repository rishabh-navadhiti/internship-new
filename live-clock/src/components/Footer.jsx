import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Box sx={{ mt: 4, py: 2, textAlign: 'center', backgroundColor: '#f0f0f0' }}>
      <Typography variant="body2">
        © Navadhiti {year}™
      </Typography>
    </Box>
  );
}

export default Footer;
