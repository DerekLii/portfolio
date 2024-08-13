import React from "react";
import Project from "./Project";
import linkedin from "../images/linkedin.jpg";
import discord from "../images/discord.jpg";

const Projects = () => {
  return (
    <div id="projects" className="bg-white md:w-1/2 mx-auto mb-10 px-4">
      <div className="text-2xl font-medium text-black text-left mb-5">Projects</div>
      <div className="flex flex-wrap justify-center items-center gap-2">
        <Project image={discord} link="https://github.com/DerekLii/DiscordBot" />
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
