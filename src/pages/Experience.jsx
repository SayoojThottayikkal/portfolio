import React from "react";
import img from "../images/Icons.png";
import img1 from "../images/Group 2.png";
import img2 from "../images/Group 1935.png";
import img3 from "../images/Group 1938.png";

function Experience() {
  const data = [
    {
      pic: img1,
    },
    {
      pic: img2,
    },
    {
      pic: img3,
    },
    {
      pic: img,
    },
  ];
  return (
    <div className="h-[100vh] ">
      <h1 className="text-[40px] mb-[20px] p-10 xl:mb-[0]">Work Experience</h1>
      <div className=" experience  flex justify-evenly flex-wrap ">
        {data.map((item) => (
          <div className="flex shadow align-middle justify-between mb-[40px] w-[45%] p-[20px] rounded-[8px] ">
            <div className="w-[30%] h-[100%] ">
              <img className="w-[100%] block" src={item.pic} alt="" />
            </div>
            <div className="m-auto">
              <h3>CIB on the Mobile </h3>
              <p className="text-[12px] mb-[10px] w-[80%]">
                Take your client onboard seamlessly by our amazing tool of
                digital onboard process.
              </p>
              {/* <button className="bg-[#2C1250] border-[2px] border-[#7e3cdc] border-solid pt-[8px] text-[12px]   pb-[8px]  pr-[30px]  pl-[30px]  rounded-[10px] cursor-pointer text-[white]">
                LEARN MORE
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
