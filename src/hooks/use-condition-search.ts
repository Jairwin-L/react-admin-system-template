import type { Store } from 'antd/es/form/interface';
import { TablePaginationConfig } from 'antd/es/table';
import { omit } from 'lodash-es';
import { query } from '@/api/methods/list';
import { formatDate } from '@/utils';
import { PAGE_INDEX, PAGE_SIZE } from '@/constants/biz';

export default function useConditionSearch<T, L>(
  props: IConditionSearch.ConditionSearch,
): IConditionSearch.ConditionSearchResult<L> {
  const { apiPaths } = props;
  const [searchResult, setSearchResult] = useState<IConditionSearch.SearchResult<L>>();
  const [loading, setLoading] = useState(false);
  // 页面路由是否首次进入，搜索不是
  const [firstEntryFlag, setFirstEntryFlag] = useState(true);
  const [pageParams, setPageParams] = useState<CommonPage>({
    pageIndex: PAGE_INDEX,
    pageSize: PAGE_SIZE,
  });
  const [searchParams, setSearchParams] = useState({});
  const onTriggerSearch = async () => {
    setLoading(true);
    try {
      const { data, success, msg } = await query<T>(apiPaths.LIST, {
        ...pageParams,
        ...searchParams,
      });
      // @ts-ignore
      const { list, pageMeta } = data;
      setLoading(false);
      if (!success) return;
      setSearchResult({
        dataSource: list,
        page: pageMeta,
        errorMsg: !success ? msg : '',
      });
    } catch (error) {
      console.error(`${apiPaths.LIST}:error----->：`, error);
      setLoading(false);
    }
  };

  const onPage = (pagination: TablePaginationConfig) => {
    const { current: pageIndex, pageSize } = pagination;
    setPageParams({
      pageIndex: pageIndex as number,
      pageSize: pageSize as number,
    });
    setFirstEntryFlag(false);
  };
  const onSearch = (values: Store) => {
    const { date } = values;
    let params: Record<string, any> = {};
    for (const [key, value] of Object.entries(values)) {
      if (value) {
        params[key] = value;
      }
      if (key === 'date' && value) {
        const omitParams = omit(params, [key]);
        params = omitParams;
        params.startDate = formatDate(date[0]);
        params.endDate = formatDate(date[1]);
      }
    }
    setFirstEntryFlag(false);
    setSearchParams(params);
    setPageParams({
      pageIndex: PAGE_INDEX,
      pageSize: PAGE_SIZE,
    });
  };
  const onSearchRefetch = () => {
    setSearchParams({});
    setPageParams({
      pageIndex: PAGE_INDEX,
      pageSize: PAGE_SIZE,
    });
  };
  const onDelRefetch = () => {
    const { dataSource = [] } = searchResult as IConditionSearch.SearchResult<L[]>;
    // TODO:当前页码大于1且当前页码数据等于1，需要验证
    if (pageParams.pageIndex > 1 && dataSource.length === 1) {
      setPageParams({
        ...pageParams,
        pageIndex: pageParams.pageIndex - 1,
      });
      return;
    }
    setFirstEntryFlag(false);
    onTriggerSearch();
  };

  useEffect(() => {
    onTriggerSearch();
  }, [JSON.stringify({ ...pageParams, ...searchParams })]);

  return {
    searchResult: searchResult as IConditionSearch.SearchResult<L>,
    loading,
    onPage,
    onSearch,
    firstEntryFlag,
    onSearchRefetch,
    onDelRefetch,
  };
}
