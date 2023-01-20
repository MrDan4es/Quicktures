import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import Routing from './routing/';
import { SnackbarProvider } from 'notistack';
import AuthStore from './store/store';
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css';

interface State {
  authStore: AuthStore;
}

const authStore = new AuthStore();

export const Context = createContext<State>({ authStore: authStore });

if (localStorage.getItem('user_uuid')) {
  authStore.checkAuth();
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Context.Provider value={{ authStore: authStore }}>
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
