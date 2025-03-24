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
    <div className=" xl:min-h-screen flex flex-col items-center p-6">
      <h1 className="text-3xl  md:text-4xl font-bold mb-6">Work Experience</h1>
      <div className=" experience flex  flex-wrap  justify-center gap-6 w-full max-w-6xl ">
        {data.map((item) => (
          <div className=" shadow flex flex-col md:flex-row items-center  rounded-lg p-6 w-full md:w-[45%] ">
            <div className="w-24 h-24 flex-shrink-0 mb-4 md:mb-0">
              <img
                className="w-full h-full object-contain"
                src={item.pic}
                alt=""
              />
            </div>
            <div className="md:ml-6 text-center md:text-left">
              <h3 className="text-lg font-semibold ">CIB on the Mobile </h3>
              <p className="text-sm text-gray-600 mt-2 max-w-xs">
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
