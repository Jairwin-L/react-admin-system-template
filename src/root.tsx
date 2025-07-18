import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { PageLoading } from './components';
import 'antd/dist/reset.css';
import App from './app';

// if (ENV.MODE !== 'production') {
//   console.log(
//     `%c【此提示只在非生产环境生效】当前系统环境：${ENV.VITE_CONSOLE_LOG}`,
//     'text-shadow: 1px 2px 3px rgba(67,8,7,0.8);color:#f686bd;font-size: 20px;',
//   );
// }

const root = document.getElementById('react-admin-system-template') as HTMLElement;
createRoot(root).render(
  // * react严格模式
  <Suspense fallback={<PageLoading />}>
    <StrictMode>
      <App />
    </StrictMode>
  </Suspense>,
);
