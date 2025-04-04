import { FormInstance } from 'antd';
import { Store } from 'antd/es/form/interface';
import { FC } from 'react';
import { TablePaginationConfig } from 'antd/es/table';
import type { ColumnsType } from 'antd/es/table';

type BaseSearchItemType = 'string' | 'select' | 'time' | 'component';

interface BaseSearchItem {
  label: string;
  value: string;
  type: BaseSearchItemType;
  disabled?: boolean;
}

interface SimpleItem extends BaseSearchItem {
  type: 'string';
  placeholder: string;
}

interface DateItem extends BaseSearchItem {
  type: 'time';
  placeholder: [string, string];
  // 未来的日期是否可选
  disabledFutureDate?: boolean;
  // 过去的日期是否可选
  disabledPastDate?: boolean;
}

interface SelectItem extends BaseSearchItem {
  type: 'select';
  selectOption: IBaseSelect;
  placeholder: string;
}
interface ComponentItem extends BaseSearchItem {
  type: 'component';
  component: FC<{ form: FormInstance; name: string }>;
  placeholder: string;
}

declare namespace IConditionSearch {
  type SearchFormItemType = DateItem | SelectItem | SimpleItem | ComponentItem;
  interface SearchForm<L> {
    searchKeys: SearchFormItemType[];
    loading: boolean;
    columns?: ColumnsType;
    downloadList?: L[];
    exportFlag?: boolean;
    fileUploadFlag?: boolean;
    onSearch?: (values: Store) => void;
    onSearchRefetch: () => void;
  }
  interface SearchTable<T> {
    apiPaths: { [key: string]: any };
    useConditionSearch: {
      loading: boolean;
      searchResult: SearchResult<T>;
      firstEntryFlag?: boolean;
      onSearch?: (values: Store) => void;
      onSearchRefetch?: () => void;
      onDelRefetch?: () => void;
      onPage: (param: TablePaginationConfig) => void;
    };
    columns: ColumnsType;
    searchKeys?: SearchFormItemType[];
    exportFlag?: boolean;
    fileUploadFlag?: boolean;
  }
  interface SearchResult<L> {
    dataSource: L;
    page: CommonPage;
    errorMsg: string | undefined;
  }
  interface ConditionSearchResult<L> {
    searchResult: SearchResult<L>;
    loading: boolean;
    onPage: (pagination: TablePaginationConfig) => void;
    onSearch?: (values: Store) => void;
    firstEntryFlag?: boolean;
    onSearchRefetch?: () => void;
    onDelRefetch?: () => void;
  }
  interface ConditionSearch {
    apiPaths: { [key: string]: any };
  }
  interface SearchAction<L> {
    apiPaths: { [key: string]: any };
    item: L;
    onDelRefetch?: () => void;
  }
  interface TableHeader {
    header: string;
    // 用于数据匹配的 key
    key: string;
    // 列宽
    width: number;
    // 父级的 key
    parentKey?: string;
    children?: TableHeader[];
  }
  interface GenerateHeaders {
    title: string;
    dataIndex: string;
    key: string;
    width: number;
    children: GenerateHeaders[];
  }
  interface MakeExportExcel<T> {
    columns: ColumnsType | IConditionSearch.GenerateHeaders[];
    dataSource: T;
    rowHeight?: number;
    workSheetName?: string;
  }
}

export = IConditionSearch;
export as namespace IConditionSearch;
