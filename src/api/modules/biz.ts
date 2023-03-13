import { BIZ } from '../const';
import apiRequest from '../index';
/**
 * @title 文章
 * @description 查
 */
// 查
export async function query(params: IQueryBiz.RequestParam): Promise<IBaseResp<IQueryBiz.Resp>> {
  try {
    const res = await apiRequest.get<IQueryBiz.Resp, IQueryBiz.RequestParam>(BIZ.LIST, params);
    return res;
  } catch (error) {
    console.log(`error----->：`, error);
    return {};
  }
}

// 删
export async function destroy(params: IQueryBiz.DelParam): Promise<IBaseResp<IQueryBiz.Resp>> {
  try {
    const res = await apiRequest.delete<IQueryBiz.Resp, IQueryBiz.DelParam>(BIZ.DELETE, params);
    return res;
  } catch (error) {
    console.log(`error----->：`, error);
    return {};
  }
}
