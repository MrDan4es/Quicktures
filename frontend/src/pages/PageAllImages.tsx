import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import ImageList from "../components/AllImageList";

const PageAllImages = () => {
  return (
    <Container>
      <Header />
      <ImageList />
    </Container>
  );
};

export default PageAllImages;
