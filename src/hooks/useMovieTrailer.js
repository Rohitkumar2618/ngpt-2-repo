import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailervideo } from "../utils/moviesSclice";

export const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/videos`,
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");

    const trailer = filterData.length ? filterData[0] : json.results[0];

    dispatch(addTrailervideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};
