import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/layout';
import { ErrorBoundary } from '@/components';
import Main from '@/pages/main';
import Login from '@/pages/auth/login';
import bizRouter from './pages/biz/router';
import menuRouter from './pages/menu/router';

const routers = createBrowserRouter([
  { path: 'login', element: <Login /> },
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [{ path: '/main', element: <Main /> }, ...bizRouter, ...menuRouter],
  },
]);

export default routers;
