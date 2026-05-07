declare module '*.less';
declare module '@ant-design/icons';
declare module '*.png';
declare module 'unplugin-auto-import/vite' {
  const AutoImport: (options?: Record<string, unknown>) => any;
  export default AutoImport;
}
