// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { GEMINI_API_KEY } from "../utils/constant";
// import { useSelector, useDispatch } from "react-redux";
// import { setMovieSuggestions } from "../utils/gptSlice";
// import lang from "../utils/languageConstant";
// import { useRef, useState } from "react";
// import { API_OPTIONS } from "../utils/constant";

// const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

// const fetchGeminiResponse = async (userQuery) => {
//   try {
//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//     const result = await model.generateContent(userQuery);
//     const response = await result.response;
//     return response.text();
//   } catch (error) {
//     console.error("Error interacting with Gemini API:", error);
//     throw error;
//   }
// };

// const GptSearchBar = () => {
//   const searchText = useRef(null);
//   const [loading, setLoading] = useState(false);
//   const dispatch = useDispatch();

//   const selectedLanguage = useSelector((state) => state.config.lang);

//   const searchMovieTMDB = async (movie) => {
//     const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
//       movie
//     )}&include_adult=false&language=en-US&page=1&api_key=${API_OPTIONS}`;

//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error("Error fetching movie data:", error);
//     }
//   };

//   const placeholderText =
//     lang[selectedLanguage]?.GptSearchPlaceholder || "Enter something here...";
//   const buttonText = lang[selectedLanguage]?.search || "Search";

//   const handleGptSearchClick = async () => {
//     const queryValue = searchText.current.value.trim();

//     if (!queryValue) {
//       alert("Please enter a movie query!");
//       return;
//     }

//     const getQuery = `Act as a movie recommendation system and suggest some movies for the query: ${queryValue}. Only give me the names of 5 movies, comma-separated, like the example result given ahead. Example result: Gadar, Don, Raone, Golmal, Koi Mil Gaya`;

//     try {
//       setLoading(true);
//       const result = await fetchGeminiResponse(getQuery);
//       const gptMovies = result.split(",").map((movie) => movie.trim());
//       dispatch(setMovieSuggestions(gptMovies));
//       const promiseArray = gptMovies.map((movie) => searchMovieTMDB());
//       const tmdbResult = await Promise.all(promiseArray);
//       console.log(tmdbResult);
//     } catch (error) {
//       console.error("Error fetching Gemini result:", error);
//       dispatch(setMovieSuggestions([]));
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-full h-12 fixed bottom-4 left-0">
//       <div className="">
//         <form
//           className="flex items-center justify-center h-full text-black"
//           onSubmit={(e) => e.preventDefault()}
//         >
//           <input
//             type="text"
//             ref={searchText}
//             placeholder={placeholderText}
//             className="w-2/3 p-2 border border-gray-300 rounded-md"
//           />
//           <button
//             onClick={handleGptSearchClick}
//             className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//             disabled={loading}
//           >
//             {loading ? "Loading..." : buttonText}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default GptSearchBar;

import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "../utils/constant";
import { useSelector, useDispatch } from "react-redux";
import { setMovieSuggestions, setTmdbResults } from "../utils/gptSlice";
import lang from "../utils/languageConstant";
import { useRef, useState } from "react";
import { API_OPTIONS } from "../utils/constant";
import { testApiKeys } from "../utils/apiKeyTester";

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const fetchGeminiResponse = async (userQuery) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(userQuery);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error interacting with Gemini API:", error);
    throw error;
  }
};

const GptSearchBar = () => {
  const searchText = useRef(null);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const dispatch = useDispatch();

  const selectedLanguage = useSelector((state) => state.config.lang);

  const searchMovieTMDB = async (movie) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      movie
    )}&include_adult=false&language=en-US&page=1`;

    try {
      const response = await fetch(url, API_OPTIONS);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.results[0]; // Return only the first result
    } catch (error) {
      console.error("Error fetching movie data:", error);
      throw error;
    }
  };

  const placeholderText =
    lang[selectedLanguage]?.GptSearchPlaceholder || "Enter something here...";
  const buttonText = lang[selectedLanguage]?.search || "Search";

  const handleGptSearchClick = async () => {
    const queryValue = searchText.current.value.trim();

    if (!queryValue) {
      alert("Please enter a movie query!");
      return;
    }

    setApiError(null);
    const getQuery = `Act as a movie recommendation system and suggest some movies for the query: ${queryValue}. Only give me the names of 5 movies, comma-separated, like the example result given ahead. Example result: Gadar, Don, Raone, Golmal, Koi Mil Gaya`;

    try {
      setLoading(true);
      const result = await fetchGeminiResponse(getQuery);
      const gptMovies = result.split(",").map((movie) => movie.trim());
      dispatch(setMovieSuggestions(gptMovies));

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      dispatch(setTmdbResults(tmdbResults.filter(Boolean)));
    } catch (error) {
      console.error("Error fetching results:", error);
      dispatch(setMovieSuggestions([]));
      dispatch(setTmdbResults([]));

      // Test API keys if an error occurs
      const apiTestResults = await testApiKeys();
      if (!apiTestResults.gemini.valid) {
        setApiError(`Gemini API Key Invalid: ${apiTestResults.gemini.error}`);
      } else if (!apiTestResults.tmdb.valid) {
        setApiError(`TMDB API Key Invalid: ${apiTestResults.tmdb.error}`);
      } else {
        setApiError("An unknown error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="  w-full p-10  fixed left-1/2 transform -translate-x-1/2 bottom-0">
      <form
        className="w-full  flex justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 flex-grow rounded-md bg-black text-white"
          placeholder={placeholderText}
        />
        <button
          className="m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {loading ? "Loading..." : buttonText}
        </button>
      </form>
      {apiError && (
        <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {apiError}
        </div>
      )}
    </div>
  );
};

export default GptSearchBar;
