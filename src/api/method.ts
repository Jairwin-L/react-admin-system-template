/**
 * @file 权限
 */
import { type Arg } from 'alova';
import { HEADERS } from '@/constants';
import alova from './alova';
/**
 * @title 登录
 */
export async function alovaGet<P extends Arg, R>(url: string, params: P): Promise<IBaseResp<R>> {
  const res = await alova.Get<IBaseResp<R>>(url, {
    params,
    headers: HEADERS,
  });
  return res;
}
export async function alovaPost<P extends Arg, R>(url: string, params: P): Promise<IBaseResp<R>> {
  const res = await alova.Post<IBaseResp<R>>(url, params, {
    headers: HEADERS,
  });
  return res;
}
export async function alovaPut<P extends Arg, R>(url: string, params: P): Promise<IBaseResp<R>> {
  const res = await alova.Put<IBaseResp<R>>(url, params, {
    headers: HEADERS,
  });
  return res;
}
export async function alovaDelete<P extends Arg, R>(url: string, params: P): Promise<IBaseResp<R>> {
  const res = await alova.Delete<IBaseResp<R>>(url, params, {
    headers: HEADERS,
  });
  return res;
}
