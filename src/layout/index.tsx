import { type FC, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Layout, Menu, ConfigProvider } from 'antd';
import type { MenuProps } from 'antd';
import { getOpenKeys } from './util';
import Header from './header';
import { menuItems } from './menus';
import Logo from './logo';
import './index.less';

const { Sider } = Layout;

const LayoutRender: FC = () => {
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
    const menuSelectedKey = pathname.match(/(\S*)\/(detail|add|edit)/);
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
  return (
    <>
      <Layout className="container">
        <Sider trigger={null} collapsed={collapsed} width={220} theme="dark">
          <Logo collapsed={collapsed} />
          <Menu
            theme="dark"
            mode="inline"
            triggerSubMenuAction="click"
            openKeys={openKeys}
            selectedKeys={selectedKeys}
            items={menuItems}
            onClick={onChangeMenu}
            onOpenChange={onOpenChange}
          />
        </Sider>
        <Layout className="main_layout">
          <Header
            collapsed={collapsed}
            onSetCollapsed={(visible: boolean) => setCollapsed(visible)}
          />
          <ConfigProvider
            getPopupContainer={(node): HTMLElement => {
              const popupContainer = document.getElementById('popup_container') || node;
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
            <div id="popup_container">
              <div className="outlet">
                <Outlet />
              </div>
            </div>
          </ConfigProvider>
        </Layout>
      </Layout>
    </>
  );
};

export default LayoutRender;
