import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { loadMovie } from "../store/actions/loadMovie";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Header } from "../components/Header";
import { AuthorisedPage } from "./AuthorisedPage";
import { setModalOpened } from "../store/slice/catalog";
import { VideoPlayerModal } from "../components/VideoPlayerModal";
import { Container } from "@mui/system";
import { ContentCopy } from "@mui/icons-material";
import { Footer } from "../components/Footer";

function MoviePage() {
  const dispatch = useDispatch();
  const { movie } = useSelector((state) => state.catalog);
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
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: " center",
          alignItems: "center",
          marginTop: "15px",
        }}
      >
        {!movie && "loading..."}
        {movie && (
          <Grid item xs={12} sm={6} md={4}>
          <div
            style={{
              display: "flex",
              justifyContent: " center",
              alignItems: "center",
            }}
          >
            <Card sx={{ height: "100%", width: 390 }}>
              <CardMedia
                sx={{ paddingTop: "150%" }}
                image={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.image}`}
              />
              <CardActions sx={{justifyContent: "center"}}>
              <Button
                color="success"
                size="large"
                variant="outlined"
                onClick={() => dispatch(setModalOpened(true))}
              >
                View Trailer
              </Button>
              <VideoPlayerModal
                onClose={() => dispatch(setModalOpened(false))}
              />
              </CardActions>
            </Card>
          </div>
          <div style={{ marginTop: "15px" }}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h5" sx={{ marginBottom: "10px" }}>
                  {movie.title}
                </Typography>
                <Typography sx={{ marginBottom: "10px" }}>{movie.original_title}</Typography>
                <Typography sx={{ marginBottom: "10px" }}>{movie.description}</Typography>
                <Typography sx={{ marginBottom: "10px" }}>Director: {movie.director}</Typography>
                <Typography sx={{ marginBottom: "10px" }}>Producer: {movie.producer}</Typography>
                <Typography sx={{ marginBottom: "10px" }}>Release date: {movie.release_date}</Typography>
                <Typography sx={{ marginBottom: "10px" }}>Running time: {movie.running_time}</Typography>
                <Typography sx={{ marginBottom: "10px" }}>
                  Rating Rotten tommatoes: {movie.rt_score}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
        
        )}
      </Container>
      <Footer/>
    </AuthorisedPage>
  );
}

export default MoviePage;
