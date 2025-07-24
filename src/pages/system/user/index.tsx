import css from './index.module.less';

export default function Page() {
  return (
    <div className={css['content-box']}>
      <span className={css.text}>用户 🍓🍇🍈🍉</span>
    </div>
  );
}
