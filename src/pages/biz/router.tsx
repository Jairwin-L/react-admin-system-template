import Table from '@/pages/biz';
import TableCreate from '@/pages/biz/create';
import TableDetail from '@/pages/biz/detail';
import TableEdit from '@/pages/biz/edit';

// 首页模块
const bizRouter = [
  {
    path: '/biz',
    element: <Table />,
  },
  {
    path: '/biz/create',
    element: <TableCreate />,
  },
  {
    path: '/biz/edit/:id',
    element: <TableEdit />,
  },
  {
    path: '/biz/detail/:id',
    element: <TableDetail />,
  },
];

export default bizRouter;
