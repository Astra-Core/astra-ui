import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { CssBaseline } from "@mui/material";
import GlobalStyles from "./GlobalStyles";
import { ThemeContextProvider } from "./context/ThemeContext";
import ThemeToggleButton from "./components/ThemeToggleButton";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <GlobalStyles />
      <ThemeContextProvider>
        <ThemeToggleButton />
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
          </Routes>
        </Router>
      </ThemeContextProvider>
    </>
  );
};

export default App;
