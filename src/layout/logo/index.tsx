import ILayoutRender from '@/typings/layout';
import css from './index.module.less';
// TODO:import/no-unresolved
// eslint-disable-next-line import/no-unresolved
import LogoPng from '/logo.png';

export default function Logo(props: ILayoutRender.Logo) {
  const { collapsed } = props || {};
  return (
    <div className={css['logo-box']}>
      <img src={LogoPng} alt="logo" className={css['logo-img']} />
      {!collapsed ? <span className={css['logo-text']}>RAST</span> : null}
    </div>
  );
}
