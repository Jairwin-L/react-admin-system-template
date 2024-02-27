import { useRoutes } from 'react-router-dom';
import LayoutRender from '@/layout';
import ILayoutRender from '@/typings/layout';

const rootRouter: ILayoutRender.ElementRouteItem[] = [];
// * 导入所有router
const metaRouters: Record<string, ILayoutRender.ElementRouteItem[]> = import.meta.glob(
  '../pages/**/router.tsx',
  {
    eager: true,
    import: 'default',
  },
);

Object.keys(metaRouters).forEach((item) => {
  metaRouters?.[item].forEach((subItem) => {
    if (subItem.meta?.key === 'LOGIN') {
      rootRouter.push(subItem);
    }
    rootRouter.push({
      element: <LayoutRender />,
      children: [subItem],
    });
  });
});

const Router = () => {
  // @ts-ignoreTODO:
  const routes = useRoutes(rootRouter);
  return routes;
};

export default Router;
