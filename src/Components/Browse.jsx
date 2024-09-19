import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useNowPopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

import Header from "./Header";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPlayingMovies();
  useNowPopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer />

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
