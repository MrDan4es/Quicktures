import { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserImageDataService from '../services/user.service';
import App from '../pages/App';
import Page404 from '../pages/Page404';
import PageAllImages from '../pages/PageAllImages';
import { Context } from '../index';

const Routing = () => {
    const {store} = useContext(Context)
    const [username, setUsername] = useState('username');

    useEffect(() => {
        if (localStorage.getItem('refreshToken')) {
            store.checkAuth()
        }
    }, []);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App username={username} />} />
                <Route
                    path="/all"
                    element={<PageAllImages username={username} />}
                />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;
