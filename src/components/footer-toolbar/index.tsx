import { Button } from 'antd';
import css from './index.module.less';

export default function FooterToolbar(props: IFooterToolbar) {
  const { loading = false, children } = props;
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
