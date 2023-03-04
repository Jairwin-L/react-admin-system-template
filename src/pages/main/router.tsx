import LayoutRender from "@/layout";
import Home from "@/pages/main/index";

// 首页模块
const MainRouter = [
  {
    element: <LayoutRender />,
    children: [
      {
        path: "/main",
        element: <Home />,
        meta: {
          title: "工作台",
          key: "main",
          selectedKeys: ["/main"],
        },
      },
    ],
  },
];

export default MainRouter;
