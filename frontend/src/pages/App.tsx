import React, { useState } from "react";
import { Container } from "react-bootstrap";
import AddImageBtn from "../components/AddImageBtn";
import Header from "../components/Header";
import UserImageList from "../components/UserImageList";
import { IPostImageData } from '../types/image.type'

function App() {
  const [images, setImages] = useState<Array<IPostImageData>>([]);

  return (
    <Container>
      <Header />
      <AddImageBtn images={images} setImages={setImages} />
      <UserImageList images={images} setImages={setImages} />
    </Container>
  );
}

export default App;
