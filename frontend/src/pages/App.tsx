import React from "react";
import { Container } from "react-bootstrap";
import AddImageBtn from "../components/AddImageBtn";
import Header from "../components/Header";
import UserImageList from "../components/UserImageList";

function App() {
  return (
    <Container>
      <Header />
      <AddImageBtn />
      <UserImageList />
    </Container>
  );
}

export default App;
