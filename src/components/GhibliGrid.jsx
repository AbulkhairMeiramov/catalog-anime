import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalogGhibli } from "../fetchers/fetchCatalogGhibli";
import { setMovies } from "../store/slice/catalog";
import { GhibliCard } from "./GhibliCard";

export const GhibliGrid = () => {
  const { movies } = useSelector((state) => state.catalog);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCatalogGhibli().then((data) => {
      dispatch(setMovies(data));
    });
  }, [dispatch]);
  console.log(movies);

  return (
    <>
      <Box sx={{ marginTop: "100px" }}>
        
        <Container>
          <Grid container spacing={2} justifyContent="center" >
            {movies.map((movie) => (
              <GhibliCard movie={movie} key={movie.id} />
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};
