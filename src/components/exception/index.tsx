import { Button, Result } from 'antd';
import AutoCenter from '../auto-center';
import IconifyFont from '../iconify-font';

export default function Exception(props: IException) {
  const { text = '系统繁忙，请稍后重试', onClick }: any = props;
  return (
    <AutoCenter>
      <Result
        icon={<IconifyFont type="iconcuowu" />}
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
