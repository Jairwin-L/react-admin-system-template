import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Alert, ConfigProvider, Watermark } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css';
import './global.less';
import { isMobile } from 'react-device-detect';
import { ENV } from '@/constant';
import App from './app';

dayjs.locale('zh-cn');

if (ENV.MODE !== 'production') {
  console.log(
    `%c【此提示只在非生产环境生效】当前系统环境：${ENV.VITE_CONSOLE_LOG}`,
    'text-shadow: 1px 2px 3px rgba(67,8,7,0.8);color:#F686BD;font-size:20px;',
  );
}

const MobileNode = () => (
  <>
    为保证最佳使用体验，请使用谷歌浏览器进行访问，下载(点击前往)地址：
    <a
      href="https://www.google.com/intl/zh-CN/chrome"
      target="_blank"
      rel="noopener noreferrer"
      className="chrome_download"
    >
      苹果系统
    </a>
    /
    <a
      href="https://www.google.cn/chrome/index.html"
      target="_blank"
      rel="noopener noreferrer"
      className="chrome_download"
    >
      window系统
    </a>
  </>
);

ReactDOM.createRoot(document.getElementById('admin-system-template') as HTMLElement).render(
  // * react严格模式
  <ConfigProvider locale={zhCN}>
    {isMobile ? <Alert message={<MobileNode />} type="warning" showIcon /> : null}
    <StrictMode>
      <Watermark content="管理平台">
        <App />
      </Watermark>
    </StrictMode>
  </ConfigProvider>,
);
