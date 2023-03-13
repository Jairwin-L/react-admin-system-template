export const TEST = 'test';
export const BASE_API_URL = import.meta.env.VITE_API_URL;
export const ENV = import.meta.env;

export const MAIN_URL = '/main';
export const ORIGIN = window.location.origin;

export const NUMBER_PLACEHOLDER = '--';
export const SYSTEM_ERROR_MSG = '系统繁忙，请稍后重试';

export const PAGE_INDEX = 1;
export const PAGE_SIZE = 10;

export const IMG_PRE_REG = /(png|jpg|gif|jpeg)(\?.*)?/;
export const PDF_PRE_REG = /\.(pdf)(\?.*)?/;
export const WORD_PRE_REG = /\.(doc|docx)(\?.*)?/;
export const ALL_FILE_REG =
  /(gif|jpg|jpeg|bmp|png|pdf|doc|docx|swf|flv|mp4|rmvb|avi|mpeg|ra|ram|mov|wmv|mp3|wav|wma|ogg|ape|acc)(\?.*)?/;

export const OSS_URL = '';

export const DATE_FORMAT = {
  YMD: 'YYYYMMDD',
  YYMDHMSMD: 'YYYYMMDD',
  Y_M_D: 'YYYY-MM-DD',
  Y_M_D_H_M_S: 'YYYY-MM-DD HH:mm:ss',
  ZERO: 'YYYY-MM-DD 00:00:00',
};

export const SELECT_OPTION = {
  allowClear: true,
  showSearch: true,
  optionFilterProp: 'children',
  filterOption: (input: any, option: any) =>
    option?.children?.toLowerCase()?.indexOf(input?.toLowerCase()) >= 0,
};

// export const EXCEL_SUFFIX_REG = /\.(xls|xlsx)(\?.*)?/;
export const EXCEL_SUFFIX_REG = /(xls|xlsx)(\?.*)?/;
