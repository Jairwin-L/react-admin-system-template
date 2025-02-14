import path from 'path';
import { defineConfig } from 'vite';
import { convertLegacyToken } from '@ant-design/compatible/lib';
import react from '@vitejs/plugin-react';
import { theme } from 'antd';
import AutoImport from 'unplugin-auto-import/vite';
// import viteCompression from 'vite-plugin-compression';
import tsconfigPaths from 'vite-tsconfig-paths';

const __dirname = path.dirname(__filename);

const { defaultAlgorithm, defaultSeed } = theme;

const mapToken = defaultAlgorithm(defaultSeed);
const v4Token = convertLegacyToken(mapToken);

const resolvePath = (dir: string) => path.join(__dirname, dir);

export default defineConfig(() => {
  return {
    plugins: [
      // viteCompression(),
      react(),
      tsconfigPaths(),
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
        imports: ['react', 'react-router'],
        dts: true, // 生成 TypeScript 声明
        eslintrc: {
          enabled: true, // <-- this
        },
      }),
    ],
    build: {
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      rollupOptions: {
        // external: ['react', 'react-dom', 'antd'],
        output: {
          // globals: {
          //   react: 'React',
          //   'react-dom': 'ReactDom',
          // },
          // manualChunks: undefined,
          manualChunks(id: string) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
            if (id.includes('src/pages')) {
              return 'pages';
            }
            if (id.includes('src/router.tsx')) {
              return 'router';
            }
            if (id.includes('src/main.tsx')) {
              return 'main';
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
            if (id.includes('src/hooks')) {
              return 'hooks';
            }
            if (id.includes('src/typings')) {
              return 'typings';
            }
            if (id.includes('src/styles')) {
              return 'styles';
            }
          },
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          // globals: {
          //   React: "react",
          //   ReactDOM: "react-dom",
          //   ReactRouterDOM: "react-router-dom",
          // },
        },
      },
    },
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
          additionalData:
            '@import "@/styles/global.less";@import "@/styles/mixin.less";@import "@/styles/variable.less";',
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
        '@/pages': resolvePath('src/pages'),
        '@/constants': resolvePath('src/constants'),
        // react: 'https://esm.run/react@18',
        // 'react-dom': 'https://esm.run/react-dom@18',
      },
    },
  };
});
