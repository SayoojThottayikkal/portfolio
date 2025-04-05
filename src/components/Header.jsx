import React from "react";
import { NavLink } from "react-router-dom";

import "tailwindcss";
function Header() {
  return (
    <div className="bg-[#1A0B2E] h-auto flex justify-around  align-middle p-3  ">
      <div className="">
        <h2 className="">Ƨ</h2>
      </div>
      <div className="flex flex-row justify-between align-middle gap-20 cursor-pointer lg:gap-10">
        <NavLink className="" to="/">
          Home
        </NavLink>
        <NavLink className="" to="/about">
          About
        </NavLink>
        <NavLink className="" to="/skill">
          Skill
        </NavLink>
        <NavLink className="" to="/experience">
          Experience
        </NavLink>
        <NavLink className="" to="/contact">
          Contact
        </NavLink>
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
