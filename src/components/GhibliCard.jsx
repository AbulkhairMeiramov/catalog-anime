import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { LinkBase } from "./styles/LinkBase";

export const GhibliCard = ({ movie }) => {
  return (
    <>
      <Grid item key={movie.id} xs={12} sm={6} md={4}>
        <Card sx={{ height: "100%"}}>
        <LinkBase to={`/home/${movie.id}`}>
          <CardMedia
            sx={{ paddingTop: "150%" }}
            image={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.image}`}
            title={movie.title}
          />
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {movie.title}
            </Typography>
            <Typography>{movie.release_date}</Typography>
          </CardContent>
          </LinkBase>
          {/* <div className="card-bottom">
            <h4>{movie.title}</h4>
            <p>{movie.release_date}</p>
          </div> */}
        </Card>
      </Grid>
    </>
  );
};
