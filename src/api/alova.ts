import { message } from 'antd';
import { createAlova } from 'alova';
import adapterFetch from 'alova/fetch';
import ReactHook from 'alova/react';
import { BASE_API_URL } from '@/constants';
import { easySessionStorage } from '@/utils';

const alova = createAlova({
  baseURL: BASE_API_URL,
  timeout: 3500,
  // headers: HEADERS,
  statesHook: ReactHook,
  requestAdapter: adapterFetch(),
  cacheFor: {
    GET: 0,
    POST: 0,
    PUT: 0,
    DELETE: 0,
  },
  beforeRequest(method) {
    // 从easySessionStorage中获取token，若不存在则返回空字符串
    const token: any = easySessionStorage.getItem('token') || '';
    if (token) {
      method.config.headers.Authorization = token;
    }
  },
  responded: async (response) => {
    message.destroy();
    const resJson = await response.json();
    const { success } = resJson;
    if (!success) {
      message.error(resJson.msg);
    }
    const resp = {
      success,
      msg: resJson.msg,
      data: resJson.data,
    };
    return resp;
  },
});

export default alova;
