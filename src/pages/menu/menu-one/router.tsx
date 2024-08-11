import Table from '@/pages/biz';
import TableAdd from '@/pages/biz/create';
import TableDetail from '@/pages/biz/detail';
import TableEdit from '@/pages/biz/edit';

// 首页模块
const BizRouter = [
  {
    path: '/menu',
    element: <Table />,
    meta: {
      title: '基础 Form',
    },
  },
  {
    path: '/menu/add',
    element: <TableAdd />,
    meta: {
      title: 'Form 添加',
    },
  },
  {
    path: '/menu/edit/:id',
    element: <TableEdit />,
    meta: {
      title: 'Form 编辑',
    },
  },
  {
    path: '/menu/detail/:id',
    element: <TableDetail />,
    meta: {
      title: 'Form 详情',
    },
  },
];

export default BizRouter;
