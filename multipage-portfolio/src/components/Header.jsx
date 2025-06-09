import { AppBar, Avatar, Box, Button, Toolbar, Typography, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          backgroundColor: "#764ba2",
          color: "white",
        }}
      >
        
        <Stack direction={"row"} alignItems="center" spacing={2}>
          <Avatar />
          <Typography variant="h6"> Rishabh S</Typography>
        </Stack>
        <Box>
          <Button color="inherit" component={NavLink} to='/' sx={{'&.active': {color: '#dd8cff', fontWeight: 'bold'}}}>Home</Button>
          <Button color="inherit" component={NavLink} to='/about' sx={{'&.active': {color: '#dd8cff', fontWeight: 'bold'}}}>About</Button>
          <Button color="inherit" component={NavLink} to='/projects' sx={{'&.active': {color: '#dd8cff', fontWeight: 'bold'}}}>Projects</Button>
          <Button color="inherit" component={NavLink} to='/contact' sx={{'&.active': {color: '#dd8cff', fontWeight: 'bold'}}}>Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
