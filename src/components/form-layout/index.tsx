import { Button, Form } from 'antd';
import FooterToolbar from '../footer-toolbar';
import Card from '../card';

export default function FormLayout<F>(props: IFormLayout<F>) {
  const { form, onFinish, children, loading } = props;
  return (
    <>
      <Card>
        <Form form={form} onFinish={onFinish} layout="vertical">
          {children}
        </Form>
      </Card>
      <FooterToolbar loading={loading}>
        <Button loading={loading} type="primary" onClick={() => form.submit()}>
          确定
        </Button>
      </FooterToolbar>
    </>
  );
}
