import React from "react";
import "tailwindcss";
import myimg from "../images/img.jpg";
import vector from "../images/Vector.png";
import { motion } from "framer-motion";
import ellips from "../images/Ellipse5.png";

function Spotlight() {
  return (
    <div className="h-[100vh]   wrapper  ">
      <div className=" p-10 flex flex-row align-middle justify-center  ">
        <motion.div
          initial={{ transform: "translateX(-900px)" }}
          animate={{ transform: "translateX(0px)" }}
          transition={{ type: "spring", duration: 3 }}
          className="   p-15  bgimg  flex align-middle  justify-center "
        >
          <img
            className=" w-[100%] rounded-[50%] block"
            src={myimg}
            alt="profile photo"
          />
        </motion.div>
        <div className="flex flex-col  align-middle justify-center p-10   relative">
          <div className="flex  ">
            <img
              className=" absolute top-[50px]  left-[-45px]"
              src={vector}
              alt=""
            />
            <h2>
              Hello! I Am <span className="text-[#a471e1]">Sayooj T</span>
            </h2>
          </div>
          <h3 className="mt-[60px]">A Designer who</h3>
          <motion.h1
            initial={{ x: 900 }}
            animate={{ x: 0 }}
            transition={{ duration: 2, type: "spring" }}
            className="font-bold text-[40px] w-[60%] "
          >
            Judges a book by its{" "}
            <span className="text-[#a471e1] span relative p-[3px]">
              <img
                className="absolute top-[5%] left-[-3%] w-[100%] h-[100%]"
                src={ellips}
                alt=""
              />
              cover{" "}
            </span>
            ...
          </motion.h1>
          <p className="text-[10px]">
            Because if the cover does not impress you what else can?
          </p>
        </div>
      </div>
      <div className="text-center w-[50%] m-auto xl:w-[60%]">
        <h1 className="text-[30px] font-bold ">I'm a Software Engineer </h1>
        <p className=" ">
          I am fresher passed out in 2021, with a bachelor of engineering in
          computer science from the Anna University Chennai. Now I want to apply
          my skills and knowledge in a reputed company like yours. I believe
          that I would be a valuable asset for your organization.
        </p>
      </div>
    </div>
  );
}

export default Spotlight;
