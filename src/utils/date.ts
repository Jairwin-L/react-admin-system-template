/**
 * @file date
 */
import dayjs from 'dayjs';

/**
 * @module formatDate
 * @description 根据时间，返回特定时间格式
 * @param {Date | string | number} date - 输入的日期，可以是Date对象、时间戳或ISO 8601字符串
 * @param {string} [format='YYYY-MM-DD HH:mm:ss'] - 时间格式
 * @returns {string} 格式化后的时间字符串
 */
export function formatDate(date: Date | string | number, format = 'YYYY-MM-DD HH:mm:ss'): string {
  return dayjs(date).format(format);
}
