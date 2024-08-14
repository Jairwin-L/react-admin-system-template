import clsx from 'clsx';
import css from './index.module.less';

export default function Card(props: ICardContainer) {
  const { className, children } = props;
  return <section className={clsx(css['card-container'], className)}>{children}</section>;
}
