import React from "react";
import { useSelector } from "react-redux";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestion from "./GptMoviesSuggestion";
import { BG_URL } from "../utils/constant";
import lang from "../utils/languageConstant";

const GptSearch = () => {
  const selectedLanguage = useSelector((state) => state.config.lang);

  const titleText =
    lang[selectedLanguage]?.GptSearchTitle || "Your Word Our Suggestions";

  return (
    <div className="w-full h-screen relative">
      <img
        src={BG_URL}
        alt="Background"
        className="w-full h-screen object-cover absolute"
      />
      <div className="absolute inset-0 bg-[#080302] bg-opacity-60">
        <h1 className="text-5xl font-bold text-white text-center mt-[5%]">
          {titleText}
        </h1>
        <GptMoviesSuggestion />
        <GptSearchBar />
      </div>
    </div>
  );
};

export default GptSearch;
