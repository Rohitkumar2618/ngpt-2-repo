import React from "react";
import { useSelector } from "react-redux";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestion from "./GptMoviesSuggestion";
import { BG_URL } from "../utils/constant";
import lang from "../utils/languageConstant";

const GptSearch = () => {
  // Access the selected language from Redux store
  const selectedLanguage = useSelector((state) => state.config.lang);

  // Get the correct title based on the selected language
  const titleText =
    lang[selectedLanguage]?.GptSearchTitle || "Your Word Our Suggestions"; // fallback to English if not found

  return (
    <div className="w-full h-screen">
      <img
        src={BG_URL}
        alt="Background"
        className="w-full h-screen object-cover"
      />
      <h1 className="fixed text-5xl font-bold text-white left-[30%] top-[20%]">
        {titleText}
      </h1>

      <GptMoviesSuggestion />
      <GptSearchBar />
    </div>
  );
};

export default GptSearch;
