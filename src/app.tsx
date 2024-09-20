import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';
import zhCN from 'antd/es/locale/zh_CN';
import { PageLoading } from '@/components';
import router from './router';
import 'dayjs/locale/zh-cn';

export default function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <RouterProvider router={router} fallbackElement={<PageLoading />} />
    </ConfigProvider>
  );
}
