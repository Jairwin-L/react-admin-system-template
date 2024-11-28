import { useRouteError } from 'react-router';
import { Button, Result } from 'antd';
import AutoCenter from '../auto-center';

export default function ErrorBoundary() {
  const error: any = useRouteError();
  const navigate = useNavigate();
  console.error('ErrorBoundary----->：', error);
  const onGoBack = () => {
    navigate('/main');
  };
  return (
    <AutoCenter>
      <Result
        status="error"
        title="Failed"
        subTitle={
          <div>
            Dang!
            <p>{error.data}</p>
          </div>
        }
        extra={
          <>
            <Button type="primary" onClick={onGoBack}>
              返回主页
            </Button>
          </>
        }
      />
    </AutoCenter>
  );
}
