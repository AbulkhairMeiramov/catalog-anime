import { createSlice } from "@reduxjs/toolkit";

export const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    movies: [],
    search: "",
    error: null,
    modalOpened: false,
  },
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setModalOpened(state, action) {
      state.modalOpened = action.payload;
    },
  },
});

export const { setMovies, setSearch, setError, setModalOpened } =
  catalogSlice.actions;

export const catalogReducer = catalogSlice.reducer;
