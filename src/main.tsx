import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Watermark } from 'antd';
import { PageLoading } from './components';
import { APP_NAME } from './constants/app';
import { ENV } from './constants/env';
import 'antd/dist/reset.css';
import App from './app';

if (ENV.MODE !== 'production') {
  console.log(
    `%c【此提示只在非生产环境生效】当前系统环境：${ENV.VITE_CONSOLE_LOG}`,
    'text-shadow: 1px 2px 3px rgba(67,8,7,0.8);color:#f686bd;font-size: 20px;',
  );
}

createRoot(document.getElementById('react-admin-system-template') as HTMLElement).render(
  // * react严格模式
  <Suspense fallback={<PageLoading />}>
    <StrictMode>
      <Watermark content={APP_NAME}>
        <App />
      </Watermark>
    </StrictMode>
  </Suspense>,
);
