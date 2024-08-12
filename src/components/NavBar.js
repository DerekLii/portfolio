import React from "react";

const NavBar = () => {
  return (
    <div className="sticky top-0 z-10 bg-white shadow-md">
      <div className="flex justify-end">
        <a href="#home" className="p-4 text-black text-center hover:text-gray-700 transition duration-200 active:text-blue-500">
          Home
        </a>
        <a href="#experience" className="p-4 text-black text-center hover:text-gray-700 transition duration-200">
          Experience
        </a>
        <a href="#projects" className="p-4 text-black text-center hover:text-gray-700 transition duration-200">
          Projects
        </a>
        <a href="#contact" className="p-4 text-black text-center hover:text-gray-700 transition duration-200">
          Contact
        </a>
      </div>
    </div>
  );
};

export default NavBar;
