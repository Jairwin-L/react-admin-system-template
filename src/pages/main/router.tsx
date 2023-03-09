import Main from '@/pages/main/index';

// 首页模块
const MainRouter = [
  {
    path: '/main',
    element: <Main />,
    meta: {
      title: '工作台',
      key: 'MAIN',
      selectedKeys: ['/main'],
    },
  },
];

export default MainRouter;
