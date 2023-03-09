import Login from './login';

// 首页模块
const AuthRouter = [
  {
    path: '/',
    element: <Login />,
    meta: {
      title: '登录',
      key: 'LOGIN',
    },
  },
];

export default AuthRouter;
