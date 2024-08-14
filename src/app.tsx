import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import dayjs from 'dayjs';
import zhCN from 'antd/es/locale/zh_CN';
import enUS from 'antd/es/locale/en_US';
import frFR from 'antd/es/locale/fr_FR';
import { PageLoading } from '@/components';
import { APP_LANGUAGE } from '@/languages/index';
import router from './router';
import LanguageContext from './hooks/language';
import { getLanguage } from './utils';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/en-gb';
import 'dayjs/locale/fr-ca';

// 将antd的语言包映射到ConfigProvider中
const languageMap: { [key: string]: any } = {
  [APP_LANGUAGE.ZH_CN]: zhCN,
  [APP_LANGUAGE.EN_US]: enUS,
  [APP_LANGUAGE.FR_FR]: frFR,
};
// 将dayjs的语言包映射到dayjs.locale中
const dayjsLocaleMap: { [key: string]: any } = {
  [APP_LANGUAGE.ZH_CN]: 'zh-cn',
  [APP_LANGUAGE.EN_US]: 'en-gb',
  [APP_LANGUAGE.FR_FR]: 'fr-ca',
};

export default function App() {
  const [language, setLanguage] = useState(getLanguage());
  dayjs.locale(dayjsLocaleMap[language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      <IntlProvider locale={language} messages={APP_LANGUAGE[language]}>
        <ConfigProvider locale={languageMap[language]}>
          <RouterProvider router={router} fallbackElement={<PageLoading />} />
        </ConfigProvider>
      </IntlProvider>
    </LanguageContext.Provider>
  );
}
