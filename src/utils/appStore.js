import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSclice from "./moviesSclice";
import gptSlice from "./gptSlice";
import configSlice from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesSclice,
    gpt: gptSlice,
    config: configSlice,
  },
});

export default appStore;
