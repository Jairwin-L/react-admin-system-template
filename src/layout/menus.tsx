import { PieChartOutlined } from '@ant-design/icons';
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
    icon: <PieChartOutlined />,
    children: [
      {
        label: '菜单1',
        key: '/menu/menu-one',
        icon: <PieChartOutlined />,
      },
      {
        label: '菜单2',
        key: '/menu/menu-two',
        icon: <PieChartOutlined />,
        children: [
          {
            label: '菜单2-1',
            key: '/menu/menu-two/menu-two-one',
            icon: <PieChartOutlined />,
          },
          {
            label: '菜单2-2',
            key: '/menu/menu-two/menu-two-two',
            icon: <PieChartOutlined />,
            children: [
              {
                label: '菜单2-2-1',
                key: '/menu/menu-two/menu-two-two/menu-two-two-one',
                icon: <PieChartOutlined />,
              },
              {
                label: '菜单2-2-2',
                key: '/menu/menu-two/menu-two-two/menu-two-two-two',
                icon: <PieChartOutlined />,
              },
            ],
          },
          {
            label: '菜单2-3',
            key: '/menu/menu-two/menu-two-three',
            icon: <PieChartOutlined />,
          },
        ],
      },
      {
        label: '菜单3',
        key: '/menu/menu-three',
        icon: <PieChartOutlined />,
      },
    ],
  },
];
console.log(`items----->：`, items);
// export const menuItems = [
//   getMenuItem('工作台', '/main', <IconFont type="asc-dashboard" />),
//   getMenuItem('Table', '/biz', <IconFont type="asc-dashboard" />),
//   getMenuItem('菜单嵌套', '/menu', <PieChartOutlined />, [
//     getMenuItem('菜单1', '/menu/menu-one', <PieChartOutlined />),
//     getMenuItem('菜单2', '/menu/menu-two', <PieChartOutlined />, [
//       getMenuItem('菜单2-1', '/menu/menu-two/menu-two-one', <PieChartOutlined />),
//       getMenuItem('菜单2-2', '/menu/menu-two/menu-two-two', <PieChartOutlined />, [
//         getMenuItem(
//           '菜单2-2-1',
//           '/menu/menu-two/menu-two-two/menu-two-two-one',
//           <PieChartOutlined />,
//         ),
//         getMenuItem(
//           '菜单2-2-2',
//           '/menu/menu-two/menu-two-two/menu-two-two-two',
//           <PieChartOutlined />,
//         ),
//       ]),
//       getMenuItem('菜单2-3', '/menu/menu-two/menu-two-three', <PieChartOutlined />),
//     ]),
//     getMenuItem('菜单3', '/menu/menu-three', <PieChartOutlined />),
//   ]),
// ];
