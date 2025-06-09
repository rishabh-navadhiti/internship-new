import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar direction="">
        <Typography variant="h6">Quote & Time Viewer</Typography>
        <Typography varient="body1" component="p">Best place to get the latest time and motivational quotes</Typography>

      </Toolbar>
      
    </AppBar>
  );
}

export default Header;
