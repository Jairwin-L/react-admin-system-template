import type { MenuProps } from 'antd';
import { rootRouter } from '@/routers';
import { Key, ReactNode } from 'react';

// 定义 menu 类型
export type MenuItem = Required<MenuProps>['items'][number];

export function getMenuItem(
  label: ReactNode,
  key: Key,
  icon?: ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

/**
 * @description 递归查询对应的路由
 * @param {String} path 当前访问地址
 * @param {Array} routes 路由列表
 * @returns array
 */
export function searchRoute(path: string, routes: ILayoutRender.ElementRoute = []) {
  let result: ILayoutRender.ElementRouteItem = {};
  for (const item of routes) {
    if (item.path === path) return item;
    if (item.children) {
      const res = searchRoute(path, item.children);
      if (Object.keys(res).length) result = res;
    }
  }
  return result;
}

/**
 * @description 获取当前路由meta数据
 * @param {String} path 当前访问地址
 * @param {Array} routes 路由列表
 * @returns array
 */
export function getRouteMeta() {
  const { pathname } = location;
  const route = searchRoute(pathname, rootRouter);
  return route;
}
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
