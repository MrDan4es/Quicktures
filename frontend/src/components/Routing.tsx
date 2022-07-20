import { useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page404 from '../pages/Page404';
import PageAllImages from '../pages/PageAllImages';
import { Context } from '../index';
import PageLoginRegister from '../pages/PageLoginRegister';
import PageMain from '../pages/PageMain';

const Routing = () => {
    const { store } = useContext(Context);

    useEffect(() => {
        if (localStorage.getItem('refreshToken')) {
            store.checkAuth();
        }
    }, []);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageMain />} />
                <Route path="/login" element={<PageLoginRegister />} />
                <Route path="/all" element={<PageAllImages />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;
