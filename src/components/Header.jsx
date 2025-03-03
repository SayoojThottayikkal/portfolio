import React from "react";

import "tailwindcss";
function Header() {
  return (
    <div className="bg-[#1A0B2E] h-auto flex justify-around  align-middle p-3 ">
      <div className="">
        <h2>SAYOOJ T</h2>
      </div>
      <div className="flex flex-row justify-between align-middle gap-20 cursor-pointer">
        <a href="/home/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
}

export default Header;
