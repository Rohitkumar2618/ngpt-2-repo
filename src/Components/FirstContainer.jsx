import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const FirstContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  // Ensure movies is defined and has at least one element
  if (!movies || movies.length === 0) {
    return <div>Loading...</div>; // or any fallback UI
  }

  const mainMovie = movies[0];

  // Ensure mainMovie is defined before destructuring
  const { original_title = "", overview = "", id = "" } = mainMovie || {};

  return (
    <div className="w-full h-full">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieID={id} />
    </div>
  );
};

export default FirstContainer;
