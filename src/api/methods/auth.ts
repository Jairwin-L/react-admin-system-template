/**
 * @file 权限
 */
import alova from '../alova';
import { AUTH } from '../const';
/**
 * @title 登录
 */
export async function login(params: IQueryAuth.Param) {
  const res = await alova.Get<IQueryAuth.Resp>(AUTH.LOGIN, { params });
  return res;
}
/**
 * @title 修改密码
 */
export async function changePassword(params: IQueryAuth.Param) {
  const res = await alova.Put<IQueryAuth.Resp, IQueryAuth.Param>(AUTH.CHANGE_PASSWORD, params);
  return res;
}
/**
 * @title 注册
 */
export async function register(params: IQueryAuth.Param) {
  const res = await alova.Post<IQueryAuth.Resp, IQueryAuth.Param>(AUTH.REGISTER, params);
  return res;
}
