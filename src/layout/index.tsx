import { useEffect, useState } from 'react';
import type { MenuProps } from 'antd';
import { ConfigProvider, Layout, Menu } from 'antd';
import { Outlet } from 'react-router';
import clsx from 'clsx';
import { Footer } from '@/components';
import { easySessionStorage } from '@/utils';
import Header from './header';
import Logo from './logo';
import { getOpenKeys } from './util';
import { items } from './menus';
import css from './index.module.less';

const { Sider } = Layout;

// const siderStyle: React.CSSProperties = {
//   overflow: 'auto',
//   minHeight: '100vh',
//   position: 'fixed',
//   insetInlineStart: 0,
//   top: 0,
//   bottom: 0,
//   scrollbarWidth: 'thin',
//   scrollbarColor: 'unset',
// };

export default function AppLayout() {
  const navigate = useNavigate();
  const { pathname } = location;
  const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  // 点击当前菜单跳转页面
  const onChangeMenu: MenuProps['onClick'] = (menuProps) => {
    const { key } = menuProps;
    navigate(key);
  };
  // SubMenu 展开/关闭的回调
  const onOpenChange = (subMenuSelectedKeys: string[]) => {
    if (subMenuSelectedKeys.length === 0 || subMenuSelectedKeys.length === 1)
      return setOpenKeys(subMenuSelectedKeys);
    const latestOpenKey = subMenuSelectedKeys[subMenuSelectedKeys.length - 1];
    if (latestOpenKey.includes(subMenuSelectedKeys[0])) return setOpenKeys(subMenuSelectedKeys);
    setOpenKeys([latestOpenKey]);
  };
  const onSelectedKeys = () => {
    const menuSelectedKey = pathname.match(/(\S*)\/(detail|create|edit)/);
    const selectedKey = menuSelectedKey?.[1] || [pathname];
    setSelectedKeys(selectedKey as string[]);
    if (!collapsed) {
      setOpenKeys(getOpenKeys(pathname));
    }
  };
  // 刷新页面菜单保持高亮
  useEffect(() => {
    if (pathname) {
      onSelectedKeys();
    }
  }, [pathname, collapsed]);

  useEffect(() => {
    const token = easySessionStorage.getItem('token');
    if (!token) {
      navigate('/login', {
        replace: true,
      });
    }
    if (token && pathname === '/') {
      navigate('/main', {
        replace: true,
      });
    }
  }, [pathname]);

  return (
    <>
      <Layout>
        <Sider
          collapsible
          trigger={null}
          collapsed={collapsed}
          theme="dark"
          // style={siderStyle}
          // className={clsx(css['sider-container'], {
          //   [css['sider-container-collapsed']]: collapsed,
          // })}
        >
          <Logo collapsed={collapsed} />
          <Menu
            theme="dark"
            mode="inline"
            triggerSubMenuAction="click"
            openKeys={openKeys}
            selectedKeys={selectedKeys}
            items={items}
            onClick={onChangeMenu}
            onOpenChange={onOpenChange}
          />
        </Sider>
        <Layout
          className={clsx(css['layout-container'], {
            [css['layout-container-collapsed']]: collapsed,
          })}
        >
          <Header
            collapsed={collapsed}
            onSetCollapsed={(visible: boolean) => setCollapsed(visible)}
          />
          <ConfigProvider
            getPopupContainer={(node): HTMLElement => {
              const popupContainer: HTMLElement | any =
                document.getElementById('popup-container') || node;
              if (node) {
                // 目前只全局处理select和picker分离问题，如其他组件分离此处添加配置
                if (
                  node.className.indexOf('ant-select-selector') > -1 ||
                  node.className.indexOf('ant-picker') > -1 ||
                  node.className.indexOf('anticon-history') > -1
                ) {
                  return popupContainer as HTMLElement;
                }
              }
              return document.body;
            }}
          >
            <div id={css['popup-container']}>
              <Outlet />
            </div>
          </ConfigProvider>
          <Footer />
        </Layout>
      </Layout>
    </>
  );
}
