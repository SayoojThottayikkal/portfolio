import React from "react";
import project from "../images/project3.png";
import project2 from "../images/Mask group.png";
import project3 from "../images/Portfolio.png";
import project4 from "../images/project2.png";

function Project() {
  return (
    <div className="h-[150vh] flex flex-col justify-evenly align-middle bgimagegradient xl:h-[190vh] 2xl:h-[170vh]  ">
      <div className=" flex justify-center align-middle p-[20px] xl:p-[60px]">
        <div className="w-[50%] z-[2]">
          <h5 className="text-[#a471e1] text-[20px] text-bold ">
            Featured Project
          </h5>
          <h1>Example Project</h1>
          <p className="  p-[20px] bgprojectp relative lg:w-[100%] lg:text-[12px] xl:text-[14px] 2xl:p-[30px] 2xl:w-[90%]  ">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </p>
          <span className="flex justify-items-start p-2 gap-1">
            <img src={project} alt="" className="h-[20px]" />
            <img src={project} alt="" className="h-[20px]" />
          </span>
        </div>
        <div className="bgimagegradient relative bgimagegradient left-[-5%] z-[1] xl:h-[100px] ">
          <img src={project4} alt="" className="rounded-t-[20px] " />
          <img src={project2} alt="" className=" absolute top-[0] " />
        </div>
      </div>
      {/* next */}
      <div className=" flex justify-center align-middle p-[20px] ">
        <div className="bgimagegradient  bgimagegradient relative right-[-5%] xl:h-[100px]  ">
          <img src={project3} alt="" className="rounded-t-[20px] " />
        </div>
        <div className="w-[50%] z-[2] text-right ">
          <h5 className="text-[#a471e1] text-[20px] text-bold ">
            Featured Project
          </h5>
          <h1>Example Project</h1>
          <p className="  p-[20px] bgprojectp2 relative  text-left lg:w-[100%] lg:text-[12px] 2xl:p-[30px] xl:text-[14px] 2xl:w-[90%] 2xl:right-[-10%]  ">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </p>
          <span className="flex justify-end p-2 gap-1">
            <img src={project} alt="" className="h-[20px]" />
            <img src={project} alt="" className="h-[20px]" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Project;
