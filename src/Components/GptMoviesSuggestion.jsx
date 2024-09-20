import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";
import { setMovieDetails } from "../utils/moviesSclice";

const GptMoviesSuggestion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMovieClick = (movie) => {
    dispatch(setMovieDetails(movie)); // Save movie details in Redux store
    navigate(`/movie/${movie.id}`); // Navigate to the movie details page
  };

  const tmdbResults = useSelector((state) => state.gpt?.tmdbResults || []);

  if (tmdbResults.length === 0) {
    return null; // Render nothing if no movies are available
  }

  return (
    <div className="p-6 bg-gradient-to-b text-white">
      <div className="text-3xl font-extrabold text-center mb-6">
        Recommended Movies
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {tmdbResults.map((movie) => (
          <MovieCard
            title={movie.title}
            posterPath={movie.poster_path}
            key={movie.id} // Unique key for each movie card
            movie={movie} // Pass the full movie object to MovieCard
            onClick={() => handleMovieClick(movie)} // Pass handleMovieClick as prop
          />
        ))}
      </div>
    </div>
  );
};

export default GptMoviesSuggestion;
