import { useDispatch } from "react-redux";
import { API_OPTIONS, API_UPCOMING } from "../utils/constant";

import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/moviesSclice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getNowUpcoming = async () => {
    try {
      const response = await fetch(API_UPCOMING, API_OPTIONS);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const json = await response.json();
      dispatch(addUpcomingMovies(json.results)); // Correct action
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNowUpcoming();
  }, [dispatch]); // Added dispatch to dependency array
};

export default useUpcomingMovies;
