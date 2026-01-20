import type { ColumnsType } from 'antd/es/table';
import { destroy, queryList } from '@/api/methods/list';
import { SearchTable } from '@/components';
import { useConditionSearch } from '@/hooks';
import IQueryBiz from '@/typings/http/post';
import { columns } from './columns';
import searchKeys from './search';

export default function Page() {
  const fetchSearchTable = async (params: any) => {
    return await queryList<IQueryBiz.Data>(params);
  };
  const onDestroy = async (params: any) => {
    return await destroy({ id: params.id });
  };

  return (
    <SearchTable<IQueryBiz.Data, IQueryBiz.List>
      searchKeys={searchKeys}
      columns={columns as ColumnsType}
      onDestroy={onDestroy}
      useConditionSearch={useConditionSearch<IQueryBiz.Data, IQueryBiz.List>({ fetchSearchTable })}
      exportFlag
      fileUploadFlag
    />
  );
}
