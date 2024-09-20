import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import dayjs from 'dayjs';
import zhCN from 'antd/es/locale/zh_CN';
import enUS from 'antd/es/locale/en_US';
import { PageLoading } from '@/components';
import { APP_LANGUAGE } from '@/languages/index';
import { APP_LANGUAGE_KEY } from '@/constants/language';
import router from './router';
import LanguageContext from './hooks/language';
import { getLanguage } from './utils';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/en-gb';

// 将antd的语言包映射到ConfigProvider中
const languageMap: { [key: string]: any } = {
  [APP_LANGUAGE_KEY.ZH_CN]: zhCN,
  [APP_LANGUAGE_KEY.EN_US]: enUS,
};
// 将dayjs的语言包映射到dayjs.locale中
const dayjsLocaleMap: { [key: string]: any } = {
  [APP_LANGUAGE_KEY.ZH_CN]: 'zh-cn',
  [APP_LANGUAGE_KEY.EN_US]: 'en-gb',
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
