import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useMovieTrailer } from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieID }) => {
  const trailerVideo = useSelector((state) => state.movies.trailerVideo);
  const [error, setError] = useState(null);

  // Fetch the trailer video
  useMovieTrailer(movieID, setError);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Display error if there's an issue */}
      {error && (
        <p className="absolute top-4 left-4 text-red-500 z-10 bg-black bg-opacity-50 p-2 rounded">
          {error}
        </p>
      )}
      {/* Display the trailer video */}
      {trailerVideo ? (
        <iframe
          className="w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1`}
          title={trailerVideo.name}
          allow="autoplay"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="flex items-center justify-center w-full h-full bg-black">
          <p className="text-white text-xl">Loading trailer...</p>
        </div>
      )}
    </div>
  );
};

export default VideoBackground;
