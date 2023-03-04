import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import AutoImport from 'unplugin-auto-import/vite';
import viteCompression from 'vite-plugin-compression';
import path from 'path';
import { theme } from 'antd';
import { convertLegacyToken } from '@ant-design/compatible/lib';

const { defaultAlgorithm, defaultSeed } = theme;

const mapToken = defaultAlgorithm(defaultSeed);
const v4Token = convertLegacyToken(mapToken);

const resolvePath = (dir) => path.join(__dirname, dir);

export default defineConfig({
  plugins: [
    viteCompression(),
    react(),
    // TODO:
    // legacy({
    //   targets: [
    //     "Android > 39",
    //     "Chrome >= 60",
    //     "Safari >= 10.1",
    //     "iOS >= 10.3",
    //     "Firefox >= 54",
    //     "Edge >= 15",
    //   ],
    // }),
    AutoImport({
      imports: ['react', 'react-router-dom'],
      dts: true, // 生成 TypeScript 声明
      eslintrc: {
        enabled: true, // <-- this
      },
    }),
    // viteExternalsPlugin({
    // 	React: "react",
    // 	ReactDom: "react-dom",
    // 	// antd: "antd",
    // }),
  ],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    // rollupOptions: {
    //   // 确保外部化处理那些你不想打包进库的依赖
    //   external: ["react", "react-dom", "react-router-dom"],
    //   output: {
    //     // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
    //     globals: {
    //       react: "React",
    //       ReactDOM: "react-dom",
    //       ReactRouterDOM: "react-router-dom",
    //     },
    //   },
    // },
  },
  esbuild: {},
  optimizeDeps: {},
  server: {
    port: 9000,
  },
  preview: {
    port: 9010,
  },
  css: {
    preprocessorOptions: {
      lessOptions: {
        modifyVars: v4Token,
      },
      less: {
        additionalData: '@import "./src/global.less";',
        modifyVars: {
          '@primary_color': '#1890ff',
          '@detail_color': '#2db7f5',
          '@edit_color': '#8354ee',
          '@danger_color': '#ec4e3d',
          '@white': '#fff',
          '@theme_black': '#333',
          '@pink': '#ffc0cb',
          '@divideColor': '#f1f5ff',
          '@textColor': '#999',
          '@themeColor': '#3e71f8',
          '@gray_color': '#c4c4c4',
          '@defaultFontSize': '16px',
          '@commonFontSize': '14px',
          '@smallFontSize': '12px',
        },
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    // 自动解析确定的扩展，可以在引入模块时不带扩展
    extensions: ['.js', '.jsx', '.json', '.less', '.ts', '.tsx', '.mjs'],
    // 路径别名
    alias: {
      '@': resolvePath('src'),
      '@pages': resolvePath('src/pages'),
      '@constant': resolvePath('src/constant'),
      // TODO:for esm cdn
      // react:
      //   "https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js",
      // "react-dom":
      //   "https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js",
      // "react-router-dom":
      //   "https://cdnjs.cloudflare.com/ajax/libs/react-router-dom/6.6.1/react-router-dom.production.min.js",
    },
  },
});
