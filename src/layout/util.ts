import type { MenuProps } from 'antd';
// import { Key, ReactNode } from 'react';

// 定义 menu 类型
export type MenuItem = Required<MenuProps>['items'][number];

// export function getMenuItem(
//   label: ReactNode,
//   key: Key,
//   icon?: ReactNode,
//   children?: MenuItem[],
//   type?: 'group',
// ): MenuItem {
//   return {
//     label,
//     key,
//     icon,
//     children,
//     type,
//   };
// }

/**
 * @description 获取需要展开的 subMenu
 * @param {String} path 当前访问地址
 * @returns array
 */
export function getOpenKeys(path: string): string[] {
  let currentPath = '';
  const pathArray: string[] = [];
  const arr = path?.split('/')?.map((i) => `/${i}`);
  for (let i = 1; i < arr.length - 1; i++) {
    currentPath += arr[i];
    pathArray.push(currentPath);
  }
  return pathArray;
}
