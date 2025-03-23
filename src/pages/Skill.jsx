import React from "react";
import img1 from "../images/Rectangle 1.png";
import img2 from "../images/Rectangle 2.png";
import img3 from "../images/Rectangle 3.png";
import img4 from "../images/Rectangle 4.png";
import img6 from "../images/Rectangle 6.png";
import img7 from "../images/Rectangle 7.png";
import NodeIcon from "../images/icons/NodeIcon";
import NodeIconTwo from "../images/icons/NodeIconTwo";
import NodeIconThree from "../images/icons/NodeIconThree";
import NodeIconFour from "../images/icons/NodeIconFour";
import NodeIconFive from "../images/icons/NodeIconFive";
import NodeIconSix from "../images/icons/NodeIconSix";
import Global from "../images/icons/Global";

function Skill() {
  const imageData = [
    {
      id: "1",
      image: img1,
      nodeImage: <NodeIcon />,
    },
    {
      id: "2",
      image: img2,
      nodeImage: <NodeIconTwo />,
    },
    {
      id: "3",
      image: img3,
      nodeImage: <NodeIconThree />,
    },
    {
      id: "4",
      image: img4,
      nodeImage: <NodeIconFour />,
    },
    {
      id: "5",
      image: img6,
      nodeImage: <NodeIconFive />,
    },
    {
      id: "6",
      image: img7,
      nodeImage: <NodeIconSix />,
    },
  ];
  return (
    <div className="h-[100vh] p-[20px] wrapper flex flex-col align-middle  ">
      <div className="mb-10">
        <h1 className="text-center text-[30px] xl:text-[25px] custom:text-red-600 ">
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

      <div className="flex justify-center relative gap-[40px]">
        {imageData.map((item, index) => {
          const nodeStyles =
            {
              5: { left: "-95px", top: "56px" },
              4: { left: "-44px", top: "58px" },
              3: { top: "57px" },
              2: { top: "57px", left: "30px" },
              1: { top: "57px", left: "30px" },
              0: { top: "57px", left: "30px" },
            }[index] || {};

          return (
            <div className="relative" key={index}>
              <div className="bg-[#251C31] w-[60px] h-[60px] flex justify-center items-center rounded-full mb-5">
                <img src={item.image} alt="company image" />
              </div>
              <div className="absolute" style={nodeStyles}>
                {item.nodeImage}
              </div>
            </div>
          );
        })}
        <div className="absolute top-[-150px]">
          <Global />
        </div>
      </div>
    </div>
  );
}

export default Skill;
