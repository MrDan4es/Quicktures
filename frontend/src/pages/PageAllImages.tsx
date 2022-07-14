import { Container } from "react-bootstrap";
import Header from "../components/Header";
import ImageList from "../components/AllImageList";

interface Props {
  username: string;
}

const PageAllImages = (props: Props) => {
  return (
    <Container>
      <Header username={props.username} />
      <ImageList />
    </Container>
  );
};

export default PageAllImages;
