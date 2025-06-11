import {
  AppBar,
  Avatar,
  Box,
  Button,
  Toolbar,
  Typography,
  Stack,
  Tooltip,
  IconButton,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { grey } from "@mui/material/colors";
import { NavLink } from "react-router-dom";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ThemeContext } from "../contexts/ThemeContext";

import { useAuth } from "../contexts/AuthContext";

const Header = () => {
  // timer for testing
  const { isAuthenticated } = useAuth();
  const [timer, setTimer] = useState(null);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const expire = localStorage.getItem("loginExpire");

      if (expire && !isNaN(Number(expire))) {
        const expireTime = Number(expire);
        const remainingTime = expireTime - Date.now();
        const seconds = Math.floor(remainingTime / 1000);
        setTimer(isNaN(seconds) ? null : seconds);
      } else {
        setTimer(null);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // timer for testing

  const { theme, themeMode, toggleTheme } = useContext(ThemeContext);

  return (
    <AppBar position="" color="transparent" elevation={0}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          background: theme.headerBackground,
          color: theme.headerColor,
        }}
      >
        <Stack direction={"row"} alignItems="center" spacing={2}>
          <Avatar />
          <Typography variant="h6"> Rishabh S</Typography>
        </Stack>
        <Box>
          <Button
            color="inherit"
            component={NavLink}
            to="/"
            sx={{
              "&.active": {
                color: theme.headerActiveColor,
                fontWeight: "bold",
              },
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/about"
            sx={{
              "&.active": {
                color: theme.headerActiveColor,
                fontWeight: "bold",
              },
            }}
          >
            About
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/projects"
            sx={{
              "&.active": {
                color: theme.headerActiveColor,
                fontWeight: "bold",
              },
            }}
          >
            Projects
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/contact"
            sx={{
              "&.active": {
                color: theme.headerActiveColor,
                fontWeight: "bold",
              },
            }}
          >
            Contact
          </Button>
          <Tooltip
            title={`Switch to ${themeMode === "light" ? "dark" : "light"} mode`}
          >
            <IconButton onClick={toggleTheme} color="inherit" sx={{ ml: 2 }}>
              {themeMode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Tooltip>
          {typeof timer === "number" && <Button color="white">{timer}</Button>}{" "}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
