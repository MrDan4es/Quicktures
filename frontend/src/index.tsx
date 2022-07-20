import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import Routing from './components/Routing';
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css';
import { SnackbarProvider } from 'notistack';
import Store from './store/store';

interface State {
    store: Store;
}

const store = new Store();

export const Context = createContext<State>({ store });

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Context.Provider value={{ store }}>
        <SnackbarProvider
            autoHideDuration={4000}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
            }}
        >
            <Routing />
        </SnackbarProvider>
    </Context.Provider>
);
