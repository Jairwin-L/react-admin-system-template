import type { MenuProps } from 'antd';
import { IconFont } from '@/components';

type MenuItem = Required<MenuProps>['items'][number];
export const items: MenuItem[] = [
  {
    label: '工作台',
    key: '/main',
    icon: <IconFont type="asc-dashboard" />,
  },
  {
    label: 'Table',
    key: '/biz',
    icon: <IconFont type="asc-dashboard" />,
  },
  {
    label: '菜单嵌套',
    key: '/menu',
    icon: <IconFont type="asc-dashboard" />,
    children: [
      {
        label: '菜单1',
        key: '/menu/menu-one',
        icon: <IconFont type="asc-dashboard" />,
      },
      {
        label: '菜单2',
        key: '/menu/menu-two',
        icon: <IconFont type="asc-dashboard" />,
        children: [
          {
            label: '菜单2-1',
            key: '/menu/menu-two/menu-two-one',
            icon: <IconFont type="asc-dashboard" />,
          },
          {
            label: '菜单2-2',
            key: '/menu/menu-two/menu-two-two',
            icon: <IconFont type="asc-dashboard" />,
            children: [
              {
                label: '菜单2-2-1',
                key: '/menu/menu-two/menu-two-two/menu-two-two-one',
                icon: <IconFont type="asc-dashboard" />,
              },
              {
                label: '菜单2-2-2',
                key: '/menu/menu-two/menu-two-two/menu-two-two-two',
                icon: <IconFont type="asc-dashboard" />,
              },
            ],
          },
          {
            label: '菜单2-3',
            key: '/menu/menu-two/menu-two-three',
            icon: <IconFont type="asc-dashboard" />,
          },
        ],
      },
      {
        label: '菜单3',
        key: '/menu/menu-three',
        icon: <IconFont type="asc-dashboard" />,
      },
    ],
  },
];

// export const menuItems = [
//   getMenuItem('工作台', '/main', <IconFont type="asc-dashboard" />),
//   getMenuItem('Table', '/biz', <IconFont type="asc-dashboard" />),
//   getMenuItem('菜单嵌套', '/menu', <IconFont type="asc-dashboard" />, [
//     getMenuItem('菜单1', '/menu/menu-one', <IconFont type="asc-dashboard" />),
//     getMenuItem('菜单2', '/menu/menu-two', <IconFont type="asc-dashboard" />, [
//       getMenuItem('菜单2-1', '/menu/menu-two/menu-two-one', <IconFont type="asc-dashboard" />),
//       getMenuItem('菜单2-2', '/menu/menu-two/menu-two-two', <IconFont type="asc-dashboard" />, [
//         getMenuItem(
//           '菜单2-2-1',
//           '/menu/menu-two/menu-two-two/menu-two-two-one',
//           <IconFont type="asc-dashboard" />,
//         ),
//         getMenuItem(
//           '菜单2-2-2',
//           '/menu/menu-two/menu-two-two/menu-two-two-two',
//           <IconFont type="asc-dashboard" />,
//         ),
//       ]),
//       getMenuItem('菜单2-3', '/menu/menu-two/menu-two-three', <IconFont type="asc-dashboard" />),
//     ]),
//     getMenuItem('菜单3', '/menu/menu-three', <IconFont type="asc-dashboard" />),
//   ]),
// ];
