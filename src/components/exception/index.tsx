import { Button, Result } from 'antd';
import AutoCenter from '../auto-center';
import Icon from '../icon';

export default function Exception(props: any) {
  const { text = '系统繁忙，请稍后重试', onClick }: any = props || {};
  return (
    <AutoCenter>
      <Result
        icon={<Icon type="iconcuowu" />}
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
