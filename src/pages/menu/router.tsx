import MenuOne from './menu-one';
import MenuOneCreate from './menu-one/create';
import MenuOneEdit from './menu-one/edit';
import MenuThree from './menu-three';
import MenuTwoOne from './menu-two/menu-two-one';
import MenuTwoThree from './menu-two/menu-two-three';
import MenuTwoTwoOne from './menu-two/menu-two-two/menu-two-two-one';
import MenuTwoTwoTwo from './menu-two/menu-two-two/menu-two-two-two';

// menu 模块
const menuRouter = [
  {
    path: '/menu/menu-one',
    element: <MenuOne />,
    meta: {
      title: '菜单1',
    },
  },
  {
    path: '/menu/menu-one/create',
    element: <MenuOneCreate />,
    meta: {
      title: '菜单1-添加',
    },
  },
  {
    path: '/menu/menu-one/edit/:id',
    element: <MenuOneEdit />,
    meta: {
      title: '菜单1-编辑',
    },
  },
  {
    path: '/menu/menu-one/detail/:id',
    element: <MenuOneEdit />,
    meta: {
      title: '菜单1-详情',
    },
  },
  {
    path: '/menu/menu-two/menu-two-one',
    element: <MenuTwoOne />,
    meta: {
      title: '菜单2-1',
    },
  },
  {
    path: '/menu/menu-two/menu-two-two/menu-two-two-one',
    element: <MenuTwoTwoOne />,
    meta: {
      title: '菜单2-2-1',
    },
  },
  {
    path: '/menu/menu-two/menu-two-two/menu-two-two-two',
    element: <MenuTwoTwoTwo />,
    meta: {
      title: '菜单2-2-2',
    },
  },
  {
    path: '/menu/menu-two/menu-two-three',
    element: <MenuTwoThree />,
    meta: {
      title: '菜单2-3',
    },
  },
  {
    path: '/menu/menu-three',
    element: <MenuThree />,
    meta: {
      title: '菜单3',
    },
  },
];

export default menuRouter;
