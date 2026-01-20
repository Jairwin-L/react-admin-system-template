import type { TableProps } from 'antd';
import { getAddressByCode } from '@/utils';

export const columns: TableProps<IQueryBiz.ListItem>['columns'] = [
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
