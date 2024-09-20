import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    movieSuggestions: [],
  },
  reducers: {
    setMovieSuggestions: (state, action) => {
      state.movieSuggestions = action.payload;
    },
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    setTmdbResults: (state, action) => {
      state.tmdbResults = action.payload;
    },
  },
});

export const { setMovieSuggestions, toggleGptSearchView, setTmdbResults } =
  gptSlice.actions;
export default gptSlice.reducer;
