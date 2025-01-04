import { ErrorCode, MagicNumber } from '@/enums/magic-number.enum';

export const MAGIC_NUMBER: { [key in ErrorCode]: string } = {
  [MagicNumber.UNAUTHORIZED]: '登录已失效，请重新登录',
};

export const MAGIC_NUMBERS = [MagicNumber.UNAUTHORIZED];
