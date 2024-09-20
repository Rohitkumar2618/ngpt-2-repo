import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="relative   w-screen  pt[20%]  z-10 text-white top-40  ">
      <div className="pt-14 px-12 absolute">
        <h1 className=" text-6xl font-bold ">{title}</h1>
        <h4 className="py-6 text-lg w-1/2">{overview}</h4>
        <div className="space-x-4">
          <button className="px-6 py-2 bg-white text-black font-bold rounded-md shadow-md hover:bg-gray-300 transition duration-200">
            ▶ Play
          </button>
          <button className="px-6 py-2 bg-gray-700 text-white font-bold rounded-md shadow-md hover:bg-gray-600 transition duration-200">
            More info ℹ️
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
