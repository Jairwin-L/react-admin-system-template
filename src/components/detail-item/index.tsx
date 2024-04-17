import css from './index.module.less';

export default function DetailItem(props: any) {
  const { label, content } = props || {};
  return (
    <li className={css['detail-item']}>
      <span>{label}：</span>
      <p className={css['detail-content']}>{content}</p>
    </li>
  );
}
