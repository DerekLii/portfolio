import React from "react";
import "./styles.css";
import derek from "../images/derek.jpg";
import linkedin from "../images/linkedin.jpg";
import github from "../images/github.jpg";

const Introduction = () => {
  return (
    <div class="introduction">
      <div>
        <img class="derek" src={derek} alt="Derek" />
        <div class="name">
          Hi, I'm <div class="gradient">Derek</div>
          <a href="https://www.linkedin.com/in/derek-li7/" target="_blank" rel="noopener noreferrer">
            <img class="logo" src={linkedin} alt="linkedin" />
          </a>
          <a href="https://github.com/DerekLii" target="_blank" rel="noopener noreferrer">
            <img class="logo" src={github} alt="github" />
          </a>
        </div>
        <div>
          <div class="description">
            <div>I'm a Software Engineering student at Mcmaster University.</div>
            <br />
            <div>I have experience in the industry and I am dedicated to expanding my skills in both software and data engineering.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
