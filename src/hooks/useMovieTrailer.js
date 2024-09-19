// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { API_OPTIONS } from "../utils/constant";
// import { addTrailervideo } from "../utils/moviesSclice";

// export const useMovieTrailer = (movieID) => {
//   const dispatch = useDispatch();

//   const getMovieVideos = async () => {
//     const data = await fetch(
//       `https://api.themoviedb.org/3/movie/${movieID}/videos`,
//       API_OPTIONS
//     );
//     const json = await data.json();

//     const filterData = json.results.filter((video) => video.type === "Trailer");

//     const trailer = filterData.length ? filterData[0] : json.results[0];

//     dispatch(addTrailervideo(trailer));
//   };

//   useEffect(() => {
//     getMovieVideos();
//   }, []);
// };

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailervideo } from "../utils/moviesSclice";

export const useMovieTrailer = (movieID, setError) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieID}/videos`,
        API_OPTIONS
      );

      if (!response.ok) {
        throw new Error("Failed to fetch the trailer");
      }

      const json = await response.json();

      const filterData = json.results.filter(
        (video) => video.type === "Trailer"
      );

      const trailer = filterData.length ? filterData[0] : null;

      if (trailer) {
        dispatch(addTrailervideo(trailer));
      } else {
        setError("No trailer available");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    if (movieID) {
      getMovieVideos();
    }
  }, [movieID]); // Re-fetch when movieID changes
};
