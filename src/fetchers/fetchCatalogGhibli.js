import axios from "axios";

export const fetchCatalogGhibli = () => {
  return axios.get(`https://ghibliapi.herokuapp.com/films`).then((res) => {
    return res.data;
  });
};
