import type { Store } from 'antd/es/form/interface';
import { TablePaginationConfig } from 'antd/es/table';
import omit from 'lodash.omit';
import { query } from '@/api/modules/biz';
import { formatDate } from '@/utils';
import { PAGE_INDEX, PAGE_SIZE } from '@/constants/biz';

const useConditionSearch = <T>(
  props: IConditionSearch.ConditionSearch,
): IConditionSearch.ConditionSearchResult<T> => {
  const { apiType } = props;
  const [searchResult, setSearchResult] = useState<IConditionSearch.SearchResult<T>>();
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
    const { data, success, msg } = await query({
      apiType,
      ...pageParams,
      ...searchParams,
    });
    const { list, pageMeta } = data || {};
    setLoading(false);
    setSearchResult({
      dataSource: list as T,
      page: pageMeta as CommonPage,
      errorMsg: !success ? msg : '',
    });
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
    const { dataSource = [] } = searchResult as IConditionSearch.SearchResult<T[]>;
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
    searchResult: searchResult as IConditionSearch.SearchResult<T>,
    loading,
    onPage,
    onSearch,
    firstEntryFlag,
    onSearchRefetch,
    onDelRefetch,
  };
};

export default useConditionSearch;
