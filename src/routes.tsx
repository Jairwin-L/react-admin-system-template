import { createBrowserRouter } from 'react-router';
import Layout from '@/layout';
import { ErrorBoundary } from '@/components';
import Main from '@/pages/main';
import Login from '@/pages/auth/login';
import BIZ_ROUTER from './pages/biz/router';
import MENU_ROUTER from './pages/menu/router';
import SYSTEM_ROUTER from './pages/system/router';

const routes = createBrowserRouter([
  { path: 'login', element: <Login />, errorElement: <ErrorBoundary /> },
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      { path: '/main', element: <Main /> },
      ...BIZ_ROUTER,
      ...MENU_ROUTER,
      ...SYSTEM_ROUTER,
    ],
  },
]);

export default routes;
