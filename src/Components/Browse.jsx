import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useNowPopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";

import Header from "./Header";
import MainContainer from "./MainContainer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  useNowPopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />

      {showGptSearch ? <GptSearch /> : <MainContainer />}

      {/* 
      
      mainComtainer
        - VideoBackground
        - videoTItle
        -Secondary Container
          - Movieslist * n
          - cards * n 
       */}
    </div>
  );
};

export default Browse;
