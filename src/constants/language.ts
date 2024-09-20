import type { MenuProps } from 'antd';

export const APP_LANGUAGE_KEY: { [key: string]: any } = {
  ZH_CN: 'zh-CN',
  EN_US: 'en-US',
};

export const APP_DROP_MENU_ITEMS: MenuProps['items'] = [
  { key: APP_LANGUAGE_KEY.ZH_CN, label: '中文' },
  { key: APP_LANGUAGE_KEY.EN_US, label: '英文' },
];
