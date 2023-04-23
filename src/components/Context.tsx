import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { LoginModal } from "./LoginModal";
import { Body } from "./Body";
import { CityModal } from "./CityModal";

export const Context = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <Body name={"testProp"}></Body>
      <Footer></Footer>
      <LoginModal></LoginModal>
      <CityModal></CityModal>
    </React.Fragment>
  );
};
