import { message } from 'antd';
import fly from 'flyio';
import { BASE_API_URL } from '@/constant/biz';
import { SYSTEM_ERROR_MSG } from '@/constant/placeholder';

fly.config.timeout = 3500;
fly.interceptors.request.use((request) => {
  request.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // apifox mock token
    apifoxToken: 'sXedLKsR7alyUTRseHi3l',
  };
  return request;
});

fly.interceptors.response.use(
  (response) => {
    const { data } = response;
    const result = data || {};
    if (!result?.success) {
      message.error(data?.msg || SYSTEM_ERROR_MSG);
    }
    return result;
  },
  (error: any) => {
    console.error('[EXCEPTION/interceptors] response error:%j', error);
    const data: any = error.response?.data;
    const statusCode = Number(data?.code);
    if (Number(error.status) === 401) {
      // return Promise.reject(
      //   Modal.error({
      //     title: "提示",
      //     content: "登录超时，请重新登录",
      //     centered: true,
      //     okText: "退出",
      //     onOk: () => {
      //       sessionStorage.clear();
      //       window.location.replace(ORIGIN);
      //     },
      //   })
      // );
    }
    if (statusCode === 404) return Promise.reject(error);
    // 发生网络错误后会走到这里
    return Promise.resolve(error.status);
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
  post<Resp, Param>(url: string, params: Param): Promise<IBaseResp<Resp>> {
    return this.fetch(url, 'post', params);
  }
  private async fetch<Resp, Param>(
    url: string,
    method: 'get' | 'post' | 'put' | 'delete',
    params?: Param,
  ): Promise<IBaseResp<Resp>> {
    // if (method === 'post' || method === 'put' || method === 'delete') {
    // }
    const response = await fly[method](`${this.BASE_URL}${url}`, params);
    return response;
  }
}

export default ApiRequest.getInstance(BASE_API_URL);
