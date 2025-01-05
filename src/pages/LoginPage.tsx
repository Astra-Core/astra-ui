import React from "react";
import { Container } from "@mui/material";
import { Navigate } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";
import { useAuth } from "../context/AuthContext";

const LoginPage: React.FC = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === null) {
    return null;
  }

  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return (
    <Container maxWidth="sm">
      <LoginForm />
    </Container>
  );
};

export default React.memo(LoginPage);
