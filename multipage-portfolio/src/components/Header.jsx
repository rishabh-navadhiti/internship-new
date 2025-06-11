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
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { grey } from "@mui/material/colors";
import { NavLink, useNavigate } from "react-router-dom";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeContext } from "../contexts/ThemeContext";
import { useAuth } from "../contexts/AuthContext";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const [timer, setTimer] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();

  // Timer logic
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

  const { theme, themeMode, toggleTheme } = useContext(ThemeContext);

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleNavClick = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <AppBar position="" color="transparent" elevation={0}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            background: theme.headerBackground,
            color: theme.headerColor,
          }}
        >
          <Stack direction={"row"} alignItems="center" spacing={2}>
            <Avatar src="/image/gojo_dp.jpg" onClick={() => navigate('/')}/>
            <Typography variant="h6">Rishabh S</Typography>
          </Stack>

          {isMobile ? (
            <IconButton onClick={handleDrawerToggle} color="inherit">
              <MenuIcon />
            </IconButton>
          ) : (
            <Box>
              {menuItems.map((item) => (
                <Button
                  key={item.path}
                  color="inherit"
                  component={NavLink}
                  to={item.path}
                  sx={{
                    "&.active": {
                      color: theme.headerActiveColor,
                      fontWeight: "bold",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}

              <Tooltip
                title={`Switch to ${
                  themeMode === "light" ? "dark" : "light"
                } mode`}
              >
                <IconButton onClick={toggleTheme} color="inherit" sx={{ ml: 2 }}>
                  {themeMode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
                </IconButton>
              </Tooltip>

              {typeof timer === "number" && (
                <Button color="white">{timer}</Button>
              )}

              {isAuthenticated ? (
                <Button color="inherit" onClick={logout}>
                  Logout
                </Button>
              ) : (
                <Button color="inherit" onClick={() => navigate("/login")}>
                  Login
                </Button>
              )}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{
            width: 250,
            backgroundColor: theme.drawerBackground,
            height: "100%",
            color: theme.drawerColor,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton onClick={() => handleNavClick(item.path)}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem>
              <IconButton onClick={toggleTheme} color="inherit">
                {themeMode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
              {typeof timer === "number" && (
                <Typography sx={{ ml: 2 }}>{timer}</Typography>
              )}
            </ListItem>
            <ListItem>
              {isAuthenticated ? (
                <Button fullWidth color="inherit" onClick={logout}>
                  Logout
                </Button>
              ) : (
                <Button fullWidth color="inherit" onClick={() => navigate("/login")}>
                  Login
                </Button>
              )}
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
