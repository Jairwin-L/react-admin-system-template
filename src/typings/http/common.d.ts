interface IBaseResp<D> {
  data?: D;
  msg?: string;
  success?: boolean;
}
interface CommonPage {
  pageIndex: number;
  pageSize: number;
  totalCount?: number;
}
