import React from "react";
import img1 from "../images/Rectangle 1.png";
import img2 from "../images/Rectangle 2.png";
import img3 from "../images/Rectangle 3.png";
import img4 from "../images/Rectangle 4.png";
import img6 from "../images/Rectangle 6.png";
import img7 from "../images/Rectangle 7.png";
import vector25 from "../images/Vector 25.png";
import vector26 from "../images/Vector 26.png";
import vector27 from "../images/Vector 27.png";
import vector28 from "../images/Vector 28.png";
import vector29 from "../images/Vector 29.png";
import vector30 from "../images/Vector 30.png";
import ellips from "../images/Ellipse21.png";
import ellips1 from "../images/Ellipse22.png";
import ellips2 from "../images/Ellipse23.png";
import ellips3 from "../images/Ellipse24.png";
import ellips4 from "../images/Ellipse25.png";
import group from "../images/Group.png";
import group1 from "../images/Group1.png";
import group2 from "../images/Group2.png";
import group3 from "../images/Group3.png";
import group4 from "../images/Group4.png";
import group5 from "../images/Group5.png";
import group6 from "../images/Group6.png";
import group7 from "../images/Group7.png";
import group8 from "../images/Group8.png";
import group9 from "../images/Group9.png";

function Skill() {
  const imageData = [
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
  ];
  return (
    <div className="h-[100vh] wrapper flex flex-col align-middle justify-around skill p-[30px] ">
      <div className="p-[20px]">
        <h1 className="text-center text-[30px] ">
          I'm currently looking to join&nbsp;
          <span className="text-[#a471e1] font-semibold ">
            cross-functional
          </span>
          &nbsp;team
        </h1>
        <p className="text-center">
          that values improving people's lives through accessible design
        </p>
      </div>

      <div className="flex justify-center gap-[50px] align-middle] relative">
        {imageData.map((item) => (
          <a href="">
            <img src={item.image} alt="compay image" />
          </a>
        ))}
      </div>

      <div className="flex flex-row justify-center align-middle relative  h-[25%]">
        <img src={vector28} alt="" className="absolute left-[36%]" />
        <img src={vector29} alt="" className="absolute left-[41%]" />
        <img src={vector30} alt="" className="absolute left-[47%]" />
        <img src={vector27} alt="" className="absolute left-[50%]" />
        <img src={vector26} alt="" className="absolute left-[53%]" />
        <img src={vector25} alt="" className="absolute left-[55%]" />
      </div>

      <div className=" text-[white]  h-[50%] ">
        <div className="bgskill flex justify-center align-middle  relative">
          <span className=" text-[150px] absolute top-[4%] ">Ƨ</span>
          <div className="relative w-[80%] flex  align-middle justify-center">
            <img src={ellips} alt="" />
            <img
              src={ellips1}
              alt=""
              className=" absolute top-[3%] left-[14%]"
            />
            <img
              src={ellips2}
              alt=""
              className=" absolute top-[3%] left-[18%]"
            />

            <img
              src={ellips3}
              alt=""
              className=" absolute top-[-8%] left-[36%]"
            />
            <img
              src={ellips4}
              alt=""
              className=" absolute top-[28%] left-[36.50%]"
            />
            <img
              src={group}
              alt=""
              className="w-[20px] h-[20px] absolute  top-[20%] left-[13%]"
            />
            <img
              src={group1}
              alt=""
              className="w-[20px] h-[20px] absolute top-[50%] left-[13%]"
            />
            <img
              src={group2}
              alt=""
              className="w-[20px] h-[20px] absolute top-[70%] left-[21%]"
            />
            <img
              src={group3}
              alt=""
              className="w-[20px] h-[20px] absolute top-[20%] right-[13%] "
            />
            <img
              src={group4}
              alt=""
              className="w-[20px] h-[20px] absolute top-[40%] right-[17%]"
            />
            <img
              src={group5}
              alt=""
              className="w-[20px] h-[20px] absolute top-[75%] right-[14%]"
            />
            <img
              src={group6}
              alt=""
              className="w-[20px] h-[20px]   absolute top-[55%] right-[15%]"
            />
            <img
              src={group7}
              alt=""
              className="w-[20px] h-[20px] absolute top-[28%] left-[21%]"
            />
            <img
              src={group8}
              alt=""
              className="w-[20px] h-[20px] absolute top-[60%] left-[9%]"
            />
            <img
              src={group9}
              alt=""
              className="w-[20px] h-[20px] absolute top-[55%] right-[8%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
