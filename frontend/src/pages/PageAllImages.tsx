import { Container } from 'react-bootstrap';

import AllImageList from '../components/AllImageList';
import Header from '../components/Header';

export const PageAllImages: React.FC = () => {
  return (
    <Container>
      <Header />
      <AllImageList />
    </Container>
  );
};
