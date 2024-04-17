import type { ColumnsType } from 'antd/es/table';

declare namespace IQueryBiz {
  type List = ColumnsType<ListItem>;
  interface ListItem {
    id: number;
    title: string;
    price: number;
    goodsPicUrl: string;
  }
  type RequestParam = Partial<{
    id?: number;
    title?: string;
    price?: number;
  }> &
    CommonPage & {
      apiType: 'BIZ';
    };
  interface ShowParam {
    id: number;
    apiType?: 'BIZ';
  }

  interface DelParam {
    id: number;
    apiType: 'BIZ';
  }
  interface Resp {
    list: List[];
    pageMeta: CommonPage;
  }
}

export = IQueryBiz;
export as namespace IQueryBiz;
