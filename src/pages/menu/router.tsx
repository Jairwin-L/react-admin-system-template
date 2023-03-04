import LayoutRender from "@/layout";
import MenuOne from "./menu-one";
import MenuThree from "./menu-three";
import MenuTwoOne from "./menu-two/menu-two-one";
import MenuTwoThree from "./menu-two/menu-two-three";
import MenuTwoTwoOne from "./menu-two/menu-two-two/menu-two-two-one";
import MenuTwoTwoTwo from "./menu-two/menu-two-two/menu-two-two-two";

// menu 模块
const MenuRouter = [
  {
    element: <LayoutRender />,
    meta: {
      title: "嵌套菜单",
    },
    children: [
      {
        path: "/menu/menu-one",
        element: <MenuOne />,
        meta: {
          title: "菜单1",
          key: "menu.one",
          selectedKeys: ["/menu/menu-one"],
        },
      },
      {
        path: "/menu/menu-two/menu-two-one",
        element: <MenuTwoOne />,
        meta: {
          title: "菜单2-1",
          key: "menu.two.one",
          selectedKeys: ["/menu/menu-two/menu-two-one"],
        },
      },
      {
        path: "/menu/menu-two/menu-two-two/menu-two-two-one",
        element: <MenuTwoTwoOne />,
        meta: {
          title: "菜单2-2-1",
          key: "menu.two.two.one",
          selectedKeys: ["/menu/menu-two/menu-two-two/menu-two-two-one"],
        },
      },
      {
        path: "/menu/menu-two/menu-two-two/menu-two-two-two",
        element: <MenuTwoTwoTwo />,
        meta: {
          title: "菜单2-2-2",
          key: "menu.two.two.two",
          selectedKeys: ["/menu/menu-two/menu-two-two/menu-two-two-two"],
        },
      },
      {
        path: "/menu/menu-two/menu-two-three",
        element: <MenuTwoThree />,
        meta: {
          title: "菜单2-3",
          key: "menu.two.three",
          selectedKeys: ["/menu/menu-two/menu-two-three"],
        },
      },
      {
        path: "/menu/menu-three",
        element: <MenuThree />,
        meta: {
          title: "菜单3",
          key: "menu.three",
          selectedKeys: ["/menu/menu-three"],
        },
      },
    ],
  },
];

export default MenuRouter;
