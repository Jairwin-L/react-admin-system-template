import User from './user';
import Role from './role';
import Menu from './menu';

// menu 模块
const SYSTEM_ROUTER = [
  {
    path: '/system/user',
    element: <User />,
    meta: {
      title: '用户',
    },
  },
  {
    path: '/system/role',
    element: <Role />,
    meta: {
      title: '角色',
    },
  },
  {
    path: '/system/menu',
    element: <Menu />,
    meta: {
      title: '菜单',
    },
  },
];

export default SYSTEM_ROUTER;
