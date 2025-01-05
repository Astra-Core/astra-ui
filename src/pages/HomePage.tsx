import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Hi, {user?.first_name || user?.username}! Welcome to Astra 🚀
      </Typography>
      <Button variant="contained" color="primary" onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
};

export default HomePage;
