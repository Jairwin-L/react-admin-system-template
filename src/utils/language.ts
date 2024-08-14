import { createIntl, createIntlCache } from 'react-intl';
import { APP_LOCALE_LANGUAGE } from '@/languages';
import { easyLocalStorage } from './easy-local-storage';

export function getLanguage(): string {
  return easyLocalStorage.getItem('language') || 'zh';
}

export function getIntl() {
  const cache = createIntlCache();
  const locale = getLanguage();
  const intl = createIntl(
    {
      locale,
      messages: APP_LOCALE_LANGUAGE[locale],
    },
    cache,
  );
  return intl;
}
