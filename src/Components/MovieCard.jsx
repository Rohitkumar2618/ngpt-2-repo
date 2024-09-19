import React from "react";
import { API_OPTIONS, API_URL, IMG_CDN_URL } from "../utils/constant";
import { Play, Info } from "lucide-react";

const MovieCard = ({ posterPath, title }) => {
  return (
    <div className="relative w-48 h-72 rounded-md overflow-hidden group transition-transform duration-300 ease-in-out  transform hover:scale-105  hover:z-10">
      {posterPath ? (
        <img
          className="w-full h-full object-cover"
          src={IMG_CDN_URL + posterPath}
          alt={title || "Movie Poster"}
        />
      ) : (
        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
          <p className="text-gray-400 text-sm text-center px-4">
            Image not available
          </p>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
          <h3 className="text-white font-bold text-lg truncate">{title}</h3>
          <div className="flex space-x-2">
            <button className="bg-white text-black px-4 py-1 rounded-md flex items-center text-sm font-semibold hover:bg-opacity-80 transition-colors">
              <Play size={16} className="mr-1" /> Play
            </button>
            <button className="bg-gray-500 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors">
              <Info size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
