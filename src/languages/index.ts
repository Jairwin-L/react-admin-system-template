import { APP_LANGUAGE_KEY } from '@/constants/language';
import enUS from './en-US.json';
import zhCN from './zh-CN.json';
import frFR from './fr-FR.json';

export const APP_LANGUAGE: { [key: string]: any } = {
  [APP_LANGUAGE_KEY.ZH_CN]: zhCN,
  [APP_LANGUAGE_KEY.EN_US]: enUS,
  [APP_LANGUAGE_KEY.FR_FR]: frFR,
};

export const APP_LANGUAGE_DROP_DOWN_TEXT: { [key: string]: any } = {
  [APP_LANGUAGE_KEY.ZH_CN]: '中文',
  [APP_LANGUAGE_KEY.EN_US]: '英文',
  [APP_LANGUAGE_KEY.FR_FR]: '法语',
};
