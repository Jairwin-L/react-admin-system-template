import { ENV } from '@/constants';

export const API_URL = {
  development: 'https://m1.apifoxmock.com/m1/4020462-3657047-default',
  mock: 'https://m1.apifoxmock.com/m1/4020462-3657047-default',
  pre: 'https://m1.apifoxmock.com/m1/4020462-3657047-default',
  production: 'https://m1.apifoxmock.com/m1/4020462-3657047-default',
}[ENV.MODE || 'production'];
