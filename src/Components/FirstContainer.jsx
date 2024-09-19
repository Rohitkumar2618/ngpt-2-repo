import React, { useState, useEffect } from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const FirstContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const [randomMovie, setRandomMovie] = useState(null);

  // Ensure movies are loaded and select a random movie
  useEffect(() => {
    if (movies && movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setRandomMovie(movies[randomIndex]);
    }
  }, [movies]);

  // Ensure randomMovie is defined
  if (!randomMovie) {
    return <div>Loading...</div>; // or any fallback UI
  }

  const { original_title = "", overview = "", id = "" } = randomMovie;

  return (
    <div className="w-full h-full">
      {/* Pass the title and overview to VideoTitle */}
      <VideoTitle title={original_title} overview={overview} />
      {/* Pass the selected movie ID to VideoBackground */}
      <VideoBackground movieID={id} />
    </div>
  );
};

export default FirstContainer;
