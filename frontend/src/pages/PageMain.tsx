import { useState } from 'react';
import { Container } from 'react-bootstrap';

import AddImageBtn from '../components/AddImageBtn/';
import Header from '../components/Header/';
import IImageData from '../types/image.type';
import UserImageList from '../components/UserImageList/UserImageList';

export const PageMain: React.FC = () => {
  const [images, setImages] = useState<Array<IImageData>>([]);

  return (
    <Container>
      <Header />
      <AddImageBtn images={images} setImages={setImages} />
      <UserImageList images={images} setImages={setImages} />
    </Container>
  );
};
