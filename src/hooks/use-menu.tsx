// TODO:[vite] hmr invalidate /src/hooks/use-menu.tsx Could not Fast Refresh. Learn more at https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react#consistent-components-exports
import { PieChartOutlined } from '@ant-design/icons';
import { getIntl } from '@/utils/language';
import { IconifyFont } from '@/components';

export default function useMenu() {
  const { formatMessage } = getIntl();
  const menu = [
    {
      label: formatMessage({ id: 'menu.workbench' }),
      key: '/main',
      icon: <IconifyFont type="asc-dashboard" />,
    },
    {
      label: formatMessage({ id: 'menu.list' }),
      key: '/biz',
      icon: <IconifyFont type="asc-dashboard" />,
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
  return menu;
}
