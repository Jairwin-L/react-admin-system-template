import jsonParseSafely from './json-parse-safely';

/**
 * 通用 easyLocalStorageStorage
 *
 * @example
 *
 * import { easyLocalStorageStorage } from '@/utils';
 *
 * // 写入
 * easyLocalStorageStorage.setItem('key', { a: 'a' });
 *
 * // 读取
 * easyLocalStorageStorage.getItem('key') || {};
 *
 * // 删除指定key
 * easyLocalStorageStorage.removeItem('key');
 *
 * // 全部清除
 * easyLocalStorageStorage.clear();
 */

export const easyLocalStorage = {
  /**
   * setItem
   *
   * @param {string} key key值
   * @param {*} value 写入数据
   */
  setItem(key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value));
  },
  /**
   * getItem
   *
   * @param {key} key值 读取数据
   */
  getItem<T>(key: string): T {
    return jsonParseSafely(window.localStorage.getItem(key) as string);
  },
  /**
   * removeItem
   *
   * @param {key} key值 删除数据
   */
  removeItem(key: string): void {
    window.localStorage.removeItem(key);
  },
  /**
   * clear 删除数据
   */
  clear(): void {
    window.localStorage.clear();
  },
};
