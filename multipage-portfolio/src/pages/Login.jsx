import {
  Box,
  Card,
  TextField,
  Button,
  Typography,
  CardContent,
  CardActions,
  LinearProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
    const { login } = useAuth();

    const navigate = useNavigate();
    const [loginSuccess, setLoginSuccess] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const username = formData.get('username');
        const password = formData.get('password');

        console.log("Username:", username);
        console.log("Password:", password);
        if (username === "user" && password === "password") {
            setLoginSuccess(true);
            setTimeout(() => {
                login();
                navigate("/projects");
                setLoginSuccess(false);
            }, 2000); 
            
        } else {
            alert("Wrong credentials")
        }
  };
  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Card
        elevation={16}
        sx={{ maxWidth: 400, margin: "auto", padding: 3, mt: 5, boxShadow: 8 }}
      >
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Login
          </Typography>
          <TextField
            id="username"
            label="Username"
            name="username"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            id="password"
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </CardContent>
        <CardActions>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </CardActions>
        {loginSuccess && (
            <>
            <LinearProgress />
          <Typography variant="body1" color="success.main" mt={2}>
            Login successful! 
          </Typography>
          </>
        )}
      </Card>
    </Box>
  );
};

export default Login;
