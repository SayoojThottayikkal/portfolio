import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Experience from "../pages/Experience";
import Contact from "../pages/Contact";
import Header from "../components/Header";

function AppRoute() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />e
      </Routes>
    </>
  );
}

export default AppRoute;
