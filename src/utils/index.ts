import dayjs from 'dayjs';

/**
 * @module formatDate
 * @description 根据时间，返回特定时间格式
 */
export function formatDate(date: Date, format = 'YYYY-MM-DD HH:mm:ss'): string {
  return dayjs(date).format(format);
}
