import React from "react";
import Project from "./Project";
import "./styles.css";
import linkedin from "../images/linkedin.jpg";

const Projects = () => {
  return (
    <div id="projects" class="section">
      <div class="title">Projects</div>
      <div class="projects">
        <Project image={linkedin}></Project>
        <Project image={linkedin}></Project>
        <Project image={linkedin}></Project>
        <Project image={linkedin}></Project>
        <Project image={linkedin}></Project>
        <Project image={linkedin}></Project>
      </div>
    </div>
  );
};

export default Projects;
