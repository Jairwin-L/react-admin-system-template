import clsx from 'clsx';
import css from './index.module.less';

export default function AutoCenter(props: IAutoCenter) {
  const { children, className } = props;
  return <div className={clsx(css['center-container'], className)}>{children}</div>;
}
