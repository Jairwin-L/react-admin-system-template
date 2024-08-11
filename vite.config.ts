import path from 'path';
import { convertLegacyToken } from '@ant-design/compatible/lib';
import react from '@vitejs/plugin-react';
import { theme } from 'antd';
// eslint-disable-next-line import/order
import AutoImport from 'unplugin-auto-import/vite';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
// import cdn from 'vite-plugin-cdn-import';

const __dirname = path.dirname(__filename);

const { defaultAlgorithm, defaultSeed } = theme;

const mapToken = defaultAlgorithm(defaultSeed);
const v4Token = convertLegacyToken(mapToken);

const resolvePath = (dir: string) => path.join(__dirname, dir);

export default defineConfig(async () => {
  // const devMode = mode === 'development';
  return {
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
      // cdn({
      //   modules: [
      //     {
      //       name: 'react',
      //       var: 'React',
      //       path: `https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.${devMode ? 'development' : 'production.min'}.js`,
      //     },
      //   ],
      //   enableInDevMode: true,
      // }),
    ],
    build: {
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        // external: ["react", "react-dom", "react-router-dom"],
        output: {
          manualChunks(id: string) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
            if (id.includes('src/pages')) {
              return 'pages';
            }
            if (id.includes('src/components')) {
              return 'components';
            }
            if (id.includes('src/utils')) {
              return 'utils';
            }
            if (id.includes('src/constants')) {
              return 'constants';
            }
            if (id.includes('src/api')) {
              return 'api';
            }
            if (id.includes('src/typings')) {
              return 'typings';
            }
          },
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          // globals: {
          //   react: "React",
          //   ReactDOM: "react-dom",
          //   ReactRouterDOM: "react-router-dom",
          // },
        },
      },
    },
    esbuild: {},
    // optimizeDeps: {
    //   exclude: ['react', 'react-dom'],
    // },
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
            '@color-primary': '#1890ff',
            '@detail_color': '#2db7f5',
            '@edit_color': '#8354ee',
            '@color-danger': '#ec4e3d',
            '@color-white': '#fff',
            '@color-default-black': '#333',
            '@pink': '#ffc0cb',
            '@color-divide': '#f1f5ff',
            '@color-text': '#999',
            '@color-theme': '#3e71f8',
            '@color-gray': '#c4c4c4',
            '@font-size-default': '16px',
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
      },
    },
  };
});
