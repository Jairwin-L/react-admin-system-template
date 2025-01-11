/**
 * @file 文章
 */
import { BIZ } from '../const';
import { alovaDelete, alovaGet, alovaPost, alovaPut } from '../method';
/**
 * @title 查
 */
// 查
export async function query<T>(
  path: string,
  params: IQueryBiz.RequestParam,
): Promise<IBaseResp<T>> {
  const res = await alovaGet<IQueryBiz.RequestParam, T>(path, params);
  return res;
}

/**
 * @title 查
 */
export async function show(params: IQueryBiz.ShowParam) {
  const res = await alovaGet<IQueryBiz.ShowParam, IQueryBiz.ModelResp>(BIZ.SHOW, params);
  return res;
}

// 删
export async function destroy(path: string, params: IQueryBiz.DelParam) {
  const res = await alovaDelete<IQueryBiz.DelParam, IQueryBiz.Data>(path, params);
  return res;
}

// 增
export async function store(params: IQueryBiz.DelParam) {
  const res = await alovaPost<IQueryBiz.DelParam, IQueryBiz.Data>(BIZ.STORE, params);
  return res;
}
// destroy
// 改
export async function update(params: IQueryBiz.StoreParam) {
  const res = await alovaPut<IQueryBiz.StoreParam, IQueryBiz.Data>(BIZ.UPDATE, params);
  return res;
}
