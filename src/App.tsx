import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { CssBaseline } from "@mui/material";
import GlobalStyles from "./GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
