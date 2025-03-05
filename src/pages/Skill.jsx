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

function Skill() {
  const imageData =[
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
        ]
  return (
    <div className="h-[100vh] wrapper flex flex-col align-middle justify-around skill p-[30px] ">
      <div className="p-[20px]">
        <h1 className="text-center text-[30px] ">
          I'm currently looking to join a{" "}
          <span className="text-[#a471e1] font-semibold">cross-functional</span>
          team
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
        </div>
      </div>
    </div>
  );
}

export default Skill;
