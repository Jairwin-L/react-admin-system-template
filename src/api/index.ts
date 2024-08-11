import { message } from 'antd';
import fly from 'flyio';
import { easySessionStorage } from '@/utils';
import { HEADERS } from '@/constants/xhr';
import { BASE_API_URL } from '@/constants/biz';
import { SYSTEM_ERROR_MSG, SYSTEM_SUCCESS_MSG } from '@/constants/placeholder';

fly.config.timeout = 3500;
fly.interceptors.request.use((request) => {
  const token: any = easySessionStorage.getItem('token') || '';
  request.headers = HEADERS;
  if (token) {
    request.headers.Authorization = `${token}`;
  }
  return request;
});

fly.interceptors.response.use(
  (response: IFlyio.IFlyResponse) => {
    const { data, request } = response;
    const { slience } = request;
    const result = data || {};
    message.destroy();
    const success = result?.success;
    const messageTip = result?.msg;
    if (slience) {
      if (success) {
        message.success(messageTip || SYSTEM_SUCCESS_MSG);
      }
      if (!success) {
        message.error(messageTip || SYSTEM_ERROR_MSG);
      }
    }
    return {
      success,
      data: result?.data,
      msg: messageTip,
    };
  },
  (error: any) => {
    console.error('[EXCEPTION/interceptors] response error:%j', error);
    const data: any = error.response?.data;
    message.destroy();
    const statusCode = Number(data?.code);
    if (error.status === 500) {
      message.error(data.message);
      return Promise.reject(data.message);
    }
    if (statusCode === 400) {
      message.error(data.message);
      return Promise.reject(data);
    }
    if (statusCode === 401) {
      message.error('登录超时，请重新登录');
      // return Promise.reject(
      //   Modal.error({
      //     title: '提示',
      //     content: '登录超时，请重新登录',
      //     centered: true,
      //     okText: '退出',
      //     onOk: () => {
      //       window.location.replace(`${ORIGIN}/login`);
      //     },
      //   }),
      // );
    }
    // 发生网络错误后会走到这里
    return Promise.reject(error.status);
  },
);

class ApiRequest {
  private static instance: ApiRequest;
  static getInstance(BASE_URL: string) {
    if (!this.instance) this.instance = new ApiRequest(BASE_URL);
    return this.instance;
  }
  private BASE_URL = '';
  private constructor(BASE_URL: string) {
    this.BASE_URL = BASE_URL;
  }
  // RResp: response, Param: 入参
  get<Resp, Param = never>(url: string, params?: Param): Promise<IBaseResp<Resp>> {
    return this.fetch(url, 'get', params);
  }
  delete<Resp, Param>(
    url: string,
    params: NonNullable<Param & { id: number }>,
  ): Promise<IBaseResp<Resp>> {
    return this.fetch(`${url}`, 'delete', params);
  }
  put<Resp, Param>(url: string, params: Param): Promise<IBaseResp<Resp>> {
    return this.fetch(url, 'put', params);
  }
  post<Resp, Param>(url: string, params: Param, arg: any = {}): Promise<IBaseResp<Resp>> {
    return this.fetch(url, 'post', params, arg);
  }
  private async fetch<Resp, Param>(
    url: string,
    method: 'get' | 'post' | 'put' | 'delete',
    params?: Param,
    arg?: any,
  ): Promise<IBaseResp<Resp>> {
    const response = await fly[method](`${this.BASE_URL}${url}`, params, arg);
    return response;
  }
}

export default ApiRequest.getInstance(BASE_API_URL);
