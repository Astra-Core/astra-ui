import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { CssBaseline } from "@mui/material";
import GlobalStyles from "./GlobalStyles";
import { ThemeContextProvider } from "./context/ThemeContext";
import ThemeToggleButton from "./components/ThemeToggleButton";
import { AuthProvider } from "./context/AuthContext";
import AuthRouter from "./components/AuthRouter";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <GlobalStyles />
      <ThemeContextProvider>
        <AuthProvider>
          <ThemeToggleButton />
          <Router>
            <AuthRouter />
          </Router>
        </AuthProvider>
      </ThemeContextProvider>
    </>
  );
};

export default App;
