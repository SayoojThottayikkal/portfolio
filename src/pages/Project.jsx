import React from "react";
import project from "../images/project3.png";
import project2 from "../images/Mask group.png";
import project3 from "../images/Portfolio.png";
import project4 from "../images/project2.png";

function Project() {
  return (
    <div className="h-[200vh] flex flex-col justify-evenly align-middle bgimagegradient  ">
      <div className=" flex justify-center align-middle p-[20px]">
        <div className="w-[50%] z-[2]">
          <h5 className="text-[#a471e1] text-[20px] text-bold ">
            Featured Project
          </h5>
          <h1>Example Project</h1>
          <p className="  p-[20px] bgprojectp relative  w-[98%]   ">
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
        <div className="bgimagegradient relative bgimagegradient left-[-5%] z-[1]  ">
          <img src={project4} alt="" className="rounded-t-[20px] " />
          <img src={project2} alt="" className=" absolute top-[0] " />
        </div>
      </div>
      {/* next */}
      <div className=" flex justify-center align-middle p-[20px] ">
        <div className="bgimagegradient  bgimagegradient relative right-[-5%]   ">
          <img src={project3} alt="" className="rounded-t-[20px] " />
        </div>
        <div className="w-[50%] z-[2] text-right ">
          <h5 className="text-[#a471e1] text-[20px] text-bold ">
            Featured Project
          </h5>
          <h1>Example Project</h1>
          <p className="  p-[20px] bgprojectp2 relative  text-left w-[98%] ">
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
