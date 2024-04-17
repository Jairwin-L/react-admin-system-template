import { Button, Card, Form } from 'antd';
import type { Store } from 'antd/es/form/interface';
import FooterToolbar from '../footer-toolbar';
import css from './index.module.less';

interface IFormLayout {
  form: any;
  onFinish: (values: Store) => Promise<void>;
  children: React.ReactNode;
  loading: boolean;
}

export default function FormLayout(props: IFormLayout) {
  const { form, onFinish, children, loading } = props;
  return (
    <Card className={css['form-layout']}>
      <Form form={form} onFinish={onFinish} layout="vertical">
        {children}
      </Form>
      <FooterToolbar submitLoading={loading}>
        <Button loading={loading} type="primary" onClick={() => form.submit()}>
          确定
        </Button>
      </FooterToolbar>
    </Card>
  );
}
