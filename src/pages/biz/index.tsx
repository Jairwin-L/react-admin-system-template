import type { ColumnsType } from 'antd/es/table';
import { BIZ } from '@/api/const';
import { SearchTable } from '@/components';
import { useConditionSearch } from '@/hooks';
import IQueryBiz from '@/typings/http/post';
import { columns } from './columns';
import searchKeys from './search';

export default function Page() {
  return (
    <SearchTable<IQueryBiz.Data, IQueryBiz.List>
      apiPaths={BIZ}
      searchKeys={searchKeys}
      columns={columns as ColumnsType}
      useConditionSearch={useConditionSearch<IQueryBiz.Data, IQueryBiz.List>({ apiPaths: BIZ })}
      exportFlag
      fileUploadFlag
    />
  );
}
