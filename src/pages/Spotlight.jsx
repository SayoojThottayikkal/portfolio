import React from "react";
import "tailwindcss";
import myimg from "../images/image.png";
import vector from "../images/Vector.png";
import { motion } from "framer-motion";
import ellips from "../images/Ellipse5.png";

function Spotlight() {
  return (
    <div className="lg:h-screen px-2 sm:px-0 flex flex-col items-center justify-evenly sm:p-4 ">
      <div className=" flex flex-col  sm:flex-row items-center justify-center gap-0  ">
        <motion.div
          initial={{ transform: "translatey(-900px)" }}
          animate={{ transform: "translatey(0px)" }}
          transition={{ type: "spring", duration: 3 }}
          className="   h-5/6 p-10 sm:h-full    sm:p-8  rounded-[50%] flex justify-center bg-gradient-to-t from-purple-990 via-purple-950 to-violet-980 "
        >
          <img
            className=" block sm:h-3/4 lg:h-3/4 "
            src={myimg}
            alt="profile photo "
          />
        </motion.div>
        <div className="flex p-0 flex-col items-center lg:items-start text-center lg:text-left sm:p-10 relative  ">
          <div className="flex  ">
            <img
              className="absolute top-[50px] left-[-45px] hidden lg:block"
              src={vector}
              alt=""
            />
            <h2 className="text-xl lg:text-2xl">
              Hello! I Am <span className="text-[#a471e1]">Sayooj T</span>
            </h2>
          </div>
          <h3 className="mt-3 sm:mt-6 text-sm sm:text-lg lg:text-xl">
            A Designer who
          </h3>
          <motion.h1
            initial={{ x: 900 }}
            animate={{ x: 0 }}
            transition={{ duration: 2, type: "spring" }}
            className="font-bold text-lg sm:xl sm:w-3/4 md:2xl lg:text-4xl w-full"
          >
            Judges a book by its
            <span className="text-[#a471e1] relative inline-block px-2">
              <img
                className="absolute top-0 left-0 w-full h-full"
                src={ellips}
                alt=""
              />
              cover
            </span>
            ...
          </motion.h1>
          <p className="text-sm mt-0 sm:mt-2">
            Because if the cover does not impress you, what else can?
          </p>
        </div>
      </div>

      <div className="text-center mt-5 lg:mt-0 w-full sm:w-4/5 lg:w-1/2">
        <h1 className="text-2xl lg:text-3xl text-red-700 font-bold">
          I'm a Software Engineer
        </h1>
        <p className="text-xs  md:text-sm lg:text-base mt-2 ">
          I am a fresher with a Bachelor of Engineering in Computer Science from
          Anna University Chennai. Now I want to apply my skills and knowledge
          in a reputed company like yours. I believe that I would be a valuable
          asset to your organization.
        </p>
      </div>
    </div>
  );
}

export default Spotlight;
