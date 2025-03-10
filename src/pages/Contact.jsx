import React from "react";
import vector2 from "../images/Vector2.png";
import vector3 from "../images/Vector3.png";
import vector4 from "../images/Vector4.png";

function Contact() {
  return (
    <div className="h-[100vh] p-[60px] flex flex-col justify-evenly">
      <h1>Contact</h1>
      <div className="flex flex-col gap-[30px]">
        <p className="w-[50%] ">
          I'm currently looking to join a cross-functional team that values
          improving people's lives through accessible design. or have a project
          in mind? Let's connect.
        </p>
        <p>
          {" "}
          <a className=" " href="mailto:sayoojt99@gmail.com">
            {" "}
            sayoojt99@gmail.com
          </a>
        </p>
      </div>
      <div className=" flex flex-row justify-items-start gap-[20px]">
        <a href="">
          {" "}
          <img src={vector2} alt="" />
        </a>
        <a href="">
          {" "}
          <img src={vector3} alt="" />
        </a>
        <a href="">
          <img src={vector4} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
