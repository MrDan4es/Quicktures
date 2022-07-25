import { Navigate } from 'react-router-dom';

type Props = {
    children: JSX.Element;
};

export const PrivateRoute = (props: Props) => {
    const isAuthenticated = localStorage.getItem('refreshToken') ? true : false;

    return isAuthenticated ? props.children : <Navigate to="/login/" />;
};
