import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY, API_OPTIONS } from "./constant";

export const testApiKeys = async () => {
  const results = {
    gemini: { valid: false, error: null },
    tmdb: { valid: false, error: null },
  };

  // Test Gemini API
  try {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    await model.generateContent("Test");
    results.gemini.valid = true;
  } catch (error) {
    results.gemini.error = error.message;
  }

  // Test TMDB API
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/550",
      API_OPTIONS
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    await response.json();
    results.tmdb.valid = true;
  } catch (error) {
    results.tmdb.error = error.message;
  }

  return results;
};
