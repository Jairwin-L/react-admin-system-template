import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import css from './index.module.less';

export default function FooterToolbar({ loading = false, children }: any) {
  const navigate = useNavigate();
  return (
    <div className={css['footer-toolbar-container']}>
      <Button disabled={loading} onClick={() => navigate(-1)}>
        返回
      </Button>
      {children}
    </div>
  );
}
