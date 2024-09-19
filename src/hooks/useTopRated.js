import { useDispatch } from "react-redux";
import { API_OPTIONS, API_POPULAR, API_TOP_RATED } from "../utils/constant";

import { useEffect } from "react";
import { addPopularMovies, addTopRatedMovies } from "../utils/moviesSclice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getNowTopRated = async () => {
    try {
      const response = await fetch(API_TOP_RATED, API_OPTIONS);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const json = await response.json();
      dispatch(addTopRatedMovies(json.results)); // Correct action
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNowTopRated();
  }, [dispatch]); // Added dispatch to dependency array
};

export default useTopRatedMovies;
