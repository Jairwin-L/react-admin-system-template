import { AUTH } from '../const';
import apiRequest from '../index';
/**
 * @title 权限
 * @description 查
 */
// 查
export async function change(params: IQueryAuth.Param): Promise<IBaseResp<IQueryAuth.Resp>> {
  try {
    const res = await apiRequest.put<IQueryAuth.Resp, IQueryAuth.Param>(
      AUTH.CHANGE_PASSWORD,
      params,
    );
    return res;
  } catch (error) {
    console.log(`get:${AUTH.CHANGE_PASSWORD}----->：`, error);
    return {};
  }
}

export async function login(params: IQueryAuth.Param): Promise<IBaseResp<IQueryAuth.Resp>> {
  try {
    const res = await apiRequest.get<IQueryAuth.Resp, IQueryAuth.Param>(AUTH.LOGIN, params);
    return res;
  } catch (error) {
    console.log(`get:${AUTH.LOGIN}----->：`, error);
    return {};
  }
}

export async function register(params: IQueryAuth.Param): Promise<IBaseResp<IQueryAuth.Resp>> {
  try {
    const res = await apiRequest.post<IQueryAuth.Resp, IQueryAuth.Param>(AUTH.REGISTER, params);
    return res;
  } catch (error) {
    console.log(`get:${AUTH.REGISTER}----->：`, error);
    return {};
  }
}
