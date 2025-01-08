/**
 * @file 文章
 */
import alova from '../alova';
import { BIZ } from '../const';
/**
 * @title 查
 */
// 查
export async function query(params: IQueryBiz.RequestParam) {
  const res = await alova.Get<IQueryBiz.Resp, IQueryBiz.RequestParam>(BIZ.LIST, {
    params,
  });
  return res;
}

/**
 * @title 查
 */
export async function show(params: IQueryBiz.ShowParam): Promise<IBaseResp<IQueryBiz.ModelResp>> {
  const res = await alova.Get<IBaseResp<IQueryBiz.ModelResp>, IQueryBiz.ShowParam>(BIZ.SHOW, {
    params,
  });
  return res;
}

// 删
export async function destroy(params: IQueryBiz.DelParam) {
  const res = await alova.Delete<IQueryBiz.Resp, IQueryBiz.DelParam>(BIZ.DELETE, params);
  return res;
}

// 增
export async function store(params: IQueryBiz.DelParam): Promise<IBaseResp<IQueryBiz.Resp>> {
  const res = await alova.Post<IBaseResp<IQueryBiz.Resp>, IQueryBiz.DelParam>(BIZ.DELETE, params);
  return res;
}

// 改
export async function update(params: IQueryBiz.StoreParam): Promise<IBaseResp<IQueryBiz.Resp>> {
  const res = await alova.Put<IBaseResp<IQueryBiz.Resp>, IQueryBiz.StoreParam>(BIZ.DELETE, params);
  return res;
}
