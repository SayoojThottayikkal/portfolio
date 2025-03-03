import React from "react";
import "tailwindcss";
import myimg from "../images/img.jpg";
import vector from "../images/Vector.png";
import { motion } from "framer-motion";

function Spotlight() {
  return (
    <div className="h-[92vh]  bg-[#120229] ">
      <div className=" p-10 flex flex-row align-middle justify-center ">
        <motion.div
          initial={{ transform: "translateX(-900px)" }}
          animate={{ transform: "translateX(0px)" }}
          transition={{ type: "spring", duration: 3 }}
          className=" w-[20%]  p-15  block bgimg  flex align-middle  justify-center"
        >
          <img
            className="w-[100%] rounded-[50%] block"
            src={myimg}
            alt="profile photo"
          />
        </motion.div>
        <div className="flex flex-col p-10   relative">
          <div className="flex absolute top-[0px]  left-[-80px]">
            <img src={vector} alt="" />
            <h2>
              Hello! I Am <span className="text-blue-400">Sayooj T</span>
            </h2>
          </div>
          <h3 className="mt-[60px]">A Designer who</h3>
          <motion.h1
            initial={{ x: 900 }}
            animate={{ x: 0 }}
            transition={{ duration: 2, type: "spring" }}
            className="font-bold text-[40px] w-[60%] "
          >
            Judges a book by its cover...
          </motion.h1>
          <p className="text-[10px]">
            Because if the cover does not impress you what else can?
          </p>
        </div>
      </div>
      <div className="text-center w-[50%] m-auto">
        <h1 className="text-[30px] font-bold">I'm a Software Engineer.| </h1>
        <p className=" ">
          A self-taught UI/UX designer, functioning in the industry for 3+ years
          now. I make meaningful and delightful digital products that create an
          equilibrium between user needs and business goals.
        </p>
      </div>
    </div>
  );
}

export default Spotlight;
