import { useDispatch } from "react-redux";
import { API_OPTIONS, API_POPULAR } from "../utils/constant";

import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSclice";

const useNowPopularMovies = () => {
  const dispatch = useDispatch();
  const getNowPopular = async () => {
    try {
      const response = await fetch(API_POPULAR, API_OPTIONS);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const json = await response.json();
      dispatch(addPopularMovies(json.results)); // Correct action
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNowPopular();
  }, [dispatch]); // Added dispatch to dependency array
};

export default useNowPopularMovies;
