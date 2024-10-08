/**
 * 危险的 JS 内置函数：JSON.parse
 * @param {string} value 需要检查的输入
 * @param {*} parseFailedDefaultValue={} 解析失败默认返回`{}`
 * @returns {*} 解析失败默认返回{}，支持自定义
 *
 * @example
 *
 * import { jsonParseSafely } from '@/utils';
 *
 * jsonParseSafely(window.sessionStorage.getItem(key))
 *
 */
export default function jsonParseSafely<T>(value: string, parseFailedDefaultValue: any = {}): T {
  try {
    return JSON.parse(value);
  } catch (error) {
    console.warn('[@jairwinl/utils]jsonParseSafely----->：', error);
    return parseFailedDefaultValue;
  }
}
