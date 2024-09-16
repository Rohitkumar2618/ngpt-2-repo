import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />

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
