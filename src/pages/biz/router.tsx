import Table from '@/pages/biz';
import TableAdd from '@/pages/biz/add';
import TableEdit from '@/pages/biz/edit';
import TableDetail from '@/pages/biz/detail';

// 首页模块
const BizRouter = [
  {
    path: '/biz/table',
    element: <Table />,
    meta: {
      title: '基础 Form',
      key: 'BIZ.TABLE',
      selectedKeys: ['/biz/table'],
    },
  },
  {
    path: '/biz/table/add',
    element: <TableAdd />,
    meta: {
      title: 'Form 添加',
      key: 'BIZ.TABLE.ADD',
      selectedKeys: ['/biz/table'],
    },
  },
  {
    path: '/biz/table/edit/:id',
    element: <TableEdit />,
    meta: {
      title: 'Form 编辑',
      key: 'BIZ.TABLE.EDIT',
      selectedKeys: ['/biz/table'],
    },
  },
  {
    path: '/biz/table/detail/:id',
    element: <TableDetail />,
    meta: {
      title: 'Form 详情',
      key: 'BIZ.TABLE.DETAIL',
      selectedKeys: ['/biz/table'],
    },
  },
];

export default BizRouter;
