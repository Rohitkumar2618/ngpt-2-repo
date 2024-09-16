import { useDispatch } from "react-redux";
import { API_OPTIONS, API_URL } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSclice";
import { useEffect } from "react";

// Fetch data from TMDB API updates store

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowMovies = async () => {
    try {
      const response = await fetch(API_URL, API_OPTIONS);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const json = await response.json();

      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNowMovies();
  }, []);
};

export default useNowPlayingMovies;
