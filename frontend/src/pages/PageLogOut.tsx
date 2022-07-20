import { useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../index';

export const PageLogOut = () => {
    const { store } = useContext(Context);

    useEffect(() => {
        store.logout();
    }, []);
        
    return <Navigate to="/login/" />
};
