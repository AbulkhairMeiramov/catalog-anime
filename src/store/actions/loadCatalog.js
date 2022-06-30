import { setMovies, setError } from "../slice/catalog";
import { fetchCatalogGhibli } from "../../fetchers/fetchCatalogGhibli";

export const loadCatalog = () => async (dispatch) => {
  try {
    const movies = await fetchCatalogGhibli();
    dispatch(setMovies(movies));
  } catch (e) {
    console.error(e);
    dispatch(setError("Something went wrong"));
  }
};
