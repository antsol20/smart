import React from "react";
import { CookiesProvider } from "react-cookie";
import Home from "./pages/Home";

export default function App() {
  return (
    <CookiesProvider>
      <Home />
    </CookiesProvider>
  );
}
