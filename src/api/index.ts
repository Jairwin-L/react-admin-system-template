import { message } from 'antd';
import fly from 'flyio';
import { BASE_API_URL, SYSTEM_ERROR_MSG } from '@/constant';

fly.config.timeout = 3500;
fly.interceptors.request.use((request) => {
  request.headers.apifoxToken = 'sXedLKsR7alyUTRseHi3l';
  if (sessionStorage.getItem('token')) {
    // request.headers.token = sessionStorage.getItem('token');
    request.headers['Content-Type'] = 'application/json';
    request.headers.Accept = 'application/json';
  }
  return request;
});

fly.interceptors.response.use(
  (response) => {
    const data = response?.data || {};
    if (!data?.success) {
      message.destroy();
      message.error(data?.msg || SYSTEM_ERROR_MSG);
    }
    return data;
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
  // T: response, D: 入参
  async get<T, D>(url: string, params: D): Promise<IBaseResp<T>> {
    const response = await fly.get<T>(`${this.BASE_URL}${url}`, params);
    return new Promise((resolve) => {
      resolve(response);
    });
  }
  async show<T, D>(url: string, params: D): Promise<IBaseResp<T>> {
    const { id } = params as D & { id: string };
    const response = await fly.get(`${this.BASE_URL}${url}/${id}`);
    return new Promise((resolve) => {
      resolve(response);
    });
  }
  async post<T, D>(url: string, params: D): Promise<IBaseResp<T>> {
    const response = await fly.post(`${this.BASE_URL}${url}`, params);
    return new Promise((resolve) => {
      resolve(response);
    });
  }
  async delete<T, D>(url: string, id: D): Promise<IBaseResp<T>> {
    const response = await fly.delete(`${this.BASE_URL}${url}`, id);
    return new Promise((resolve) => {
      resolve(response);
    });
  }
  async put<T, D>(url: string, params: D): Promise<IBaseResp<T>> {
    const response = await fly.put(`${this.BASE_URL}${url}`, params);
    return new Promise((resolve) => {
      resolve(response);
    });
  }
}

export default ApiRequest.getInstance(BASE_API_URL);
