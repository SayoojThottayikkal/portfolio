import React from "react";
import project from "../images/project3.png";
import project2 from "../images/Mask group.png";
import project3 from "../images/Portfolio.png";
import project4 from "../images/project2.png";

function Project() {
  return (
    <div className="min-h-screen flex flex-col justify-evenly items-center bgimagegradient p-6  ">
      <div className=" flex flex-col md:flex-row justify-center items-center p-6 w-full max-w-5xl ">
        <div className="md:w-1/2 z-10 text-center md:text-left">
          <h5 className="text-[#a471e1] text-lg text-bold ">
            Featured Project
          </h5>
          <h1 className="text-2xl font-semibold">Example Project</h1>
          <p className=" p-4 bg-gradient-to-t from-purple-990 via-purple-950 to-violet-980 relative w-full md:w-[98%] rounded-lg shadow-lg   ">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </p>
          <span className="flex justify-center md:justify-start p-2 gap-2">
            <img src={project} alt="" className="h-5" />
            <img src={project} alt="" className="h-5" />
          </span>
        </div>
        <div className="bgimagegradient relative md:w-1/2 flex justify-center mt-6 md:mt-0 ">
          <img src={project4} alt="" className="rounded-t-lg shadow-lg" />
          <img
            src={project2}
            alt=""
            className=" absolute top-0 left-0 w-full h-full "
          />
        </div>
      </div>
      {/* next */}
      <div className=" flex   flex-col-reverse   md:flex-row justify-center items-center p-6 w-full max-w-5xl">
        <div className="bgimagegradient  relative md:w-1/2 flex justify-center mt-6 md:mt-0   ">
          <img src={project3} alt="" className="rounded-t-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 z-10 text-center md:text-left ">
          <h5 className="text-[#a471e1] text-lg font-bold ">
            Featured Project
          </h5>
          <h1 className="text-2xl font-semibold">Example Project</h1>
          <p className="  p-4 bg-gradient-to-t from-purple-990 via-purple-950 to-violet-980 relative w-full md:w-[98%] rounded-lg shadow-lg ">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </p>
          <span className="flex justify-center md:justify-end p-2 gap-2">
            <img src={project} alt="" className="h-5" />
            <img src={project} alt="" className="h-5" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Project;
