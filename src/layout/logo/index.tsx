import { useEffect, useState } from 'react';
import ILayoutRender from '@/typings/layout';
// TODO:
// eslint-disable-next-line import/no-unresolved
import LogoPng from '/logo.png';
import style from '../index.module.less';

export default function Logo(props: ILayoutRender.Logo) {
  const { collapsed } = props || {};
  const [isCollapsed, setIsCollapsed] = useState<boolean>(collapsed);
  useEffect(() => {
    setIsCollapsed(collapsed);
  }, [collapsed]);
  return (
    <div className={style.logo_box}>
      <img src={LogoPng} alt="logo" className={style.logo_img} />
      {!isCollapsed ? <span className={style.logo_text}>admin-system-template</span> : null}
    </div>
  );
}
