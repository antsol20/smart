import React from "react";
import { CookiesProvider } from "react-cookie";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from './pages/Home'

const theme = createTheme({
  palette: {
    background: {
      default: "#FBFCFF",
    },
    primary: {
      main: "#274156",
    },
    secondary: {
      main: "#312756",
    }
  }
});

export default function App() {
  return (
    <CookiesProvider>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </CookiesProvider>
  );
}
