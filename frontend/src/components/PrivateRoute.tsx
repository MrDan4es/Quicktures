import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../index';
type Props = {
    children: JSX.Element;
};

export const PrivateRoute = (props: Props) => {
    const { store } = useContext(Context);
    const isAuthenticated = store.isAuth;

    if (isAuthenticated) {
        return props.children;
    }

    return <Navigate to="/login/" />;
};
