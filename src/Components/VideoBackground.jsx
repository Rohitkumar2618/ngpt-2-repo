import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useMovieTrailer } from "../hooks/useMovieTrailer";

// const VideoBackground = ({ movieID }) => {
//   const trailerVideo = useSelector((state) => state.movies.trailerVideo);
//   const [error, setError] = useState(null);

//   useMovieTrailer(movieID, setError);

//   return (
//     <div className="fixed  w-screen h-full overflow-hidden">
//       {error && (
//         <p className="absolute top-4 left-4 text-red-500 z-10 bg-black bg-opacity-50 p-2 rounded">
//           {error}
//         </p>
//       )}

//       {trailerVideo ? (
//         <div className="">
//           <iframe
//             className="w-screen h-screen object-cover"
//             src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1`}
//             title={trailerVideo.name}
//             allow="autoplay "
//             allowFullScreen
//           ></iframe>
//         </div>
//       ) : (
//         <div className="flex items-center justify-center w-full h-full bg-black">
//           <p className="text-white text-xl">Loading trailer...</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VideoBackground;

import React from "react";

const VideoBackground = ({ movieID }) => {
  const trailerVideo = useSelector((state) => state.movies.trailerVideo);
  const [error, setError] = useState(null);

  useMovieTrailer(movieID, setError);
  return (
    <div className="fixed w-full  overflow-hidden">
      {error && (
        <p className="absolute top-4 left-4 text-red-500 z-10 bg-black bg-opacity-50 p-2 rounded">
          {error}
        </p>
      )}

      {trailerVideo ? (
        <iframe
          className="w-screen h-screen object-cover"
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
