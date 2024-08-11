import { Spin } from 'antd';
import AutoCenter from '../auto-center';
import css from './index.module.less';

export default function PageLoading() {
  return (
    <AutoCenter>
      <Spin size="large" fullscreen tip={<span className={css['loading-tip']}>加载中……</span>} />
    </AutoCenter>
  );
}
