import React from "react";
import derek from "../images/derek.jpg";
import linkedin from "../images/linkedin.jpg";
import github from "../images/github.jpg";

const Introduction = () => {
  return (
    <div className="flex flex-col p-4 sm:p-6 md:p-12 w-full max-w-screen-md mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <div className="text-3xl md:text-5xl font-medium flex flex-row items-center justify-center md:justify-start">
            Hi, I'm
            <span className="bg-gradient-to-r from-[#BB377D] to-[#9733EE] bg-clip-text text-transparent ml-2">Derek</span>
            <a href="https://www.linkedin.com/in/derek-li7/" target="_blank" rel="noopener noreferrer" className="mx-2">
              <img className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-200 hover:scale-110 animate-shake" src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/DerekLii" target="_blank" rel="noopener noreferrer" className="mx-2">
              <img className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-200 hover:scale-110 animate-shake" src={github} alt="GitHub" />
            </a>
          </div>
          <div className="mt-4 text-base md:text-lg">
            <p>I'm a Software Engineering student at McMaster University.</p>
            <p className="mt-2">I have experience in the industry and am dedicated to expanding my skills in both software and data engineering.</p>
          </div>
        </div>
        <img className="w-48 h-64 md:w-64 md:h-64 rounded-full mt-4 md:mt-0 md:ml-4" src={derek} alt="Derek" />
      </div>
    </div>
  );
};

export default Introduction;
