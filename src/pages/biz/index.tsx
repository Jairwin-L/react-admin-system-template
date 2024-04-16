import type { ColumnsType } from 'antd/es/table';
import { SearchTable } from '@/components';
import { useConditionSearch } from '@/hooks';
import { columns } from './columns';
import searchKeys from './search';

export default function Page() {
  return (
    <SearchTable<IQueryBiz.List>
      apiType="BIZ"
      searchKeys={searchKeys}
      columns={columns as ColumnsType}
      useConditionSearch={useConditionSearch<IQueryBiz.List>({ apiType: 'BIZ' })}
      exportFlag
      fileUploadFlag
    />
  );
}
