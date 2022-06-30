import axios from "axios";

export function fetchMovie(movieId) {
  return axios
    .get(`https://ghibliapi.herokuapp.com/films/${movieId}`)
    .then((res) => {
      return res.data;
    });
}
