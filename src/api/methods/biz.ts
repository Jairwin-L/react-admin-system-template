/**
 * @file 文章
 */
import alova from '../alova';
import { BIZ } from '../const';
/**
 * @title 查
 */
// 查
export async function query(
  path: string,
  params: IQueryBiz.RequestParam,
): Promise<IBaseResp<IQueryBiz.Resp>> {
  const res = await alova.Get<IBaseResp<IQueryBiz.Resp>, IQueryBiz.RequestParam>(path, {
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
export async function destroy(
  path: string,
  params: IQueryBiz.DelParam,
): Promise<IBaseResp<IQueryBiz.Resp>> {
  const res = await alova.Delete<IBaseResp<IQueryBiz.Resp>, IQueryBiz.DelParam>(path, params);
  return res;
}

// 增
export async function store(params: IQueryBiz.DelParam): Promise<IBaseResp<IQueryBiz.Resp>> {
  const res = await alova.Post<IBaseResp<IQueryBiz.Resp>, IQueryBiz.DelParam>(BIZ.STORE, params);
  return res;
}
// destroy
// 改
export async function update(params: IQueryBiz.StoreParam): Promise<IBaseResp<IQueryBiz.Resp>> {
  const res = await alova.Put<IBaseResp<IQueryBiz.Resp>, IQueryBiz.StoreParam>(BIZ.UPDATE, params);
  return res;
}
