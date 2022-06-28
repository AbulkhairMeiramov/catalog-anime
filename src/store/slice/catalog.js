import { createSlice } from "@reduxjs/toolkit";

export const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    movies: [],
    search: "",

  },
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },
    setSearch(state,action) { 
      state.search = action.payload;
    },

  }
});

export const {
  setMovies,
  setSearch,

} = catalogSlice.actions;

export const catalogReducer = catalogSlice.reducer;
