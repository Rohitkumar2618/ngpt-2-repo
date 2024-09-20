import { configureStore } from "@reduxjs/toolkit";
// Corrected the typo here
import gptSlice from "./gptSlice";
import configSlice from "./configSlice";
import moviesSclice from "./moviesSclice";
import userSlice from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesSclice, // Make sure this matches the import
    gpt: gptSlice,
    config: configSlice,
  },
});

export default appStore;
