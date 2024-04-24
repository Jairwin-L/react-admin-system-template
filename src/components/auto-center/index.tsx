import css from './index.module.less';

export default function AutoCenter(props: IAutoCenter) {
  const { children } = props;
  return <div className={css['center-container']}>{children}</div>;
}
