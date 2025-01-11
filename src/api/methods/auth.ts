/**
 * @file 权限
 */
import { AUTH } from '../const';
import { alovaGet, alovaPost, alovaPut } from '../method';
/**
 * @title 登录
 */
export async function login(params: IQueryAuth.Param) {
  const res = await alovaGet<IQueryAuth.Param, IQueryAuth.Resp>(AUTH.LOGIN, params);
  return res;
}
/**
 * @title 修改密码
 */
export async function changePassword(params: IQueryAuth.Param) {
  const res = await alovaPut<IQueryAuth.Param, null>(AUTH.CHANGE_PASSWORD, params);
  return res;
}
/**
 * @title 注册
 */
export async function register(params: IQueryAuth.Param) {
  const res = await alovaPost<IQueryAuth.Param, null>(AUTH.REGISTER, params);
  return res;
}
