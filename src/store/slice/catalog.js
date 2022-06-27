import { createSlice } from "@reduxjs/toolkit";

export const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    movies: [],

  },
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    }
  }
});

export const {
  setMovies,
} = catalogSlice.actions;

export const catalogReducer = catalogSlice.reducer;
