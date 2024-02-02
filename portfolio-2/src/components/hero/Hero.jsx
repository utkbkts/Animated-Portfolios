import React from "react";

import "./hero.scss";
import Skills from "../skills/Skills";
import WorkExperience from "../workexperience/WorkExperience";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import Home from "../home/Home";
import Category from "../projectcategory/category/Category";
const Hero = () => {
  return (
    <>
      <Home />
      <Skills />
      <WorkExperience />
      <Projects />
      <Category/>
      <Contact />
    </>
  );
};

export default Hero;
