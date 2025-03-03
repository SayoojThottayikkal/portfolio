import React from "react";
import "tailwindcss";
import myimg from "../images/img.jpg";
import { motion } from "framer-motion";

function Spotlight() {
  return (
    <div className="h-[92vh] bg-[#120229] p-10 flex flex-col align-middle justify-around ">
      <motion.div
        initial={{ transform: "translateX(-900px)" }}
        animate={{ transform: "translateX(0px)" }}
        transition={{ type: "spring", duration: 3 }}
        className=" w-[20%]  p-15  block bgimg  flex align-middle "
      >
        <img
          className="w-[100%] rounded-[50%] block"
          src={myimg}
          alt="profile photo"
        />
      </motion.div>
      <div className="flex flex-col p-10">
        <h3>A Designer who</h3>
        <motion.h1
          initial={{ x: 900 }}
          animate={{ x: 0 }}
          transition={{ duration: 2, type: "spring" }}
          className="font-bold text-[30px] w-[100%]"
        >
          Judges a book by its cover...
        </motion.h1>
        <p>Because if the cover does not impress you what else can?</p>
      </div>
    </div>
  );
}

export default Spotlight;
