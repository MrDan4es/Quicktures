import { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Context } from '../index';
import AddImageBtn from '../components/AddImageBtn/AddImageBtn';
import Header from '../components/Header';
import { LoginForm } from '../components/LoginForm';
import UserImageList from '../components/UserImageList';
import IImageData from '../types/image.type';
import {observer} from 'mobx-react-lite'

interface Props {
    username: string;
}

function App(props: Props) {
    const [images, setImages] = useState<Array<IImageData>>([]);
    const {store} = useContext(Context)

    return (
        <>
        <h1>{store.isAuth ? `Пользователь авторизован ${store.user.username}` : 'Авторизуйтесь'}</h1>
        <LoginForm />
        <button onClick={() => store.logout()}>Выйти</button>
        <button onClick={() => store.test()}>Test</button>
        </>
    );
}

export default observer(App);
