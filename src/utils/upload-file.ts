import { message } from 'antd';
import { EXCEL_SUFFIX_REG } from '@/constants/reg';

// 文件上传校验
export const beforeUploadFile = (file: any): boolean => {
  const temp = file?.name?.split('.');
  const suffix = temp[temp.length - 1].toLowerCase();
  if (!EXCEL_SUFFIX_REG.test(suffix)) {
    message.warning('仅支持导入.xls .xlsx扩展名文件');
    return false;
  }
  return true;
};
