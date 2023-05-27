import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header/Header";
import { LoginModal } from "./Header/LoginModal";
import { Body } from "./Body";
import { CityModal } from "./Header/CityModal";

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
