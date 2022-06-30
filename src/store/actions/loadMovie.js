import { setMovies, setError } from "../slice/catalog";
import { fetchMovie } from "../../fetchers/fetchMovie";

export const loadMovie = (movieId) => async (dispatch) => {
  try {
    const movies = await fetchMovie(movieId);
    dispatch(setMovies(movies));
  } catch (e) {
    console.error(e);
    dispatch(setError("Something went wrong"));
  }
};
