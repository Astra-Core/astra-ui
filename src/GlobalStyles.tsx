// src/theme/GlobalStyles.tsx
import { GlobalStyles as MUIGlobalStyles } from "@mui/material";

const GlobalStyles = () => (
  <MUIGlobalStyles
    styles={{
      body: {
        height: "100%",
        margin: 0,
        overflow: "hidden",
        padding: 0,
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: "#f4f6f8",
      },
      a: {
        textDecoration: "none",
        color: "inherit",
      },
      "*": {
        boxSizing: "border-box",
      },
    }}
  />
);

export default GlobalStyles;
