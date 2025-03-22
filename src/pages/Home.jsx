import React from "react";
import Spotlight from "./Spotlight";
import Experience from "./Experience";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <Spotlight />
      <Experience />
      <Skill />
      <Project />
      <Contact />
    </>
  );
}

export default Home;
