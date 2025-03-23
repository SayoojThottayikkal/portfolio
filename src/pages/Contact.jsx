import React from "react";
import vector2 from "../images/Vector2.png";
import vector3 from "../images/linkedin.png";
import vector4 from "../images/git.png";
import vector5 from "../images/whatsapp (2).png";

function Contact() {
  return (
    <div className="h-[100vh] p-[60px] flex flex-col justify-evenly">
      <h1 className="text-[40px]">Contact</h1>
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
        <p>
          <a href="tel:+916238268561">+916238268561</a>
        </p>
      </div>
      <div className=" flex flex-row justify-items-start gap-[20px] ">
        <a href=" https://www.instagram.com/_sayooj_99 " target="_blank">
          {" "}
          <img src={vector2} alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/sayooj-t-52a63b257/"
          target="_blank"
          className="h-[10px] w-[20px]"
        >
          {" "}
          <img src={vector3} alt="" />
        </a>
        <a
          href="https://github.com/sayoojthottayikkal"
          target="_blank"
          className="h-[10px] w-[20px]"
        >
          <img src={vector4} alt="" />
        </a>
        <a
          href="https://wa.me/6238268561"
          target="_blank"
          className="h-[10px] w-[20px]"
        >
          <img src={vector5} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
