import { createBrowserRouter } from 'react-router';
import Layout from '@/layout';
import { ErrorBoundary } from '@/components';
import Main from '@/pages/main';
import Login from '@/pages/auth/login';
import bizRouter from './pages/biz/router';
import menuRouter from './pages/menu/router';

const routes = createBrowserRouter([
  { path: 'login', element: <Login />, errorElement: <ErrorBoundary /> },
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [{ path: '/main', element: <Main /> }, ...bizRouter, ...menuRouter],
  },
]);

export default routes;
