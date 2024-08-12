import React from "react";

const Project = (props) => {
  return (
    <div className="w-24 h-24 md:w-52 md:h-52 border-2 border-black bg-white">
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img src={props.image} alt="Project" className="w-full h-full object-cover" />
      </a>
    </div>
  );
};

export default Project;
