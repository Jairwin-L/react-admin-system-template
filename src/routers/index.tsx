import Login from '@/pages/auth/login';
import MainRouter from '@/pages/main/router';
import MenuRouter from '@/pages/menu/router';
import ILayoutRender from '@/typings/layout';
import { type RouteObject, useRoutes } from 'react-router-dom';

export const rootRouter: RouteObject & ILayoutRender.ElementRouteItem[] = [
  {
    path: '/',
    element: <Login />,
    meta: {
      title: '登录',
      key: 'login',
    },
  },
  ...MainRouter,
  ...MenuRouter,
];

const Router = () => {
  // @ts-ignoreTODO:
  const routes = useRoutes(rootRouter);
  return routes;
};

export default Router;
