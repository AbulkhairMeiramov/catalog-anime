import { setMovie, setError } from "../slice/catalog";
import { fetchMovie } from "../../fetchers/fetchMovie";

export const loadMovie = (movieId) => async (dispatch) => {
  try {
    const movie = await fetchMovie(movieId);
    dispatch(setMovie(movie));
  } catch (e) {
    console.error(e);
    dispatch(setError("Something went wrong"));
  }
};
