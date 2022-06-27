import React from "react";
import { Header } from "../components/Header";
import { AuthorisedPage } from "./AuthorisedPage";

export const HomePage = () => {
  return (
    <AuthorisedPage>
      <Header />
    </AuthorisedPage>
  );
};
