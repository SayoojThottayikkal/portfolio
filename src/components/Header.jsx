import React from "react";
import logo from "../images/mainlogo.png";
import { NavLink } from "react-router-dom";

import "tailwindcss";
function Header() {
  return (
    <div className="bg-[#1A0B2E] h-auto flex justify-around  align-middle p-3  ">
      <div className="h-[25px] w-[25px]">
        <img src={logo} alt="" />
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
    </div>
  );
}

export default Header;
