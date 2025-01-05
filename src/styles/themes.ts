import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f18f01", // Carrot Orange
    },
    secondary: {
      main: "#57886c", // Viridian
    },
    background: {
      default: "#f4f6f8", // Anti-Flash White
      paper: "#ffffff",
    },
    text: {
      primary: "#1c2727", // Gunmetal
      secondary: "#466060", // Feldgrau
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h4: {
      fontFamily: "Roboto, Arial, sans-serif",
      fontWeight: 500,
      fontSize: "2rem",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f18f01", // Carrot Orange
    },
    secondary: {
      main: "#57886c", // Viridian
    },
    background: {
      default: "#1c2727", // Gunmetal
      paper: "#2a3b3b", // Dark Feldgrau
    },
    text: {
      primary: "#e0e0e0", // Platinum
      secondary: "#b9d2c4", // Light Viridian
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h4: {
      fontFamily: "Roboto, Arial, sans-serif",
      fontWeight: 500,
      fontSize: "2rem",
    },
  },
});
