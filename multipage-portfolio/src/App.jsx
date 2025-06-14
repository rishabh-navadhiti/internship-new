import { use, useContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import { ThemeContext } from "./contexts/ThemeContext";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
        background: theme.background,
        color: theme.color,
      }}
    >
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects">
          <Route index element={<Projects />} />
          <Route path=":projectId" element={
            <ProtectedRoute>
              <ProjectDetails />
            </ProtectedRoute>
          } />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </Box>
  );
}

export default App;
