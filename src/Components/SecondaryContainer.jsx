import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="  bg-black ">
      <div className="relative -mt-48">
        <MoviesList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MoviesList title="Upcomming Movies" movies={movies.upcomingMovies} />
        <MoviesList title="Top Rated" movies={movies.topRatedMovies} />
        <MoviesList title="Popular" movies={movies.popularMovies} />
        <MoviesList title="Horror" movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
