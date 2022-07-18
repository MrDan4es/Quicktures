import { Container } from "react-bootstrap";
import Header from "../components/Header";
import AllImageList from "../components/AllImageList";

interface Props {
  username: string;
}

const PageAllImages = (props: Props) => {
  return (
    <Container>
      <Header username={props.username} />
      <AllImageList />
    </Container>
  );
};

export default PageAllImages;
