import type { TableProps } from 'antd';

declare namespace IQueryBiz {
  type List = TableProps<ListItem>['columns'];
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
    CommonPage;
  interface ShowParam {
    id: number;
    apiPaths?: string;
  }

  interface DelParam {
    id: number;
  }
  interface StoreParam {
    id: number;
  }
  interface Data {
    list: List[];
    pageMeta: CommonPage;
  }
  interface ModelResp {
    date: string;
  }
}

export = IQueryBiz;
export as namespace IQueryBiz;
