import { Button, Result } from 'antd';

export default function Page() {
  const navigate = useNavigate();
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={
        <Button
          type="primary"
          onClick={() => {
            navigate(-1);
          }}
        >
          返回上一页
        </Button>
      }
    />
  );
}
