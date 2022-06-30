import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { loadMovie } from "../store/actions/loadMovie";
import { useParams } from "react-router-dom";
import { Button, CardMedia, Typography } from "@mui/material";
import { Header } from "../components/Header";
import { AuthorisedPage } from "./AuthorisedPage";
import { setModalOpened } from "../store/slice/catalog";
import { VideoPlayerModal } from "../components/VideoPlayerModal";

function MoviePage() {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.catalog);
  const params = useParams();
  const movieId = params.id;

  const load = useCallback(() => {
    if (movieId) {
      dispatch(loadMovie(movieId));
    }
  }, [dispatch, movieId]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <AuthorisedPage>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "20%",
          marginTop: "70px",
        }}
      >
        <div>
          <CardMedia
            sx={{
              width: "220px",
              height: "330px",
              marginRight: "50px",
              marginTop: "20px",
            }}
            image={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movies.image}`}
          />
          <div style={{ width: "220px", marginTop: "10px" }}>
            <Button
              color="primary"
              size="large"
              variant="outlined"
              style={{ width: "220px", height: "50px" }}
              onClick={() => dispatch(setModalOpened(true))}
            >
              View Trailer
            </Button>
            <VideoPlayerModal onClose={() => dispatch(setModalOpened(false))} />
          </div>
        </div>
        <div style={{ width: "40%", height: "30%", marginRight: "20%" }}>
          <h1>{movies.title}</h1>
          <Typography style={{ marginBottom: "10px" }}>
            {movies.original_title}
          </Typography>
          <Typography style={{ marginBottom: "10px" }}>
            {movies.description}
          </Typography>
          <Typography style={{ marginBottom: "10px" }}>
            Director: {movies.director}
          </Typography>
          <Typography style={{ marginBottom: "10px" }}>
            Producer: {movies.producer}
          </Typography>
          <Typography style={{ marginBottom: "10px" }}>
            Release date: {movies.release_date}
          </Typography>
          <Typography style={{ marginBottom: "10px" }}>
            Running time: {movies.running_time}
          </Typography>
          <Typography style={{ marginBottom: "10px" }}>
            Rating Rotten tommatoes: {movies.rt_score}
          </Typography>
        </div>
      </div>
    </AuthorisedPage>
  );
}

export default MoviePage;
