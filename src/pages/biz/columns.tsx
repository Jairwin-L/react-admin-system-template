import type { ColumnsType } from 'antd/es/table';
import './index.less';

export const columns: ColumnsType = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'price',
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'price',
  },
  {
    title: '价格',
    key: 'price',
    render: (item) => {
      return item.price;
    },
  },
];
