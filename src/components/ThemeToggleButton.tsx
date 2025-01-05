import React from "react";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeContext } from "../context/ThemeContext";

const ThemeToggleButton: React.FC = () => {
  const { toggleTheme, themeMode } = useThemeContext();

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {themeMode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
};

export default ThemeToggleButton;
