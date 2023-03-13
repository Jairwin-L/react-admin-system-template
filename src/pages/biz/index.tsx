import { SearchTable } from '@/components';
import { useConditionSearch } from '@/hooks';
import { columns } from './columns';
import searchKeys from './search';
import type { ColumnsType } from 'antd/es/table';

export default function App() {
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
