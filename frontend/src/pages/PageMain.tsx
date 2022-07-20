import { useState } from "react";
import { Container } from "react-bootstrap";
import AddImageBtn from "../components/AddImageBtn/AddImageBtn";
import Header from "../components/Header";
import UserImageList from "../components/UserImageList";
import IImageData from "../types/image.type";


function PageMain() {
  const [images, setImages] = useState<Array<IImageData>>([]);

  return (
    <Container>
      <Header />
      <AddImageBtn images={images} setImages={setImages} />
      <UserImageList images={images} setImages={setImages} />
    </Container>
  );
}

export default PageMain;
