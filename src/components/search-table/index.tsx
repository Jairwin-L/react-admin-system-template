import { Key } from 'react';
import { Button, Card, Table } from 'antd';
import { TablePaginationConfig } from 'antd/es/table';
import type { ColumnsType } from 'antd/es/table';
import SearchAction from '../search-action';
import SearchForm from '../search-form';
import style from './index.module.less';

export default function SearchTable<T>(props: IConditionSearch.SearchTable<T>) {
  const {
    apiType,
    useConditionSearch,
    columns = [],
    searchKeys = [],
    exportFlag,
    fileUploadFlag,
  } = props;
  const {
    loading = false,
    searchResult,
    firstEntryFlag,
    onSearch,
    onSearchRefetch,
    onDelRefetch,
    onPage,
  } = useConditionSearch || {};
  const { dataSource = [], errorMsg = '', page } = searchResult || {};
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
  const [downloadList, setDownloadList] = useState<T[]>([]);
  const onSelectChange = (newSelectedRowKeys: Key[], selectedRows: T[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
    setDownloadList(selectedRows);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  const tableColumns = () => {
    return [
      ...columns,
      {
        title: '操作',
        width: 200,
        key: 'action',
        render: (item: T) => {
          return <SearchAction<T> apiType={apiType} item={item} onDelRefetch={onDelRefetch} />;
        },
      },
    ];
  };
  const onCancelChoose = () => {
    setSelectedRowKeys([]);
    setDownloadList([]);
  };
  if (firstEntryFlag) {
    if (loading) {
      return <>loading</>;
    }
    if (errorMsg && !loading) {
      return <>{errorMsg}</>;
    }
  }

  return (
    <>
      {searchKeys.length > 0 ? (
        <SearchForm<T>
          onSearch={onSearch}
          searchKeys={searchKeys}
          loading={loading}
          onSearchRefetch={onSearchRefetch as () => void}
          columns={columns}
          downloadList={(downloadList.length > 0 ? downloadList : dataSource) as T}
          exportFlag={exportFlag}
          fileUploadFlag={fileUploadFlag}
        />
      ) : null}
      <Card>
        {hasSelected ? (
          <div className={style.selected_keys}>
            <p>
              已选择<span>{selectedRowKeys.length}</span>项
            </p>
            <Button type="link" onClick={onCancelChoose}>
              取消选择
            </Button>
          </div>
        ) : null}
        <Table<NonNullable<T>>
          rowSelection={exportFlag ? rowSelection : undefined}
          rowKey={(item: NonNullable<T | { id: NonNullable<T> }>) => (item as { id: string }).id}
          dataSource={dataSource as Array<NonNullable<T>>}
          columns={tableColumns() as ColumnsType<NonNullable<T>>}
          loading={loading}
          onChange={(pagination: TablePaginationConfig) => onPage(pagination)}
          pagination={{
            total: Number(page?.totalCount),
            current: Number(page?.pageIndex),
            pageSize: Number(page?.pageSize),
            showQuickJumper: true,
            showSizeChanger: true,
            size: 'small',
            showTotal: (totalCount, range) =>
              `第${range[0] || '--'}~${range[1] || '--'}条 / 共${totalCount}条`,
          }}
        />
      </Card>
    </>
  );
}
