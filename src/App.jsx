import React from "react";
import { CookiesProvider } from "react-cookie";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
        <Route exact path="smart" component={<Home />} />
        </Routes>
      </BrowserRouter>
      <Home />
    </CookiesProvider>
  );
}
