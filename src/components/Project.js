import React from "react";
import "./styles.css";

const Project = (props) => {
  return (
    <a class="project" href="https://www.google.ca/" target="_blank" rel="noopener noreferrer">
      <img src={props.image} alt="linkedin" />
    </a>
  );
};

export default Project;
