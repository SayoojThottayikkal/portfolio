import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Experience from "../pages/Experience";
import Contact from "../pages/Contact";
import Header from "../components/Header";
import Skill from "../pages/Skill";
import Spotlight from "../pages/Spotlight";

function AppRoute() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Spotlight />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Contact />
    </>
  );
}

export default AppRoute;
