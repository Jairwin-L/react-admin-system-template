import { createIntl, createIntlCache } from 'react-intl';
import { APP_LANGUAGE } from '@/languages';
import { APP_LANGUAGE_KEY } from '@/constants/language';
import { easyLocalStorage } from './easy-local-storage';

export function getLanguage(): string {
  return easyLocalStorage.getItem('language') || APP_LANGUAGE_KEY.ZH_CN;
}

export function getIntl() {
  const cache = createIntlCache();
  const locale = getLanguage();
  const intl = createIntl(
    {
      locale,
      messages: APP_LANGUAGE[locale],
    },
    cache,
  );
  return intl;
}
