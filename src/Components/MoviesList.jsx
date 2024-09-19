import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="mb-8 pl-8 ">
      <h2 className="text-2xl font-bold pl-2 text-white mb-4">{title}</h2>
      <div className="relative">
        <div className="flex  overflow-x-scroll scrollbar-hide">
          <div className="flex space-x-4 p-2">
            {movies && movies.length > 0 ? (
              movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  posterPath={movie.poster_path}
                  title={movie.title}
                />
              ))
            ) : (
              <p className="text-white">No movies available</p>
            )}
          </div>
        </div>
        <div className="absolute top-0 bottom-0 right-0 bg-gradient-to-l from-black to-transparent w-24"></div>
      </div>
    </div>
  );
};

export default MoviesList;
