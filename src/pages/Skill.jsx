import React from "react";
import img1 from "../images/Rectangle 1.png";
import img2 from "../images/Rectangle 2.png";
import img3 from "../images/Rectangle 3.png";
import img4 from "../images/Rectangle 4.png";
import img6 from "../images/Rectangle 6.png";
import img7 from "../images/Rectangle 7.png";
import img8 from "../images/Rectangle 8.png";

function Skill() {
  return (
    <div className="h-[100vh] wrapper flex flex-col align-middle justify-evenly skill ">
      <div>
        <h1 className="text-center text-[30px]">
          I'm currently looking to join a{" "}
          <span className="text-[#a471e1] font-semibold">cross-functional</span>{" "}
          team
        </h1>
        <p className="text-center">
          that values improving people's lives through accessible design
        </p>
      </div>

      <div className="flex justify-center gap-[30px] align-middle]">
        {[
          {
            image: img1,
          },
          {
            image: img2,
          },
          {
            image: img3,
          },
          {
            image: img4,
          },
          {
            image: img6,
          },
          {
            image: img7,
          },
          {
            image: img8,
          },
        ].map((item) => (
          <a href="">
            <img src={item.image} alt="compay image" />
          </a>
        ))}
      </div>
      <div className=" text-[white] h-[200px] ">
        <div className="bgskill flex justify-center align-middle  relative">
          <span className=" text-[100px] absolute top-[10%] ">Ƨ</span>
        </div>
      </div>
    </div>
  );
}

export default Skill;
