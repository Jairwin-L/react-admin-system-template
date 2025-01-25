import type { ColumnsType } from 'antd/es/table';
import { getAddressByCode } from '@/utils';

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
    title: '地址',
    key: 'address',
    render: (item) => {
      return getAddressByCode(item.address);
    },
  },
  {
    title: '价格',
    key: 'price',
    render: (item) => {
      return item.price;
    },
  },
];
