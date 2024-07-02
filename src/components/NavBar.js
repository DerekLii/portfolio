import React from "react";
import "./styles.css";

const NavBar = () => {
  return (
    <div class="navbar">
      <a href="#contact">Contact</a>
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a class="active" href="#home">
        Home
      </a>
    </div>
  );
};

export default NavBar;
