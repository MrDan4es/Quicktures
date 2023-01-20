import { Navigate } from 'react-router-dom';

interface Props {
  children: JSX.Element;
}

export const PrivateRoute: React.FC<Props> = props => {
  const isAuthenticated = localStorage.getItem('refreshToken') ? true : false;

  return isAuthenticated ? props.children : <Navigate to="/login/" />;
};
