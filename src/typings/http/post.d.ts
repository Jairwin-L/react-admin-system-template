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
    CommonPage;
  interface ShowParam {
    id: number;
    apiPaths?: 'BIZ';
  }

  interface DelParam {
    id: number;
  }
  interface StoreParam {
    id: number;
  }
  interface Resp {
    list: List[];
    pageMeta: CommonPage;
  }
  interface ModelResp {
    date: string;
  }
}

export = IQueryBiz;
export as namespace IQueryBiz;
