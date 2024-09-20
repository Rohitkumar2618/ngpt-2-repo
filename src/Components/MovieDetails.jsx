import React from "react";
import { useSelector } from "react-redux";
import {
  Star,
  Calendar,
  Clock,
  Users,
  Play,
  Bookmark,
  Heart,
  List,
} from "lucide-react";
import Header from "./Header";

const MovieDetails = () => {
  const movie = useSelector((state) => state.movies.selectedMovie);

  if (!movie) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <p className="text-white text-2xl">Loading movie details...</p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row">
            {/* Movie Poster */}
            <div className="md:w-1/3 mb-8 md:mb-0">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            {/* Movie Info */}
            <div className="md:w-2/3 md:pl-8">
              <h1 className="text-4xl font-bold mb-2">
                {movie.title}{" "}
                <span className="text-gray-400">
                  ({new Date(movie.release_date).getFullYear()})
                </span>
              </h1>
              <div className="mb-4">
                <span className="bg-gray-700 text-sm px-2 py-1 rounded mr-2">
                  {movie.vote_average}
                </span>
                <span className="text-gray-400">
                  {movie.genres?.map((genre) => genre.name).join(", ")}
                </span>
              </div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold">
                    {Math.round(movie.vote_average * 10)}%
                  </span>
                </div>
                <span className="font-semibold mr-4">User Score</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 flex items-center">
                  What's your Vibe? <Play size={16} className="ml-2" />
                </button>
              </div>
              <div className="flex space-x-4 mb-6">
                <button className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300">
                  <List size={20} />
                </button>
                <button className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300">
                  <Heart size={20} />
                </button>
                <button className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300">
                  <Bookmark size={20} />
                </button>
                <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300 flex items-center">
                  <Play size={16} className="mr-2" /> Play Trailer
                </button>
              </div>
              {/* Tagline */}
              {movie.tagline && (
                <p className="text-gray-400 italic mb-4">{movie.tagline}</p>
              )}
              {/* Overview */}
              <h2 className="text-2xl font-semibold mb-2">Overview</h2>
              <p className="mb-4">{movie.overview}</p>
              {/* Creator (Director) */}
              {movie.director && (
                <div>
                  <h3 className="font-semibold">Director</h3>
                  <p>{movie.director}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
