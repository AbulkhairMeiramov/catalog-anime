import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCatalog } from "../store/actions/loadCatalog";
import { GhibliCard } from "./GhibliCard";

export const GhibliGrid = () => {
  const { movies } = useSelector((state) => state.catalog);
  const dispatch = useDispatch();

  const load = useCallback(() => {
    dispatch(loadCatalog());
  }, [dispatch]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <>
      <Typography
        component="h1"
        variant="h4"
        mt={2}
        textAlign="center"
        color="#388e3c"
      >
        The Movies
      </Typography>
      <Box sx={{ marginTop: "16px" }}>
        <Container maxWidth="md">
          <Grid container spacing={2} justifyContent="center">
            {movies?.map((movie) => (
              <GhibliCard movie={movie} key={movie.id} />
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};
