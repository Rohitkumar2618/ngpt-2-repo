import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const GptSearchBar = () => {
  // Access the selected language from Redux store
  const selectedLanguage = useSelector((state) => state.config.lang);

  // Get the correct placeholder and button text based on the selected language
  const placeholderText =
    lang[selectedLanguage]?.GptSearchPlaceholder || "Enter something here...";
  const buttonText = lang[selectedLanguage]?.search || "Search"; // fallback to English if language is not found

  return (
    <div className="w-full h-12 fixed bottom-4 left-0">
      <div className="flex items-center justify-center h-full">
        <input
          type="text"
          placeholder={placeholderText}
          className="w-2/3 p-2 border border-gray-300 text-white rounded-md"
        />
        <button className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
