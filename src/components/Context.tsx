import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { LoginModal } from "./LoginModal";
import { Body } from "./Body";

export const Context = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <Body name={"testProp"}></Body>
      <Footer></Footer>
      <LoginModal></LoginModal>
    </React.Fragment>
  );
};
