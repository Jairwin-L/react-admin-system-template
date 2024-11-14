import { Button, Result } from 'antd';
import AutoCenter from '../auto-center';
import IconFont from '../icon-font';

export default function Exception(props: IException) {
  const { text = '系统繁忙，请稍后重试', onClick }: any = props;
  return (
    <AutoCenter>
      <Result
        icon={<IconFont type="iconcuowu" />}
        title={text}
        status="500"
        extra={
          <Button type="primary" onClick={() => (onClick ? onClick() : location.reload())}>
            重试
          </Button>
        }
      />
    </AutoCenter>
  );
}
