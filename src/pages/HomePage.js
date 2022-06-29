import React from "react";
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { Container } from "@mui/system";
import { AuthorisedPage } from "./AuthorisedPage";
import { GhibliGrid } from "../components/GhibliGrid";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  return (
    <>
      <AuthorisedPage>
        <Header />
        <Slider />
        <Container>
          <GhibliGrid />
        </Container>
        <Footer />
      </AuthorisedPage>
    </>
  );
};
