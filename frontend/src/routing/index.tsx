import { useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page404 from '../pages/Page404';
import PageAllImages from '../pages/PageAllImages';
import { Context } from '../index';
import PageLoginRegister from '../pages/PageLoginRegister';
import PageMain from '../pages/PageMain';
import { PrivateRoute } from './PrivateRoute';
import { PageLogOut } from '../pages/PageLogOut';

const Routing = () => {
    const { store } = useContext(Context);

    useEffect(() => {
        if (localStorage.getItem('refreshToken')) {
            store.checkAuth();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <PageMain />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/all"
                    element={
                        <PrivateRoute>
                            <PageAllImages />
                        </PrivateRoute>
                    }
                />
                <Route path="/login" element={<PageLoginRegister />} />
                <Route path="/logout" element={<PageLogOut />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;
