import { FC, useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../index';

export const LoginForm: FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { store } = useContext(Context);

    if (store.isAuth) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                type="text"
                placeholder="Nickname"
            />
            <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
            />
            <button onClick={() => store.login(username, password)}>
                Login
            </button>
            <button onClick={() => store.register(username, password)}>
                Register
            </button>
        </div>
    );
};
