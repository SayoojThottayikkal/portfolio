import React from "react";
import logo from "../images/mainlogo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "tailwindcss";
function Header() {
  const [option, setOption] = useState(false);

  const toggleMenu = () => {
    setOption(!option);
  };

  return (
    <div className=" h-auto flex items-center justify-between md:justify-around px-6 py-3 ">
      <div className="h-10 w-10 flex items-center">
        <img src={logo} alt="Logo" className="h-full w-full object-contain" />
      </div>
      <nav className="hidden md:flex space-x-8 text-white font-medium">
        <NavLink to="/" className="">
          Home
        </NavLink>
        <NavLink to="/about" className="">
          About
        </NavLink>
        <NavLink to="/skill" className="">
          Skill
        </NavLink>
        <NavLink to="/experience" className=" ">
          Experience
        </NavLink>
        {/* <NavLink to="/contact" className="">
          Contact
        </NavLink> */}
      </nav>
      <div
        className="md:hidden text-white text-2xl cursor-pointer "
        onClick={toggleMenu}
      >
        ☰
      </div>
      {option && (
        <div className="absolute top-14 right-0 bg-[#1A0B2E] w-40 flex flex-col items-center text-white py-4 rounded-lg shadow-lg md:hidden z-10">
          <NavLink to="/" className="py-2" onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className="py-2" onClick={toggleMenu}>
            About
          </NavLink>
          <NavLink to="/skill" className="py-2" onClick={toggleMenu}>
            Skill
          </NavLink>
          <NavLink to="/experience" className="py-2" onClick={toggleMenu}>
            Experience
          </NavLink>
          {/* <NavLink to="/contact" className="py-2" onClick={toggleMenu}>
            Contact
          </NavLink> */}
        </div>
      )}
    </div>
  );
}

export default Header;
