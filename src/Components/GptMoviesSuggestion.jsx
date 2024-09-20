import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GptMoviesSuggestion = () => {
  const tmdbResults = useSelector((state) => state.gpt?.tmdbResults || []);

  if (tmdbResults.length === 0) {
    return null;
  }

  return (
    <div className="p-6 bg-gradient-to-b  text-white">
      <div className="text-3xl font-extrabold text-center mb-6">
        Recommended Movies
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {tmdbResults.map((movie, index) => (
          <MovieCard
            key={movie.id || index}
            title={movie.title}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMoviesSuggestion;
