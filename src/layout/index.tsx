import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu, ConfigProvider } from "antd";
import type { MenuProps } from "antd";
import { PieChartOutlined } from "@ant-design/icons";
import "./index.less";
import Icon from "@ant-design/icons";
import Header from "./header";
/**
 * @description 获取需要展开的 subMenu
 * @param {String} path 当前访问地址
 * @returns array
 */
export function getOpenKeys(path: string) {
  let newStr = "";
  const newArr: any[] = [];
  const arr = path.split("/").map((i) => "/" + i);
  for (let i = 1; i < arr.length - 1; i++) {
    newStr += arr[i];
    newArr.push(newStr);
  }
  return newArr;
}
/**
 * @description 获取当前路由meta数据
 * @param {String} path 当前访问地址
 * @param {Array} routes 路由列表
 * @returns array
 */
export function getRouteMeta() {
  const { pathname } = location;
  // @ts-ignore TODO:
  const route = searchRoute(pathname, rootRouter);
  return route;
}

export function getMenuItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const { Sider } = Layout;
const menuItems = [
  getMenuItem("工作台", "/main", <Icon type="asc-dashboard" />),
  getMenuItem("Dashboard", "/dashboard", <PieChartOutlined />, [
    getMenuItem("图表", "/dashboard/chart", <PieChartOutlined />),
  ]),
  getMenuItem("表单", "/biz", <PieChartOutlined />, [
    getMenuItem("列表", "/biz/table", <PieChartOutlined />),
  ]),
  getMenuItem("菜单嵌套", "/menu", <PieChartOutlined />, [
    getMenuItem("菜单1", "/menu/menu-one", <PieChartOutlined />),
    getMenuItem("菜单2", "/menu/menu-two", <PieChartOutlined />, [
      getMenuItem(
        "菜单2-1",
        "/menu/menu-two/menu-two-one",
        <PieChartOutlined />
      ),
      getMenuItem(
        "菜单2-2",
        "/menu/menu-two/menu-two-two",
        <PieChartOutlined />,
        [
          getMenuItem(
            "菜单2-2-1",
            "/menu/menu-two/menu-two-two/menu-two-two-one",
            <PieChartOutlined />
          ),
          getMenuItem(
            "菜单2-2-2",
            "/menu/menu-two/menu-two-two/menu-two-two-two",
            <PieChartOutlined />
          ),
        ]
      ),
      getMenuItem(
        "菜单2-3",
        "/menu/menu-two/menu-two-three",
        <PieChartOutlined />
      ),
    ]),
    getMenuItem("菜单3", "/menu/menu-three", <PieChartOutlined />),
  ]),
];

// 定义 menu 类型
type MenuItem = Required<MenuProps>["items"][number];

const LayoutRender: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = location;
  // 获取菜单列表并处理成 antd menu 需要的格式
  const [menuList, setMenuList] = useState<MenuItem[]>([]);
  const [menuData, setMenuData] = useState<any[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  // 点击当前菜单跳转页面
  const onChangeMenu: MenuProps["onClick"] = ({ key }: { key: string }) => {
    // @ts-ignore TODO:
    const route = searchRoute(key, menuList);
    if (route.isLink) window.open(route.isLink, "_blank");
    navigate(key);
  };
  // 设置当前展开的 subMenu
  const onOpenChange = (openKeys: string[]) => {
    if (openKeys.length === 0 || openKeys.length === 1)
      return setOpenKeys(openKeys);
    const latestOpenKey = openKeys[openKeys.length - 1];
    if (latestOpenKey.includes(openKeys[0])) return setOpenKeys(openKeys);
    setOpenKeys([latestOpenKey]);
  };
  const onSelectedKeys = () => {
    const route = getRouteMeta();
    // @ts-ignore TODO:
    let menuSelectedKey: string[] = route.meta?.selectedKeys || [];
    if (!route.meta) {
      const pathArr: string[] = pathname.split("/").filter((item) => item);
      menuSelectedKey = [
        `/${pathArr.splice(0, pathArr?.length - 2).join("/")}`,
      ];
    }
    setSelectedKeys(menuSelectedKey);
    collapsed ? null : setOpenKeys(getOpenKeys(pathname));
  };
  // 刷新页面菜单保持高亮
  useEffect(() => {
    onSelectedKeys();
  }, [pathname, collapsed]);
  return (
    <>
      <Layout className="container">
        <Sider trigger={null} collapsed={collapsed} width={220} theme="dark">
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
            menuData={[]}
            collapsed={collapsed}
            onSetCollapsed={(visible: boolean) => setCollapsed(visible)}
          />
          <ConfigProvider
            getPopupContainer={(node): any => {
              const popupContainer =
                document.getElementById("popup_container") || node;
              if (node) {
                // 目前只全局处理select和picker分离问题，如其他组件分离此处添加配置
                if (
                  node.className.indexOf("ant-select-selector") > -1 ||
                  node.className.indexOf("ant-picker") > -1 ||
                  node.className.indexOf("anticon-history") > -1
                ) {
                  return popupContainer;
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
