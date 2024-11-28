import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router';
import zhCN from 'antd/es/locale/zh_CN';
import routes from './routes';
import 'dayjs/locale/zh-cn';

export default function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <RouterProvider router={routes} />
    </ConfigProvider>
  );
}
