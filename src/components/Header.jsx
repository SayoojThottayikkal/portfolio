import React from "react";
import logo from "../images/mainlogo.png";
import { NavLink } from "react-router-dom";

import "tailwindcss";
function Header() {
  return (
    <div className="bg-[#1A0B2E] h-auto flex items-center justify-between md:justify-around px-6 py-3 ">
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
        <NavLink to="/contact" className="">
          Contact
        </NavLink>
      </nav>
      <div className="md:hidden text-white ">☰</div>
    </div>
  );
}

export default Header;
