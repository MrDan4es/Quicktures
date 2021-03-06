import { useState } from "react";
import { Container } from "react-bootstrap";
import AddImageBtn from "../components/AddImageBtn/AddImageBtn";
import Header from "../components/Header";
import UserImageList from "../components/UserImageList";
import IImageData from "../types/image.type";

interface Props {
  username: string;
}

function App(props: Props) {
  const [images, setImages] = useState<Array<IImageData>>([]);

  return (
    <Container>
      <Header username={props.username} />
      <AddImageBtn images={images} setImages={setImages} />
      <UserImageList images={images} setImages={setImages} />
    </Container>
  );
}

export default App;
