import Login from "@/pages/auth/login";
import { useRoutes } from "react-router-dom";

// TODO:ts调整
export const rootRouter: any[] = [
	{
    path: "/",
    element: <Login />,
    meta: {
      title: "登录",
      key: "login",
    },
  },
];

const Router = () => {
  const routes = useRoutes(rootRouter);
  return routes;
};

export default Router;
