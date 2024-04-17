import css from './index.module.less';

export default function AutoCenter({ children }: { children: React.ReactNode }) {
  return <div className={css['center-container']}>{children}</div>;
}
