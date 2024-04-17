import ILayoutRender from '@/typings/layout';
import { useEffect, useState } from 'react';
import style from '../index.module.less';
// TODO:import/no-unresolved
// eslint-disable-next-line import/no-unresolved
import LogoPng from '/logo.png';

export default function Logo(props: ILayoutRender.Logo) {
  const { collapsed } = props || {};
  const [isCollapsed, setIsCollapsed] = useState<boolean>(collapsed);
  useEffect(() => {
    setIsCollapsed(collapsed);
  }, [collapsed]);
  return (
    <div className={style.logo_box}>
      <img src={LogoPng} alt="logo" className={style.logo_img} />
      {!isCollapsed ? <span className={style.logo_text}>RAST</span> : null}
    </div>
  );
}
