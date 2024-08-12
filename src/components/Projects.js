import React from "react";
import Project from "./Project";
import linkedin from "../images/linkedin.jpg";
import eightysix from "../images/86.jpg";

const Projects = () => {
  return (
    <div id="projects" className="bg-white md:w-1/2 mx-auto mb-10 px-4">
      <div className="text-2xl font-normal text-black text-left mb-5">Projects</div>
      <div className="flex flex-wrap justify-center items-center gap-2">
        <Project image={eightysix} link="https://dereklii.github.io/Eighty-Six/index.html" />
        <Project image={linkedin} />
        <Project image={linkedin} />
        <Project image={linkedin} />
        <Project image={linkedin} />
        <Project image={linkedin} />
      </div>
    </div>
  );
};

export default Projects;
