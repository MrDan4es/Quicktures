import { useContext } from 'react';
import { Context } from '../index';
import { LoginForm } from '../components/LoginForm';
import { observer } from 'mobx-react-lite';

function PageLoginRegister() {
    const { store } = useContext(Context);

    return (
        <>
            <h1>
                {store.isAuth
                    ? `Пользователь авторизован ${store.username}`
                    : 'Авторизуйтесь'}
            </h1>
            <LoginForm />
            <button onClick={() => store.logout()}>Выйти</button>
            <button onClick={() => store.test()}>Test</button>
        </>
    );
}

export default observer(PageLoginRegister);
