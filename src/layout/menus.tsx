import { Icon } from '@/components';
import { PieChartOutlined } from '@ant-design/icons';
import { getMenuItem } from './util';

export const menuItems = [
  getMenuItem('工作台', '/main', <Icon type="asc-dashboard" />),
  getMenuItem('菜单嵌套', '/menu', <PieChartOutlined />, [
    getMenuItem('菜单1', '/menu/menu-one', <PieChartOutlined />),
    getMenuItem('菜单2', '/menu/menu-two', <PieChartOutlined />, [
      getMenuItem('菜单2-1', '/menu/menu-two/menu-two-one', <PieChartOutlined />),
      getMenuItem('菜单2-2', '/menu/menu-two/menu-two-two', <PieChartOutlined />, [
        getMenuItem(
          '菜单2-2-1',
          '/menu/menu-two/menu-two-two/menu-two-two-one',
          <PieChartOutlined />,
        ),
        getMenuItem(
          '菜单2-2-2',
          '/menu/menu-two/menu-two-two/menu-two-two-two',
          <PieChartOutlined />,
        ),
      ]),
      getMenuItem('菜单2-3', '/menu/menu-two/menu-two-three', <PieChartOutlined />),
    ]),
    getMenuItem('菜单3', '/menu/menu-three', <PieChartOutlined />),
  ]),
];
