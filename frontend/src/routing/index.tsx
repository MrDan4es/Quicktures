import { ReactElement } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import {
  Page404,
  PageAllImages,
  PageLogOut,
  PageLoginRegister,
  PageMain
} from 'pages';
import { PrivateRoute } from './PrivateRoute';

const privateRoute = (el: ReactElement) => <PrivateRoute>{el}</PrivateRoute>;

const router = createBrowserRouter([
  { path: '/', element: privateRoute(<PageMain />) },
  { path: '/all', element: privateRoute(<PageAllImages />) },
  { path: '/login', element: <PageLoginRegister /> },
  { path: '/logout', element: <PageLogOut /> },
  { path: '*', element: <Page404 /> }
]);

const Routing = () => <RouterProvider router={router} />;

export default observer(Routing);
