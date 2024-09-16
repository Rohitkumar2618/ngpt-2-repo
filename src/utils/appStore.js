import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSclice from "./moviesSclice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesSclice,
  },
});

export default appStore;
